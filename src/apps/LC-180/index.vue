<template>
    <div>
        <loading class="text-center" :active.sync="loading"></loading>
        <div>
            <Table
                @remove="handleRemove"
                @handleForm="handleForm"
                :productsServices="productsServices"
                :key="componentKey"
                :types="types"
                :radioDisplays="radioDisplays"
                :states="states"
                :categoriesCombined="categoriesCombined"
                :handleModify="handleModify"
                :getCategory="getCategory"
                :getNameType="getNameType"
                :getClassType="getClassType"
            />
        </div>
        <div>
            <ProductServiceForm
                @closeForm="closeForm"
                @register="handleRegister"
                :dialog="isFormOpen"
                :editedForm="editedForm"
                :categoriesCombined="categoriesCombined"
                :types="types"
                :radioDisplays="radioDisplays"
                :states="states"
                :getNameType="getNameType"
                :getClassType="getClassType"
            />
        </div>
    </div>
</template>

<script>
import Table from "./components/Table.vue";
import ProductServiceForm from "./components/ProductServiceForm.vue";
import { ProductServices } from "@/mixins/productService";
import { Images } from "@/mixins/image";
import productsServicesGlobals from "@/services/globals/productsServicesGlobals";
import { Lists } from "@/mixins/list";
import Loading from "vue-loading-overlay";

export default {
    components: {
        Table,
        ProductServiceForm,
        Loading
    },
    mixins: [ProductServices, Lists, Images],
    async mounted() {
        await this.loadProductServices();
        await this.loadCategories();
        this.types = productsServicesGlobals.types;
        this.radioDisplays = productsServicesGlobals.radioDisplays;
        this.states = productsServicesGlobals.states;
    },
    data() {
        return {
            loading: false,
            heading: "Produits/Services",
            subheading: "Créer les produits ou services.",
            productsServices: [],
            dialog: false,
            isFormOpen: false,
            formMode: "",
            editedForm: {
                name: "",
                description: "",
                type: 1,
                prices: [
                    {
                        amounts: {
                            public: null,
                            member: null,
                            co: null
                        }
                    }
                ],
                display: "admin",
                key: "",
                state: true
            },
            formLayout: {},
            types: [],
            radioDisplays: [],
            states: [],
            categoriesCombined: [],
            componentKey: 0
        };
    },
    methods: {
        async loadProductServices() {
            try {
                this.loading = true;
                const res = await this.getAllProductServices();
                this.productsServices = res.datas.data.datas;
                this.loading = false;
            } catch (error) {
                this.$sweetError("GLC-180-LoadProduct");
            }
        },
        async loadCategories() {
            try {
                //Registered in customfields microservice section 4 , Wl:1, lang: fr_FR
                const res = await this.getListByWLLangKey("PRODUCT");
                var categoriesProduct = res.datas.data.datas[0].datas;
                const res2 = await this.getListByWLLangKey("SERVICE");
                var categoriesService = res2.datas.data.datas[0].datas;

                this.categoriesCombined.push(categoriesProduct);
                this.categoriesCombined.push(categoriesService);
            } catch (error) {
                this.$sweetError("GLC-180");
            }
        },
        getNameType(id) {
            const classCategory = this.types.filter(item => {
                return item.id == id;
            });
            if (classCategory[0]) {
                return classCategory[0].text;
            }
            return "";
        },
        getClassType(id) {
            const classCategory = this.types.filter(item => {
                return item.id == id;
            });
            if (classCategory[0]) {
                return classCategory[0].class;
            }
            return "";
        },
        getCategory(type, id) {
            if (id && this.categoriesCombined.length > 0) {
                const category = this.getCategories(type).filter(cat => {
                    return cat._id == id;
                });
                return {
                    _id: category[0]._id,
                    text: category[0].text
                };
            }
            return "";
        },
        getCategories(type) {
            return this.categoriesCombined[parseInt(type) - 1];
        },
        handleForm(product) {
            this.isFormOpen = true;
            if (product) {
                this.editedForm = product;
            }
            //this.formLayout.title = "Ajouter un service/produit";
        },
        closeForm() {
            this.isFormOpen = false;
            //initialise form after closing modal
            this.editedForm = {
                name: "",
                description: "",
                type: 1,
                category_id: null,
                prices: [
                    {
                        amounts: {
                            public: null,
                            member: null,
                            co: null
                        }
                    }
                ],
                display: "admin",
                key: "",
                state: true
            };
        },
        async handleRemove(id) {
            try {
                await this.deleteProductService(id);
                this.loadProductServices();
                this.forceRerender();
                this.$sweetNotif("Item supprimée");
            } catch (error) {
                this.$sweetError("GLC-180-remove");
            }
        },
        async handleRegister(item, image) {
            try {
                const response = await this.addProductService(item);
                if (image.file != null && response.data.datas._id) {
                    image.relatedEntityType = 1;
                    await this.storeImage(image, response.data.datas._id);
                }
                this.closeForm();
                this.loadProductServices();
            } catch (error) {
                this.$sweetError("GLC-180-register");
            }
        },
        async handleModify(id, item) {
            try {
                await this.modifyProductService(id, item);
                this.closeForm();
            } catch (error) {
                this.$sweetError("GLC-180-modify");
            }
        },
        //to force vue to receive the correct product
        forceRerender() {
            this.componentKey += 1;
        }
    }
};
</script>
