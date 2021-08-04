<template>
    <div>
        <div class="main-card mb-3 card">
            <div class="table-responsive">
                <table
                    class="align-middle text-truncate mb-0 table table-borderless table-striped table-hover"
                >
                    <thead>
                        <tr>
                            <th class="text-center">Clé</th>
                            <th class="text-center">Nom</th>
                            <th class="text-center">Code Compta</th>
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="payment in payments" :key="payment._id">
                            <td class="text-center">
                                {{ displayKey(payment.key) }}
                            </td>
                            <td class="text-center">
                                {{ payment.name }}
                            </td>
                            <td class="text-center">
                                {{ payment.codeCompta }}
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
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <modalMod
            :updatedPayment="updatedPayment"
            :validationName="validationName"
            :validationCodeCompta="validationCodeCompta"
            :validationKey="validationKey"
            :handleUpdate="handleUpdate"
        />
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import modalMod from "./modalMod.vue";
import { payments } from "@/mixins/payments";

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        "font-awesome-icon": FontAwesomeIcon,
        modalMod
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
        displayKey(key) {
            return key.toUpperCase();
        },
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
        }
    }
};
</script>
