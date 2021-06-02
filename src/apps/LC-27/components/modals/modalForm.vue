<template>
  <b-modal id="modal-scoped">
    <template #modal-title>
      Modification rapide
    </template>
    <template #default>
      <div>
        <label for="feedback-user">Nom</label>
        <b-form-input v-model="userName" :state="validation" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback :state="validation">
          Votre nom doit faire entre 4 et 60 caractères.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation">
          Parfait !
        </b-form-valid-feedback>
      </div>
      <div>
        <label for="feedback-society">Société</label>
        <b-form-input v-model="userSociety" :state="validationSociety" id="feedback-society"></b-form-input>
        <b-form-invalid-feedback :state="validationSociety">
          Votre nom de société doit faire entre 4 et 100 caractères.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validationSociety">
          Bien joué !
        </b-form-valid-feedback>
      </div>
      <div>
        <label for="input-with-list">Status</label>
        <b-form-input list="input-list" id="input-with-list"></b-form-input>
        <b-form-datalist id="input-list" :options="optionsCHoices"></b-form-datalist>
      </div>
    </template>
    <template #modal-footer="{ ok, cancel }">
      <b-button size="sm" variant="danger" @click="cancel()">
        Annuler
      </b-button>
      <b-button size="sm" variant="success" @click="ok()">
        Valider
      </b-button>
    </template>
  </b-modal>
</template>
<script>
export default {
    name: 'Modale',
    props: {user: {
      type: Object,
      default: function () {
        return { message: 'hello' }
    }}
  },
  data: () => ({
    userName: '',
    userSociety: '',
    optionsCHoices: ['Actif', 'Inactif'],
      dialog: false
    }),
  computed: {
    validation(){
       return this.userName.length > 4 && this.userName.length < 60
    },
    validationSociety(){
      return this.userSociety.length > 4 && this.userSociety.length < 100
    }
  }
}
</script>
