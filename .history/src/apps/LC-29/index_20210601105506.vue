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
                <tr v-for="list in lists" :key="list.id">
                  <td class="text-center">
                    <b-btn
                      id="exButton4"
                      variant="primary"
                      :class="getStatus(list.category)"
                    >
                      {{ list.category }}
                      <b-tooltip
                        target="exButton4"
                        placement="left"
                        triggers="hover focus"
                        title="Liste des Activités"
                      ></b-tooltip>
                    </b-btn>
                  </td>
                  <td class="text-center">{{ list.id }}</td>
                  <td class="text-center">
                    <div class="text-center">45</div>
                  </td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      @click="edit(list.id)"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-danger">Métier</div>
                  </td>
                  <td class="text-center">#20</td>
                  <td class="text-center">
                    <div class="text-center">56</div>
                  </td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-info">Evènements</div>
                  </td>
                  <td class="text-center">#4</td>
                  <td class="text-center">
                    <div class="text-center">34</div>
                  </td>

                  <td class="text-center">
                    <b-button
                      class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-alternate">Catégorie</div>
                  </td>
                  <td class="text-center">#8</td>
                  <td class="text-center">
                    <div class="text-center">76</div>
                  </td>

                  <td class="text-center">
                    <b-button
                      class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-success">Annonces</div>
                  </td>
                  <td class="text-center">#6</td>
                  <td class="text-center">
                    <div class="text-center">26</div>
                  </td>

                  <td class="text-center">
                    <b-button
                      class="mb-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      @click="edit(list.id)"
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
    placements: [
      "Activités",
      "top",
      "topleft",
      "bottomright",
      "bottom",
      "bottomleft",
      "righttop",
      "right",
      "lefttop",
      "rightbottom",
      "left",
      "leftbottom",
    ],
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
        id: 2,
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
};
</script>
