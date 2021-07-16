<template>
    <div>
        <loading class="text-center" :active.sync="loading"></loading>
        <div>
            <Table
                :productsServices="productsServices"
                :handleRemove="handleRemove"
                :handleForm="handleForm"
                :getNameType="getNameType"
                :getClassType="getClassType"
                :key="componentKey"
                :types="types"
            />
        </div>
        <div>
            <ProductServiceForm
                :closeForm="closeForm"
                :dialog="isFormOpen"
                :editedForm="editedForm"
                :handleRegister="handleRegister"
                :getNameType="getNameType"
                :getClassType="getClassType"
                :categoriesCombined="categoriesCombined"
                :types="types"
            />
        </div>
    </div>
</template>

<script>
import Table from "./components/Table.vue";
import ProductServiceForm from "./components/ProductServiceForm.vue";
import { ProductServices } from "../../mixins/productService";
import { Lists } from "../../mixins/list";
import Loading from "vue-loading-overlay";

export default {
    components: {
        Table,
        ProductServiceForm,
        Loading
    },
    mixins: [ProductServices, Lists],
    async mounted() {
        await this.loadProductServices();
        await this.loadCategories();
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
            editedForm: {},
            formLayout: {},
            types: [
                { id: 1, text: "Produit", class: "bg-success" },
                { id: 2, text: "Service", class: "bg-alternate" }
            ],
            categoriesService: [],
            categoriesProduct: [],
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
                const res = await this.getAllLists(4);
                const categories = res.datas.data.datas;
                this.categoriesService = categories.filter(item => {
                    return item.key == "service";
                })[0].datas;
                this.categoriesProduct = categories.filter(item => {
                    return item.key == "produit";
                })[0].datas;
                this.categoriesCombined.push(this.categoriesProduct);
                this.categoriesCombined.push(this.categoriesService);
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
        handleForm(product) {
            this.isFormOpen = true;
            this.editedForm = product;
            //this.formLayout.title = "Ajouter un service/produit";
        },
        closeForm() {
            this.isFormOpen = false;
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
        async handleRegister(item) {
            await this.addProductService(item);
            this.loadProductServices();
        },
        forceRerender() {
            this.componentKey += 1;
        }
    }
};

/*             productsServices: [
                {
                    _id: 100,
                    type: "Produit",
                    name: "Boisson",
                    categoryType: "Location bureau partagé",
                    key: "bb1",
                    display: "Admin",
                    priceHT: 242,
                    priceTTC: 290,
                    priceMember: 40,
                    priceCo: 200,
                    variation: "Delta",
                    state: "Actif",
                    descriptionLong:
                        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. ",
                    descriptionShort: "Bla bla bla",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. "
                },
                {
                    _id: 101,
                    type: "Service",
                    name: "Repas",
                    categoryType: "Experience",
                    key: "bb1",
                    display: "Admin",
                    priceHT: 242,
                    priceTTC: 290,
                    priceMember: 40,
                    priceCo: 200,
                    variation: "Delta",
                    state: "Désactivé",
                    descriptionLong:
                        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. ",
                    descriptionShort: "Bla bla bla",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. "
                }
            ], */
</script>
