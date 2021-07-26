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
                                type="text"
                                placeholder="Entrer de le nom de la salle"
                                class="inputRoom"
                                :required=required
                                :disabled=disabled
                                
                                ></b-form-input>
                            </b-form-group>
                            </div>

                            <div class="col-3">
                                <b-form-group label="Type :" class="text-left">
                                <b-form-select
                                v-model="room.type"
                                :options="types"
                                class="inputRoom"
                                v-bind:required=true
                                v-bind:disabled=false
                                ></b-form-select>
                                </b-form-group>
                            </div>

                            <div class="col-2">
                            <b-form-group label="Surface salle :" class="text-left" >
                                <b-form-input
                                v-model="room.surface"
                                type="number"
                                min="0"
                                placeholder="en m²"
                                class="inputRoom"
                                :required=true
                                :disabled=false
                                ></b-form-input>
                            </b-form-group>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-3">
                            <b-form-group label="Niveau où se situe la salle :" class="text-left">
                                <b-form-select
                                v-model="room.floor"
                                :options="floors"
                                class="inputRoom"
                                :required=true
                                :disabled=false
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group label="Capacité maximale d'accueil :" class="text-left">
                                <b-form-input
                                v-model="room.maxCapacity"
                                type="number"
                                min="0"
                                placeholder="Nombre de personnes maximum"
                                class="inputRoom"
                                :required=true
                                :disabled=false
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group label="Durée minimale de location :" class="text-left">
                                <b-form-select
                                v-model="room.minRentalDuration"
                                :options="minRentalDurations"
                                class="inputRoom"
                                :required=true
                                :disabled=false
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group v-slot="{ ariaDescribedby }" label="Type de réservation :" class="text-left">
                                <b-form-checkbox-group
                                v-model="room.typeBooking"
                                :aria-describedby="ariaDescribedby"
                                :options="typeBookings"
                                class="inputRoom"
                                :required=true
                                :disabled=false
                                >
                                </b-form-checkbox-group>
                            </b-form-group>
                        
                            <b-form-group v-slot="{ ariaDescribedby }" label="Statut :" class="text-left">
                                <b-form-checkbox-group
                                v-model="room.bookable"
                                :aria-describedby="ariaDescribedby"
                                :options="bookables"
                                class="inputRoom"
                                :disabled=false
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
                                                <th class="text-center border">Heures d'ouverture</th>
                                                <th class="text-center border">Heures de fermeture</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="openingHoursDetail in openingHoursDetailsData" :key="openingHoursDetail.id">
                                                <td class="text-center text-muted border">{{ openingHoursDetail.name }}</td>
                                                <td class="text-center border">
                                                    <div class="row ml-1">
                                                        <b-form-input
                                                            v-model="openingHoursDetail.startHour"
                                                            class="inputRoom text-center border col-3" 
                                                            type="number"
                                                            min="0"
                                                            max="24"
                                                            placeholder="8"
                                                            :required=true
                                                            :disabled=false
                                                        ></b-form-input>
                                                        <p class="col-4">heures</p>
                                                        <b-form-input
                                                            v-model="openingHoursDetail.startMinutes"
                                                            class="inputRoom text-center border col-3"
                                                            type="number"
                                                            min="0"
                                                            max="45"
                                                            placeholder="45"
                                                            :required=true
                                                            :disabled=false
                                                        ></b-form-input>
                                                    </div>
                                                </td>
                                                <td class="text-center border">
                                                    <div class="row ml-1">
                                                        <b-form-input
                                                            v-model="openingHoursDetail.endHour" 
                                                            class="inputRoom text-center border col-3"
                                                            type="number"
                                                            min="0"
                                                            max="24"
                                                            placeholder="20"
                                                            :required=true
                                                            :disabled=false
                                                        ></b-form-input>
                                                        <p class="col-4">heures</p>
                                                        <b-form-input
                                                            v-model="openingHoursDetail.endMinutes"
                                                            class="inputRoom text-center border col-3"
                                                            type="number"
                                                            min="0"
                                                            max="45"
                                                            placeholder="15"
                                                            :required=true
                                                            :disabled=false
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
            name: '',
            type: null,
            surface: '',
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
        typeBookings: TypeBookings,
        disabled: false,
        required: true
    })
};
</script>