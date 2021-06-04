<template>
  <v-layout >
    <v-dialog  persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="outlined btn-pill" elevation="2" icon outlined small v-on="on"><i class="pe-7s-tools icon-color btn-icon-wrapper"> </i></v-btn>
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
                  
              </v-flex>
           
              
            
            </v-layout>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat>Fermer</v-btn>
          <v-btn color="blue darken-1" flat>Sauvegarder</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      
    })
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