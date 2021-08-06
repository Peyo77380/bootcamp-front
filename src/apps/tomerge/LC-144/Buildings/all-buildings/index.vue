<template>
  <div>
    <page-title
      :heading="heading"
      :subheading="subheading"
      :icon="icon"
    ></page-title>


    <div class="content">
      <b-row v-if="this.buildings.length == 0">
          Pas de building
      </b-row>
      <b-row v-else>
          <building-card 
            v-for="building of buildings"
            :key="building._id"
            :building="building"
            v-on:onDeletedBuilding="deleteBuilding"
          />
      </b-row>
    </div>
  </div>
</template>

<script>
import PageTitle from "./components/PageTitle";
import { Buildings } from "@/mixins/building"
import BuildingCard from "./components/buildingCard"


export default {
    components: {
        PageTitle,
        BuildingCard
    },
    mixins: [ Buildings ],
    data: () => ({
        heading: "LA COLLOC - UNE FABRIQUE DE TRANSITION(S)",
        subheading: "listing des espaces de coworking",
        icon: "pe-7s-paper-plane icon-gradient bg-happy-itmeo",
        buildings: []
    }),
    mounted () {
        this.getBuildings();
    },
    methods: {
        async getBuildings () {
            const res = await this.getAllBuildings();
            if (res.error) {
                return this.$sweetError('Erreur de chargement des bâtiments');
            }
            this.buildings = res.datas;
        },
        async deleteBuilding(id) {
            return this.buildings = this.buildings.filter(b => b._id!=id);
        }
    }
};
</script>
