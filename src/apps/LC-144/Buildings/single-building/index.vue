<template>
    <div>
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
                                            v-model="building.name"
                                            label="Nom du bâtiment"
                                            v-bind:disabled="editionMode === false"
                                        ></v-text-field>
                                    </div>

                                    <br />
                                    <div class="input-group">
                                        <v-text-field
                                            v-model="building.location.address"
                                            label="Numéro et rue"
                                            v-bind:disabled="editionMode === false"
                                        ></v-text-field>
                                    </div>

                                    <br />
                                    <div class="input-group">
                                        <v-text-field
                                            v-model="building.location.zipCode"
                                            label="Code postal"
                                            v-bind:disabled="editionMode === false"
                                        ></v-text-field>
                                    </div>

                                    <br />
                                    <div class="input-group">
                                        <v-text-field
                                            v-model="building.location.city"
                                            label="Ville"
                                            v-bind:disabled="editionMode === false"
                                        ></v-text-field>
                                    </div>

                                    <br />
                                    <div class="input-group">
                                        <v-text-field
                                            v-model="building.location.country"
                                            label="Pays"
                                            v-bind:disabled="editionMode === false"
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
                                            <v-checkbox
                                                value
                                                v-bind:disabled="editionMode === false"
                                            ></v-checkbox>
                                        </v-flex>
                                        <v-flex xs4>
                                            <v-checkbox
                                                value
                                                v-bind:disabled="editionMode === false"
                                            ></v-checkbox>
                                        </v-flex>
                                        <v-flex xs4>
                                            <v-checkbox
                                                value
                                                v-bind:disabled="editionMode === false"
                                            ></v-checkbox>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row wrap class="light--text">
                                        <v-flex xs4>shooting photo</v-flex>
                                        <v-flex xs4>séminaire</v-flex>
                                        <v-flex xs4>évenement</v-flex>
                                    </v-layout>
                                    <v-layout row wrap>
                                        <v-flex xs4>
                                            <v-checkbox
                                                value
                                                v-bind:disabled="editionMode === false"
                                            ></v-checkbox>
                                        </v-flex>
                                        <v-flex xs4>
                                            <v-checkbox
                                                value
                                                v-bind:disabled="editionMode === false"
                                            ></v-checkbox>
                                        </v-flex>

                                        <v-flex xs4>
                                            <v-checkbox
                                                value
                                                v-bind:disabled="editionMode === false"
                                            ></v-checkbox>
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
import { Buildings } from "@/mixins/building"
import { Services } from "@/mixins/service"


export default {
    mixins: [ 
        Buildings,
        Services
        ],
    data () {
        return {
            building: {},     
            services: [],
            editionMode: false, 
        }
    },
    mounted () {
        this.switchMode();
        this.getServices();
        console.log(this.services);
        if (this.$route.params.id) {
            this.getBuilding();
        }
    },
    methods: {
        switchMode () {
            if (this.$route.params.id && this.$route.name == "edit-building") {
                return this.editionMode = true;
            }
            return this.editionMode = false;
        },
        async getBuilding () {
            const id = this.$route.params.id
            if (!id) {
                return;
            }
            const res = await this.getBuildingById(id);
            
            if (res.error) {
                console.log(res.error)
            }
            this.building = res.datas
        },
        async getServices () {
            const res = await this.getAllServices();
            if (res.error) {
                console.log(res.error)
            }
            this.services = res.datas;
            console.log(this.services);
        }
    }
};
</script>
