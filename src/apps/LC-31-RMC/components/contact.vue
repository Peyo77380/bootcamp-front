<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout d-flex flex-column>

          <h4>Verification email</h4>

        <v-flex xs12 md4>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="20"
            label="Nom referent"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="20"
            label="Prenom referent"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
            v-model="models.phoneNumber"
            v-mask="'(###) ##########'"
            :rules="nameRules"
            label="Téléphone"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import Vue from 'vue'
import VueMask from 'v-mask';
Vue.use(VueMask);
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      
      models: {
          phoneNumber: '',
      },
    }),
  }
</script>
