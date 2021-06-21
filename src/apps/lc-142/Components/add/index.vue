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
                    <!-- Liste des salles existantes -->
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row" >
                                    <div class="col-md-12 col-lg-12 col-xl-12">
                                        <b-card class="mb-5 nav-justified" no-body>
                                            <div class="dropdown-menu-header-inner bg-deep-blue">
                                                <div class="menu-header-content text-dark mb-1 mt-1">
                                                    <h5 class="menu-header-title">Ajout d'une nouvelle salle</h5>
                                                    <h6 class="menu-header-subtitle">Veuillez remplir les champs ci après :</h6>
                                                </div>
                                            </div>
                                            <div class="nav-justified">
                                                <!-- Contenu -->
                                                <b-tabs v-model="tabIndex" class="card-header-tab-animation" card>
                                                    <Wizard1/>
                                                    <Wizard2/>
                                                    <Wizard3/>
                                                    <Wizard4/>
                                                    <Wizard5/>
                                                    <Wizard6/>
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
    name: 'RoomAdd',
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
        heading: "Ajouter une salle dans l'espace de coworking",
        icon: "pe-7s-note2 icon-gradient bg-tempting-azure",

        slickOptions2: {
            slidesToShow: 1,
            dots: true
        },
        show: true,
        tabIndex: 1
    })
};
</script>