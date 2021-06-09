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
                                        <b-card class="mb-5 nav-justified" no-body>
                                            <div class="dropdown-menu-header-inner bg-deep-blue">
                                                <div class="menu-header-content text-dark mb-1 mt-1">
                                                    <h5 class="menu-header-title">Ajout d'une nouvelle salle</h5>
                                                    <h6 class="menu-header-subtitle">Veuillez remplir les champs ci après :</h6>
                                                </div>
                                            </div>
                                            <div class="nav-justified">
                                                <!-- Contenu -->
                                                <b-tabs class="card-header-tab-animation" card>
                                                    <!-- Onglet 1 du wizard-->
                                                    <b-tab title="Caractéristiques" class="p-2" active>
                                                        <div class="scroll-gradient">
                                                            <div class="scroll-area-lg">
                                                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                                    <div class="mt-3">
                                                                        <!-- Contenu 1er wizard-->
                                                                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                                                            <b-form-group id="input-group-1" label="Nom de la salle :" label-for="input-1">
                                                                                <b-form-input
                                                                                id="input-1"
                                                                                v-model="form.name"
                                                                                placeholder="Entrer de le nom de la salle"
                                                                                required
                                                                                ></b-form-input>
                                                                            </b-form-group>

                                                                            <b-form-group id="input-group-2" label="Surface de la salle :" label-for="input-2">
                                                                                <b-form-input
                                                                                id="input-2"
                                                                                v-model="form.surface"
                                                                                placeholder="Indiquer la surface en mètre carré"
                                                                                required
                                                                                ></b-form-input>
                                                                            </b-form-group>

                                                                            <b-form-group id="input-group-3" label="Niveau où se situe la salle :" label-for="input-3">
                                                                                <b-form-select
                                                                                id="input-3"
                                                                                v-model="form.floor"
                                                                                :options="floors"
                                                                                required
                                                                                ></b-form-select>
                                                                            </b-form-group>

                                                                            <b-form-group id="input-group-4" label="Capacité maximale d'accueil de la salle :" label-for="input-4">
                                                                                <b-form-input
                                                                                id="input-4"
                                                                                v-model="form.maxCapacity"
                                                                                placeholder="Nombre de personnes maximum"
                                                                                required
                                                                                ></b-form-input>
                                                                            </b-form-group>

                                                                            <b-form-group id="input-group-5" label="Durée minimale de location :" label-for="input-5">
                                                                                <b-form-select
                                                                                id="input-5"
                                                                                v-model="form.minRentalDuration"
                                                                                :options="minRentalDurations"
                                                                                required
                                                                                ></b-form-select>
                                                                            </b-form-group>


                                                                            <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }">
                                                                                <b-form-checkbox-group
                                                                                v-model="form.typeBooking"
                                                                                id="checkboxes-6"
                                                                                :aria-describedby="ariaDescribedby"
                                                                                >
                                                                                <b-form-checkbox value="0">Membre</b-form-checkbox>
                                                                                <b-form-checkbox value="1">Évènement</b-form-checkbox>
                                                                                </b-form-checkbox-group>
                                                                            </b-form-group>
                                                                            
                                                                            <b-form-group id="input-group-7" v-slot="{ ariaDescribedby }">
                                                                                <b-form-radio-group
                                                                                v-model="form.bookable"
                                                                                id="checkboxes-7"
                                                                                :aria-describedby="ariaDescribedby"
                                                                                >
                                                                                <b-form-radio value="0">Réservable</b-form-radio>
                                                                                <b-form-radio value="1">Indisponible</b-form-radio>
                                                                                </b-form-radio-group>
                                                                            </b-form-group>

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
                                                    <!-- Onglet 2 du wizard-->
                                                    <b-tab title="Description" class="p-2">
                                                        <div class="scroll-gradient">
                                                            <div class="scroll-area-lg">
                                                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                                    <div class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                        <!-- Contenu 2e wizard-->
                                                                        <p>Wizard 2</p>
                                                                    </div>
                                                                </VuePerfectScrollbar>
                                                            </div>
                                                        </div>
                                                    </b-tab>
                                                    <!-- Onglet 3 du wizard-->
                                                    <b-tab title="Services" class="p-2">
                                                        <div class="scroll-gradient">
                                                            <div class="scroll-area-lg">
                                                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                                    <div class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                        <!-- Contenu 3e wizard-->
                                                                        <p>Wizard 3</p>
                                                                    </div>
                                                                </VuePerfectScrollbar>
                                                            </div>
                                                        </div>
                                                    </b-tab>
                                                    <!-- Onglet 4 du wizard-->
                                                    <b-tab title="Photos" class="p-2">
                                                        <div class="scroll-gradient">
                                                            <div class="scroll-area-lg">
                                                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                                    <div class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                        <!-- Contenu 3e wizard-->
                                                                        <p>Wizard 4</p>
                                                                    </div>
                                                                </VuePerfectScrollbar>
                                                            </div>
                                                        </div>
                                                    </b-tab>
                                                    <!-- Onglet 5 du wizard-->
                                                    <b-tab title="Tarifs et notes" class="p-2">
                                                        <div class="scroll-gradient">
                                                            <div class="scroll-area-lg">
                                                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                                    <div class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                        <!-- Contenu 3e wizard-->
                                                                        <p>Wizard 5</p>
                                                                    </div>
                                                                </VuePerfectScrollbar>
                                                            </div>
                                                        </div>
                                                    </b-tab>
                                                    <!-- Onglet 6 du wizard-->
                                                    <b-tab title="Plans" class="p-2">
                                                        <div class="scroll-gradient">
                                                            <div class="scroll-area-lg">
                                                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                                                    <div class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                        <!-- Contenu 3e wizard-->
                                                                        <p>Wizard 6</p>
                                                                    </div>
                                                                </VuePerfectScrollbar>
                                                            </div>
                                                        </div>
                                                    </b-tab>
                                                </b-tabs>
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

import { roomDetailsData, Floors, Bookables, Days, MinRentalDurations } from "@/apps/lc-142/Components/data-roomDetails";


library.add(faTrashAlt, faCheck, faAngleDown, faAngleUp, faTh, faCalendarAlt);

export default {
    name: 'RoomAdd',
    components: {
        PageTitle,
        VuePerfectScrollbar,
    },
    data: () => ({
        roomDetailsData: roomDetailsData,
        heading: "Ajouter une salle dans l'espace de coworking",
        icon: "pe-7s-note2 icon-gradient bg-tempting-azure",

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
        floors: Floors,
        bookable: Bookables,
        days: Days,
        minRentalDuration: MinRentalDurations,
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