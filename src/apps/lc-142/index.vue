<template>
    <div>
        <page-title
            :heading="heading"
            :icon="icon"
        ></page-title>
        <b-button :to="{ name: 'RoomAdd'}" class="mt-2 btn-wide btn-shadow btn btn-success btn-sm" align="right">Ajouter salle</b-button>
        <div class="mb-3 card">
            <!-- Bouton select -->
            <div class="mt-2 card-header-tab card-header">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <v-flex xs4 sm8>
                        <v-overflow-btn
                        label="Choisir un bâtiment"
                        :items="buildingsData"
                        item-value="text"
                        editable
                        ></v-overflow-btn>
                    </v-flex>
                </div>
            </div>
            <!-- Container -->
            <div class="no-gutters row">
                <div class="col-sm-12">
                    <div class="card no-shadow rm-border bg-transparent widget-chart text-center">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row" >
                                    <div class="col-md-4 col-lg-4 col-xl-4" v-for="roomDetail in roomDetailsData" :key="roomDetail.id">
                                        <b-card class="mb-5 nav-justified" no-body>
                                            <b-tabs class="card-header-tab-animation" card>
                                                <b-tab title="Info salle" active>
                                                    <h4>{{ roomDetail.floor }} :</h4>
                                                    <h4>{{ roomDetail.name }}</h4>
                                                    <div>
                                                        <v-img :src="require('@/assets/images/salles/' + roomDetail.roomListPhoto + '.jpeg')"></v-img>
                                                    </div>
                                                        
                                                    <div class="scroll-area-xm">
                                                        <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                        </VuePerfectScrollbar>
                                                    </div>
                                                </b-tab>
                                                <b-tab title="Plus...">
                                                    <div align="center">
                                                            <b-button :to="{ name: 'RoomDetails', params: { id: roomDetail.id } }" class="mb-2 btn-wide btn-shadow btn btn-info btn-sm">
                                                                Voir détails salle
                                                            </b-button>
                                                            <br>
                                                            <b-button :to="{ name: 'RoomEdit', params: { id: roomDetail.id } }" class="mb-2 btn-wide btn-shadow btn btn-primary btn-sm">
                                                                Editer salle
                                                            </b-button>
                                                            <br>
                                                            <b-button @click="remove(roomDetail.id)" class="mb-2 btn-wide btn-shadow btn btn-danger btn-sm" >
                                                                Supprimer salle
                                                            </b-button>
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
import {buildingsData} from "@/apps/lc-142/Components/data-buildings";


library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faCalendarAlt);

export default {
    name: 'RoomList',
    components: {
        PageTitle,
        VuePerfectScrollbar,
    },
    data: () => ({
        roomDetailsData: roomDetailsData,
        buildingsData: buildingsData,
        heading: "Liste des salles de l'espace de coworking",
        icon: "pe-7s-note2 icon-gradient bg-tempting-azure",

        slickOptions2: {
            slidesToShow: 1,
            dots: true
        }
    }),
    computed: {},

    methods: {
        remove (id) {
      // l'appel vers API de Laravel devra etre fait ici
      this.roomDetailsData = this.roomDetailsData.filter(roomDetail => roomDetail.id !== id)
      // this.$sweetNotif('Modifications enregistrées !')
        },
    }
};
</script>