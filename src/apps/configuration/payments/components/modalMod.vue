<template>
    <b-modal
        id="modal-modif"
        :hide-backdrop="true"
        content-class="shadow"
        :no-close-on-backdrop="true"
    >
        <template #modal-title>
            Modification de mode de réglement
        </template>
        <template #default>
            <div>
                <label for="feedback-nom">Nom</label>
                <b-form-input
                    v-model="updatedPayment.name"
                    :state="validationName(updatedPayment.name)"
                    id="feedback-nom"
                ></b-form-input>
                <b-form-invalid-feedback>
                    Votre nom doit faire entre 4 et 60 caractères.
                </b-form-invalid-feedback>
                <b-form-valid-feedback>
                    Parfait !
                </b-form-valid-feedback>
            </div>
            <div>
                <label for="feedback-codecompta">Code compta</label>
                <b-form-input
                    v-model="updatedPayment.codeCompta"
                    :state="validationCodeCompta(updatedPayment.codeCompta)"
                    id="feedback-codecompta"
                ></b-form-input>
                <b-form-invalid-feedback>
                    Le code compta doit faire entre 4 et 10 caractères.
                </b-form-invalid-feedback>
                <b-form-valid-feedback>
                    Bien joué !
                </b-form-valid-feedback>
            </div>

            <div>
                <label for="feedback-cle">Clé</label>
                <b-form-input
                    v-model="key"
                    id="feedback-cle"
                    :disabled="true"
                ></b-form-input>
                <b-form-invalid-feedback>
                    La clé doit faire entre 3 et 10 caractères.
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
        updatedPayment: {
            type: Object
        },
        validationName: {
            type: Function
        },
        validationCodeCompta: {
            type: Function
        },
        validationKey: {
            type: Function
        },
        handleUpdate: {
            type: Function
        }
    },
    computed: {
        key() {
            return this.updatedPayment.key.toUpperCase();
        }
    },
    methods: {
        async modifUpdate() {
            try {
                await this.handleUpdate(this.updatedPayment);
                this.$sweetNotif("Modifications enregistrées !");
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
