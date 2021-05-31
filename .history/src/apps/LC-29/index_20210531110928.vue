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
                  
                  <th class="text-center">Catégories  </th>
                  <th class="text-center">ID</th>
                  <th class="text-center">Valeur</th>
                  <th class="text-center">Modifier</th>
                  <th class="text-center">Modifier</th>
                  <th class="text-center">Supprimer</th>
                  <th class="text-center">voir plus</th>
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
                  <td class="text-center">
                    <b-button
                     >
                    
                    ></b-button>
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
      },
      {
        category: "metier",
        id: 2,
        value: "développeur web",
      },
      {
        category: "évènements",
        id: 3,
        value: "innovations managériales",
      },
      {
        category: "annonces",
        id: 8,
        value: "je vends",
      },
      {
        category: "activité",
        id: 10,
        value: "banque | assurances",
      },
      {
        category: "catégorie",
        id: 12,
        value: "stagiaire",
      },
      {
        category: "metier",
        id: 2,
        value: "traducteur",
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
