<template>
  <div>
    <page-title
      :heading="heading"
      :subheading="subheading"
      :icon="icon"
      :items="items"
    ></page-title>

    <div>
      <div>
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>chevron_right</v-icon>
          </template>
        </v-breadcrumbs>
      </div>
    </div>

    <v-layout row justify-center> <!-- Remplacer style vuetify par style bootstrap et standardiser les boutons !-->
      <v-card class="col-8">
        <v-card-text class="col-10 offset-1">
          <h3 class="my-3">Ajouter une Activité</h3>
          <li class="list-group-item rounded">
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
                      v-model="newItem.name"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <b-button
                  class="ml-6 btn-icon btn-icon-only btn-pill"
                  variant="outline-warning"
                  @click="add()"
                  ><i class=""> + </i></b-button
                >
              </div>
            </div>
          </li>

          <ul class="list-group">
            <hr class="my-5" />
            <li
              class="list-group-item rounded"
              v-for="item in lists"
              :key="item.id"
              v-bind:class="{ completed: item.completed }"
            >
              <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">{{ item.text }}</div>
                  </div>

                  <div class="widget-content-right">
                    <div role="group" class="btn-group-sm btn-group">
                      <div>
                        <b-button
                          class="ml-4 btn-icon btn-icon-only btn-pill"
                          variant="outline-info"
                          @click="showEdit(item.id)"
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
        </v-card-text>
      </v-card>
    </v-layout>
    <modal
      @saveModification="modificationActivity"
      :items="keyValueEdit"
      @close2="closeModalEdit"
      :dialog2="dialog2"
    ></modal>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import Modal from "@/apps/LC-29/Modal.vue";
import {Globals} from '@/mixins/global';

export default {
  name: "EditList",
  components: {
    PageTitle,
    // eslint-disable-next-line vue/no-unused-components
    Modal,
  },
  mixins: [Globals],
    async mounted () {
      await this.loadListDetail();
  },
  methods: {
    async loadListDetail () {
      try {
        const res = await this.getListDetails(this.$route.params.id);
        this.lists = res.datas
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    async remove(activityId) {
      // sweet alert sur la suppression
      let title = "Confirmer la suppression de l'activité";
      if (await this.$sweetConfirmation({ title })) {
        this.lists = this.lists.filter(
          (activity) => activity.id !== activityId
        );
        this.$sweetNotif("Activité supprimée");
      }
    },
    // ajout d'une activité
    add() {
      this.lists.push({
        id: 123,
        name: this.newItem.name,
      });
      this.$sweetNotif("Activité ajoutée");
      this.newItem = { name: "", id: 0 };
    },
    //Modal
    closeModalEdit() {
      this.dialog2 = false;
    },
    showEdit(item) {
      this.dialog2 = true;
      this.keyValueEdit = item;
    },
    modificationActivity() {
      this.lists.push({
        id: 123,
        name: this.newItem.name,
      });
      //TODO point API modification activité
      var title = "Modification réussie !";
      this.$sweetNotif(title);
    },
  },
  data: () => ({
    heading: "LaColloc - Paramètres",
    subheading: "Paramètrage de LaColloc",
    icon: "pe-7s-news-paper icon-gradient bg-night-fade",
    newItem: { name: "", id: "" },
    //data Modal
    dialog2: false,
    keyValueEdit: {},

    //breadcrumb
    items: [
      {
        text: "Paramètres",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Listes",
        disabled: false,
        href: "breadcrumbs_link_1#/LC-29",
      },
      {
        text: "Modifier la liste",
        disabled: true,
      },
    ],

    //data Lists
    lists: [],
    // lists: [
    //   {
    //     name: "Agroalimentaire",
    //     id: 1,
    //     modify: "24/05/2021",
    //     createdAt: "19/05/2019",
    //   },
    //   {
    //     name: "Banque / Assurances",
    //     id: 2,
    //     modify: "essai1",
    //     createdAt: "essai1",
    //   },
    //   {
    //     name: "Bois/Papier/Carton/Impimerie",
    //     id: 3,
    //     modify: "13/09/2020",
    //     createdAt: "03/05/2018",
    //   },
    //   {
    //     name: "BTP/Matériaux de construction",
    //     id: 4,
    //     value: "je vends",
    //     modify: "14/08/2017",
    //     createdAt: "09/08/2016",
    //   },
    //   {
    //     name: "Chimie/Parapharmacie",
    //     id: 5,
    //     modify: "12/06/2021",
    //     createdAt: "11/04/2019",
    //   },
    //   {
    //     name: "Commerce/Négoce/Distribution",
    //     id: 6,
    //     modify: "24/05/2021",
    //     createdAt: "19/05/2019",
    //   },
    //   {
    //     name: "Edition/Communication/Multimédia",
    //     id: 7,
    //     modify: "04/05/2021",
    //     createdAt: "09/05/2019",
    //   },
    //   {
    //     name: "Edition/Communication/Multimédia",
    //     id: 8,
    //     modify: "04/05/2021",
    //     createdAt: "09/05/2019",
    //   },
    //   {
    //     name: "Electronique/Electricité",
    //     id: 9,
    //     modify: "04/05/2021",
    //     createdAt: "09/05/2019",
    //   },
    //   {
    //     name: "Etudes/Conseils",
    //     id: 10,
    //     modify: "04/05/2021",
    //     createdAt: "09/05/2019",
    //   },
    //   {
    //     name: "Informatiques / Télécoms",
    //     id: 11,
    //     modify: "04/05/2021",
    //     createdAt: "09/05/2019",
    //   },
    //   {
    //     name: "Machines / Equipements / Automobiles",
    //     id: 12,
    //     modify: "04/05/2021",
    //     createdAt: "09/05/2019",
    //   },
    //   {
    //     name: "Mettalurgie/ Travail du métal",
    //     id: 13,
    //     modify: "04/05/2021",
    //     createdAt: "09/05/2019",
    //   },
    // ],
    dialog: false,
  }),
};
</script>
