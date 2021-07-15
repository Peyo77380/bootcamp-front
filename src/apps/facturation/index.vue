<template>
  <div class="h-100 mb-3 mt-3 card">
    <b-container>
      <b-row>
        <b-col>
          <b-row>
            <b-col class="mx-auto mt-auto mb-auto" md="7">
              <h1>
                {{ titre }}
              </h1>
            </b-col>
            <b-col md="3" class="mx-auto mt-auto mb-auto">
              <button
                @click="openModal()"
                class="btn-dashed btn-outline-warning disabled btn-lg"
              >
                Créer une Facture
                <i class="ml-2 mb-2 lnr-file-add btn-icon-wrapper"></i>
              </button>
            </b-col>
          </b-row>
          <!-- <b-row>
            <b-col md="7" class="mx-auto mt-5">
              <div class="input-group mx-auto">
                <input type="text" class="form-control" />
                <button>
                  <span class="input-group-text">Rechercher</span>
                </button>
              </div>
            </b-col>
          </b-row> -->
          <b-row>
            <b-col class="mx-auto mt-5">
              <b-table
                hover
                :items="items"
                :fields="fields"
                thead-class="hidden_header"
              >
                <template #cell(title)="row">
                  {{ row.item.title }}
                </template>

                <template #cell(number)="row">
                  {{ row.item.number }}
                </template>

                <template #cell(actions)="row">
                  <button
                    type="button"
                    class="btn btn-link"
                    @click="show(row.item)"
                  >
                    <i class="lnr-file-empty btn-icon-wrapper"> </i>
                  </button>

                  <button
                    type="button"
                    class="btn btn-link"
                    @click="editRelation(row.item)"
                  >
                    <i class="icon-gradient bg-grow-early lnr-pencil"> </i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-link"
                    @click="removeRelation(row.item)"
                  >
                    <i class="lnr-trash icon-gradient bg-love-kiss"> </i>
                  </button>
                </template>
              </b-table>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
     <v-dialog max-width="600px"  v-model="modal">
      <v-card >
        <v-card-text>
          <v-container>
            <h4>
              <i> Creation de facture:</i>
            </h4>
            <div class="main-card">
              <form>
                <div class="form-row mt-3 mb-3">
                  <div class="col-md-6">
                      <v-select label="countryName" v-model="optionss" :options="options"></v-select>
                  </div>
                </div>
              </form>
            </div>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="close">Annuler</v-btn>
          <v-btn color="blue darken-1" flat @click="save">Suivant</v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>





  </div>
</template>

<script>
// import modalFactureAdd from "./components/modalFactureadd.vue";
import vSelect from 'vue-select'


export default {
  name: "",
  data() {
    return {
      titre: "Facturation",
      modal: false,
      fields: [
        "Id",
        "Numero",
        "Date",
        "Membre",
        "Societe_Organisation",
        "Montant_HT",
        "TVA",
        "Total_TTC",
        "Etat",
        "Actions",
      ],
      items: [
        {
          Id: "1",
          Numero: "LCDR100",
          Date: "26 juillet 1997",
          Membre: "Kevin Junior",
          Societe_Organisation: "plexius polaire",
          Montant_HT: "150",
          TVA: "13.33",
          Total_TTC: "260",
          Etat: "à payer",
        },
        {
          Id: "2",
          Numero: "LDRA700",
          Date: "2 juillet 2021",
          Membre: "Alexia gle",
          Societe_Organisation: "plexius polaire",
          Montant_HT: "75",
          TVA: "12.33",
          Total_TTC: "360",
          Etat: "brouillon",
        },
        {
          Id: "3",
          Numero: "LkRA500",
          Date: "4 octobre 2021",
          Membre: "Paul kui",
          Societe_Organisation: "Actioneo",
          Montant_HT: "49",
          TVA: "6.3",
          Total_TTC: "80",
          Etat: "payéé en Co",
        },
      ],
      optionss:'',
      editedDatas: {},
      editedIndex: -1,
      modalEdit: false,
      options: [
        { countryCode: "AU", countryName: "Australia" },
        { countryCode: "CA", countryName: "Canada" },
        { countryCode: "CN", countryName: "China" },
        { countryCode: "DE", countryName: "Germany" }
      ],
    };
  },
  components: {
    'v-select': vSelect,
  },

  methods: {
    openModal() {
      this.modal = true;
    },
    close() {
      this.modal = false;
    },
    save(){
        this.$router.push('add-facturation')
    },
    pushNewFacture: function (data) {
     
      this.items.push(data);
    },
    editRelation(item) {
      this.editedDatas = item;
      this.editedIndex = this.items.indexOf(item);
      this.modalEdit = true;
    },

    pushEditDatas: function (data) {
      Object.assign(this.items[this.editedIndex], data);
      this.editedIndex = -1;
    },
  },
};
</script>
