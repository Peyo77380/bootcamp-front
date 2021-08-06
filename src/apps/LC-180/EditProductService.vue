<template>
    <!-- Pour faire simple, bootstrapiser le tout !-->
    <div>
        <page-title
            :heading="heading"
            :subheading="subheading"
            :icon="icon"
        ></page-title>
        <loading class="text-center" :active.sync="loading"></loading>
        <div class="mb-5" v-if="loading == false">
            <v-flex xs12 sm8 offset-sm1 align-center justify-center>
                <v-form ref="form">
                    <v-layout>
                        <v-combobox
                            v-model="selectedType"
                            label="Type"
                            :disabled="true"
                        ></v-combobox>
                        <v-combobox
                            v-model="selectedCategory"
                            :items="selectedCategories"
                            label="Catégorie"
                            :disabled="true"
                        ></v-combobox>
                    </v-layout>
                    <v-layout>
                        <v-text-field
                            v-model="formItem.name"
                            label="Nom"
                            :rules="nameRules"
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="formItem.key"
                            label="Identifiant"
                            :disabled="true"
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
                                v-model="fileName"
                                prepend-icon="attach_file"
                            ></v-text-field>
                            <!-- Hidden -->
                            <input
                                type="file"
                                style="display: none"
                                ref="fileInput"
                                accept="image/*"
                                @change="onFilePicked()"
                            />
                        </v-flex>
                    </v-layout>

                    <v-layout
                        class="d-flex flex-column"
                        id="root"
                        @click="isShow = !isShow"
                    >
                        <h5>
                            Historique des Prix
                            <font-awesome-icon
                                icon="chevron-up"
                                v-if="isShow"
                            />
                            <font-awesome-icon
                                icon="chevron-down"
                                v-if="!isShow"
                            />
                        </h5>

                        <transition name="slide">
                            <table
                                v-if="isShow"
                                class="align-left text-truncate mb-0 table table-borderless table-striped table-hover"
                            >
                                <thead>
                                    <tr>
                                        <th class="text-center">
                                            Date de début
                                        </th>
                                        <th class="text-center">
                                            Prix de vente
                                        </th>
                                        <th class="text-center">
                                            Prix membres
                                        </th>
                                        <th class="text-center">Prix co</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template>
                                        <tr
                                            v-for="price in formItem.prices"
                                            :key="price._id"
                                        >
                                            <td class="text-center">
                                                {{
                                                    getFormattedDate(
                                                        price.startDate
                                                    )
                                                }}
                                            </td>
                                            <td class="text-center">
                                                {{ price.amounts.public }}
                                            </td>
                                            <td class="text-center">
                                                {{ price.amounts.member }}
                                            </td>

                                            <td class="text-center">
                                                {{ price.amounts.co }}
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </transition>
                    </v-layout>
                    <v-layout>
                        <v-text-field
                            type="number"
                            v-model.number="prices.amounts.public"
                            label="Prix de vente"
                        ></v-text-field>

                        <v-text-field
                            type="number"
                            v-model.number="prices.amounts.member"
                            label="Prix membres"
                        ></v-text-field>

                        <v-text-field
                            type="number"
                            v-model.number="prices.amounts.co"
                            label="Prix co"
                        ></v-text-field>
                        <v-menu
                            ref="menu1"
                            v-model="menu1"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            max-width="290px"
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="computedDateFormatted"
                                    label="Date de début"
                                    prepend-icon="event"
                                    @blur="date = parseDate(startDateFormatted)"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="prices.startDate"
                                no-title
                                @input="menu1 = false"
                            ></v-date-picker>
                        </v-menu>
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
                                :key="state.value"
                                :label="state.text"
                                :value="state.value"
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
import PageTitle from "./components/PageTitle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChevronUp, faChevronDown);
import { ProductServices } from "../../mixins/productService";
import Loading from "vue-loading-overlay";
export default {
    components: {
        Loading,
        PageTitle,
        "font-awesome-icon": FontAwesomeIcon
    },
    name: "ProductServiceForm",
    props: {
        id: { type: String, required: true },
        types: {
            type: Array
        },
        states: {
            type: Array
        },
        radioDisplays: {
            type: Array
        },
        categoriesCombined: {
            type: Array,
            required: true
        },
        getNameType: {
            type: Function,
            required: true
        },
        handleModify: {
            type: Function
        }
    },
    mixins: [ProductServices],
    async mounted() {
        this.loading = true;
        await this.loadProductService(this.id);
        this.loading = false;
        this.selectedType = this.types[this.formItem.type - 1];
        this.selectedCategories = this.categoriesCombined[
            this.formItem.type - 1
        ];
        this.selectedCategory = this.findCategory(this.formItem.category_id);
    },
    computed: {
        computedDateFormatted() {
            return this.formatDate(this.prices.startDate);
        }
    },
    watch: {
        date(val) {
            this.startDateFormatted = this.formatDate(this.prices.startDate);
        }
    },
    data() {
        return {
            heading: "LaColloc - Produits/Services",
            subheading: "Modifier le produit/service",
            icon: "pe-7s-news-paper icon-gradient bg-night-fade",
            nameRules: [
                v => !!v || "Le nom est requis",
                v =>
                    (v && v.length <= 15) ||
                    "Name must be less than 10 characters"
            ],
            selectedCategories: [],
            selectedType: "",
            selectedCategory: "",
            loading: false,
            formItem: {},
            fileName: "",
            file: null,
            prices: {
                amounts: {
                    public: null,
                    member: null,
                    co: null
                },
                startDate: new Date().toISOString().substr(0, 10)
            },
            menu1: false,
            startDateFormatted: this.formatDate(
                new Date().toISOString().substr(0, 10)
            ),
            items: [
                {
                    action: "local_activity",
                    title: "Attractions",
                    items: [{ title: "List Item" }]
                }
            ],
            isShow: false
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
        async confirmer() {
            //If the item is duplicated, delete unnecessary variables which were received by existing product
            const item = this.formItem;
            delete item.prices;
            if (this.prices.amounts.public) {
                item.prices = this.prices;
            }
            if (item.created_at) {
                delete item.created_at;
            }
            if (item.updated_at) {
                delete item.updated_at;
            }

            await this.handleModify(this.id, item);
            this.$router.push({ name: "ProductServiceList" });
        },
        onPickFile() {
            this.$refs.fileInput.click();
        },
        onFilePicked() {
            this.file = this.$refs.fileInput.files[0];
            this.fileName = this.file.name;
        },
        formatDate(date) {
            if (!date) return null;

            const [year, month, day] = date.split("-");
            return `${month}/${day}/${year}`;
        },
        parseDate(date) {
            if (!date) return null;

            const [month, day, year] = date.split("/");
            return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
        },
        getFormattedDate(timestamp) {
            let date = new Date(timestamp);
            date.toLocaleString("fr-FR");

            return (
                "Date: " +
                date.getDate() +
                "/" +
                (date.getMonth() + 1) +
                "/" +
                date.getFullYear()
            );
        }
    }
};
</script>

<style>
l {
    cursor: pointer;
}

.slide-enter-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}

.slide-leave-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
    max-height: 100px;
    overflow: hidden;
}

.slide-enter,
.slide-leave-to {
    overflow: hidden;
    max-height: 0;
}
</style>
