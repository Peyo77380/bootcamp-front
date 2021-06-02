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
                <tr v-for="item in list" :key="item.id">
                  <td class="text-center">
                    <b-btn
                      id="exButton4"
                      variant="outiline-info"
                      :class="getStatus(item.name)"
                    >
                      {{ item.name }}
                      <b-tooltip
                        target="exButton4"
                        variant="outline-primary"
                        placement="left"
                        triggers="hover focus"
                        title="Liste des Activités"
                      ></b-tooltip>
                    </b-btn>
                  </td>
                  <td class="text-center">{{ item.id }}</td>
                  <td class="text-center">
                    <div class="text-center">{{ item.quantity }}</div>
                  </td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      :to="{ name: 'EditList' }"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button>
                    <!-- <b-button
                      class="mb-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      @click="edit(item.id)"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button> -->
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
import EditList from "../LC-29/components/EditList";

export default {
  name: "home",
  components: {
    PageTitle,
    EditList,
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
    list: [
      {
        name: "activités",
        id: 1,
        quantity: 34,
      },
      {
        name: "metiers",
        id: 2,
        quantity: 45,
      },
      {
        name: "évènements",
        id: 3,
        quantity: 12,
      },
      {
        name: "annonces",
        id: 4,
        quantity: 25,
      },
      {
        name: "catégories",
        id: 5,
        quantity: 36,
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
    getStatus(list) {
      switch (list) {
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
