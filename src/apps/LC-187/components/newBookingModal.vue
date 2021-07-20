<template>
    <div class="text-xs-center">
        <v-dialog
            v-model="isAddModeBooking"
            @click="closeAddModalBooking"
            width="50%"
      
            persistent
            no-click-animation
        >
            <div >
                <v-card height="75vh">
                    <v-card-title class="headline grey lighten-2" primary-title>
                        Création nouvelle réservation
                    </v-card-title>
                    <v-container>
                        <b-form row wrap>
                            <b-row>
                            <b-col md="6">
                                <b-form-group
                                    id="input-group-1"
                                    label="Début :"
                                    label-for="input-1"
                                >
                                    <date-picker v-model="value4" lang="fr" type="datetime" format="DD-MM-YYYY hh:mm" :time-picker-options="{ start: '00:00', step: '00:30', end: '23:30' }"></date-picker> 
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                            <b-form-group
                                id="input-group-1"
                                label="Fin :"
                                label-for="input-1"
                            >
                                
                                    <date-picker v-model="value4" lang="fr" type="datetime" format="DD-MM-YYYY hh:mm" :time-picker-options="{ start: '00:00', step: '00:30', end: '23:30' }"></date-picker>
                            
                            </b-form-group>
                            </b-col>
                            </b-row>
                            <b-row>
                            <b-col md=6>
                            <b-form-group
                                id="input-group-1"
                                label="Salle de la réservation :"
                                label-for="input-1"
                            >
                                
                                    <v-select>

                                    </v-select>
                            
                            </b-form-group>
                            </b-col>
                            </b-row>
                            
                            <div
                                class="p-1 text-right btn-group-sm "
                                style="margin-top:10px"
                            >
                                <b-button
                                    style="margin-right:10px"
                                    type="reset"
                                    @click="closeAddModalBooking"
                                    variant="danger"
                                    >Retour</b-button
                                >
                                <b-button
                                    type="submit"
                                    @click="saveModification"
                                    variant="success"
                                    >Valider</b-button
                                >
                            </div>
                        </b-form>
                    </v-container>
                </v-card>
            </div>
        </v-dialog>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
export default {
    name: "new-booking-modal",
    components: {
        DatePicker,
        },
    data() {
        return {
            newBooking: {
                label: "Nom de la réservation",
               
            },
        };
    },
    props: {
        isAddModeBooking: {
            type: Boolean
        },
        handleAddBooking: {
            type: Function
        },
        closeAddModalBooking: {
            type: Function
        }
    },
    methods: {
        async saveModification() {
            try {
                const newBookingWlAdded = Object.assign(
                    { wl: 1, lang: "fr_FR" },
                    this.newBooking
                );
                await this.handleAddBooking(newBookingWlAdded);
                this.closeAddModalBooking();
                this.newBooking = {
                    label: "Champs texte",
                  
                };
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
<style>
.outlined {
    border: 1px solid #1967c0;
    border-radius: 50%;
}

.outlined:hover {
    background-color: #1967c0;
}
.icon-color {
    color: #1967c0;
}
.icon-color:hover {
    color: white;
}
</style>

