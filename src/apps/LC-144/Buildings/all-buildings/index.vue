<template>
    <div>
        <page-title
            :heading="heading"
            :subheading="subheading"
            :icon="icon"
        ></page-title>

        <div class="content">
            <div class="mb-3 card">
                <div class="row">
                    <div md="4">
                        <b-card class="mb-3 nav-justified" no-body>
                            <div>
                                <b-tab title="Bâtiment" active>
                                    <div>
                                        <h4 class="text-center">
                                            <i
                                                class="pe-7s-culture icon-gradient bg-happy-itmeo"
                                            ></i>
                                        </h4>
                                        <h5
                                            class="text-center"
                                            v-for="building in buildings"
                                            :key="building.name"
                                        >
                                            {{ building.name }}
                                        </h5>
                                        <br />
                                        <h6
                                            class="text-center"
                                            v-for="building in buildings"
                                        >
                                            {{ building.pictures }}
                                            {{ building.name }}
                                            {{ building.location }}
                                            {{ building.state }}
                                        </h6>
                                    </div>
                                </b-tab>
                                <b-tab title="Détail">
                                    <div>
                                        <v-layout align-center>
                                            <v-flex xs12 sm4 text-xs-center>
                                                <div>
                                                    <v-btn depressed small
                                                        >Afficher</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="primary"
                                                        @click="edit - building"
                                                        >Editer</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="error"
                                                        >Archiver</v-btn
                                                    >
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </b-tab>
                            </div>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from "@/Layout/Components/PageTitle.vue";
import { Buildings } from "@/mixins/building";

export default {
    components: {
<<<<<<< HEAD
        PageTitle
=======
        PageTitle,
        //Tabs
>>>>>>> a6d2d34d9d9874b0da5ec2f8efc8563c30d2caa1
    },
    mixins: [Buildings],
    data: () => ({
        heading: "LA COLLOC - UNE FABRIQUE DE TRANSITION(S)",
        subheading: "listing des espaces de coworking",
        icon: "pe-7s-paper-plane icon-gradient bg-happy-itmeo",
        buildings: []
    }),
    mounted() {
        this.getBuildings();
    },
    methods: {
        handleClick(newTab) {
            this.currentTab = newTab;
        },
        async getBuildings() {
            const res = await this.getAllBuildings();
            if (res.error) {
                return console.log(res.error);
            }
            this.buildings = res.datas;
            console.log(this.buildings);
        }
    }
};
</script>
