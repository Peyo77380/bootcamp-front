<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout d-flex flex-column>

        <h4>Verification du siret</h4>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="siret"
            :rules="nameRules"
            :counter="20"
            label="Siret"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="nomesociete"
            :rules="nameRules"
            :counter="20"
            label="Nom Société"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="numerotva"
            :rules="nameRules"
            :counter="20"
            label="Numéro TVA"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="adresse"
            :rules="nameRules"
            :counter="20"
            label="Adresse"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="nombresalaries"
            :rules="nameRules"
            label="Nombre Salaries"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="statut"
            :rules="nameRules"
            :counter="20"
            label="Statut"
            required
          ></v-text-field>
        </v-flex>
        
        <v-flex
        xs12
        md4
        >
        <v-autocomplete
            ref="secteuractivite"
            v-model="secteuractivite"
            :rules="[() => !!secteuractivite || 'This field is required']"
            :items="secteuractivite"
            label="Secteur d'activité"
            placeholder="Select..."
            required
          ></v-autocomplete>
          </v-flex>

          <v-flex
        xs12
        md4
        >
        <v-autocomplete
            ref="categotie"
            v-model="categorie"
            :rules="[() => !!categorie || 'This field is required']"
            :items="categorie"
            label="Categorie"
            placeholder="Select..."
            required
          ></v-autocomplete>
          </v-flex>
      </v-layout>
    </v-container>
  </v-form>
  
</template>

<script>
  export default {
    data: () => ({
      secteuractivite:['Agroalimentaire', 'Banque | Assurances', 'Bois | Papier | Carton | Imprimerie', 'BTP | Matériaux de constriction', 'Chimie | Parapharmacie', 'Comerce | Négoce | Distribution', 'Edition | omunication | Multimédia', 'Electronique | Electricité', 'Etudes | Conseils', 'Informatique | Télécoms', 'Machines | Equipements automobiles', 'Métalurgie | Travail du métal', 'Services aux entreprises', 'Transport | Logistique'],
      categorie:['Domicilié', 'Resident', 'Autre'],
      valid: false,
      nomesociete: '',
      siret: '',
      nombresalaries:'',
      statut:'',
      numerotva:'',
      adresse:'',
      nameRules: [
        v => !!v || 'This field is required',
        v => v.length <= 20 || 'Name must be less than 20 characters'
      ],
    })
  }
</script>
