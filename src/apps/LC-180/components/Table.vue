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
                        <tr v-for="produit in produits" :key="produit._id">
                            <!-- <td
                                class="text-center text-muted"
                                style="width: 80px;"
                            >
                                {{ user.ID }}
                            </td> -->

                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    produit.name
                                }}</a>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    produit.type
                                }}</a>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    produit.categoryType
                                }}</a>
                            </td>

                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    produit.display
                                }}</a>
                            </td>

                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    produit.priceHT
                                }}</a>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    produit.priceTTC
                                }}</a>
                            </td>

                            <td class="text-center">
                                <div role="group" class="btn-group-xl">
                                    <b-button
                                        class="mb-2 mr-2  btn-pill btn-shadow"
                                        variant="primary"
                                        id="popover1"
                                        @click="updateForm(vatRate)"
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
                                        @click="updateForm(vatRate)"
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
                                        @click="remove(vatRate._id)"
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
                            @click="addForm"
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
    data() {
        return {
            updatedVatRate: null,
            produits: [
                {
                    type: "Produit",
                    name: "Boisson",
                    categoryType: "Location bureau partagé",
                    key: "bb1",
                    display: "Admin",
                    priceHT: 242,
                    priceTTC: 290,
                    variation: "Delta",
                    descriptionLong:
                        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. ",
                    descriptionShort: "Bla bla bla",
                    content: ""
                }
            ]
        };
    },

    methods: {
        validationTaux(rate) {
            return rate.toString().length > 1 && rate.toString().length < 6;
        },
        validationCodecompta(codeCompta) {
            return codeCompta.length > 4 && codeCompta.length < 10;
        },
        updateForm(vatRate) {
            (this.updatedVatRate = vatRate), this.$bvModal.show("modal-scoped");
        },
        addForm() {
            this.$bvModal.show("modal-add");
        },
        async remove() {
            // sweet alert sur la suppression
            /*             let title = "Confirmer la suppression de cet item";
            if (await this.$sweetConfirmation({ title })) {
                try {
                    this.$sweetNotif("Item supprimée");
                } catch (error) {
                    console.error(error);
                }
            } */
        }
        /*         async loadVatRates() {},
        async handleUpdate(vatRate) {},
        async handleAdd(vatRate) {} */
    }
};
</script>
