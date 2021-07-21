<template>
  <div>
    <page-title
      :heading="heading"
      :subheading="subheading"
      :icon="icon"
    ></page-title>


    <div class="content">
      <b-row>
        <b-card v-for="building of buildings" :key="building._id" class="mb-3 mx-3 col-4 nav-justified" no-body>
          <b-tabs card>
            <b-tab title="Détail" active>
              <div>
                <h4 class="text-center">
                  <i class="pe-7s-culture icon-gradient bg-happy-itmeo"></i>
                </h4>
                <h5 class="text-center">
                  {{ building.name }}
                </h5>
                <h6 class="text-center">
                  {{ building.location.city }}
                </h6>
              </div>
            </b-tab>
              <b-tab title="Action">
                <div>
                  <v-layout align-center>
                    <v-flex xs12 sm4 text-xs-center>
                      <div>
                        <v-btn
                          depressed
                          small
                          :to="{name: 'show-building', params: {id: building._id} }"
                        >
                          Afficher
                        </v-btn>
                      </div>
                      <div>
                        <v-btn
                          depressed
                          small
                          color="primary"
                          :to="{name: 'edit-building', params: {id: building._id} }"
                        >
                          Editer
                        </v-btn>
                      </div>
                      <div>
                        <v-btn
                          depressed
                          small
                          color="error"
                          @click="deleteBuildings(building._id)"
                        >
                          Archiver
                        </v-btn>
                      </div>
                    </v-flex>
                  </v-layout>
                </div>
              </b-tab>
          </b-tabs>
        </b-card>
      </b-row>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/Layout/Components/PageTitle.vue";
import { Buildings } from "@/mixins/building"

const TABS = [
    {
        title: "Espace 1",
        value: "building1"
    },
    {
        title: "Espace 2",
        value: "building2"
    }
];

export default {
    components: {
        PageTitle
    },
    mixins: [ Buildings ],
    data: () => ({
        heading: "LA COLLOC - UNE FABRIQUE DE TRANSITION(S)",
        subheading: "listing des espaces de coworking",
        icon: "pe-7s-paper-plane icon-gradient bg-happy-itmeo",

        tabs: TABS,
        currentTab: "building1",
        buildings: []
    }),
    mounted () {
        this.getBuildings();
    },
    methods: {
        handleClick(newTab) {
            this.currentTab = newTab;
        },
        async getBuildings () {
            const res = await this.getAllBuildings();
            if (res.error) {
                return console.log(res.error);
            }
            this.buildings = res.datas;
        },
        async deleteBuildings(id) {
            const res = await this.deleteBuilding(id);
            if (res.error) {
                return console.log(res.error);
            }
            return this.buildings = this.buildings.filter(b => b._id!=id);
        }
    }
};
</script>
