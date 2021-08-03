<template>
    <div>
        <page-title
            :heading="heading"
            :subheading="subheading"
            :icon="icon"
            :items="items"
        ></page-title>

        <div class="row justify-content-center">
            <div
                class="col-md-2"
                v-for="category in categories"
                :key="category.id"
            >
                <div class="card mb-3 widget-content" :class="category.class">
                    <div class="widget-content-wrapper text-white">
                        <div class="widget-content-left">
                            <div class="widget-heading">
                                {{ category.value }}
                            </div>
                        </div>
                        <div class="widget-content-right">
                            <b-button
                                class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                                variant="light"
                                ><i class="pe-7s-glasses btn-icon-wrapper"> </i
                            ></b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <v-card-text>
            <div class="col-12">
                <div class="main-card card">
                    <div class="card-header">
                        Paramètres Listes
                        <div class="btn-actions-pane-right actions-icon-btn">
                            <b-dropdown
                                toggle-class="btn-icon btn-icon-only"
                                variant="link"
                                right
                            >
                                <span slot="button-content"
                                    ><i
                                        class="
                            header-icon
                            lnr-earth
                            mr-3
                            text-muted
                            opacity-6
                          "
                                    ></i
                                ></span>
                                <div>
                                    <button
                                        @click="changeFr"
                                        type="button"
                                        tabindex="0"
                                        class="dropdown-item"
                                        disabled
                                    >
                                        <country-flag
                                            country="FR"
                                            size="small"
                                            class="mr-1"
                                        /><span>Français</span>
                                    </button>
                                    <button
                                        @click="changeUs"
                                        type="button"
                                        tabindex="0"
                                        class="dropdown-item"
                                        disabled
                                    >
                                        <country-flag
                                            country="US"
                                            size="small"
                                            class="mr-1"
                                        /><span>Anglais</span>
                                    </button>
                                    <button
                                        type="button"
                                        tabindex="0"
                                        class="dropdown-item"
                                        disabled
                                    >
                                        <country-flag
                                            country="DE"
                                            size="small"
                                            class="mr-1"
                                            disabled
                                        /><span>Allemand</span>
                                    </button>
                                </div>
                            </b-dropdown>
                        </div>
                    </div>
                    <v-tabs>
                        <v-tab-item v-for="i in items" :key="i._id">
                            <div class="table-responsive">
                                <table
                                    class="
                          align-middle
                          mb-0
                          table table-borderless table-striped table-hover
                        "
                                >
                                    <thead>
                                        <tr>
                                            <th class="text-center">
                                                Catégories
                                            </th>
                                            <th class="text-center">
                                                Listes
                                            </th>
                                            <!-- <th class="text-center">Clés</th> -->
                                            <th class="text-center">
                                                Nombre
                                            </th>
                                            <th class="text-center">
                                                Modifier
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in list" :key="item.id">
                                            <td
                                                class="row justify-content-center"
                                                style="font-weight :bold; color:white; opacity: .9; font-size : 11px"
                                            >
                                                <div
                                                    style="display: flex; justify-content: center"
                                                    class="swatch-holder swatch-holder-md"
                                                    :class="
                                                        getClass(item.section)
                                                    "
                                                >
                                                    {{
                                                        getCategoryInitial(
                                                            item.section
                                                        )
                                                    }}
                                                </div>
                                            </td>
                                            <td class="text-center">
                                                <b-btn
                                                    id="exButton4"
                                                    variant="outiline-info"
                                                >
                                                    {{ item.key }}
                                                    <b-tooltip
                                                        target="exButton4"
                                                        variant="outline-primary"
                                                        placement="left"
                                                        triggers="hover focus"
                                                        title="Liste des Activités"
                                                    ></b-tooltip>
                                                </b-btn>
                                            </td>
                                            <td class="text-center">
                                                <div class="text-center">
                                                    {{ item.count }}
                                                </div>
                                            </td>
                                            <td class="text-center">
                                                <b-button
                                                    class="mb-2 btn-icon btn-icon-only btn-pill"
                                                    variant="outline-info"
                                                    :to="{
                                                        path: `/configuration/lists/${item._id}`
                                                    }"
                                                    ><i
                                                        class="pe-7s-pen btn-icon-wrapper"
                                                    >
                                                    </i
                                                ></b-button>
                                                <!-- Standardiser les boutons !-->
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </v-tab-item>
                    </v-tabs>
                </div>
                <!-- div main card -->
            </div>
        </v-card-text>
    </div>
</template>

<script>
import PageTitle from "./components/PageTitle";
import EditList from "@/apps/configuration/lists/EditList";
import CountryFlag from "vue-country-flag";
import { Lists } from "@/mixins/list";
import { Globals } from "@/mixins/global";
export default {
    name: "config-list",
    components: {
        PageTitle,
        EditList,
        CountryFlag
    },
    mixins: [Lists, Globals],
    data: () => ({
        item: ["FR", "En", "SP"],
        heading: "LaColloc - Paramètres",
        subheading: "Liste disponible",
        icon: "pe-7s-news-paper icon-gradient bg-night-fade",
        placements: ["Activités"],
        categories: [],
        items: [
            {
                text: "Paramètres",
                disabled: false,
                href: "breadcrumbs_dashboard"
            },

            {
                text: "Listes",
                disabled: true,
                // TODO : adapt at the end
                href: "breadcrumbs_link_2#/LC-29/EditList"
            }
        ],
        list: [],
        dialog: false
    }),
    async mounted() {
        await this.loadCategories();
        await this.loadLists();
    },
    methods: {
        add() {
            this.dialog = true;
        },
        closemodal() {
            this.dialog = false;
        },
        edit() {
            this.dialog = true;
        },
        changeFr() {
            // TODO : mettre en place?
            return;
        },
        changeUs() {
            // TODO : mettre en place?
            return;
        },
        async loadLists() {
            try {
                const res = await this.getAllLists();
                this.list = res.datas.data.datas;
            } catch (error) {
                console.error(error);
            }
        },
        async loadCategories() {
            try {
                this.categories = await this.getGlobals();
            } catch (error) {
                this.$sweetError("GLC-30");
            }
        },
        getCategoryInitial(id) {
            const category = this.categories.filter(item => {
                return item.id == id;
            });
            if (category[0]) {
                return category[0].initial;
            }
            return "";
        },
        getClass(id) {
            const category = this.categories.filter(item => {
                return item.id == id;
            });
            if (category[0]) {
                return category[0].class;
            }
            return "";
        }
    }
};
</script>
