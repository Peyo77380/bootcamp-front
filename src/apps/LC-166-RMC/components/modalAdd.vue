const newLocal=this.beforeUpdate=null; const
newLocal=this.beforeUpdate=this.updateUser;
<template>
    <b-modal
        id="modal-add"
        :hide-backdrop="true"
        content-class="shadow"
        :no-close-on-backdrop="true"
    >
        <template #modal-title>
            Ajouter mode de réglement
        </template>
        <template #default>
            <div>
                <label for="feedback-nom">Nom</label>
                <b-form-input
                    v-model="newPayment.name"
                    :state="validationName(newPayment.name)"
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
                    v-model="newPayment.codeCompta"
                    :state="validationCodeCompta(newPayment.codeCompta)"
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
                    v-model="newPayment.key"
                    :state="validationKey(newPayment.key)"
                    id="feedback-cle"
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
                @click="[ok(), modifAdd($sweetNotif)]"
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
        validationName: {
            type: Function
        },
        validationCodeCompta: {
            type: Function
        },
        validationKey: {
            type: Function
        },
        handleAdd: {
            type: Function
        }
    },
    data: () => ({
        newPayment: {
            name: "",
            codeCompta: "",
            key: ""
        }
    }),
    methods: {
        async modifAdd() {
            try {
                const newPaymentWlAdded = Object.assign(
                    { wl: 1 },
                    this.newPayment
                );
                await this.handleAdd(newPaymentWlAdded);
                this.$sweetNotif("Nouveau mode ajouté !");
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
