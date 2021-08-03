<template>
    <div>
        <form>
            <v-expansion-panel v-model="panel" expand>
                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Informations générales</div>
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
                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Informations sur le batiment</div>
                    </template>
                    <v-card>
                        <v-card-text class="grey lighten-3">
                            <div class="card-body">
                                <div class="input-group">
                                    <v-text-field
                                        v-model="building.surface"
                                        label="Surface totale du bâtiment en mètres carrés"
                                        v-bind:disabled="editionMode === false"
                                    ></v-text-field>
                                </div>
                                Etages
                                <div class="input-group">
                                    <v-text-field
                                        v-model="building.floors.name"
                                        label="Nom de l'étage"
                                        v-bind:disabled="editionMode === false"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="building.floors.surface"
                                        label="Surface de l'étage"
                                        v-bind:disabled="editionMode === false"
                                    ></v-text-field>
                                    <v-checkbox
                                        label="Activé ?"
                                            v-bind:disabled="editionMode === false"
                                        v-model="building.floors.state"
                                    ></v-checkbox>
                                </div>
                                <div class="input-group">
                                    <v-text-field
                                        v-model="building.floors.name"
                                        label="Nom de l'étage"
                                        v-bind:disabled="editionMode === false"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="building.floors.surface"
                                        label="Surface de l'étage"
                                        v-bind:disabled="editionMode === false"
                                    ></v-text-field>
                                    <v-checkbox
                                        label="Activé ?"
                                            v-bind:disabled="editionMode === false"
                                        v-model="building.floors.state"
                                    ></v-checkbox>
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
                        </v-card-text>
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
                                        ref="imageInput"
                                        accept="image/*"
                                        name="customFile"
                                        class="custom-file-input"
                                        @change="addFile"
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
            
            <v-btn 
                v-if="editionMode"
                @click="sendBuilding">
                Valider
            </v-btn>
            <v-btn
                v-if="editionMode"
                @click="redirectToBuildingIndex">
                Annuler
            </v-btn>
        </form>
    </div>
</template>

<script>
import { Buildings } from "@/mixins/building"
import { Services } from "@/mixins/service"
import { Images } from "@/mixins/image"


export default {
    mixins: [ 
        Buildings,
        Services,
        Images
        ],
    data () {
        return {
            building: {
                _id: null,
                name: "",
                location: {
                    address: "",
                    city: "",
                    zipCode: "",
                    country: "",
                },
                surface: 0,
                openingHours: [],
                description: "",
                file: "",
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
        addFile(event) {
            const fileList = event.target.files;

            if(fileList && fileList.length > 0) {
                this.building.file = event.target.files[event.target.files.length-1];
            }
            
        },
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
            this.building.wl = 1;
            this.building.user = 1;
            this.building.caption = "test";

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
                return this.$sweetError('Impossible de modifier ce bâtiment.');
            }
            const buildingId = update.datas._id;
            const buildingType = 1;

            if (buildingId && this.building.file) {
                const storedImage = await this.storeImage(this.building, buildingId, buildingType);

                if (storedImage.error) {
                    return this.$sweetError('Une erreur est survenue pendant l\'enregistrement de l\'image');
                }
            }
            this.$sweetNotif('Le batiment a été modifié');
            return this.redirectToBuildingIndex();
        },
        async saveNewBuilding() {
            const storedBuilding = await this.storeBuilding(this.building);
            if (storedBuilding.error) {
                return this.$sweetError('Impossible d\'enregistrer un nouveau bâtiment.');
            }
            const buildingId = storedBuilding.datas._id;
            const buildingType = 1;

            if (buildingId && this.building.file) {
                console.log('saving Image')
                const storedImage = await this.storeImage(this.building, buildingId, buildingType);
                console.log("🚀 ~ file: index.vue ~ line 318 ~ saveNewBuilding ~ storedImage", storedImage)

                if (storedImage.error) {
                    return this.$sweetError('Une erreur est survenue pendant l\'enregistrement de l\'image');
                }
            }
            this.$sweetNotif('Le batiment a été sauvegardé');
            return this.redirectToBuildingIndex();
        },
        redirectToBuildingIndex() {
            return this.$router.push({name: "our-buildings"});
        }
        // toggleService (id) {
        //     // TODO : gérer les services disponibles
        // }
    }
};
</script>
