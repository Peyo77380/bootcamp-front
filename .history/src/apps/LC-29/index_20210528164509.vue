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
                  <th class="text-center">Supprimer</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="">
                  <td class="text-center">
                    <div class="badge badge-warning">Activités</div>
                  </td>

                  <td class="text-center">#10</td>
                  <td class="text-center">
                    <div class="text-center">Agroalimentaire</div>
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
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-danger" >Métier</div>
                  </td>
                  <td class="text-center">#20</td>
                  <td class="text-center">
                    <div class="text-center">Développeur web</div>
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
                      :to="{ name: 'listEdit' }"
                      class="mb-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-danger"
                      ><i class="pe-7s-trash btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-info">Evènements</div>
                  </td>
                  <td class="text-center">#4</td>
                  <td class="text-center">
                    <div class="text-center">Innovations managériales</div>
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
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-alternate">Catégorie</div>
                  </td>
                  <td class="text-center">#8</td>
                  <td class="text-center">
                    <div class="text-center">Collaborateur</div>
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
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-success">Annonces</div>
                  </td>
                  <td class="text-center">#6</td>
                  <td class="text-center">
                    <div class="text-center">Je recherche</div>
                  </td>

                  <td class="text-center">
                    <b-button
                      :to="{ name: 'listEdit' }"
                      class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-danger"
                      ><i class="pe-7s-trash btn-icon-wrapper"> </i
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
    list: [
      {
        categorie: "activité",
        id: 1,
        valeur: "agroalimentaire",
      },
      {
        categorie: "metier",
        id: 2,
        valeur: "développeur web",
      },
      {
        categorie: "évènements",
        id: 2,
        valeur: "innovations managériales",
      },
      {
        categorie: "catégorie",
        id: 2,
        valeur: "collaborateur",
      },
      {
        categorie: "annonces",
        id: 2,
        valeur: "je cherche",
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
  },
};
</script>
