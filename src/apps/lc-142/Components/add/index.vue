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
                                        <!-- Mettre chaque form/wizard dans un autre form pour -->
                                        <!-- mettre les boutons de navigation dans le form global -->
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
                                                    <Wizard1 :getData="getData1" @roomInfo="pushRoomInfo"/>
                                                    <Wizard2 :getData="getData2" @destInfo="pushDestInfo"/>
                                                    <Wizard3 :getData="getData3" @servInfo="pushServInfo"/>
                                                    <Wizard4 :getData="getData4" @photoInfo="pushPhotoInfo"/>
                                                    <Wizard5 :getData="getData5" @priceInfo="pushPriceInfo"/>
                                                    <Wizard6 :getData="getData6" @meetingInfo="pushMeetingInfo"/>
                                                </b-tabs>
                                            </div>
                                            <!-- Control buttons -->
                                            <div class="text-center">
                                                <b-button-group>
                                                    <b-button @click="tabIndex--" class="m-2" variant="primary">Précédent</b-button>
                                                    <b-button @click="nextWizard()" class="m-2" variant="primary">Suivant</b-button>
                                                    <b-button @click="saveRoom" v-show="tabIndex == 5" class="m-2" type="submit" variant="success">Sauvegarder</b-button>
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

import Wizard1 from './Sub-components/addWizard1.vue';
import Wizard2 from './Sub-components/addWizard2.vue';
import Wizard3 from './Sub-components/addWizard3.vue';
import Wizard4 from './Sub-components/addWizard4.vue';
import Wizard5 from './Sub-components/addWizard5.vue';
import Wizard6 from './Sub-components/addWizard6.vue';

import { Rooms } from '@/mixins/room';

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
    mixins: [
        Rooms
    ],
    data: () => ({
        heading: "Ajouter une salle dans l'espace de coworking",
        icon: "pe-7s-note2 icon-gradient bg-tempting-azure",
        tabIndex: 1,
        getData1: 0,
        getData2: 0,
        getData3: 0,
        getData4: 0,
        getData5: 0,
        getData6: 0,
        datas: {}
    }),
    mounted () {
        this.saveRoom();
    },
    methods: {
        async saveRoom () {
            if ( await this.$sweetConfirmation ({
                    title: "Confirmer la création d'une nouvelle salle !",
                    confirmText: "Confirmer ?",
                    cancelText: "Annuler"})
                ){
                    // TODO point API saveRoom ()
                    var datas = {
                        name: this.datas.name,
                        type: this.datas.type,
                        surface: this.datas.surface,
                        floor: this.datas.floor,
                        maxCapacity:  this.datas.maxCapacity,
                        minRentalDuration: this.datas.minRentalDuration,
                        typeBooking: this.datas.typeBooking,
                        bookable: this.datas.bookable,
                        openingHours: this.datas.openingHours,
                        description: this.datas.description,
                        services: this.datas.services,
                        roomListPhoto: this.datas.roomListPhoto,
                        roomListPlan: this.datas.roomListPlan,
                        prices: this.datas.prices,
                        notes: this.datas.notes,
                        meetings: this.datas.meetings
                    };

                    Rooms.create(datas)
                        .then(response => {
                            this.room._id = response.datas._id;
                            console.log(response.datas);
                            this.submitted = true;
                        })
                        .catch(err => {
                            console.log(err);
                        });
                    this.$sweetNotif({ title: "La salle a été créée avec succès" });
                }
        },
        nextWizard () {
            switch (this.tabIndex) {
                case 0: this.getData1 = 1;
                break;
                case 1: this.getData2 = 1;
                break;
                case 2: this.getData3 = 1;
                break;
                case 3: this.getData4 = 1;
                break;
                case 4: this.getData5 = 1;
                break;
                case 5: this.getData6 = 1;
                break;
            }
            this.tabIndex++;
        },
        pushRoomInfo(infos) {
           this.datas.room = infos;
        },
        pushDestInfo(infos) {
            this.datas.description = infos;
        },
        pushServInfo(infos) {
            this.datas.services = infos;
        },
        pushPhotoInfo(infos) {
            this.datas.room = infos;
        },
        pushPriceInfo(infos) {
            this.datas.prices = infos;
        },
        pushMeetingInfo(infos) {
            this.datas.meetings = infos;
        }
    }
};
</script>