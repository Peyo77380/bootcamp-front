<template>
    <v-layout row justify-center>
        <!-- Pour faire simple, bootstrapiser le tout !-->
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <div class="mb-5">
                    <v-toolbar dark color="primary" class="mb-6">
                        <v-toolbar-title>{{
                            formLayout.title
                        }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                </div>
                <div class="mb-5">
                    <v-flex xs12 sm8 offset-sm1 align-center justify-center>
                        <v-form ref="form">
                            <v-layout>
                                <v-combobox
                                    v-model="formItem.type"
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
                                    v-model="formItem.pricePromotion"
                                    label="Prix promo"
                                ></v-text-field>
                                <v-text-field
                                    v-model="formItem.priceMemberPromotion"
                                    label="Prix promo membres"
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

                            <v-btn color="success" @click="confirmer">
                                Confirmer
                            </v-btn>

                            <v-btn color="warning" @click="closeForm">
                                Annuler
                            </v-btn>
                        </v-form>
                    </v-flex>
                </div>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
export default {
    name: "ProductServiceForm",
    props: {
        editedForm: {
            type: Object
        },
        dialog: {
            type: Boolean
        },
        closeForm: {
            type: Function
        },
        updateForm: {
            type: Function
        },
        formMode: {
            type: String
        },
        formLayout: {
            type: Object
        },
        handleRegister: {
            type: Function
        }
    },
    computed: {
        formItem() {
            return { ...this.editedForm };
        }
    },

    data() {
        return {
            types: ["Service", "Product"],
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
            lastModifiedDate: "",
            loading: false
        };
    },
    methods: {
        confirmer() {
            this.handleRegister(this.formMode, this.formItem);
            this.closeForm();
        },
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
