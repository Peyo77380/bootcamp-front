<template>
    <b-modal
        id="modal-add"
        :hide-backdrop="true"
        content-class="shadow"
        :no-close-on-backdrop="true"
    >
        <template #modal-title>
            Modification Taux de TVA
        </template>
        <template #default>
            <div>
                <label for="feedback-taux">Taux</label>
                <b-form-input
                    v-model.number="newRateTva.rate"
                    type="number"
                    :state="validationTaux(newRateTva.rate)"
                    id="feedback-taux"
                ></b-form-input>
                <b-form-invalid-feedback
                    :state="validationTaux(newRateTva.rate)"
                >
                    Le taux doit faire entre 1 et 6 caractères.
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validationTaux(newRateTva.rate)">
                    Parfait !
                </b-form-valid-feedback>
            </div>
            <div>
                <label for="feedback-codecompta">Code compta</label>
                <b-form-input
                    v-model="newRateTva.codeCompta"
                    :state="validationCodecompta(newRateTva.codeCompta)"
                    id="feedback-codecompta"
                ></b-form-input>
                <b-form-invalid-feedback
                    :state="validationCodecompta(newRateTva.codeCompta)"
                >
                    Le code compta doit faire entre 4 et 10 caractères.
                </b-form-invalid-feedback>
                <b-form-valid-feedback
                    :state="validationCodecompta(newRateTva.codeCompta)"
                >
                    Bien joué !
                </b-form-valid-feedback>
            </div>
        </template>
        <template #modal-footer="{ ok, cancel }">
            <b-button size="sm" variant="danger" @click="cancel()">
                Annuler
            </b-button>
            <b-button
                type="submit"
                size="sm"
                variant="success"
                @click="[ok(), addUpdate($sweetNotif)]"
            >
                Valider
            </b-button>
        </template>
    </b-modal>
</template>

<script>
import { vatRates } from "@/mixins/vatRates";
export default {
    name: "Modale",
    props: {
        validationTaux: { type: Function },
        validationCodecompta: { type: Function },
        handleAdd: { type: Function }
    },
    data: () => ({
        newRateTva: {
            rate: "",
            codeCompta: ""
        }
    }),
    mixins: [vatRates],
    methods: {
        async addUpdate() {
            try {
                const newRateWlAdded = Object.assign(
                    { wl: 1 },
                    this.newRateTva
                );
                await this.handleAdd(newRateWlAdded);
                this.$sweetNotif("Modifications enregistrées !");
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
