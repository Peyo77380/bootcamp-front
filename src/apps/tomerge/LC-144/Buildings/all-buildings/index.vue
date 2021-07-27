<template>
  <div>
    <page-title
      :heading="heading"
      :subheading="subheading"
      :icon="icon"
    ></page-title>


    <div class="content">
      <b-row>
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
import PageTitle from "@/Layout/Components/PageTitle.vue";
import { Buildings } from "@/mixins/building"
import BuildingCard from "./components/buildingCard.vue"

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
        PageTitle,
        BuildingCard
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
        async getBuildings () {
            const res = await this.getAllBuildings();
            if (res.error) {
                return console.log(res.error);
            }
            this.buildings = res.datas;
        },
        async deleteBuilding(id) {
            return this.buildings = this.buildings.filter(b => b._id!=id);
        }
    }
};
</script>
