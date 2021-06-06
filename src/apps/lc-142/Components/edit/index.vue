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
                                            <b-tabs class="card-header-tab-animation" card>
                                                <div class="nav-justified">
                                                    <!-- Contenu -->
                                                    <b-tabs class="card-header-tab-animation" card>
                                                        <!-- Onglet 1 du wizard-->
                                                        <b-tab title="Messages" class="p-3" active>
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
                                                        <b-tab title="Events" class="p-3">
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
                                                        <b-tab title="3e wizard" class="p-3">
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
                                                    </b-tabs>
                                                </div>
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


library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faCalendarAlt);

export default {
    name: 'RoomEdit',
    components: {
        PageTitle,
        VuePerfectScrollbar,
    },
    data: () => ({
        roomDetailsData: roomDetailsData,
        heading: "Editer une salle de l'espace de coworking",
        icon: "pe-7s-note2 icon-gradient bg-tempting-azure",

        slickOptions2: {
            slidesToShow: 1,
            dots: true
        }
    }),

    methods: {}
};
</script>