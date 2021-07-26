<template>
<!-- Onglet 1 du wizard-->
<b-tab title="Caractéristiques" class="p-2" active>
    <div class="scroll-gradient">
        <div class="scroll-area-xlg">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
                <div class="m-3 mb-3">
                    <!-- Contenu 1er wizard-->
                    <b-form>
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-5">
                            <b-form-group label="Nom de la salle :" class="text-left">
                                <b-form-input
                                v-model="room.name"
                                disabled
                                ></b-form-input>
                            </b-form-group>
                            </div>
                            
                            <div class="col-3">
                                <b-form-group label="Type :" class="text-left" >
                                <b-form-select
                                v-model="room.type"
                                :options="types"
                                disabled
                                ></b-form-select>
                                </b-form-group>
                            </div>

                            <div class="col-2">
                            <b-form-group label="Surface salle :" class="text-left">
                                <b-form-input
                                v-model="room.surface"
                                disabled
                                ></b-form-input>
                            </b-form-group>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-3">
                            <b-form-group label="Niveau où se situe la salle :" class="text-left" >
                                <b-form-select
                                v-model="room.floor"
                                :options="floors"
                                disabled
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group label="Capacité maximale d'accueil :" class="text-left">
                                <b-form-input
                                v-model="room.maxCapacity"
                                disabled
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group label="Durée minimale de location :" class="text-left">
                                <b-form-select
                                v-model="room.minRentalDuration"
                                :options="minRentalDurations"
                                disabled
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group v-slot="{ ariaDescribedby }" label="Type de réservation :" class="text-left">
                                <b-form-checkbox-group
                                v-model="room.typeBooking"
                                :aria-describedby="ariaDescribedby"
                                :options="typeBookings"
                                disabled
                                >
                                </b-form-checkbox-group>
                            </b-form-group>
                        
                            <b-form-group v-slot="{ ariaDescribedby }" label="Statut :" class="text-left">
                                <b-form-radio-group
                                v-model="room.bookable"
                                :aria-describedby="ariaDescribedby"
                                :options="bookables"
                                disabled
                                >
                                </b-form-radio-group>
                            </b-form-group>
                            </div>

                            <div class="col-7">
                                <div class="table-responsive">
                                    <table class="align-middle mb-5 table table-border table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th class="text-center border">Jours</th>
                                                <th class="text-center border">Heures d'ouverture</th>
                                                <th class="text-center border">Heures de fermeture</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="openingHoursDetail in openingHoursDetailsData" :key="openingHoursDetail.id">
                                                <td disabled class="text-center border text-muted">{{ openingHoursDetail.name }}</td>
                                                <td class="text-center border">
                                                    <div class="row ml-1">
                                                        <b-form-input
                                                            class="text-center border col-3" 
                                                            v-model="openingHoursDetail.startHour"
                                                            disabled
                                                        ></b-form-input>
                                                        <p class="col-4">heures</p>
                                                        <b-form-input 
                                                            class="text-center border col-3"
                                                            v-model="openingHoursDetail.startMinutes"
                                                            disabled
                                                        ></b-form-input>
                                                    </div>
                                                </td>
                                                <td class="text-center border">
                                                    <div class="row ml-1">
                                                        <b-form-input 
                                                            class="text-center border col-3"
                                                            v-model="openingHoursDetail.endHour" 
                                                            disabled
                                                        ></b-form-input>
                                                        <p class="col-4">heures</p>
                                                        <b-form-input 
                                                            class="text-center border col-3"
                                                            v-model="openingHoursDetail.endMinutes"  
                                                            disabled
                                                        ></b-form-input>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </b-form>
                </div>
            </VuePerfectScrollbar>
        </div>
    </div>
</b-tab>
</template>

<script>
import { roomDetailsData, Types, Floors, Bookables, MinRentalDurations, TypeBookings } from "@/apps/tomerge/lc-142/Components/data-roomDetails";
import { openingHoursDetailsData } from "@/apps/tomerge/lc-142/Components/data-openingHoursDetails";

import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
    name: 'Wizard1',
    components: {
        VuePerfectScrollbar,
    },
    props : {
        getData: {
            type: Number,
            default: 0
        }
    },
    watch : {
        getData(newVal) {
            if(newVal==1) {
                this.room.openingHours = openingHoursDetailsData
                this.$emit('roomInfo', this.room)
            }
        }
    },
    data: () => ({
        room: {
            name: roomDetailsData[0].name,
            type: roomDetailsData[0].type,
            surface: roomDetailsData[0].surface,
            floor: roomDetailsData[0].floor,
            maxCapacity: roomDetailsData[0].maxCapacity,
            minRentalDuration: roomDetailsData[0].minRentalDuration,
            typeBooking: [roomDetailsData[0].typeBooking],
            bookable: [roomDetailsData[0].bookable],
            openingHours: [roomDetailsData[0].openingHours]
        },
        roomDetailsData: roomDetailsData,
        openingHoursDetailsData: openingHoursDetailsData,
        types: Types,
        floors: Floors,
        bookables: Bookables,
        minRentalDurations: MinRentalDurations,
        typeBookings: TypeBookings
    })
};
</script>