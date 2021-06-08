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
        <div class="card-header">
                  <span slot="button-content"
                        ><i
                          class="
                            header-icon
                            lnr-earth
                            mr-3
                            text-muted
                            opacity-6
                          "
                        ></i
                      ></span>
                  <div class="btn-actions-pane-right actions-icon-btn">
                    <b-dropdown
                      toggle-class="btn-icon"
                      variant="link"
                      right
                    >
                      
                      <div>
                        <button
                          
                          type="button"
                          tabindex="0"
                          class="dropdown-item"
                        >
                          <country-flag
                            country="FR"
                            size="small"
                            class="mr-1"
                          /><span>Français</span>
                        </button>
                        <button
                        
                          type="button"
                          tabindex="0"
                          class="dropdown-item"
                        >
                          <country-flag
                            country="GB"
                            size="small"
                            class="mr-1"
                          /><span>Anglais</span>
                        </button>
                        <button
                          type="button"
                          tabindex="0"
                          class="dropdown-item"
                        >
                          <country-flag
                            country="DE"
                            size="small"
                            class="mr-1"
                          /><span>Allemand</span>
                        </button>
                      </div>
                    </b-dropdown>
                  </div>
                </div>

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
          <b-button type="reset" @click="close" variant="danger">Retour</b-button>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'
  export default {
      components:{
            
            CountryFlag,
                
    },
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