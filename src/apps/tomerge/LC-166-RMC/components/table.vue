<template>
    <div>
        <div class="main-card mb-3 card">
            <div class="table-responsive">
                <table
                    class="align-middle text-truncate mb-0 table table-borderless table-striped table-hover"
                >
                    <thead>
                        <tr>
                            <!-- <th class="text-center">Position</th> -->
                            <th class="text-center">Nom</th>
                            <th class="text-center">Code Compta</th>
                            <th class="text-center">Clé</th>
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="payment in payments" :key="payment._id">
                            <!-- <td
                                class="text-center text-muted"
                                style="width: 80px;"
                            >
                                {{ user.ID }}
                            </td> -->

                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    payment.name
                                }}</a>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    payment.codeCompta
                                }}</a>
                            </td>

                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    payment.key
                                }}</a>
                            </td>

                            <td class="text-center">
                                <div role="group" class="btn-group-xl">
                                    <b-button
                                        class="mb-2 mr-2  btn-pill btn-shadow"
                                        variant="primary"
                                        id="popover1"
                                        @click="updateForm(payment)"
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
                                        @click="remove(payment._id)"
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
                <div class="d-block p-4 text-center card-footer">
                    <b-pagination align="center" class="mb-0" />
                </div>
                <div class="row justify-content-end">
                    <b-button
                        class="mb-2 mr-2"
                        variant="success"
                        v-b-modal.modal-add
                        >ajouter un mode de réglement</b-button
                    >
                </div>
            </div>
        </div>
        <modalMod
            :updatedPayment="updatedPayment"
            :validationName="validationName"
            :validationCodeCompta="validationCodeCompta"
            :validationKey="validationKey"
            :handleUpdate="handleUpdate"
        />
        <modalAdd
            :validationName="validationName"
            :validationCodeCompta="validationCodeCompta"
            :validationKey="validationKey"
            :handleAdd="handleAdd"
        />
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import modalMod from "./modalMod.vue";
import modalAdd from "./modalAdd.vue";
import { payments } from "@/mixins/payments";

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        "font-awesome-icon": FontAwesomeIcon,
        modalMod,
        // eslint-disable-next-line vue/no-unused-components
        modalAdd
    },
    mixins: [payments],
    async mounted() {
        await this.loadPayments();
    },

    data() {
        return {
            updatedPayment: null,
            payments: []
        };
    },

    methods: {
        validationName(name) {
            return name.length > 4 && name.length < 60;
        },
        validationCodeCompta(codeCompta) {
            return codeCompta.length > 4 && codeCompta.length < 10;
        },
        validationKey(key) {
            return key.length >= 3 && key.length < 10;
        },
        updateForm(payment) {
            (this.updatedPayment = payment), this.$bvModal.show("modal-modif");
        },
        async remove(id) {
            // sweet alert sur la suppression
            let title = "Confirmer la suppression de cet item";
            if (await this.$sweetConfirmation({ title })) {
                try {
                    await this.deletePayment(id);
                    this.loadPayments();
                    this.$sweetNotif("Item supprimée");
                } catch (error) {
                    console.error(error);
                }
            }
        },
        async loadPayments() {
            try {
                const res = await this.getPayments();
                this.payments = res;
            } catch (error) {
                console.error(error);
            }
        },
        async handleUpdate(updatedPayment) {
            try {
                await this.modifyPayment(updatedPayment);
                this.loadPayments();
                this.$sweetNotif("Item supprimée");
            } catch (error) {
                console.error(error);
            }
        },
        async handleAdd(payment) {
            try {
                const res = await this.addPayment(payment);
                this.loadPayments();
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
