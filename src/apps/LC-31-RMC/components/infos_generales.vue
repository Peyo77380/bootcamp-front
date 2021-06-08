<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <b-form-group
                        id="input-group-1"
                        label="Nom Société:"
                        label-for="input-1"
                    >
                        <b-form-input
                            id="input-1"
                            v-model="form.societe"
                            placeholder=" Entrez le nom société"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-2"
                        label="Siret:"
                        label-for="input-2"
                    >
                        <b-form-input
                            id="input-2"
                            v-model="form.siret"
                            placeholder="Entrez le Siret"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-3"
                        label="Numéro TVA:"
                        label-for="input-3"
                    >
                        <b-form-input
                            id="input-3"
                            v-model="form.numerotva"
                            placeholder="Entrez le numéro de TVA"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-4"
                        label="Adresse:"
                        label-for="input-4"
                    >
                        <b-form-input
                            id="input-4"
                            v-model="form.adresse"
                            placeholder="Entrez l'Adresse:"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-5"
                        label="CP:"
                        label-for="input-5"
                    >
                        <b-form-input
                            id="input-5"
                            v-model="form.cp"
                            placeholder="Entrez le code postale:"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-6"
                        label="Ville:"
                        label-for="input-6"
                    >
                        <b-form-input
                            id="input-6"
                            v-model="form.ville"
                            placeholder="Entrez le nom de ville:"
                            required
                        ></b-form-input>
                    </b-form-group>
                </div>
                <div class="col-md-5">
                    <b-form-group
                        id="input-group-7"
                        label="Nombre Salaries:"
                        label-for="input-7"
                    >
                        <b-form-input
                            id="input-7"
                            v-model="form.nombresalaries"
                            placeholder="Entrez le nombre de salaries:"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-8"
                        label="Statut:"
                        label-for="input-8"
                    >
                        <b-form-select
                            id="input-8"
                            v-model="form.statut"
                            :options="statut"
                            required
                        ></b-form-select>
                    </b-form-group>

                    <b-form-group
                        id="input-group-9"
                        label="Secteur d'activité:"
                        label-for="input-9"
                    >
                        <b-form-select
                            id="input-9"
                            v-model="form.secteuractivite"
                            :options="secteuractivite"
                            required
                        ></b-form-select>
                    </b-form-group>

                    <b-form-group
                        id="input-group-10"
                        label="Categorie:"
                        label-for="input-10"
                    >
                        <b-form-select
                            id="input-10"
                            v-model="form.categorie"
                            :options="categorie"
                            required
                        ></b-form-select>
                    </b-form-group>

                    <div class="position-relative form-group">
                        <label for="exampleFile" class="">Logo</label
                        ><input
                            name="file"
                            id="exampleFile"
                            type="file"
                            class="form-control-file"
                        />
                        <small class="form-text text-muted"
                            >Ils sont aceptes formats: .jpg, .png, .raw</small
                        >
                    </div>
                </div>
            </div>
            <div class="row justify-content-end">
                <b-button type="reset" variant="danger">Clear</b-button>

                <b-button type="submit" variant="success">Valider</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                societe: "",
                siret: "",
                numerotva: "",
                adresse: "",
                cp: "",
                ville: "",
                nombresalaries: "",
                statut: null,
                secteuractivite: null,
                categorie: null
            },
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
            show: true
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.societe = "";
            this.form.siret = "";
            this.form.numerotva = "";
            this.form.adresse = "";
            this.form.cp = "";
            this.form.ville = "";
            this.form.statut = null;
            this.form.secteuractivite = null;
            this.form.categorie = null;
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        }
    }
};
</script>
