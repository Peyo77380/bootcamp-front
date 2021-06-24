<template>
    <div class="text-xs-center">
    <v-dialog  v-model="dialog2" max-width="600px">
            <div>
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Création nouvel attribut
                </v-card-title>
             <v-container>
                 <v-select 
                    v-model="selected"
                    :items="items"
                    item-text="label"
                    item-value="label"
                    persistent-hint
                    return-object
                    single-line
                    @change="selectValue"
                    >
                    
                 </v-select>
                
                <b-form row wrap>
                <b-form-group
                    id="input-group-1"
                    label="Nom :"
                    label-for="input-1"
                    >
                    <b-form-input
                    id="input-1"
                
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Identifiant :" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    
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

               
    
        <div class="p-1 text-right btn-group-sm " style="margin-top:10px">
            <b-button style="margin-right:10px" type="reset" @click="close2" variant="danger">Retour</b-button>
            <b-button  type="submit" @click="saveModification" variant="success">Valider</b-button>
        </div>
    </b-form>
             </v-container>
    
    </v-card>
            
        </div>
        
    </v-dialog>
  </div>
</template>

<script>


  export default {
    
    name: "new-attribut-modal",
    components:{
        
    },
    data ()  {
            return{
                selected: { label: 'Champs texte'},
                model: 'tab-2',
                
                items: [
                    { label: 'Champs texte'},
                    { label: 'Un seul choix'},
                    { label: 'Liste de sélection'},
                
                ],
                textArea : true,
                oneChoice : false,
                multipleChoice : false,
            }
            

        },
        
    props:{
        dialog2:{
            type:Boolean
        },
        
    },
    methods:{
        close2(){
            this.$emit("close2")
        },

        saveModification() {
            this.close2();
            this.$emit("saveModification", this.items)
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
    }

  }
</script>
<style>
.outlined{
    border: 1px solid #1967C0;
    border-radius:50%;
}

.outlined:hover{
    background-color: #1967C0;
}
.icon-color{
    color:#1967C0;
}
.icon-color:hover{
    color:white;
}
</style>
