<template>
  <div class="text-xs-center">
    <v-dialog  v-model="dialog2" max-width="600px">
      
      <v-card>
        <v-card-title>
          <span class="headline">Modification REFUND_DEPOSIT_PERCENT</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12 sm12>
                
              </v-flex>
             
              <v-flex xs12 sm6 md4>
                <v-text-field label="Valeur" :value =items.value ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Infos"
                  :value =items.info
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
              </v-flex>
            </v-layout>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" @click="close2" flat>Sauvegarder</v-btn>
          <v-btn color="blue darken-1" @click="close2" flat>Fermer</v-btn>
        </v-card-actions>
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