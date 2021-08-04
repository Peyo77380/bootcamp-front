<template>
    <div>
        <loading class="text-center" :active.sync="loading"></loading>
        <div
            class="row"
            style="display: flex; justify-content: center; align-items: center"
        >
            <div
                class="col-md-3 col-xl-2"
                v-for="category in categories"
                :key="category.id"
            >
                <div :class="category.class" class="card mb-3 widget-content">
                    <div class="widget-content-wrapper text-white">
                        <div class="widget-content-left">
                            <div class="widget-heading">
                                {{ category.value }}
                            </div>
                        </div>
                        <div class="widget-content-right">
                            <v-switch
                                color="primary"
                                v-model="selectedCategory"
                                :value="category.id"
                            ></v-switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-card mb-3 card">
            <div class="table-responsive">
                <table
                    class="
            align-middle
            mb-0
            table table-striped table-borderless table-hover
          "
                >
                    <thead>
                        <tr>
                            <th class="text-center">Catégorie</th>
                            <th class="text-center">Clé</th>

                            <th class="text-center">Valeur</th>
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="item in filteredItems" :key="item._id">
                            <div
                                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
                            >
                                <td
                                    style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                                    class="swatch-holder swatch-holder-md"
                                    :class="getClass(item.section)"
                                >
                                    <div
                                        class="text-center"
                                        style="
                      font-weight: bold;
                      color: white;
                      opacity: 0.9;
                      font-size: 11px;
                    "
                                    >
                                        {{ getInital(item.section) }}
                                    </div>
                                </td>
                            </div>
                            <td class="text-center">{{ item.key }}</td>

                            <td class="text-center">{{ item.value }}</td>

                            <td class="text-center">
                                <div role="group" class="btn-group-sm">
                                    <b-button
                                        class="mb-2 mr-2 btn-pill btn-shadow"
                                        variant="primary"
                                        id="popover2"
                                        @click="showEdit(item)"
                                    >
                                        <i class="lnr-pencil"></i>
                                    </b-button>
                                    <!-- Empecher la fermeture des modales quand on clic en dehors !-->
                                    <!-- Standardiser taille des boutons !-->
                                    <b-popover
                                        :target="'popover2'"
                                        placement="bottomleft"
                                        triggers="hover focus"
                                    ></b-popover>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <modal
            @saveModification="modificationEmail"
            :items="keyValueEdit"
            @close2="closeModalEdit"
            :dialog2="dialog2"
        ></modal>
    </div>
</template>

<script>
import modal from "./modal.vue";
import { Globals } from "@/mixins/global";
import { Parameters } from "@/mixins/parameter";
import Loading from "vue-loading-overlay";
export default {
    name: "paramater",
    components: {
        modal,
        Loading
    },
    props: {
        openModal: {
            type: Boolean,
            default: false
        }
    },
    mixins: [Globals, Parameters],
    async mounted() {
        await this.loadCategories();
        await this.loadItems();
    },
    data() {
        return {
            categories: [],
            items: [],
            dialog2: false,
            keyValueEdit: {},
            selectedCategory: "Toutes les catégories",
            perPage: 3,
            currentPage: 1,
            loading: false
        };
    },
    computed: {
        filteredItems: function() {
            var vm = this;
            var category = vm.selectedCategory;

            if (category === "Toutes les catégories" || category === null) {
                return vm.items;
            } else {
                return vm.items.filter(function(item) {
                    return item.section === category;
                });
            }
        },
        prows() {
            return this.filteredItems.length;
        }
    },

    methods: {
        async loadCategories() {
            try {
                this.loading = true;
                this.categories = await this.getGlobals();
                this.loading = false;
            } catch (error) {
                this.$sweetError("GLC-56");
            }
        },
        async loadItems() {
            try {
                this.loading = true;
                this.items = await this.getAllParameters();
                this.loading = false;
            } catch (error) {
                this.$sweetError("GPA-98");
            }
        },
        closeModalEdit() {
            this.dialog2 = false;
        },
        getClass(id) {
            const classCategory = this.categories.filter(item => {
                return item.id == id;
            });
            if (classCategory[0]) {
                return classCategory[0].class;
            }
            return "";
        },
        getInital(id) {
            const initialCategory = this.categories.filter(item => {
                return item.id == id;
            });
            if (initialCategory[0]) {
                return initialCategory[0].initial;
            }
            return "";
        },
        getName(id) {
            const NameCategory = this.categories.filter(item => {
                return item.id == id;
            });
            if (NameCategory[0]) {
                return NameCategory[0].value;
            }
            return "";
        },

        showEdit(item) {
            this.dialog2 = true;
            this.keyValueEdit = item;
            this.keyValueEdit.catName = this.getName(item.section);
        },

        modificationEmail() {
            //TODO point API modification email de services

            var title = "Modification de la clé réussie !";
            this.$sweetNotif(title);
        }
    }
};
</script>
