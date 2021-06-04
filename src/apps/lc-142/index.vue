<template>
    <div>
        <page-title
            :heading="heading"
            :icon="icon"
        ></page-title>
        <!-- Mettre cette partie dans un components AfficherListeSalles -->
        <div class="mb-3 card">
            <div class="mt-2 card-header-tab card-header">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <v-flex xs4 sm8>
                        <v-overflow-btn
                        label="Choisir un bâtiment"
                        editable
                        
                        ></v-overflow-btn>
                    </v-flex>
                </div>
            </div>
            <div class="no-gutters row">
                <div class="col-sm-12">
                    <div class="card no-shadow rm-border bg-transparent widget-chart text-center">
                    <!-- Liste des salles existantes -->
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-4 col-lg-4 col-xl-4" :height="80" v-for="roomDetail in roomDetailsData" :key="roomDetail.id">
                                        <b-card class="mb-3 nav-justified" no-body>
                                            <b-tabs class="card-header-tab-animation" card>
                                                <b-tab title="Info salle" active>
                                                    <div>
                                                        <p>{{ roomDetail.level }}</p>
                                                        <p>{{ roomDetail.name }}</p>
                                                        <!-- <v-img :src= "roomDetail.plan" ></v-img> -->
                                                    </div>
                                                        
                                                    <div class="scroll-area-sm">
                                                        <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                        </VuePerfectScrollbar>
                                                    </div>
                                                </b-tab>
                                                <b-tab title="Plus...">
                                                    <div align="center">
                                                        <button class="mb-2 btn-wide btn-shadow btn btn-info btn-sm">
                                                            Voir details salle
                                                        </button>
                                                        <br>
                                                        <button class="mb-2 btn-wide btn-shadow btn btn-warning btn-sm">
                                                            Editer salle
                                                        </button>
                                                        <br>
                                                        <button class="mb-2 btn-wide btn-shadow btn btn-danger btn-sm">
                                                            Supprimer salle
                                                        </button>
                                                    </div>
                                                    <div class="scroll-area-xm">
                                                        <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                        </VuePerfectScrollbar>
                                                    </div>
                                                </b-tab>
                                            </b-tabs>
                                        </b-card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from "@/Layout/Components/PageTitle.vue";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faTrashAlt,
    faCheck,
    faCalendarAlt,
    faAngleDown,
    faAngleUp,
    faTh
} from "@fortawesome/free-solid-svg-icons";

import {roomDetailsData} from "@/apps/lc-142/Components/data-roomDetails";
import {buildingDropdownsData} from "@/apps/lc-142/Components/data-buildingDropdowns";


library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faCalendarAlt);

export default {
    components: {
        PageTitle,
        VuePerfectScrollbar,
    },
    data: () => ({
        roomDetailsData: roomDetailsData,
        buildingDropdownsData: buildingDropdownsData,
        heading: "Liste des salles de l'espace de coworking",
        icon: "pe-7s-note2 icon-gradient bg-tempting-azure",

        slickOptions2: {
            slidesToShow: 1,
            dots: true
        }
    }),

    methods: {}
};
</script>