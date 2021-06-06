<template>
    <div>
        <page-title
            :heading="heading"
            :icon="icon"
        ></page-title>
        
        <b-button :to="{ name: 'RoomList'}" class="mt-2 btn-wide btn-shadow btn btn-info btn-sm" align="right">Retour</b-button>        
        <div class="mb-3 card">
            <div class="no-gutters row">
                <div class="col-sm-12">
                    <div class="card no-shadow rm-border bg-transparent widget-chart text-center">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row" >
                                    <div class="col-md-12 col-lg-12 col-xl-12">
                                        <b-card class="mb-5 nav-justified" no-body>
                                            <div class="dropdown-menu-header-inner bg-deep-blue">
                                                <div class="menu-header-content text-dark">
                                                    <h5 class="menu-header-title">Détails de la salle</h5>
                                                    <h6 class="menu-header-subtitle">...</h6>
                                                </div>
                                            </div>
                                            <div class="nav-justified">
                                                <!-- Contenu -->
                                                <b-tabs class="card-header-tab-animation" card>
                                                    <!-- Onglet 1 du wizard-->
                                                    <b-tab title="Caractéristiques" class="p-2" active>
                                                        <div class="scroll-gradient">
                                                            <div class="scroll-area-sm">
                                                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                                    <div class="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                        <!-- Contenu 1er wizard-->
                                                                        <p>Wizard 1</p>
                                                                    </div>
                                                                </VuePerfectScrollbar>
                                                            </div>
                                                        </div>
                                                    </b-tab>
                                                    <!-- Onglet 2 du wizard-->
                                                    <b-tab title="Description" class="p-2">
                                                        <div class="scroll-gradient">
                                                            <div class="scroll-area-sm">
                                                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                                    <div class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                        <!-- Contenu 2e wizard-->
                                                                        <p>Wizard 2</p>
                                                                    </div>
                                                                </VuePerfectScrollbar>
                                                            </div>
                                                        </div>
                                                    </b-tab>
                                                    <!-- Onglet 3 du wizard-->
                                                    <b-tab title="Services" class="p-2">
                                                        <div class="scroll-gradient">
                                                            <div class="scroll-area-sm">
                                                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                                    <div class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                        <!-- Contenu 3e wizard-->
                                                                        <p>Wizard 3</p>
                                                                    </div>
                                                                </VuePerfectScrollbar>
                                                            </div>
                                                        </div>
                                                    </b-tab>
                                                    <!-- Onglet 4 du wizard-->
                                                    <b-tab title="Photos" class="p-2">
                                                        <div class="scroll-gradient">
                                                            <div class="scroll-area-sm">
                                                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                                    <div class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                        <!-- Contenu 3e wizard-->
                                                                        <p>Wizard 4</p>
                                                                    </div>
                                                                </VuePerfectScrollbar>
                                                            </div>
                                                        </div>
                                                    </b-tab>
                                                    <!-- Onglet 5 du wizard-->
                                                    <b-tab title="Tarifs et notes" class="p-2">
                                                        <div class="scroll-gradient">
                                                            <div class="scroll-area-sm">
                                                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                                    <div class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                        <!-- Contenu 3e wizard-->
                                                                        <p>Wizard 5</p>
                                                                    </div>
                                                                </VuePerfectScrollbar>
                                                            </div>
                                                        </div>
                                                    </b-tab>
                                                    <!-- Onglet 6 du wizard-->
                                                    <b-tab title="Plans" class="p-2">
                                                        <div class="scroll-gradient">
                                                            <div class="scroll-area-sm">
                                                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                                    <div class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                        <!-- Contenu 3e wizard-->
                                                                        <p>Wizard 6</p>
                                                                    </div>
                                                                </VuePerfectScrollbar>
                                                            </div>
                                                        </div>
                                                    </b-tab>
                                                </b-tabs>
                                            </div>
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


library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faCalendarAlt);

export default {
    name: 'RoomDetails',
    components: {
        PageTitle,
        VuePerfectScrollbar,
    },
    data: () => ({
        roomDetailsData: roomDetailsData,
        heading: "Détails d'une salle de l'espace de coworking",
        icon: "pe-7s-note2 icon-gradient bg-tempting-azure",

        slickOptions2: {
            slidesToShow: 1,
            dots: true
        }
    }),

    methods: {}
};
</script>