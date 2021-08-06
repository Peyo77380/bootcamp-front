<template>
    <div>
        <page-title :heading="heading" :icon="icon"></page-title>

        <div class="mb-3 card">
            <!-- Bouton select -->
            <div class="mt-2 card-header-tab card-header">
                <div
                    class="card-header-title font-size-lg text-capitalize font-weight-normal"
                >
                    <v-flex xs12 sm12>
                        <v-overflow-btn
                            label="Choisir un bâtiment"
                            :items="buildingsData"
                            item-value="_id"
                            item-text="name"
                            v-model="buildingSelected"
                            editable
                            @change="buildingFilter()"
                        ></v-overflow-btn>
                    </v-flex>
                </div>
            </div>
            <!-- Container -->
            <div class="no-gutters row">
                <div class="col-sm-12">
                    <div
                        class="card no-shadow rm-border bg-transparent widget-chart text-center"
                    >
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div
                                        class="col-md-4 col-lg-4 col-xl-4"
                                        v-for="roomDetail in roomDetailsData"
                                        :key="roomDetail._id"
                                    >
                                        <b-card
                                            class="mb-5 nav-justified"
                                            no-body
                                        >
                                            <b-tabs
                                                class="card-header-tab-animation"
                                                card
                                            >
                                                <b-tab
                                                    title="Info salle"
                                                    active
                                                >
                                                    <h4>
                                                        Etage
                                                        {{ roomDetail.floorId }}
                                                        : {{ roomDetail.type }}
                                                    </h4>
                                                    <h4>
                                                        {{ roomDetail.name }}
                                                    </h4>
                                                    <div>
                                                        <img
                                                            :src="
                                                                `${mediaHost}image/1/1/${roomDetail._id}`
                                                            "
                                                        />
                                                    </div>

                                                    <div class="scroll-area-xm">
                                                        <VuePerfectScrollbar
                                                            class="scrollbar-container"
                                                            v-once
                                                        >
                                                        </VuePerfectScrollbar>
                                                    </div>
                                                </b-tab>
                                                <b-tab title="Plus...">
                                                    <div align="center">
                                                        <b-button
                                                            :to="{
                                                                name:
                                                                    'RoomView',
                                                                params: {
                                                                    id:
                                                                        roomDetail._id
                                                                }
                                                            }"
                                                            class="mb-2 col-10 btn-wide btn-shadow btn btn-sm"
                                                            variant="primary"
                                                        >
                                                            Voir détails :
                                                            {{
                                                                roomDetail.name
                                                            }}
                                                        </b-button>
                                                        <br />
                                                        <b-button
                                                            :to="{
                                                                name:
                                                                    'RoomEdit',
                                                                params: {
                                                                    id:
                                                                        roomDetail._id
                                                                }
                                                            }"
                                                            class="mb-2 col-10 btn-wide btn-shadow btn btn-sm"
                                                            variant="info"
                                                        >
                                                            Editer :
                                                            {{
                                                                roomDetail.name
                                                            }}
                                                        </b-button>
                                                        <br />
                                                        <b-button
                                                            @click="
                                                                remove(
                                                                    roomDetail._id
                                                                )
                                                            "
                                                            class="mb-2 col-10 btn-wide btn-shadow btn btn-danger btn-sm"
                                                        >
                                                            Supprimer :
                                                            {{
                                                                roomDetail.name
                                                            }}
                                                        </b-button>
                                                    </div>
                                                    <div class="scroll-area-xm">
                                                        <VuePerfectScrollbar
                                                            class="scrollbar-container"
                                                            v-once
                                                        >
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
import PageTitle from "./Components/PageTitle.vue";
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

import { Rooms } from "@/mixins/room";
import { Buildings } from "@/mixins/building";

library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faCalendarAlt);

export default {
    name: "RoomList",
    components: {
        PageTitle,
        VuePerfectScrollbar
    },
    mixins: [Rooms, Buildings],
    data: () => ({
        heading: "Liste des salles de l'espace de coworking",
        icon: "pe-7s-note2 icon-gradient bg-tempting-azure",
        roomDetailsData: [],
        buildingsData: [],
        buildingSelected: null,
        defaultRooms: []
    }),
    mounted() {
        this.loadAllRooms();
        this.loadBuildings();
    },
    computed: {
        mediaHost() {
            return this.getMediaHost();
        }
    },
    methods: {
        async loadBuildings() {
            try {
                const res = await this.getAllBuildings();
                this.buildingsData = res.datas;
            } catch (error) {
                console.log(error);
            }
        },
        async loadAllRooms() {
            try {
                const res = await this.getAllRooms();
                this.roomDetailsData = res.datas;
                this.defaultRooms = res.datas;
            } catch (error) {
                console.log(error);
            }
        },
        async buildingFilter() {
            this.roomDetailsData = this.defaultRooms.filter(
                item => item.buildingId == this.buildingSelected
            );
        },
        async remove(id) {
            if (
                await this.$sweetConfirmation({
                    title: "Vous allez supprimer et archiver une salle !",
                    confirmText: "Confirmer ?",
                    cancelText: "Annuler"
                })
            ) {
                try {
                    const res = await this.deleteRoom(id);
                    if (res.error) {
                        this.$sweetError("Il y a eu un problème.");
                        return;
                    }
                    this.roomDetailsData = this.roomDetailsData.filter(
                        roomDetail => roomDetail._id !== id
                    );
                    this.defaultRooms = this.defaultRooms.filter(
                        roomDetail => roomDetail._id !== id
                    );
                    this.$sweetNotif();
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
};
</script>
