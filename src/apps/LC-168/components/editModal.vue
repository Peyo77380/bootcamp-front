<template>
    <div class="text-xs-center">
        <v-dialog v-model="dialog" @click="close" max-width="800px">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Modification - {{ editItem.nom }} 
                </v-card-title>
                <v-card-text>
                    
                    <v-container>
                        <b-form row wrap>
                            <v-select 
                                v-model="this.editItem.type"
                                :items="types"
                                item-text="label"
                                item-value="label"
                                persistent-hint
                                return-object
                                single-line
                                outlined
                                @change="selectValue"    
                                >
                                
                            </v-select>
                            
                                <b-form-group
                                label="Nom :">
                                <b-form-input
                                    
                                    v-model="editItem.nom"
                                    required
                                ></b-form-input>
                            </b-form-group>
                                <b-form-group
                                label="Identifiant :" >
                                <b-form-input
                                    
                                    v-model="editItem.identifiant"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <div v-if="this.editItem.type === 'Champs texte'">
                                <b-form-group
                                id="input-group-1"
                                label="Options :"
                                label-for="input-1"
                                >
                                <b-form-textarea
                                id="input-1"
                                placeholder="Informations complémentaires..."
                                required
                                ></b-form-textarea>
                                </b-form-group>
                            </div>
                <div v-if="this.editItem.type === 'Un seul choix'"> 
                    <label for="tags-pills">Différents choix possibles</label>
                    <v-combobox
                    v-model="model2"    
                    :search-input.sync="search"
                    hide-selected
                    multiple
                    persistent-hint
                    small-chips
                     ></v-combobox>
                </div>
                <div v-if="this.editItem.type === 'Liste de sélection'">
                    <label for="tags-pills-2">Différents choix possibles</label>
                    <v-combobox
                    v-model="model3"    
                    :search-input.sync="search"
                    hide-selected
                    multiple
                    persistent-hint
                    small-chips
                     ></v-combobox>
                </div>

                <div class="p-1 text-right btn-group-sm" style="margin-top:10px">
                    <b-button
                        style="margin-right:10px"
                        type="reset"
                        @click="close"
                        variant="danger">Retour
                    </b-button>
                    <b-button
                        type="submit"
                        variant="success">Valider
                    </b-button>
                </div>
                        </b-form>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {types} from '@/utils/globalAttribut';
export default {
    name: "edit-attribut",
    props: {
        dialog: {
            type: Boolean
        },
        items: {
            type: Object
        }
    },
    
    data ()  {
            return{
                value2:[],
                value:[],
                selected : {label : "Champs texte"},
                model: 'tab-2',
                model2:['Vuetify'],
                model3:['VUETIFY'],
                types: types,
                
            }
            

        },
    computed: {
        editItem() {
            return {...this.items}
            
        }
    },
    methods: {
        close() {
            this.$emit("close");
            
        },
    },
    
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
