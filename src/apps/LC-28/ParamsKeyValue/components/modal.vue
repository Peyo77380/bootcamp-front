<template>
  <div class="text-xs-center">
      
    <v-dialog  v-model="dialog2" max-width="600px">
        <v-card>
        <v-card-title>
          <span class="headline">Modification - {{items.key}}</span>
        </v-card-title>
        <v-card-text>
      <b-form >
      <b-form-group
        id="input-group-1"
        label="Valeur :"
        label-for="input-1"
        >
        <b-form-input
          id="input-1"
          :value="items.value"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Infos :" label-for="input-2">
        <b-form-input
          id="input-2"
          :value="items.info"  
          required
        ></b-form-input>
      </b-form-group>
    
        <div class="p-1 text-right btn-group-sm ">
            <b-button style="margin-right:10px" type="submit" @click="saveModification" variant="success">Valider</b-button>
            <b-button type="reset" @click="close2" variant="danger">Retour</b-button>
        </div>
   
    </b-form>
    </v-card-text>
    </v-card>
    </v-dialog>
    
  </div>
</template>

<script>
  export default {
    name: "edit-keyvalue",
    props:{
        dialog2:{
            type:Boolean
        },
        items: {
      type: Object
    }
    },
    methods:{
        close2(){
            this.$emit("close2")
        },
        saveModification() {
            this.close2();
            this.$emit("saveModification", this.items)

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