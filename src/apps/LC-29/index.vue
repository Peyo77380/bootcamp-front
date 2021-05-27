<template>
  <div>
<<<<<<< HEAD
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
=======
    <dov class="row mb-3"
      ><h2 class="col-8 offset-1">Membres</h2>
      <b-button
        variant="btn btn-warning btn-lg col-2"
        :to="{ name: 'AddMembers' }"
      >
        ajouter un membre
      </b-button></dov
    >

    <div>
      <div class="col-md-12">
        <div class="main-card mb-3 card">
          <div class="card-header">Liste des membres de la CoLloc</div>
>>>>>>> first commit

          <div class="table-responsive">
            <table
              class="align-middle mb-0 table table-borderless table-striped table-hover"
            >
              <thead>
                <tr>
<<<<<<< HEAD
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
                      @click="edit(item.id)"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button>
=======
                  <th class="text-center">Clé</th>
                  <th class="text-center">valeur</th>

                  <th class="text-center">
                    <i class="pe-7s-trash btn-icon-wrapper"> </i>
                  </th>
                  <th class="text-center">
                    <i class="pe-7s-pen btn-icon-wrapper"> </i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-warning">Entreprise</div>
                  </td>

                  <td class="text-center">Berlin</td>
                  <td class="text-center" style="width: 150px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-trash btn-icon-wrapper"> </i>
                    </button>
                  </td>
                  <td class="text-center" style="width: 150px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-pen btn-icon-wrapper"> </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-success">auto entrepreneur</div>
                  </td>
                  <td class="text-center">Berlin</td>
                  <td class="text-center" style="width: 50px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-trash btn-icon-wrapper"> </i>
                    </button>
                  </td>
                  <td class="text-center" style="width: 50px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-pen btn-icon-wrapper"> </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-success">auto entrepreneur</div>
                  </td>
                  <td class="text-center">London</td>
                  <td class="text-center" style="width: 150px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-trash btn-icon-wrapper"> </i>
                    </button>
                  </td>
                  <td class="text-center" style="width: 150px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-pen btn-icon-wrapper"> </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-info">Particulier</div>
                  </td>
                  <td class="text-center">Amsterdam</td>
                  <td class="text-center" style="width: 150px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-trash btn-icon-wrapper"> </i>
                    </button>
                  </td>
                  <td class="text-center" style="width: 150px">
                    <button
                      class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                    >
                      <i class="pe-7s-pen btn-icon-wrapper"> </i>
                    </button>
>>>>>>> first commit
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
<<<<<<< HEAD
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
        quantity: 23,
      },
      {
        name: "annonces",
        id: 4,
        quantity: 12,
      },
      {
        name: "catégories",
        id: 5,
        quantity: 56,
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
  openDialog: false,

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
=======
export default {
  data() {
    return {
      items: [
        {
          id: "1",
          name: "John Doe",
          ville: "Madrid",
          activity: "24/04/1996",
          status: "entreprise",
        },
        {
          id: "2",
          name: "Ruben Tillman",
          ville: "Berlin",
          status: "auto-entrepreneur",
        },
        {
          id: "3",
          name: "Elliot Huber",
          ville: "London",
          status: "auto-entrepreneur",
        },
        {
          id: "4",
          name: "Virginie Wagstaff",
          ville: "Amsterdam",
          status: "particulier",
        },
      ],
    };
>>>>>>> first commit
  },
};
</script>
