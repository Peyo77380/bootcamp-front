<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn 
  color="primary"
  elevation="2"
  icon
  outlined
  small
         v-on="on"><i class="pe-7s-tools btn-icon-wrapper"> </i></v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Modification REFUND_DEPOSIT_PERCENT</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12 sm12>
                <v-select
                  :items="['Réglages', 'Édition de contenu', 'Modes de règlement', 'Salles de réunion', 'Membres']"
                  label="Catégorie"
                  required
                ></v-select>
              </v-flex>
             
              <v-flex xs12 sm6 md4>
                <v-text-field label="Clé" ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Valeur"
                 
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                  <div class="v-text-field__slot">
                    <text-area aria-label='Default style' name='input-7-1' label="Infos" required > </text-area> 
                    </div>
              </v-flex>
           
              
            
            </v-layout>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Fermer</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Sauvegarder</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      dialog: false
    })
  }
</script>
