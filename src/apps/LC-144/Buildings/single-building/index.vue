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
                                    <div class="input-group">
                                        <v-text-field
                                            v-model="building.location.address"
                                            label="Numéro et rue"
                                            v-bind:disabled="editionMode === false"
                                        ></v-text-field>
                                    </div>

                                    <div class="input-group">
                                        <v-text-field
                                            v-model="building.location.zipCode"
                                            label="Code postal"
                                            v-bind:disabled="editionMode === false"
                                        ></v-text-field>
                                    </div>

                                    <div class="input-group">
                                        <v-text-field
                                            v-model="building.location.city"
                                            label="Ville"
                                            v-bind:disabled="editionMode === false"
                                        ></v-text-field>
                                    </div>

                                    <div class="input-group">
                                        <v-text-field
                                            v-model="building.location.country"
                                            label="Pays"
                                            v-bind:disabled="editionMode === false"
                                        ></v-text-field>
                                    </div>

                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
                <!-- <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Caractéristiques</div>
                    </template>
                    <v-card>
                        <v-card-text class="grey lighten-3">
                            <template>
                                <v-container fluid>
                                    <v-layout row wrap>
                                        <v-flex
                                            v-for="service in services"
                                            xs4
                                            :key="service._id"
                                            >
                                            <v-checkbox
                                                :id="`service_${service._id}`"
                                                :label="service.name"
                                                 v-bind:disabled="editionMode === false"
                                                @click="toggleService(service._id)"
                                            >
                                            {{service.name}}
                                            </v-checkbox>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </template>

                            <!-- -->
                        <!-- </v-card-text>
                    </v-card>
                </v-expansion-panel-content> --> 
                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Description</div>
                    </template>
                    <v-card>
                        <v-card-text class="grey lighten-3">
                            <v-container fluid grid-list-md>
                                <v-textarea
                                    v-model="building.description"
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

            <v-btn @click="sendBuilding">Valider</v-btn>
            <v-btn @click="cancel">Annuler</v-btn>
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
            building: {
                _id: null,
                location: {
                    address: "",
                    city: "",
                    zipCode: "",
                    country: "",
                },
                surface: 0,
                openingHours: [],
                description: "",
                pictures: [],
                characterics: "",
                state: 0,
                enabled: true,
                floors: [],
                // services: [],
            },     
            // services: [],
            editionMode: false, 
        }
    },
    mounted () {
        this.switchMode();
        this.getServices();
        if (this.$route.params.id) {
            this.getBuilding();
        }
    },
    methods: {
        switchMode () {
            if ((this.$route.params.id && this.$route.name == "edit-building") || this.$route.name == "add-building") {
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
        },
        async sendBuilding () {
            if (this.editionMode) {
                if (this.$route.params.id) {
                    return await this.sendUpdatedBuilding();
                }
                return await this.saveNewBuilding();
            }
        },
        async sendUpdatedBuilding () {
            const update = await this.updateBuilding(this.$route.params.id, this.building);
            if (update.error) {
                return console.log(update.error)
            }
            return update;
        },
        async saveNewBuilding() {
            const save = await this.storeBuilding(this.building);
            if (save.error) {
                return console.log(save.error);
            }
            return save;
        },
        cancel () {
            // TODO : à voir
        },
        // toggleService (id) {
        //     // TODO : gérer les services disponibles
        // }
    }
};
</script>
