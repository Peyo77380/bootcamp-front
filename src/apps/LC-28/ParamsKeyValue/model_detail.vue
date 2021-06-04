<template>
<div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Détail Clé - {{items.key}}
        </v-card-title>
        <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12>
          <v-text-field
            :value=items.category
            label="Catégorie"
            readonly
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            :value=items.key
            label="Clé"
            readonly
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            :value=items.value
            label="Valeur"
            readonly
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 >
          <v-text-field 
            :value=items.info
            label="Infos"
            readonly
          ></v-text-field>
        </v-flex>
         </v-layout>
         
    </v-container>
  </v-form>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="close"
          >
            Retour
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: "display-keyvalue",
    props:{
        dialog:{
            type:Boolean
        },
        items: {
      type: Object
    }

    },
    methods:{
        close(){
            this.$emit("close")
        }
    },
    
  }
</script>

<style>
.outlined-search{

    border: 1px solid #ECA906;
                  border-radius:50%;
                  
}

.outlined-search:hover{
    background-color: #ECA906;
    
}
.icon-color-search{
    color:#ECA906;
}
.icon-color-search:hover{
    color:black;
}
</style>