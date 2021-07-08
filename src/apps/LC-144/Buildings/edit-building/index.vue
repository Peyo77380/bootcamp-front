<template>
    <div>
        <page-title
            :heading="heading"
            :subheading="subheading"
            :icon="icon"
        ></page-title>
        <form>
            <v-expansion-panel v-model="panel" expand>
                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Informations</div>
                    </template>
                    <v-card>
                        <v-card-text class="grey lighten-3">
                            <div class="card-body">
                                <div>
                                    <div class="input-group">
                                        <v-text-field
                                            v-model="buildingname"
                                            label="Nom du bâtiment"
                                            data-vv-name="buildingname"
                                            value="valeur à récupérer"
                                            required
                                        ></v-text-field>
                                    </div>

                                    <br />
                                    <div class="input-group">
                                        <v-text-field
                                            v-model="nbstreet"
                                            label="Numéro et rue"
                                            data-vv-name="nbstreet"
                                            required
                                        ></v-text-field>
                                    </div>

                                    <br />
                                    <div class="input-group">
                                        <v-text-field
                                            v-model="pcode"
                                            label="Code postal"
                                            data-vv-name="pcode"
                                            required
                                        ></v-text-field>
                                    </div>

                                    <br />
                                    <div class="input-group">
                                        <v-text-field
                                            v-model="city"
                                            label="Ville"
                                            data-vv-name="city"
                                            required
                                        ></v-text-field>
                                    </div>

                                    <br />
                                    <div class="input-group">
                                        <v-text-field
                                            v-model="country"
                                            label="Pays"
                                            data-vv-name="country"
                                            required
                                        ></v-text-field>
                                    </div>

                                    <br />
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Caractéristiques</div>
                    </template>
                    <v-card>
                        <v-card-text class="grey lighten-3">
                            <!-- -->

                            <template>
                                <v-container fluid>
                                    <v-layout row wrap class="light--text">
                                        <v-flex xs4>salle de réunion</v-flex>
                                        <v-flex xs4>coworking</v-flex>
                                        <v-flex xs4>showroom</v-flex>
                                    </v-layout>
                                    <v-layout row wrap>
                                        <v-flex xs4>
                                            <v-checkbox value></v-checkbox>
                                        </v-flex>
                                        <v-flex xs4>
                                            <v-checkbox value></v-checkbox>
                                        </v-flex>
                                        <v-flex xs4>
                                            <v-checkbox value></v-checkbox>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row wrap class="light--text">
                                        <v-flex xs4>shooting photo</v-flex>
                                        <v-flex xs4>séminaire</v-flex>
                                        <v-flex xs4>évenement</v-flex>
                                    </v-layout>
                                    <v-layout row wrap>
                                        <v-flex xs4>
                                            <v-checkbox value></v-checkbox>
                                        </v-flex>
                                        <v-flex xs4>
                                            <v-checkbox value></v-checkbox>
                                        </v-flex>

                                        <v-flex xs4>
                                            <v-checkbox value></v-checkbox>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </template>

                            <!-- -->
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Description</div>
                    </template>
                    <v-card>
                        <v-card-text class="grey lighten-3">
                            <v-container fluid grid-list-md>
                                <v-textarea
                                    name="input-7-1"
                                    box
                                    label="À propos du bâtiment"
                                    auto-grow
                                ></v-textarea>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Photos</div>
                    </template>
                    <v-card>
                        <v-card-text class="grey lighten-3">
                            <div class="position-relative form-group">
                                <!--
                                    
                                <label for="addingNewImageBrowser" class=""
                                    >Ajoutez les photos du bâtiment ici</label
                                >

                                -->
                                <div class="custom-file">
                                    <input
                                        type="file"
                                        id="addingNewImageBrowser"
                                        name="customFile"
                                        class="custom-file-input"
                                    /><label
                                        class="custom-file-label"
                                        for="addingNewImageBrowser"
                                        >Télécharger un fichier</label
                                    >
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-btn @click="submit">Valider</v-btn>
            <v-btn @click="clear">Annuler</v-btn>
        </form>
    </div>
</template>

<script>
import PageTitle from "@/Layout/Components/PageTitle.vue";
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

export default {
    components: {
        PageTitle
    },

    $_veeValidate: {
        validator: "new"
    },

    data: () => (
        {
            name: "",
            buildingname: "",
            nbstreet: "",
            pcode: "",
            country: "",
            city: ""
        },
        {
            heading: "LA COLLOC - UNE FABRIQUE DE TRANSITION(S)",
            subheading: "modifier un espace de coworking",
            icon: "pe-7s-paper-plane icon-gradient bg-happy-itmeo"
        }
    ),
    methods: {
        submit() {
            this.$validator.validateAll();
        },
        clear() {
            this.buildingname = "";
            this.nbstreet = "";
            this.pcode = "";
            this.country = "";
            this.city = "";
            this.$validator.reset();
        }
    }
};
</script>
