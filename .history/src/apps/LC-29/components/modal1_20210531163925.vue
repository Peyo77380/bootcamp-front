<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="warning" dark v-on="on">Ajouter</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm8 md6>
                <v-text-field label="Categorie" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm8 md6>
                <v-text-field
                  label="Valeur"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    edit() {
      this.$emit("save");
    },
      add() {
      this. = true;
    },
  },
};
</script>
