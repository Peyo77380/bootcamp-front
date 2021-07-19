<template>
  <div>
    <page-title
      :heading="heading"
      :subheading="subheading"
      :icon="icon"
      :items="items"
    ></page-title>

    <div>
      <div class="row mb-1">
        <v-breadcrumbs :items="items" class="col-8">
          <template v-slot:divider>
            <v-icon>chevron_right</v-icon>
          </template>
        </v-breadcrumbs>

        <modal1 v-show="dialog" :dialog="dialog" @close="closemodal"></modal1>
        <b-button variant="btn btn-warning btn-lg col-2" @click="add">
          Ajouter
        </b-button>
      </div>

      <div class="col-10 offset-1 mt-5">
        <div class="main-card mb-3 card">
          <div class="card-header">Paramètres Membres</div>

          <div class="table-responsive">
            <table
              class="align-middle mb-0 table table-borderless table-striped table-hover"
            >
              <thead>
                <tr>
                  <th class="text-center">Catégories</th>
                  <th class="text-center">ID</th>
                  <th class="text-center">Valeur</th>
                  <th class="text-center">Modifier</th>
                  <th class="text-center">Modifier</th>
                  <th class="text-center">Supprimer</th>
                  <!-- <th class="text-center">voir plus</th> -->
                  <th class="text-center">Voir plus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="list in lists" :key="list.id">
                  <td class="text-center">
                    <div :class="getStatus(list.category)">
                      {{ list.category }}
                    </div>
                  </td>

                  <td class="text-center">{{ list.id }}</td>
                  <td class="text-center">
                    <div class="text-center">{{ list.value }}</div>
                  </td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      @click="edit(list.id)"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                  <td class="text-center">
                    <b-button
                      :to="{ name: 'listEdit' }"
                      class="mb-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-danger"
                      ><i class="pe-7s-trash btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                  <!-- <td class="text-center">
                    <button
                      class="ui inverted button"
                      v-on:click="toggleVoirPlus()"
                    >
                      +
                    </button>
                    <div class="d-flex flex-wrap">
                      <div class="voir" v-if="toggleVoir" transition="expand">
                        <p class="text-center">modifié le :{{ list.modify }}</p>
                        <p class="text-center">cree le{{ list.createdAt }}</p>
                      </div>
                    </div>
                  </td> -->
                  <td class="text">
                    <div no-body class="mb-1 bg-transparent border-0">
                      <b-card-header
                        header-tag="header"
                        v-b-toggle.accordion2
                        class="p-1 d-flex justify-content-center bg-transparent"
                        role="tab"
                      >
                      <b-button
                      class="mb-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      @click="edit(list.id)"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button>
                        <b-button class="pl-2 pr-2 d-flex justify-content-end" @click="edit(list.id)">
                          +
                        </b-button>
                      </b-card-header>

                      <b-collapse
                        id="accordion2"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <p class="card-text"></p>
                          <p>modifié le : {{ list.modif }}</p>
                          <p>cree le: {{ list.createdAt }}</p>
                        </b-card-body>
                      </b-collapse>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle";
import Modal1 from "@/apps/LC-29/components/modal1";

export default {
  components: {
    PageTitle,
    Modal1,
  },

  data: () => ({
    toggleVoir: false,
    heading: "LaColloc - Paramètres",
    subheading: "Paramètrage de LaColloc",
    icon: "pe-7s-news-paper icon-gradient bg-night-fade",
    items: [
      {
        text: "Paramètres",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Espace Membres",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Membres",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
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
        modify: "24/05/2021",
        createdAt: "19/05/2019",
      },
      {
        category: "annonces",
        id: 8,
        value: "je vends",
        modify: "24/05/2021",
        createdAt: "19/05/2019",
      },
      {
        category: "activité",
        id: 10,
        value: "banque | assurances",
        modify: "24/05/2021",
        createdAt: "19/05/2019",
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
        id: 2,
        value: "traducteur",
        modify: "24/05/2021",
        createdAt: "19/05/2019",
      },
      {
        category: "annonces",
        id: 5,
        value: "je cherche",
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
    toggleVoirPlus: function () {
      this.toggleVoir = !this.toggleVoir;
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
};
</script>
