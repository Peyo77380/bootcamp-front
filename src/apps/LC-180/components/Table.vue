<template>
    <div>
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
                            <th class="text-center">Prix HT</th>
                            <th class="text-center">Prix TTC</th>
                            <th class="text-center">Etat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="product in productsServices"
                            :key="product._id"
                        >
                            <!-- <td
                                class="text-center text-muted"
                                style="width: 80px;"
                            >
                                {{ user.ID }}
                            </td> -->

                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    product.name
                                }}</a>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    product.type
                                }}</a>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    product.categoryType
                                }}</a>
                            </td>

                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    product.display
                                }}</a>
                            </td>

                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    product.priceHT
                                }}</a>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    product.priceTTC
                                }}</a>
                            </td>

                            <td class="text-center">
                                <div role="group" class="btn-group-xl">
                                    <b-button
                                        class="mb-2 mr-2  btn-pill btn-shadow"
                                        variant="primary"
                                        id="popover1"
                                        @click="handleForm('edit', product)"
                                    >
                                        <i class="lnr-pencil"></i>
                                    </b-button>
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
                                        @click="
                                            handleForm('duplicate', product)
                                        "
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
                    </tbody>
                </table>
                <div class="d-block p-4 text-center card-footer">
                    <b-pagination align="center" class="mb-0" />
                    <div class="row justify-content-end">
                        <b-button
                            class="mb-2 mr-2"
                            variant="success"
                            @click="handleForm('add', {})"
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
        handleRemove: {
            type: Function
        },
        handleForm: {
            type: Function
        }
    },
    data() {
        return {};
    },

    methods: {
        async remove(id) {
            let title = "Confirmer la suppression de cet item";
            if (await this.$sweetConfirmation({ title })) {
                try {
                    await this.handleRemove(id);

                    this.$sweetNotif("Item supprimée");
                } catch (error) {
                    // console.error(error);
                }
            }
        }
    }
};
</script>
