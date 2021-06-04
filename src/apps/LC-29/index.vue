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
      <div>
        <v-card flat>
          <v-card-text>
            <div class="col-10 offset-1 mt-5">
              <div class="main-card mb-3 card">
                <div class="card-header">
                  Paramètres Listes
                  <div class="btn-actions-pane-right actions-icon-btn">
                    <b-dropdown
                      toggle-class="btn-icon btn-icon-only"
                      variant="link"
                      right
                    >
                      <span slot="button-content"
                        ><i
                          class="header-icon lnr-earth mr-3 text-muted opacity-6"
                        ></i
                      ></span>
                      <div>
                        <button
                          @click="changeFr"
                          type="button"
                          tabindex="0"
                          class="dropdown-item"
                        >
                          <country-flag
                            country="FR"
                            size="small"
                            class="mr-1"
                          /><span>Français</span>
                        </button>
                        <button
                          @click="changeUs"
                          type="button"
                          tabindex="0"
                          class="dropdown-item"
                        >
                          <country-flag
                            country="US"
                            size="small"
                            class="mr-1"
                          /><span>Anglais</span>
                        </button>
                        <button
                          type="button"
                          tabindex="0"
                          class="dropdown-item"
                        >
                          <country-flag
                            country="DE"
                            size="small"
                            class="mr-1"
                          /><span>Allemand</span>
                        </button>
                      </div>
                    </b-dropdown>
                  </div>
                </div>
                <v-tabs>
                  <v-tab-item v-for="i in items" :key="i">
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
                            <td class="text-center">{{ item.key }}</td>
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </v-tab-item>
                </v-tabs>
              </div>
              <!-- div main card -->
            </div>
            <!-- div-col-10 -->
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle";
import EditList from "../LC-29/components/EditList";
import AddList from "../LC-29/components/AddList";

import CountryFlag from "vue-country-flag";

export default {
  name: "home",
  components: {
    PageTitle,
    // eslint-disable-next-line vue/no-unused-components
    EditList,
    // eslint-disable-next-line vue/no-unused-components
    AddList,
    CountryFlag,
  },

  data: () => ({
    item: ["FR", "En", "SP"],
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
        text: "Listes",
        disabled: false,
        href: "breadcrumbs_link_1#/LC-29",
      },
      {
        text: "Activités",
        disabled: true,
        href: "breadcrumbs_link_2#/LC-29/components/EditList",
      },
    ],
    list: [
      {
        name: "activités",
        key: 1,
        quantity: 34,
      },
      {
        name: "metiers",
        key: 2,
        quantity: 45,
      },
      {
        name: "évènements",
        key: 3,
        quantity: 12,
      },
      {
        name: "annonces",
        key: 4,
        quantity: 25,
      },
      {
        name: "catégories",
        key: 5,
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
