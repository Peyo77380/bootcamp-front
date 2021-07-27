<template>
    <div>
        <div
            class="row"
            style="display: flex; justify-content: center; align-items: center"
        >
            <div
                class="col-md-3 col-xl-2"
                v-for="(category, index) in types"
                :key="index"
            >
                <div
                    :class="getClassType(index + 1)"
                    class="card mb-3 widget-content"
                >
                    <div class="widget-content-wrapper text-white">
                        <div class="widget-content-left">
                            <div class="widget-heading">
                                {{ category.text }}
                            </div>
                        </div>
                        <div class="widget-content-right">
                            <v-switch
                                color="primary"
                                v-model="selectedType"
                                :value="category"
                            ></v-switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-card mb-3 card">
            <div class="table-responsive">
                <table
                    class="align-middle text-truncate mb-0 table table-borderless table-striped table-hover"
                >
                    <thead>
                        <tr>
                            <th class="text-center">Nom</th>
                            <th class="text-center">Type</th>
                            <th class="text-center">Catégorie</th>
                            <th class="text-center">Affichage</th>
                            <!--                            <th class="text-center">Prix HT</th> -->
                            <th class="text-center">Prix TTC</th>
                            <th class="text-center">Etat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="filteredItems">
                            <tr
                                v-for="product in filteredItems"
                                :key="product._id"
                            >
                                <td class="text-center">
                                    {{ product.name }}
                                </td>
                                <td class="text-center">
                                    <v-chip
                                        :class="getClassType(product.type)"
                                        >{{ getNameType(product.type) }}</v-chip
                                    >
                                </td>
                                <td class="text-center">
                                    {{
                                        getCategory(
                                            product.type,
                                            product.category_id
                                        ).text
                                    }}
                                </td>

                                <td class="text-center">
                                    {{ getDisplayText(product.display) }}
                                </td>
                                <!-- 
                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    product.price
                                }}</a>
                            </td> -->
                                <td class="text-center">
                                    {{
                                        product.prices[
                                            product.prices.length - 1
                                        ].amounts.public
                                    }}
                                </td>

                                <td class="text-center">
                                    <div role="group" class="btn-group-xl">
                                        <router-link
                                            :to="{
                                                name: 'EditProductService',
                                                params: {
                                                    id: product._id,
                                                    getNameType: getNameType,
                                                    handleModify: handleModify,
                                                    types: types,
                                                    categoriesCombined: categoriesCombined,
                                                    radioDisplays: radioDisplays,
                                                    states: states
                                                }
                                            }"
                                        >
                                            <b-button
                                                class="mb-2 mr-2  btn-pill btn-shadow"
                                                variant="primary"
                                                id="popover1"
                                            >
                                                <i class="lnr-pencil"></i>
                                            </b-button>
                                        </router-link>
                                        <b-popover
                                            :target="'popover1'"
                                            placement="bottomleft"
                                            title="Modifier la fiche"
                                            triggers="hover focus"
                                        ></b-popover>

                                        <b-button
                                            class="mb-2 mr-2  btn-pill btn-shadow"
                                            variant="primary"
                                            id="popover2"
                                            @click="handleForm(product)"
                                        >
                                            <i class="pe-7s-copy-file"></i>
                                        </b-button>
                                        <b-popover
                                            :target="'popover2'"
                                            placement="bottomleft"
                                            title="Dupliquer la fiche"
                                            triggers="hover focus"
                                        ></b-popover>

                                        <b-button
                                            class="mb-2 mr-2 btn-icon btn-pill btn-shadow"
                                            variant="danger"
                                            id="popover3"
                                            @click="remove(product._id)"
                                            ><i class="pe-7s-trash"> </i
                                        ></b-button>
                                        <b-popover
                                            :target="'popover3'"
                                            placement="bottom"
                                            title="Supprimer la fiche"
                                            triggers="hover focus"
                                        ></b-popover>
                                    </div>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
                <div class="d-block p-4 text-center card-footer">
                    <b-pagination align="center" class="mb-0" />
                    <div class="row justify-content-end">
                        <b-button
                            class="mb-2 mr-2"
                            variant="success"
                            @click="handleForm()"
                            >ajouter un service</b-button
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        "font-awesome-icon": FontAwesomeIcon
    },
    props: {
        productsServices: {
            type: Array
        },
        types: {
            type: Array
        },
        states: {
            type: Array
        },
        radioDisplays: {
            type: Array
        },
        handleRemove: {
            type: Function
        },
        handleModify: {
            type: Function
        },
        handleForm: {
            type: Function
        },
        getNameType: {
            type: Function
        },
        getClassType: {
            type: Function
        },
        categoriesCombined: {
            type: Array
        },
        getCategory: {
            type: Function
        }
    },
    data() {
        return {
            selectedType: "Toutes les types"
        };
    },
    computed: {
        filteredItems: function() {
            var vm = this;
            var category = this.types.indexOf(vm.selectedType) + 1;
            if (
                this.selectedType === "Toutes les types" ||
                this.selectedType === null
            ) {
                return { ...vm.productsServices };
            } else {
                return vm.productsServices.filter(function(item) {
                    return item.type === category;
                });
            }
        }
        /*         prows() {
            return this.filteredItems.length;
        } */
    },
    methods: {
        async remove(id) {
            let title = "Confirmer la suppression de cet item";
            if (await this.$sweetConfirmation({ title })) {
                try {
                    await this.handleRemove(id);
                } catch (error) {
                    // console.error(error);
                }
            }
        },
        getDisplayText(value) {
            const display = this.radioDisplays.filter(ds => {
                return ds.value == value;
            });
            return display[0].text;
        }
    }
};
</script>
