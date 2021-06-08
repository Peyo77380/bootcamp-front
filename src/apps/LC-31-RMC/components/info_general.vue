<template>
    <v-form v-model="valid">
        <v-container flex>
            <div class="row justify-content-center">
                <div class="col-md-5 bg-light">
                    <v-text-field
                        v-model="siret"
                        :rules="nameRules"
                        :counter="20"
                        label="Verification du SIRET"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="nomesociete"
                        :rules="nameRules"
                        :counter="20"
                        label="Nom Société"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="numerotva"
                        :rules="nameRules"
                        :counter="20"
                        label="Numéro TVA"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="adresse"
                        :rules="nameRules"
                        :counter="25"
                        label="Adresse"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="cp"
                        :rules="nameRules"
                        :counter="5"
                        label="CP"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="ville"
                        :rules="nameRules"
                        :counter="25"
                        label="Ville"
                        required
                    ></v-text-field>
                </div>
                <div class="col-md-5 bg-light">
                    <v-text-field
                        v-model="nombresalaries"
                        :rules="nameRules"
                        label="Nombre Salaries"
                        required
                    ></v-text-field>

                    <v-autocomplete
                        ref="statut"
                        v-model="statut"
                        :rules="[() => !!statut || 'This field is required']"
                        :items="statut"
                        label="Statut"
                        placeholder="Select..."
                        required
                    ></v-autocomplete>

                    <v-autocomplete
                        ref="secteuractivite"
                        v-model="secteuractivite"
                        :rules="[
                            () => !!secteuractivite || 'This field is required'
                        ]"
                        :items="secteuractivite"
                        label="Secteur d'activité"
                        placeholder="Select..."
                        required
                    ></v-autocomplete>

                    <v-autocomplete
                        ref="categotie"
                        v-model="categorie"
                        :rules="[() => !!categorie || 'This field is required']"
                        :items="categorie"
                        label="Categorie"
                        placeholder="Select..."
                        required
                    ></v-autocomplete>

                    <div class="position-relative form-group"><label for="exampleFile" class="">Logo</label><input name="file" id="exampleFile" type="file" class="form-control-file">
                      <small class="form-text text-muted">Ils sont aceptes formats: .jpg, .png, .raw</small>
                    </div>
                </div>
            </div>
            
        </v-container>

        <div class="row justify-content-end">
            <v-btn @click="clear">clear</v-btn>
            <v-btn @click="submit" color="success">Valider</v-btn>
        </div>
    </v-form>
</template>

<script>
export default {
    data: () => ({
        secteuractivite: [
            "Agroalimentaire",
            "Banque | Assurances",
            "Bois | Papier | Carton | Imprimerie",
            "BTP | Matériaux de constriction",
            "Chimie | Parapharmacie",
            "Comerce | Négoce | Distribution",
            "Edition | omunication | Multimédia",
            "Electronique | Electricité",
            "Etudes | Conseils",
            "Informatique | Télécoms",
            "Machines | Equipements automobiles",
            "Métalurgie | Travail du métal",
            "Services aux entreprises",
            "Transport | Logistique"
        ],
        categorie: ["Domicilié", "Resident", "Autre"],
        statut: ["actif", "inactif"],
        valid: false,
        nomesociete: "",
        siret: "",
        nombresalaries: "",
        numerotva: "",
        adresse: "",
        nameRules: [
            v => !!v || "This field is required",
            v => v.length <= 25 || "Name must be less than 25 characters"
        ]
    })
};
</script>
