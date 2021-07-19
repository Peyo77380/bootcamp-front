<template>
  <div>
    <page-title
      :heading="heading"
      :subheading="subheading"
      :icon="icon"
    ></page-title>

    <div>
      <div>
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>chevron_right</v-icon>
          </template>
        </v-breadcrumbs>
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
                  <th class="text-center">Clé</th>
                  <th class="text-center">Valeur</th>
                  <th class="text-center">Modifier</th>
                  <th class="text-center">Détails</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-warning">
                      MEMBERSHIP_CREDIT_DAYS
                    </div>
                  </td>

                  <td class="text-center">10</td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-warning"
                      ><i class="pe-7s-look btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-success">
                      MEMBERHIP_PRICING_TEAM
                    </div>
                  </td>
                  <td class="text-center">200</td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-warning"
                      ><i class="pe-7s-look btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="badge badge-success">FREETIME</div>
                  </td>
                  <td class="text-center">20</td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-warning"
                      ><i class="pe-7s-look btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                </tr>

                <tr>
                  <td class="text-center">
                    <div class="badge badge-info">WELCOMECREDITS</div>
                  </td>
                  <td class="text-center">30</td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-info"
                      ><i class="pe-7s-pen btn-icon-wrapper"> </i
                    ></b-button>
                  </td>
                  <td class="text-center">
                    <b-button
                      class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                      variant="outline-warning"
                      ><i class="pe-7s-look btn-icon-wrapper"> </i
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

export default {
  components: {
    PageTitle,
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
  }),
  methods: {},
};
</script>
