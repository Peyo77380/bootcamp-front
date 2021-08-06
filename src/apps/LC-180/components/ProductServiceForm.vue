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
                        <v-toolbar-title
                            >Ajouter un service/produit</v-toolbar-title
                        >
                        <v-spacer></v-spacer>
                    </v-toolbar>
                </div>
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
                                    v-model="selectedCategory"
                                    :items="selectedCategories"
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
                                        v-on:change="onFilePicked()"
                                    />
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-text-field
                                    v-model="prices.amounts.public"
                                    label="Prix de vente"
                                ></v-text-field>

                                <v-text-field
                                    v-model="prices.amounts.member"
                                    label="Prix membres"
                                ></v-text-field>

                                <v-text-field
                                    v-model="prices.amounts.co"
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
                                <v-radio-group
                                    v-model="formItem.state"
                                    row
                                    mandatory
                                >
                                    <template v-slot:label>
                                        <div>
                                            Etat
                                        </div>
                                    </template>
                                    <hr />
                                    <v-radio
                                        v-for="state in states"
                                        :key="state.value"
                                        :label="state.text"
                                        :value="state.value"
                                    ></v-radio>
                                </v-radio-group>

                                <v-radio-group
                                    v-model="formItem.display"
                                    row
                                    mandatory
                                >
                                    <template v-slot:label>
                                        <div>
                                            Affichage
                                        </div>
                                    </template>
                                    <hr />
                                    <v-radio
                                        v-for="display in radioDisplays"
                                        :key="display.value"
                                        :label="display.text"
                                        :value="display.value"
                                    ></v-radio>
                                </v-radio-group>
                            </v-layout>
                            <v-btn color="success" @click="confirmer">
                                Confirmer
                            </v-btn>

                            <v-btn color="warning" @click="$emit('closeForm')">
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
import { Lists } from "@/mixins/list";
export default {
    name: "ProductServiceForm",
    props: {
        types: {
            type: Array
        },
        states: {
            type: Array
        },
        radioDisplays: {
            type: Array
        },
        editedForm: {
            type: Object
        },
        dialog: {
            type: Boolean
        },
        getNameType: { type: Function },
        categoriesCombined: { type: Array, required: true }
    },
    mixins: [Lists],
    computed: {
        formItem() {
            return this.editedForm;
        },
        prices() {
            return this.editedForm.prices[this.editedForm.prices.length - 1];
        },
        selectedType: {
            get() {
                var vm = this;
                vm.selectedCategories =
                    vm.categoriesCombined[vm.formItem.type - 1];
                return {
                    id: vm.formItem.type,
                    text: vm.getNameType(vm.formItem.type)
                };
            },
            set(val) {
                var vm = this;
                vm.formItem.type = val.id;
                vm.selectedCategories =
                    vm.categoriesCombined[vm.formItem.type - 1];
                vm.selectedCategory = {
                    _id: null,
                    text: ""
                };
                vm.formItem.category_id = null;
            }
        },
        selectedCategory: {
            get() {
                var vm = this;
                return vm.findCategory(vm.formItem.category_id);
            },
            set(val) {
                var vm = this;
                vm.formItem.category_id = val._id;
            }
        }
    },
    data() {
        return {
            selectedCategories: [],

            imageProduct: "",
            url: "",
            fileObject: null,
            cardResult: "",
            name: "",
            size: "",
            type: "",
            file: "",
            lastModifiedDate: ""
        };
    },
    methods: {
        async confirmer() {
            try {
                //If the item is duplicated, delete unnecessary variables which were received by existing product
                const item = this.formItem;
                if (item.prices) {
                    delete item.prices;
                }
                if (item._id) {
                    delete item._id;
                }
                if (item.created_at) {
                    delete item.created_at;
                }
                if (item.updated_at) {
                    delete item.updated_at;
                }
                //add prices receiving by v-model
                item.prices = this.prices;
                //delete the rest of old data
                if (item.prices._id) {
                    delete item.prices._id;
                    delete item.prices.created_at;
                    delete item.prices.relatedEntityId;
                    delete item.prices.relatedEntityType;
                    delete item.prices.startDate;
                    delete item.prices.updated_at;
                }
                if (!this.fileObject) {
                    alert("No file!!");
                }
                let data = new FormData();
                data.append("name", "my-picture");
                data.append("file", this.file);

                item.wl = 1;
                item.user = 1;
                data.append("item", item, data);

                //  item.prices.startDate = Date.now();
                this.$emit("register", data);

                //await this.handleRegister(item);
                // this.closeForm();
            } catch (error) {
                this.$sweetError("GLC-180-upload");
            }
        },
        findCategory(id) {
            if (id) {
                const category = this.selectedCategories.filter(cat => {
                    return cat._id == id;
                });
                return {
                    _id: category[0]._id,
                    text: category[0].text
                };
            } else {
                return {
                    _id: null,
                    text: ""
                };
            }
        },
        onPickFile() {
            this.$refs.fileInput.click();
        },
        onFilePicked() {
            console.log(this.$refs.fileInput);
            this.file = this.$refs.fileInput.files[0];
        },
        onUploadSelectedFileClick() {
            console.log("upload");
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
        }
    }
};
</script>

<style></style>
