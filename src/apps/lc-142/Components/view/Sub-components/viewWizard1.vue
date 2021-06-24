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
                            <div class="col-7">
                            <b-form-group id="input-group-1" label="Nom de la salle :" class="text-left" label-for="input-1">
                                <b-form-input
                                id="input-1"
                                v-model="room.name"
                                disabled
                                ></b-form-input>
                            </b-form-group>
                            </div>
                            <div class="col-1"></div>

                            <div class="col-2">
                            <b-form-group id="input-group-2" label="Surface de la salle :" class="text-left" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="room.surface"
                                disabled
                                ></b-form-input>
                            </b-form-group>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-2">
                            <b-form-group id="input-group-3" label="Niveau où se situe la salle :" class="text-left" label-for="input-3">
                                <b-form-select
                                id="input-3"
                                v-model="room.floor"
                                :options="floors"
                                disabled
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group id="input-group-4" label="Capacité maximale d'accueil de la salle :" class="text-left" label-for="input-4">
                                <b-form-input
                                id="input-4"
                                v-model="room.maxCapacity"
                                disabled
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-5" label="Durée minimale de location :" class="text-left" label-for="input-5">
                                <b-form-select
                                id="input-5"
                                v-model="room.minRentalDuration"
                                :options="minRentalDurations"
                                disabled
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }" label="Type de réservation :" class="text-left" label-for="checkboxes-6">
                                <b-form-checkbox-group
                                v-model="room.typeBooking"
                                :aria-describedby="ariaDescribedby"
                                :options="typeBookings"
                                disabled
                                >
                                </b-form-checkbox-group>
                            </b-form-group>
                        
                            <b-form-group id="input-group-7" v-slot="{ ariaDescribedby }" label="Statut :" class="text-left" label-for="radios-7">
                                <b-form-radio-group
                                v-model="room.bookable"
                                :aria-describedby="ariaDescribedby"
                                :options="bookables"
                                disabled
                                >
                                </b-form-radio-group>
                            </b-form-group>
                            </div>

                            <div class="col-1"></div>
                            <div class="col-7">
                                <div class="table-responsive">
                                    <table class="align-middle mb-5 table table-border table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th class="text-center">Jours</th>
                                                <th class="text-center">Heure ouverture</th>
                                                <th class="text-center">Heure fermeture</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <!-- inserer les v-model pour chaque valeur a recuperer -->
                                            <tr v-for="openingHoursDetail in openingHoursDetailsData" :key="openingHoursDetail.id">
                                                <td disabled class="text-center text-muted">{{ openingHoursDetail.id }}</td>
                                                <td disabled class="text-center border">{{ openingHoursDetail.start }}</td>
                                                <td disabled class="text-center border">{{ openingHoursDetail.end }}</td>
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
import { roomDetailsData, Floors, Bookables, MinRentalDurations, TypeBookings } from "@/apps/lc-142/Components/data-roomDetails";
import { openingHoursDetailsData } from "@/apps/lc-142/Components/data-openingHoursDetails";

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
        floors: Floors,
        bookables: Bookables,
        minRentalDurations: MinRentalDurations,
        typeBookings: TypeBookings
    })
};
</script>