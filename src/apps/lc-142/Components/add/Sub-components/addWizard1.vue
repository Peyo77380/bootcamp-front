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
                            <b-form-group id="input-group-1" label="Nom de la salle :" class="text-left" label-for="input-1">
                                <b-form-input
                                id="input-1"
                                v-model="room.name"
                                placeholder="Entrer de le nom de la salle"
                                required
                                ></b-form-input>
                            </b-form-group>
                            </div>

                            <div class="col-3">
                                <b-form-group id="input-group-2" label="Type :" class="text-left" label-for="input-2">
                                <b-form-select
                                id="input-2"
                                v-model="room.type"
                                :options="types"
                                required
                                ></b-form-select>
                                </b-form-group>
                            </div>

                            <div class="col-2">
                            <b-form-group id="input-group-3" label="Surface salle :" class="text-left" label-for="input-3">
                                <b-form-input
                                id="input-3"
                                v-model="room.surface"
                                placeholder="en m²"
                                required
                                ></b-form-input>
                            </b-form-group>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-3">
                            <b-form-group id="input-group-4" label="Niveau où se situe la salle :" class="text-left" label-for="input-4">
                                <b-form-select
                                id="input-4"
                                v-model="room.floor"
                                :options="floors"
                                required
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group id="input-group-5" label="Capacité maximale d'accueil :" class="text-left" label-for="input-5">
                                <b-form-input
                                id="input-5"
                                v-model="room.maxCapacity"
                                placeholder="Nombre de personnes maximum"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-6" label="Durée minimale de location :" class="text-left" label-for="input-6">
                                <b-form-select
                                id="input-6"
                                v-model="room.minRentalDuration"
                                :options="minRentalDurations"
                                required
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group id="input-group-7" v-slot="{ ariaDescribedby }" label="Type de réservation :" class="text-left" label-for="checkboxes-7">
                                <b-form-checkbox-group
                                v-model="room.typeBooking"
                                :aria-describedby="ariaDescribedby"
                                :options="typeBookings"
                                required
                                >
                                </b-form-checkbox-group>
                            </b-form-group>
                        
                            <b-form-group id="input-group-8" v-slot="{ ariaDescribedby }" label="Statut :" class="text-left" label-for="radios-7">
                                <b-form-checkbox-group
                                v-model="room.bookable"
                                :aria-describedby="ariaDescribedby"
                                :options="bookables"
                                >
                                </b-form-checkbox-group>
                            </b-form-group>
                            </div>

                            <div class="col-7">
                                <div class="table-responsive">
                                    <table class="align-middle mb-5 table table-border table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th class="text-center border">Jours</th>
                                                <th class="text-center border">Heure ouverture</th>
                                                <th class="text-center border">Heure fermeture</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="openingHoursDetail in openingHoursDetailsData" :key="openingHoursDetail.id">
                                                <td class="text-center text-muted border">{{ openingHoursDetail.name }}</td>
                                                <td class="text-center border"><input type="text" v-model="openingHoursDetail.start" class="text-center border"/></td>
                                                <td class="text-center border"><input type="text" v-model="openingHoursDetail.end" class="text-center border"/></td>
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
import { roomDetailsData, Types, Floors, Bookables, MinRentalDurations, TypeBookings } from "@/apps/lc-142/Components/data-roomDetails";
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
            name: '',
            surface: '',
            type: null,
            floor: null,
            maxCapacity: '',
            minRentalDuration: null,
            typeBooking: [],
            bookable: [],
            openingHours: [],
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