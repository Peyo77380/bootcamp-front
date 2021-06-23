<template>
<!-- Onglet 1 du wizard-->
<b-tab title="Caractéristiques" class="p-2" active>
    <div class="scroll-gradient">
        <div class="scroll-area-xlg">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
                <div class="m-3 mb-3">
                    <!-- Contenu 1er wizard-->
                    <b-form @onComplete1="onComplete1">
                        
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-7">
                            <b-form-group id="input-group-1" label="Nom de la salle :" class="text-left" label-for="input-1">
                                <b-form-input
                                id="input-1"
                                v-model="room.name"
                                placeholder="Entrer de le nom de la salle"
                                required
                                ></b-form-input>
                            </b-form-group>
                            </div>
                            <div class="col-1"></div>

                            <div class="col-2">
                            <b-form-group id="input-group-2" label="Surface de la salle :" class="text-left" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="room.surface"
                                placeholder="Indiquer la surface en m²"
                                required
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
                                required
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group id="input-group-4" label="Capacité maximale d'accueil de la salle :" class="text-left" label-for="input-4">
                                <b-form-input
                                id="input-4"
                                v-model="room.maxCapacity"
                                placeholder="Nombre de personnes maximum"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-5" label="Durée minimale de location :" class="text-left" label-for="input-5">
                                <b-form-select
                                id="input-5"
                                v-model="room.minRentalDuration"
                                :options="minRentalDurations"
                                required
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }" label="Type de réservation :" class="text-left" label-for="checkboxes-6">
                                <b-form-checkbox-group
                                v-model="room.typeBooking"
                                :aria-describedby="ariaDescribedby"
                                :options="typeBookings"
                                required
                                >
                                </b-form-checkbox-group>
                            </b-form-group>
                        
                            <b-form-group id="input-group-7" v-slot="{ ariaDescribedby }" label="Statut :" class="text-left" label-for="radios-7">
                                <b-form-radio-group
                                v-model="room.bookable"
                                :aria-describedby="ariaDescribedby"
                                :options="bookables"
                                required
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
                                            <tr>
                                                <td class="text-center text-muted">Lundi</td>
                                                <td><input type="text" v-model="room.starton" class="text-center border"/></td>
                                                <td><input type="text" v-model="room.endMon" class="text-center border"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">Mardi</td>
                                                <td><input type="text" v-model="room.startTue" class="text-center border"/></td>
                                                <td><input type="text" v-model="room.endTue" class="text-center border"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">Mercredi</td>
                                                <td><input type="text" v-model="room.startWen" class="text-center border"/></td>
                                                <td><input type="text" v-model="room.endWen" class="text-center border"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">Jeudi</td>
                                                <td><input type="text" v-model="room.startThu" class="text-center border"/></td>
                                                <td><input type="text" v-model="room.endThu" class="text-center border"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">Vendredi</td>
                                                <td><input type="text" v-model="room.startFri" class="text-center border"/></td>
                                                <td><input type="text" v-model="room.endFri" class="text-center border"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">Samedi</td>
                                                <td><input type="text" v-model="room.startSat" class="text-center border"/></td>
                                                <td><input type="text" v-model="room.endSat" class="text-center border"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">Dimanche</td>
                                                <td><input type="text" v-model="room.startSun" class="text-center border"/></td>
                                                <td><input type="text" v-model="room.endSun" class="text-center border"/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
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
import { roomDetailsData, Floors, Bookables, MinRentalDurations, TypeBookings } from "@/apps/lc-142/Components/data-roomDetails";

import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
    name: 'Wizard1',
    components: {
        VuePerfectScrollbar,
    },
    data: () => ({
        room: {
            name: '',
            surface: '',
            floor: '',
            maxCapacity: '',
            minRentalDuration: '',
            typeBooking: [],
            bookable: [],
            openingHours: [],
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
        floors: Floors,
        bookables: Bookables,
        minRentalDurations: MinRentalDurations,
        typeBookings: TypeBookings
    }),
    methods: {
        onComplete1() {
            // validation premier wizard, save enn bdd et passage au wizard suivant
        }
    }
};
</script>