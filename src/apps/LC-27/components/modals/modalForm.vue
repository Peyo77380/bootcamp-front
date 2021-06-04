<template>
    <b-modal id="modal-scoped" :hide-backdrop="true" content-class="shadow">
        <template #modal-title>
            Modification rapide
        </template>
        <template #default>
            <div>
                <label for="feedback-user">Nom</label>
                <b-form-input
                    v-model="user.Nom"
                    :state="validation"
                    id="feedback-user"
                ></b-form-input>
                <b-form-invalid-feedback :state="validation">
                    Votre nom doit faire entre 4 et 60 caractères.
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validation">
                    Parfait !
                </b-form-valid-feedback>
            </div>
            <div>
                <label for="feedback-society">Société</label>
                <b-form-input
                    v-model="user.Societe"
                    :state="validationSociety"
                    id="feedback-society"
                ></b-form-input>
                <b-form-invalid-feedback :state="validationSociety">
                    Votre nom de société doit faire entre 4 et 100 caractères.
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validationSociety">
                    Bien joué !
                </b-form-valid-feedback>
            </div>
            <div>
                <label for="input-with-list">Activité</label>
                <b-form-input
                    list="input-list"
                    id="input-with-list"
                    v-model="test"
                ></b-form-input>
                <b-form-datalist
                    id="input-list"
                    :options="optionsChoices"
                    
                ></b-form-datalist>
            </div>
        </template>
        <template #modal-footer="{ ok, cancel }">
            <b-button size="sm" variant="primary" @click="update()">
                Voir fiche
            </b-button>
            <b-button size="sm" variant="danger" @click="cancel()">
                Annuler
            </b-button>
            <b-button size="sm" variant="success" @click="[ok(), modifUpdate($sweetNotif)]">
                Valider
            </b-button>
        </template>
    </b-modal>
</template>
<script>
//import sweetAlert from '@/plugins/sweetAlert.js';
export default {
   // components: {sweetAlert},
    name: "Modale",
    props: {
        user: {
            type: Object,
            default: function() {
                return {
                    ID: null,
                    Photo: "",
                    Nom: "",
                    Societe: "",
                    Statut: "",
                    Activite: false,
                    Credits: "",
                    Temps: ""
                };
            }
        }
    },
    data: () => ({
        userNom: "",
        userSociete: "",
        
        optionsChoices: ['Actif', 'Inactif']
    }),
    computed: {
        validation() {
            return this.user.Nom.length > 4 && this.user.Nom.length < 60;
        },
        validationSociety() {
            return this.user.Societe.length > 4 && this.user.Societe.length < 100;
        },
        test() {
          if (this.user.Activite) {
            return this.optionsChoices[0]
          } 
          return this.optionsChoices[1]
        }
    },
    methods: {
      importActivite (){
        this.test=this.user.Activite
      },
      modifUpdate() {
        this.$sweetNotif('Modifications enregistrées !')
    },
    }
};
</script>

