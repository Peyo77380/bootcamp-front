<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <!-- <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Ajouter</v-btn>
      </template> -->
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
  data: () => ({
    lists: [
      {
        category: "activité",
        id: 1,
        value: "agroalimentaire",
        modify: "24/05/2021",
        createdAt: "19/05/2019",
      },
      {
        category: "metier",
        id: 2,
        value: "développeur web",
        modify: "essai1",
        createdAt: "essai1",
      },
      {
        category: "évènements",
        id: 3,
        value: "innovations managériales",
        modify: "13/09/2020",
        createdAt: "03/05/2018",
      },
      {
        category: "annonces",
        id: 8,
        value: "je vends",
        modify: "14/08/2017",
        createdAt: "09/08/2016",
      },
      {
        category: "activité",
        id: 10,
        value: "banque | assurances",
        modify: "12/06/2021",
        createdAt: "11/04/2019",
      },
      {
        category: "catégorie",
        id: 12,
        value: "stagiaire",
        modify: "24/05/2021",
        createdAt: "19/05/2019",
      },
      {
        category: "metier",
        id: 5,
        value: "traducteur",
        modify: "04/05/2021",
        createdAt: "09/05/2019",
      },
      {
        category: "annonces",
        id: 5,
        value: "je cherche",
        modify: "test3",
        createdAt: "3test",
      },
      {
        category: "activité",
        id: 11,
        value: "BTP | matériaux de construction",
      },
      {
        category: "catégorie",
        id: 13,
        value: "coworker",
      },
    ],
    dialog: false,
  }),

  methods: {
    add() {
      this.dialog = true;
    },
    closemodal() {
      this.dialog = false;
    },
    edit() {
      this.dialog = true;
    },
    getStatus(category) {
      switch (category) {
        case "activité":
          return {
            "badge badge-warning": true,
          };
        case "metier":
          return {
            "badge badge-info": true,
          };
        case "évènements":
          return {
            "badge badge-success": true,
          };
        case "catégorie":
          return {
            "badge badge-alternate": true,
          };
        case "annonces":
          return {
            "badge badge-danger": true,
          };
      }
    },
  },
  props: {
    dialog: {
      type: Boolean,
    },
  },
  method: {
    close() {
      this.$emit("close");
    },
    edit() {
      this.$emit("save");
    },
  },
};
</script>
