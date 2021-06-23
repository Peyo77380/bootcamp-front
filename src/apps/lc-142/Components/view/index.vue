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
                                                <b-tabs v-model="tabIndex" class="card-header-tab-animation" card>
                                                    <Wizard1 v-bind:roomDetails="roomDetails"/>
                                                    <Wizard2 v-bind:roomDetails="roomDetails"/>
                                                    <Wizard3 v-bind:roomDetails="roomDetails"/>
                                                    <Wizard4 v-bind:roomDetails="roomDetails"/>
                                                    <Wizard5 v-bind:roomDetails="roomDetails"/>
                                                    <Wizard6 v-bind:roomDetails="roomDetails"/>
                                                </b-tabs>
                                            </div>
                                            <!-- Control buttons -->
                                            <div class="text-center">
                                                <b-button-group>
                                                    <b-button @click="tabIndex--" class="m-2 " variant="primary">Previous</b-button>
                                                    <b-button @click="tabIndex++" class="m-2 " variant="primary">Next</b-button>
                                                </b-button-group>
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

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faTrashAlt,
    faCheck,
    faCalendarAlt,
    faAngleDown,
    faAngleUp,
    faTh
} from "@fortawesome/free-solid-svg-icons";

import Wizard1 from './Sub-components/wizard1.vue';
import Wizard2 from './Sub-components/wizard2.vue';
import Wizard3 from './Sub-components/wizard3.vue';
import Wizard4 from './Sub-components/wizard4.vue';
import Wizard5 from './Sub-components/wizard5.vue';
import Wizard6 from './Sub-components/wizard6.vue';

library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faCalendarAlt);

export default {
    name: 'RoomDetails',
    components: {
        PageTitle,
        Wizard1,
        Wizard2,
        Wizard3,
        Wizard4,
        Wizard5,
        Wizard6
    },
    data: () => ({
        heading: "Détails d'une salle de l'espace de coworking",
        icon: "pe-7s-note2 icon-gradient bg-tempting-azure",
        tabIndex: 1
    }),

};
</script>