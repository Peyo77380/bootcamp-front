<template>
    <!-- Onglet 1 du wizard-->
    <b-tab title="Caractéristiques" class="p-2" active>
        <div class="scroll-gradient">
            <div class="scroll-area-xlg">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="m-3">
                        <!-- Contenu 1er wizard-->
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-7">
                                <b-form-group id="input-group-1" label="Nom de la salle :" class="text-left" label-for="input-1">
                                    <b-form-input
                                    id="input-1"
                                    v-model="form.name"
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
                                    v-model="form.surface"
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
                                    v-model="form.floor"
                                    :options="floors"
                                    required
                                    ></b-form-select>
                                </b-form-group>

                                <b-form-group id="input-group-4" label="Capacité maximale d'accueil de la salle :" class="text-left" label-for="input-4">
                                    <b-form-input
                                    id="input-4"
                                    v-model="form.maxCapacity"
                                    placeholder="Nombre de personnes maximum"
                                    required
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-5" label="Durée minimale de location :" class="text-left" label-for="input-5">
                                    <b-form-select
                                    id="input-5"
                                    v-model="form.minRentalDuration"
                                    :options="minRentalDurations"
                                    required
                                    ></b-form-select>
                                </b-form-group>

                                <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }" label="Type de réservation :" class="text-left" label-for="checkboxes-6">
                                    <b-form-checkbox-group
                                    v-model="form.typeBooking"
                                    id="checkboxes-6"
                                    :aria-describedby="ariaDescribedby"
                                    >
                                    <b-form-checkbox value="0">Membre</b-form-checkbox>
                                    <b-form-checkbox value="1">Évènement</b-form-checkbox>
                                    </b-form-checkbox-group>
                                </b-form-group>
                            
                                <b-form-group id="input-group-7" v-slot="{ ariaDescribedby }" label="Statut :" class="text-left" label-for="radios-7">
                                    <b-form-radio-group
                                    v-model="form.bookable"
                                    id="radio-7"
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
                                    <table class="align-middle mb-5 table table-border table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th class="text-center">Jours</th>
                                                <th class="text-center">Heure ouverture</th>
                                                <th class="text-center">Heure fermeture</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center text-muted">Lundi</td>
                                                <td><input type="text" class="text-center border"/></td>
                                                <td><input type="text" class="text-center border"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">Mardi</td>
                                                <td><input type="text" class="text-center border"/></td>
                                                <td><input type="text" class="text-center border"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">Mercredi</td>
                                                <td><input type="text" class="text-center border"/></td>
                                                <td><input type="text" class="text-center border"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">Jeudi</td>
                                                <td><input type="text" class="text-center border"/></td>
                                                <td><input type="text" class="text-center border"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">Vendredi</td>
                                                <td><input type="text" class="text-center border"/></td>
                                                <td><input type="text" class="text-center border"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">Samedi</td>
                                                <td><input type="text" class="text-center border"/></td>
                                                <td><input type="text" class="text-center border"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">Dimanche</td>
                                                <td><input type="text" class="text-center border"/></td>
                                                <td><input type="text" class="text-center border"/></td>
                                                
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>

                            <b-button class="m-1 col-2" type="reset" variant="danger">Reset</b-button>
                            <b-button class="m-1 col-2" type="submit" variant="primary">Suivant</b-button>
                        </b-form>
                            
                        <b-card class="mt-3" header="Form Data Result">
                        <pre class="m-0">{{ form }}</pre>
                        </b-card>
                    </div>
                </VuePerfectScrollbar>
            </div>
        </div>
    </b-tab>
</template>

<script>
import { roomDetailsData, Floors, Bookables, Days, MinRentalDurations } from "@/apps/lc-142/Components/data-roomDetails";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
    name: 'Wizard1',
    components: {
        VuePerfectScrollbar,
    },
    data: () => ({
        slickOptions2: {
            slidesToShow: 1,
            dots: true
        },
        form: {
            name: '',
            surface: '',
            floor: '',
            maxCapacity: '',
            minRentalDuration: '',
            day: [],
            typeBooking: '',
            bookable: []
        },
        roomDetailsData: roomDetailsData,
        floors: Floors,
        bookable: Bookables,
        days: Days,
        minRentalDurations: MinRentalDurations,
        show: true
    }),

    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.name = ''
            this.form.surface = ''
            this.form.floor = ''
            this.form.maxCapacity = ''
            this.form.minRentalDuration = ''
            this.form.day = []
            this.form.typeBooking = ''
            this.form.bookable = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
};
</script>