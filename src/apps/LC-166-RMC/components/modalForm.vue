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
            Modification de mode de réglement
        </template>
        <template #default>
            <div>
                <label for="feedback-society">Nom</label>
                <b-form-input
                    v-model="user.Nom"
                    :state="validation"
                ></b-form-input>
                <b-form-invalid-feedback :state="validation">
                    Votre nom doit faire entre 4 et 60 caractères.
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validation">
                    Parfait !
                </b-form-valid-feedback>
            </div>
            <div>
                <label for="feedback-society">Code compta</label>
                <b-form-input
                    v-model="user.Codecompta"
                    :state="validationCodecompta"
                    id="feedback-society"
                ></b-form-input>
                <b-form-invalid-feedback :state="validationCodecompta">
                    Le code compta doit faire entre 4 et 10 caractères.
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validationCodecompta">
                    Bien joué !
                </b-form-valid-feedback>
            </div>

            <div>
                <label for="feedback-society">Clé</label>
                <b-form-input
                    v-model="user.Cle"
                    :state="validationCle"
                    id="feedback-society"
                ></b-form-input>
                <b-form-invalid-feedback :state="validationCle">
                    La clé doit faire entre 3 et 10 caractères.
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validationCle">
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
        userNom: "",
        userCodecompta: "",
        userCle: "",
        beforeUpdate: null
    }),
    computed: {
        validation() {
            return this.user.Nom.length > 4 && this.user.Nom.length < 60;
        },
        validationCodecompta() {
            return (
                this.user.Codecompta.length > 4 &&
                this.user.Codecompta.length < 10
            );
        },
        validationCle() {
            return this.user.Cle.length > 3 && this.user.Cle.length < 10;
        },
        // test() {
        //     if (this.user.Activite) {
        //         return this.optionsChoices[0];
        //     }
        //     return this.optionsChoices[1];
        // },

        user() {
            if (this.updateUser) {
                return this.updateUser;
            }

            return {
                ID: null,
                Nom: "",
                Codecompta: "",
                Cle: ""
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
