<template>
    <b-modal
        id="modal-scoped"
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
                    v-model.number="updatedVatRate.rate"
                    type="number"
                    :state="validationTaux(updatedVatRate.rate)"
                    id="feedback-taux"
                ></b-form-input>
                <b-form-invalid-feedback>
                    Le taux doit faire entre 1 et 6 caractères.
                </b-form-invalid-feedback>
                <b-form-valid-feedback>
                    Parfait !
                </b-form-valid-feedback>
            </div>
            <div>
                <label for="feedback-codecompta">Code compta</label>
                <b-form-input
                    v-model="updatedVatRate.codeCompta"
                    :state="validationCodecompta(updatedVatRate.codeCompta)"
                    id="feedback-codecompta"
                ></b-form-input>
                <b-form-invalid-feedback>
                    Le code compta doit faire entre 4 et 10 caractères.
                </b-form-invalid-feedback>
                <b-form-valid-feedback>
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
                @click="[ok(), modifUpdate($sweetNotif)]"
            >
                Valider
            </b-button>
        </template>
    </b-modal>
</template>

<script>
export default {
    name: "Modale",
    props: {
        updatedVatRate: { type: Object },
        validationTaux: { type: Function },
        validationCodecompta: { type: Function },
        handleUpdate: { type: Function }
    },
    methods: {
        async modifUpdate() {
            try {
                await this.handleUpdate(this.updatedVatRate);
                this.$sweetNotif("Modifications enregistrées !");
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
