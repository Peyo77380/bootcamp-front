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
                                :value="room.name"
                                disabled
                                ></b-form-input>
                            </b-form-group>
                            </div>
                            <div class="col-1"></div>

                            <div class="col-2">
                            <b-form-group id="input-group-2" label="Surface de la salle :" class="text-left" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                :value="room.surface"
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
                                :value="room.floor"
                                :options="floors"
                                disabled
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group id="input-group-4" label="Capacité maximale d'accueil de la salle :" class="text-left" label-for="input-4">
                                <b-form-input
                                id="input-4"
                                :value="room.maxCapacity"
                                disabled
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-5" label="Durée minimale de location :" class="text-left" label-for="input-5">
                                <b-form-select
                                id="input-5"
                                :value="room.minRentalDuration"
                                :options="minRentalDurations"
                                disabled
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }" label="Type de réservation :" class="text-left" label-for="checkboxes-6">
                                <b-form-checkbox-group
                                :value="room.typeBooking"
                                :aria-describedby="ariaDescribedby"
                                >
                                <b-form-checkbox value="0">Membre</b-form-checkbox>
                                <b-form-checkbox value="1">Évènement</b-form-checkbox>
                                </b-form-checkbox-group>
                            </b-form-group>
                        
                            <b-form-group id="input-group-7" v-slot="{ ariaDescribedby }" label="Statut :" class="text-left" label-for="radios-7">
                                <b-form-radio-group
                                :value="room.bookable"
                                :aria-describedby="ariaDescribedby"
                                >
                                <b-form-radio value="0">Réservable</b-form-radio>
                                <b-form-radio value="1">Indisponible</b-form-radio>
                                </b-form-radio-group>
                            </b-form-group>
                            </div>

                            <div class="col-1"></div>
                            <div class="col-7">
                            <div class="table-responsive">
                                <table class="align-middle mb-5 table table-border bordered table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Jours</th>
                                            <th class="text-center">Heure ouverture</th>
                                            <th class="text-center">Heure fermeture</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="openingHoursDetail in openingHoursDetailsData" :key="openingHoursDetail.id">
                                            <td class="text-center">{{ openingHoursDetail.id }}</td>
                                            <td class="text-center">{{ openingHoursDetail.start }}</td>
                                            <td class="text-center">{{ openingHoursDetail.end }}</td>
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
import { roomDetailsData, Floors, Bookables, MinRentalDurations } from "@/apps/lc-142/Components/data-roomDetails";
import { openingHoursDetailsData } from "@/apps/lc-142/Components/data-openingHoursDetails";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
    name: 'Wizard1',
    components: {
        VuePerfectScrollbar
    },
    props: ['roomDetails'],
    data: () => ({
        room: {
            name: '',
            surface: '',
            floor: '',
            maxCapacity: '',
            minRentalDuration: '',
            typeBooking: [],
            bookable: [],
            openingHours: [], // lignes suivantes
            startMon: '',
            startTue: '',
            startWen: '',
            startThu: '',
            startFri: '',
            startSat: '',
            startSun: '',
            endMon: '',
            endTue: '',
            endWen: '',
            endThu: '',
            endFri: '',
            endSat: '',
            endSun: ''
        },
        roomDetailsData: roomDetailsData,
        openingHoursDetailsData: openingHoursDetailsData,
        floors: Floors,
        bookable: Bookables,
        minRentalDurations: MinRentalDurations
    })
};
</script>