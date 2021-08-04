<template>
    <div>
        <div class="main-card mb-3 card">
            <div class="table-responsive">
                <table
                    class="align-middle text-truncate mb-0 table table-borderless table-striped table-hover"
                >
                    <thead>
                        <tr>
                            <th class="text-center">Taux</th>
                            <th class="text-center">Code Compta</th>
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="vatRate in vatRates" :key="vatRate._id">
                            <td class="text-center">
                                {{ vatRate.rate }}
                            </td>
                            <td class="text-center">
                                {{ vatRate.codeCompta }}
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
                                        class="mb-2 mr-2 btn-icon btn-pill btn-shadow"
                                        variant="danger"
                                        id="popover2"
                                        @click="remove(vatRate._id)"
                                        ><i class="pe-7s-trash"> </i
                                    ></b-button>
                                    <b-popover
                                        :target="'popover2'"
                                        placement="bottom"
                                        title="Supprimer la fiche"
                                        triggers="hover focus"
                                    ></b-popover>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <modalMod
            :updatedVatRate="updatedVatRate"
            :validationTaux="validationTaux"
            :validationCodecompta="validationCodecompta"
            :handleUpdate="handleUpdate"
        />
        <modalAdd
            :openModal="openModal"
            :validationTaux="validationTaux"
            :validationCodecompta="validationCodecompta"
            :handleAdd="handleAdd"
            @closeModal="closeAddModal"
        />
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import modalMod from "./modalMod.vue";
import modalAdd from "./modalAdd.vue";
import { vatRates } from "@/mixins/vatRates";

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        "font-awesome-icon": FontAwesomeIcon,
        modalMod,
        // eslint-disable-next-line vue/no-unused-components
        modalAdd
    },
    props: {
        openModal: {
            type: Boolean,
            default: false
        }
    },
    mixins: [vatRates],
    async mounted() {
        await this.loadVatRates();
    },
    data() {
        return {
            updatedVatRate: null,
            vatRates: []
        };
    },

    methods: {
        validationTaux(rate) {
            return rate.toString().length >= 1 && rate.toString().length <= 4;
        },
        validationCodecompta(codeCompta) {
            return codeCompta.length >= 6 && codeCompta.length <= 10;
        },
        updateForm(vatRate) {
            (this.updatedVatRate = vatRate), this.$bvModal.show("modal-scoped");
        },
        closeAddModal() {
            this.$emit("closeModal");
        },

        async remove(activityId) {
            // sweet alert sur la suppression
            let title = "Confirmer la suppression de cet item";
            if (await this.$sweetConfirmation({ title })) {
                try {
                    await this.deleteVatRate(activityId);
                    this.loadVatRates();
                    this.$sweetNotif("Item supprimée");
                } catch (error) {
                    console.error(error);
                }
            }
        },
        async loadVatRates() {
            try {
                const res = await this.getVatRates();
                this.vatRates = res;
            } catch (error) {
                console.error(error);
            }
        },
        async handleUpdate(vatRate) {
            try {
                const res = await this.modifyVatRate(vatRate);
                this.loadVatRates();
                return res;
            } catch (error) {
                console.error(error);
            }
        },
        async handleAdd(vatRate) {
            try {
                const res = await this.addVatRate(vatRate);
                this.loadVatRates();
                return res;
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
