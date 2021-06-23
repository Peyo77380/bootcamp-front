<template>
    <div class="text-xs-center">
    <v-dialog  v-model="dialog2" max-width="600px">
            <div>
            <v-card>
                <v-card-text>
            <v-form>
                
            </v-form>
             <v-container>
                 <v-select 
                    v-model="selected"
                    :items="items"
                    item-text="label"
                    item-value="label"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line>
                 </v-select>
                <div v-if="selected === 'Champs texte'"> lorem ipsum</div>
                <div v-else-if="selected === 'Un seul choix'">flnzpf</div>
                <div v-else-if="selected === 'Liste de sélection'">uhoh</div>
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
                <b-form-group
                    id="input-group-1"
                    label="Options :"
                    label-for="input-1"
                    >
                    <b-form-input
                    id="input-1"
                
                    required
                    ></b-form-input>
                </b-form-group>

               
    
        <div class="p-1 text-right btn-group-sm ">
            <b-button style="margin-right:10px" type="reset" @click="close2" variant="danger">Retour</b-button>
            <b-button  type="submit" @click="saveModification" variant="success">Valider</b-button>
        </div>
    </b-form>
             </v-container>
    </v-card-text>
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
                selected: '',
                model: 'tab-2',
                select: { label: 'Champs texte'},
                items: [
                    { label: 'Champs texte'},
                    { label: 'Un seul choix'},
                    { label: 'Liste de sélection'},
                
                ],
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
        selectValue() {
            this.selected.label;
            
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
