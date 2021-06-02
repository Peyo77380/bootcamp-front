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

      <modal1 v-show="dialog" :dialog="dialog" @close="closemodal"></modal1>

      <div class="col-10 offset-1 mt-5">
        <div class="main-card mb-3 card">
          <div class="card-header">Paramètres Membres</div>

          <div class="table-responsive">
            <table
              class="align-middle mb-0 table table-borderless table-striped table-hover"
            >
              <thead>
                <tr>
                  <th class="text-center">Listes</th>
                  <th class="text-center">Clés</th>
                  <th class="text-center">Nombre</th>
                  <th class="text-center">Modifier</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="list_category in list_categories"
                  :key="list_category.id"
                >
                  <td class="text-center">
                    <b-btn
                      id="exButton4"
                      variant="outiline-info"
                      :class="getStatus(list_category.category)"
                    >
                      {{ list_category.category }}
                      <b-tooltip
                        target="exButton4"
                        variant="outline-primary"
                        placement="left"
                        triggers="hover focus"
                        title="Liste des Activités"
                      ></b-tooltip>
                    </b-btn>
                  </td>
                  <td class="text-center">{{ list_category.id }}</td>
                  <td class="text-center">
                    <div class="text-center">23</div>
                  </td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      @click="edit(list_category.id)"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
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
import Modal1 from "../LC-29/components/modal1";

export default {
  name: "home",
  components: {
    PageTitle,
    Modal1,
  },

  data: () => ({
    heading: "LaColloc - Paramètres",
    subheading: "Paramètrage de LaColloc",
    icon: "pe-7s-news-paper icon-gradient bg-night-fade",
    placements: ["Activités"],
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
    list_categories: [
      {
        category: "activités",
        id: 1,
      },
      {
        category: "metiers",
        id: 2,
      },
      {
        category: "évènements",
        id: 3,
      },
      {
        category: "annonces",
        id: 4,
      },
      {
        category: "catégories",
        id: 5,
      },
    ],
    dialog: false,
  }),

  list_values: [
    {
      category_id: 1,
      id: 1,
      value: "agroalimentaire",
      modify: "24/05/2021",
      createdAt: "19/05/2019",
    },
    {
      category_id: 2,
      id: 2,
      value: "développeur web",
      modify: "essai1",
      createdAt: "essai1",
    },
    {
      category_id: 3,
      id: 3,
      value: "innovations managériales",
      modify: "13/09/2020",
      createdAt: "03/05/2018",
    },
    {
      category_id: 4,
      id: 8,
      value: "je vends",
      modify: "14/08/2017",
      createdAt: "09/08/2016",
    },
    {
      category_id: 1,
      id: 10,
      value: "banque | assurances",
      modify: "12/06/2021",
      createdAt: "11/04/2019",
    },
    {
      category_id: 5,
      id: 12,
      value: "stagiaire",
      modify: "24/05/2021",
      createdAt: "19/05/2019",
    },
    {
      category_id: 2,
      id: 20,
      value: "traducteur",
      modify: "04/05/2021",
      createdAt: "09/05/2019",
    },
    {
      category_id: 4,
      id: 5,
      value: "je cherche",
      modify: "test3",
      createdAt: "3test",
    },
    {
      category_id: 1,
      id: 11,
      value: "BTP | matériaux de construction",
    },
    {
      category_id: 5,
      id: 13,
      value: "coworker",
    },
  ],
  dialog: false,

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
        case "activités":
          return {
            "badge badge-warning": true,
          };
        case "metiers":
          return {
            "badge badge-info": true,
          };
        case "évènements":
          return {
            "badge badge-success": true,
          };
        case "catégories":
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
