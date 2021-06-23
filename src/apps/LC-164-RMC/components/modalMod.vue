const newLocal=this.beforeUpdate=null; const
newLocal=this.beforeUpdate=this.updateUser;
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
                <label for="feedback-taux" >Taux</label>
                <b-form-input
                    v-model="user.Taux"
                    :state="validationTaux"
                    id="feedback-taux"
                ></b-form-input>
                <b-form-invalid-feedback :state="validationTaux">
                    Le taux doit faire entre 1 et 6 caractères.
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validationTaux">
                    Parfait !
                </b-form-valid-feedback>
            </div>
            <div>
                <label for="feedback-codecompta">Code compta</label>
                <b-form-input
                    v-model="user.Codecompta"
                    :state="validationCodecompta"
                    id="feedback-codecompta"
                ></b-form-input>
                <b-form-invalid-feedback :state="validationCodecompta">
                    Le code compta doit faire entre 4 et 10 caractères.
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validationCodecompta">
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
        updateUser: {
            type: Object
        }
    },
    data: () => ({
        userTaux: "",
        userCodecompta: "",
        beforeUpdate: null
    }),
    computed: {
        validationTaux() {
            return this.user.Taux.length > 1 && this.user.Taux.length < 6;
        },
        validationCodecompta() {
            return (
                this.user.Codecompta.length > 4 &&
                this.user.Codecompta.length < 10
            );
        },

        user() {
            if (this.updateUser) {
                return this.updateUser;
            }

            return {
                ID: null,
                Taux: "",
                Codecompta: "",
            };
        }
    },

    methods: {
        modifUpdate() {
            this.$sweetNotif("Modifications enregistrées !");
        }
    }
};
</script>
