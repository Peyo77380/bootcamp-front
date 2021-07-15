<template>

    <v-card>
      <v-card-text>
        <v-container>
          <h4>
            <i> Creation de facture:</i>
          </h4>
          <div class="main-card">
            <v-form>
              <v-flex class="form-row mt-3 mb-3">
                <div class="col-md-4">
                  <v-text-field
                    v-model="datas.Numero"
                    name="numero"
                    placeholder="numero"
                  ></v-text-field>
                </div>
                <div class="col-md-4">
                  <div class="position-relative form-group">
                    <v-text-field
                      v-model="datas.Date"
                      name="date"
                    ></v-text-field>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="position-relative form-group">
                    <v-text-field
                      v-model="datas.Membre"
                      name="Membre"
                      placeholder="Membre"
                      
                    ></v-text-field>
                  </div>
                </div>
              </v-flex>

              <div class="form-row"></div>
              <div class="dropdown-divider"></div>
              <h5 class="text-center">Societe / Organisation</h5>
              <div class="form-row mt-3 mb-3">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <v-text-field
                      v-model="datas.Societe_Organisation"
                      name="Societe"
                      placeholder="Societe"
                    ></v-text-field>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <v-text-field
                      v-model="datas.organisation"
                      name="Organisation"
                      placeholder="Organisation"
                    ></v-text-field>
                  </div>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <h5 class="text-center">Coût total</h5>
              <div class="form-row mt-3 mb-3">
                <div class="col-md-4">
                  <div class="position-relative form-group">
                    <v-text-field
                      v-model="datas.Montant_HT"
                      name="Montant Ht"
                      placeholder="Montant Ht"
                    ></v-text-field>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="position-relative form-group">
                    <v-text-field
                      v-model="datas.TVA"
                      name="TVA"
                      placeholder="TVA"
                    ></v-text-field>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="position-relative form-group">
                    <v-text-field
                      v-model="datas.Total_TTC"
                      name="Total TTC"
                      placeholder="Total TTC"
                    ></v-text-field>
                  </div>
                </div>
              </div>

              <div class="dropdown-divider"></div>
              <h5 class="text-center">Etat</h5>
              <div class="form-row r mt-3 mb-3">
                <div class="col-md-6">
                  <div class=" position-relative form-group">
                    <v-select
                      v-model="datas.Etat"
                      :items="etat"
                      name="Etat"
                      placeholder="Etat"
                    ></v-select>
                  </div>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <h5 class="text-center">Type de produit</h5>
              <div class="form-row mt-3 mb-3">
                <div class="col-md-12">
                  <div class="position-relative form-group">
                    <textarea
                      v-model="datas.type"
                      name="type de produit"
                      placeholder="Etat"
                      type="text"
                      class="form-control"
                    ></textarea>
                  </div>
                </div>
              </div>
            </v-form>
          </div>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="close">Annuler</v-btn>
        <v-btn color="blue darken-1" flat @click="save">Sauvegarder</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
import Globals from "@/services/globals";
export default {
  name: "modalFactureAdd",
  props: ["showFactureAdd"],
  data: function () {
    return {
      datas: {
        Date: new Date().toLocaleDateString("fr-Fr", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        Numero: "",
        Membre: "",
        Societe_Organisation: "",
        Montant_HT: "",
        TVA: "",
        Total_TTC: "",
        Etat: "",
        type:"",
      },
      etat: Globals.etat,
    };
  },

  methods: {
    close() {
      this.$emit("closeModal");
    },
    resetSelect() {
      this.datas = {};
    },
    save() {
      // @todo : make API connexion
      //   this.$swal
      //     .fire({
      //       title: "Facture ajouter",
      //       icon: "success",
      //     })
      //     .then(() => {
      this.$emit("pushFactureDatas", this.datas);
      this.$emit("closeModal");
      this.resetSelect();
      // });
    },
  },
};
</script>
<style>
.r{
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>