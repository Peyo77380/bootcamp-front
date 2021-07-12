<template>
  <b-card class="main-card mb-3">
    <form-wizard title="" subtitle="" color="var(--primary)">
      <tab-content title="Informations générales">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <div class="row justify-content-center">
            <div class="col-md-5">
              <b-form-group
                id="input-group-1"
                label="* Nom Société:"
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

              <b-form-group id="input-group-5" label="CP:" label-for="input-5">
                <b-form-input
                  id="input-5"
                  v-model="form.cp"
                  placeholder="Entrez le code postale:"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-6"
                label="* Ville:"
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
                label="* Statut:"
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
                label="* Secteur d'activité:"
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
                label="* Categorie:"
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
              <p>* champs obligatoire</p>
            </div>
          </div>
        </b-form>
      </tab-content>
      <tab-content title="Référent">
        <b-form @submit="onSubmit2" @reset="onReset2" v-if="show">
          <div class="row justify-content-center">
            <div class="col-md-5">
              <b-form-group
                id="input-group-1"
                label="* Adresse email:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="Entrez l'email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="* Nom:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  placeholder="Entrez le nom"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="* Prenom:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="form.prenom"
                  placeholder="Entrez le prenom"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-4"
                label="Téléphone:"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  v-model="form.telephone"
                  placeholder="Entrez le numero de téléphone"
                ></b-form-input>
              </b-form-group>
              <p>* champs obligatoire</p>
            </div>
          </div>
        </b-form>
      </tab-content>
      <tab-content title="Réseaux sociaux">
        <b-form @submit="onSubmit3" @reset="onReset3" v-if="show">
          <div class="row justify-content-center">
            <div class="col-md-5">
              <b-form-group
                id="input-group-1"
                label="Site internet:"
                description="https://www.example.com/page"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.siteinternet"
                  type="url"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Linkedin:"
                description="https://www.linkedin.com/page"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.linkedin"
                  type="url"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Twitter:"
                description="https://twitter.com//page"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="form.twitter"
                  type="url"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-4"
                label="Facebook:"
                description="https://www.facebook.com//page"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  v-model="form.facebook"
                  type="url"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-5"
                label="Instagram:"
                description="https://www.instagram.com//page"
                label-for="input-5"
              >
                <b-form-input
                  id="input-5"
                  v-model="form.instagram"
                  type="url"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <!-- Standardiser les boutons !-->
        </b-form>
      </tab-content>
    </form-wizard>
  </b-card>
</template>
<script>
import { FormWizard, TabContent } from "vue-form-wizard";
export default {
  name: "wizard",
  components: {
    FormWizard,
    TabContent,
  },
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
        categorie: null,
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
        "Transport | Logistique",
      ],
      categorie: ["Domicilié", "Resident", "Autre"],
      statut: ["actif", "inactif"],
      show: true,
      form2: {
        email: "",
        name: "",
        prenom: "",
        telephone: "",
      },
      show2: true,
      form3: {
        siteinternet: "",
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
      },
      type: "url",
      show3: true,
    };
  },
  methods: {
    onSubmit() {
      this.$sweetNotif("Enregistré avec succès");
      // event.preventDefault();
      // alert(JSON.stringify(this.form));
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
    },
    onSubmit2() {
      this.$sweetNotif("Enregistré avec succès");
      // event.preventDefault();
      // alert(JSON.stringify(this.form));
    },
    onReset2(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.prenom = "";
      this.form.telephone = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onSubmit3() {
      this.$sweetNotif("Enregistré avec succès");
      // event.preventDefault();
      // alert(JSON.stringify(this.form));
    },
    onReset3(event) {
      event.preventDefault();
      // Reset our form values
      this.form.siteinternet = "";
      this.form.linkedin = "";
      this.form.twitter = "";
      this.form.facebook = "";
      this.form.instagram = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>