<template>
  <v-layout row justify-center>
    <v-card class="col-8">
      <v-card-title>
        <span class="headline">Liste des activités</span>
      </v-card-title>
      <v-card-text class="col-10 offset-1">
        <h3 class="my-3">Ajouter une Activité</h3>
        <li class="list-group-item">
          <div class="widget-content p-0">
            <div class="widget-content-wrapper">
              <div class="widget-content-left">
                <div class="widget-heading"></div>
              </div>
              <v-layout>
                <v-flex>
                  <v-text-field
                    label="Activité"
                    required
                    class="col-10 new-activity"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <b-button
                class="ml-6 btn-icon btn-icon-only btn-pill"
                variant="outline-warning"
                @click="add(item.id)"
                ><i class=""> + </i></b-button
              >
            </div>
          </div>
        </li>

        <ul class="list-group">
          <h3 class="my-5">Modifier une Activité</h3>
          <b-row>
            <b-col md="6" class="my-1">
              <b-form-group horizontal label="Filtrer" class="mb-3">
                <b-input-group>
                  <b-form-input
                    v-model="filter"
                    placeholder="Rechercher une activité"
                  />
                  <b-input-group-append>
                    <b-btn :disabled="!filter" @click="filter = ''"
                      >Clear</b-btn
                    >
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col md="6" class="my-1">
              <b-form-group horizontal label="Ordre" class="mb-0">
                <b-input-group>
                  <b-form-select v-model="sortDirection" slot="append">
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                    <option value="last">Last</option>
                  </b-form-select>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <li
            class="list-group-item"
            v-for="item in lists"
            :key="item.id"
            v-bind:class="{ completed: item.completed }"
          >
            <div class="widget-content p-0">
              <div class="widget-content-wrapper">
                <div class="widget-content-left">
                  <div class="widget-heading">{{ item.name }}</div>
                </div>

                <div class="widget-content-right">
                  <div role="group" class="btn-group-sm btn-group">
                    <div>
                      <b-button
                        class="ml-4 btn-icon btn-icon-only btn-pill"
                        variant="outline-info"
                        @click="edit(list.id)"
                        ><i class="pe-7s-pen btn-icon-wrapper"> </i
                      ></b-button>
                    </div>

                    <div>
                      <b-button
                        class="ml-4 btn-icon btn-icon-only btn-pill"
                        variant="outline-danger"
                        @click="remove(item.id)"
                        ><i class="pe-7s-trash btn-icon-wrapper"> </i
                      ></b-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "EditList",
  methods: {
    remove(activityId) {
      // appel api a faire pour suppresion
      this.lists = this.lists.filter((activity) => activity.id !== activityId);
      // eslint-disable-next-line no-console
      console.log("from remove Editlist : ok !!!", activityId);
      // sweet alert sur la suppression
      let title = "Confirmer la suppression de l'activité";
      this.$sweetConfirmation(title);
    },
    // add() {
    //   this.item.push({
    //     completed: false,
    //     name: this.activity,
    //   });
    //   this.newActivity = "";
    // },
  },
  data: () => ({
    sortBy: null,
    sortDesc: false,
    sortDirection: "asc",
    lists: [
      {
        name: "Agroalimentaire",
        id: 1,
        modify: "24/05/2021",
        createdAt: "19/05/2019",
      },
      {
        name: "Banque / Assurances",
        id: 2,
        modify: "essai1",
        createdAt: "essai1",
      },
      {
        name: "Bois/Papier/Carton/Impimerie",
        id: 3,
        modify: "13/09/2020",
        createdAt: "03/05/2018",
      },
      {
        name: "BTP/Matériaux de construction",
        id: 4,
        value: "je vends",
        modify: "14/08/2017",
        createdAt: "09/08/2016",
      },
      {
        name: "Chimie/Parapharmacie",
        id: 5,
        modify: "12/06/2021",
        createdAt: "11/04/2019",
      },
      {
        name: "Commerce/Négoce/Distribution",
        id: 6,
        modify: "24/05/2021",
        createdAt: "19/05/2019",
      },
      {
        name: "Edition/Communication/Multimédia",
        id: 7,
        modify: "04/05/2021",
        createdAt: "09/05/2019",
      },
      {
        name: "Edition/Communication/Multimédia",
        id: 8,
        modify: "04/05/2021",
        createdAt: "09/05/2019",
      },
      {
        name: "Electronique/Electricité",
        id: 9,
        modify: "04/05/2021",
        createdAt: "09/05/2019",
      },
      {
        name: "Etudes/Conseils",
        id: 10,
        modify: "04/05/2021",
        createdAt: "09/05/2019",
      },
      {
        name: "Informatiques / Télécoms",
        id: 11,
        modify: "04/05/2021",
        createdAt: "09/05/2019",
      },
      {
        name: "Machines / Equipements / Automobiles",
        id: 12,
        modify: "04/05/2021",
        createdAt: "09/05/2019",
      },
      {
        name: "Mettalurgie/ Travail du métal",
        id: 13,
        modify: "04/05/2021",
        createdAt: "09/05/2019",
      },
    ],
    dialog: false,
  }),
};
</script>
