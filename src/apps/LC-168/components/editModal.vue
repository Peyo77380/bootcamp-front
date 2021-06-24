<template>
    <div class="text-xs-center">
        <v-dialog v-model="dialog" max-width="600px">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Modification - {{ items.nom }}
                </v-card-title>
                <v-card-text>
                    
                    <v-container>
                        <b-form row wrap>
                            
                                <v-select 
                                v-model="selected"
                                :items="types"
                                item-text="label"
                                item-value="label"
                                persistent-hint
                                return-object
                                single-line
                                @change="selectValue"
                                
                                >
                                
                            </v-select>
                            
                                <b-form-group
                                id="input-group-1"
                                label="Nom :"
                                label-for="input-1"
                            >
                                <b-form-input
                                    id="input-1"
                                    v-model="items.nom"
                                    required
                                ></b-form-input>
                            </b-form-group>
                                <b-form-group
                                id="input-group-1"
                                label="Identifiant :"
                                label-for="input-1"
                            >
                                <b-form-input
                                    id="input-1"
                                    v-model="items.identifiant"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <div v-show="textArea">
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
                <div v-show="oneChoice"> 
                    <label for="tags-pills">Différents choix possibles</label>
                    <b-form-tags
                    input-id="tags-pills"
                    v-model="value"
                    tag-variant="primary"
                    tag-pills
                    size="lg"
                    separator=" "
                    placeholder="Nouveau choix..."
                    ></b-form-tags>
                </div>
                <div v-show="multipleChoice">
                    <label for="tags-pills-2">Différents choix possibles</label>
                    <b-form-tags
                    input-id="tags-pills-2"
                    v-model="value2"
                    tag-variant="primary"
                    tag-pills
                    size="lg"
                    separator=" "
                    placeholder="Nouveau choix..."
                    
                    ></b-form-tags>
                </div>

                            <div class="p-1 text-right btn-group-sm">
                                <b-button
                                    style="margin-right:10px"
                                    type="reset"
                                    @click="close"
                                    variant="danger"
                                    >Retour</b-button
                                >
                                <b-button
                                    type="submit"
                                    variant="success"
                                    >Valider</b-button
                                >
                            </div>
                        </b-form>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

export default {
    name: "edit-attribut",
    components: {
   
    },
    data ()  {
            return{
                selected : null,
                model: 'tab-2',
                
                types: [
                    { label: 'Champs texte'},
                    { label: 'Un seul choix'},
                    { label: 'Liste de sélection'},
                
                ],
                textArea : false,
                oneChoice : false,
                multipleChoice : false,
            }
            

        },
    props: {
        dialog: {
            type: Boolean
        },
        items: {
            type: Object
        }
    },
    methods: {
        close() {
            this.$emit("close");
        },
        
        selectValue(){
            if(this.selected.label === "Champs texte"){
                this.textArea = true;
                this.oneChoice = false;
                this.multipleChoice = false;

            }
            if(this.selected.label === "Un seul choix"){
                this.oneChoice = true;
                this.textArea = false;
                this.multipleChoice = false;
            }
            if(this.selected.label === "Liste de sélection"){
                this.multipleChoice = true;
                this.textArea= false;
                this.oneChoice=false;
                
            }
        }
    },
    mounted() {
    this.selected.label = items.type;
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
