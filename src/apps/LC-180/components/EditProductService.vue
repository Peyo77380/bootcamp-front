<template>
    <!-- Pour faire simple, bootstrapiser le tout !-->
    <div>
        <loading class="text-center" :active.sync="loading"></loading>
        <div class="mb-5">
            <v-flex xs12 sm8 offset-sm1 align-center justify-center>
                <v-form ref="form">
                    <v-layout>
                        <v-combobox
                            v-model="selectedType"
                            :items="types"
                            label="Type"
                        ></v-combobox>
                        <v-combobox
                            v-model="formItem.categoryType"
                            :items="categoryTypes"
                            label="Catégorie"
                        ></v-combobox>
                    </v-layout>
                    <v-layout>
                        <v-text-field
                            v-model="formItem.name"
                            label="Nom"
                        ></v-text-field>

                        <v-text-field
                            v-model="formItem.key"
                            label="Identifiant"
                        ></v-text-field>
                    </v-layout>
                    <v-layout>
                        <v-text-field
                            v-model="formItem.variation"
                            label="Variation"
                        ></v-text-field>
                        <v-flex>
                            <v-text-field
                                label="Image"
                                @click="onPickFile"
                                v-model="imageProduct"
                                prepend-icon="attach_file"
                            ></v-text-field>
                            <!-- Hidden -->
                            <input
                                type="file"
                                style="display: none"
                                ref="fileInput"
                                accept="image/*"
                                @change="onFilePicked"
                            />
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-text-field
                            v-model="formItem.priceTTC"
                            label="Prix de vente"
                        ></v-text-field>

                        <v-text-field
                            v-model="formItem.priceMember"
                            label="Prix membres"
                        ></v-text-field>

                        <v-text-field
                            v-model="formItem.priceCo"
                            label="Prix co"
                        ></v-text-field>
                    </v-layout>
                    <v-textarea
                        outline
                        name="input-7-4"
                        label="Description longue"
                        v-model="formItem.descriptionLong"
                    >
                        {{ formItem.descriptionLong }}</v-textarea
                    >

                    <v-text-field
                        label="Description courte"
                        v-model="formItem.descriptionShort"
                    >
                        {{ formItem.descriptionShort }}
                    </v-text-field>

                    <v-textarea
                        outline
                        name="input-7-4"
                        label="Contenu"
                        v-model="formItem.content"
                    >
                        {{ formItem.content }}</v-textarea
                    >
                    <v-layout>
                        <v-radio-group v-model="formItem.state" row>
                            <template v-slot:label>
                                <div>
                                    Etat
                                </div>
                            </template>
                            <hr />
                            <v-radio
                                v-for="state in states"
                                :key="state"
                                :label="state"
                                :value="state"
                            ></v-radio>
                        </v-radio-group>

                        <v-radio-group v-model="formItem.display" row>
                            <template v-slot:label>
                                <div>
                                    Affichage
                                </div>
                            </template>
                            <hr />
                            <v-radio
                                v-for="radioD in radioDisplays"
                                :key="radioD"
                                :label="radioD"
                                :value="radioD"
                            ></v-radio>
                        </v-radio-group>
                    </v-layout>

                    <v-btn color="success" @click="confirmer">
                        Confirmer
                    </v-btn>

                    <v-btn
                        color="warning"
                        :to="{
                            name: 'ProductServiceList'
                        }"
                    >
                        Annuler
                    </v-btn>
                </v-form>
            </v-flex>
        </div>
    </div>
</template>

<script>
import { ProductServices } from "../../../mixins/productService";
import Loading from "vue-loading-overlay";
export default {
    components: {
        Loading
    },
    name: "ProductServiceForm",
    props: {
        handleRegister: {
            type: Function
        }
    },
    mixins: [ProductServices],
    async mounted() {
        this.id = this.$route.params.id;
        await this.loadProductService(this.id);
        this.selectedType = this.types[this.formItem.type - 1];
    },
    data() {
        return {
            selectedType: "",
            id: null,
            loading: false,
            types: ["Produit", "Service"],
            formItem: {},
            categoryTypes: [
                "Adhesion",
                "Experience",
                "Coworking",
                "Location bureau partagé"
            ],
            radioDisplays: ["Admin", "Membres", "Boutique"],
            states: ["Actif", "Désactivé"],
            imageProduct: "",
            url: "",
            fileObject: null,
            cardResult: "",
            name: "",
            size: "",
            type: "",
            lastModifiedDate: ""
        };
    },
    methods: {
        async loadProductService(id) {
            try {
                this.loading = true;
                const res = await this.getProductServiceDetails(id);
                this.formItem = res.datas.data.datas;
                this.loading = false;
            } catch (error) {
                this.$sweetError("GLC-180");
            }
        },
        async confirmer() {
            this.formItem.type = this.types.indexOf(this.selectedType) + 1;
            await this.modifyProductService(this.id, this.formItem);
            this.$router.push({ name: "ProductServiceList" });
        },
        //For upload image
        onPickFile() {
            this.$refs.fileInput.click();
        },
        onFilePicked(event) {
            const files = event.target.files;
            if (files[0] !== undefined) {
                this.imageProduct = files[0].name;
                // Check validity of file
                if (this.imageProduct.lastIndexOf(".") <= 0) {
                    return;
                }
                // If valid, continue
                const fr = new FileReader();
                fr.readAsDataURL(files[0]);
                fr.addEventListener("load", () => {
                    this.url = fr.result;
                    this.fileObject = files[0]; // this is an file that can be sent to server...
                });
            } else {
                this.imageProduct = "";
                this.fileObject = null;
                this.url = "";
            }
        },
        onUploadSelectedFileClick() {
            this.loading = true;

            console.log(this.fileObject);
            // A file is not chosen!
            if (!this.fileObject) {
                alert("No file!!");
            }
            // DO YOUR JOB HERE with fileObjectToUpload
            // https://developer.mozilla.org/en-US/docs/Web/API/File/File
            this.name = this.fileObject.name;
            this.size = this.fileObject.size;
            this.type = this.fileObject.type;
            this.lastModifiedDate = this.fileObject.lastModifiedDate;
            // DO YOUR JOB HERE with fileObjectToUpload
            this.loading = false;
        }
    }
};
</script>

<style></style>
