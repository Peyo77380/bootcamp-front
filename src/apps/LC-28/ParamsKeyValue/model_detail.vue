<template>
<div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn class=" outlined-search btn-pill"

                        elevation="2"
                        icon
                        outlined
                        small
                         v-on="on"><i class="pe-7s-search icon-color-search btn-icon-wrapper"> </i></v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Détail Clé - WELCOME_CREDITS
        </v-card-title>
        <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-text-field
            value="Membres"
            label="Catégorie"
            readonly
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            value="WELCOME_CREDITS"
            label="Clé"
            readonly
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            value="10"
            label="Valeur"
            readonly
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 >
          <v-text-field 
            value="Nombre de co offerts lors du premier abonnement à la Colloc"
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
            @click="dialog = false"
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
    data () {
      return {
        dialog: false
      }
    }
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