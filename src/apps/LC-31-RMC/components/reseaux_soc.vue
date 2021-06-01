<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout d-flex flex-column>


        <v-flex xs12 sm4>
          <v-text-field
            label="Site internet"
            hint="www.example.com/page"
            persistent-hint
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4>
          <v-text-field
            label="Linkedin"
            hint="https://www.linkedin.com/page"
            persistent-hint
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4>
          <v-text-field
            label="Twiter"
            hint="https://twitter.com//page"
            persistent-hint
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4>
          <v-text-field
            label="Facebook"
            hint="https://www.facebook.com//page"
            persistent-hint
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4>
          <v-text-field
            label="Instagram"
            hint="https://www.instagram.com//page"
            persistent-hint
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>

</script>
