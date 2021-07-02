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
                @click="addMission()"
                class="btn-dashed btn-outline-warning disabled btn-lg"
              >
                Créer une Facture
                <i class="ml-2 mb-2 lnr-file-add btn-icon-wrapper"></i>
              </button>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="7" class="mx-auto mt-5">
              <div class="input-group mx-auto">
                <input type="text" class="form-control" />
                <button>
                  <span class="input-group-text">Rechercher</span>
                </button>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="7" class="mx-auto mt-5">
              <b-table
                hover
                borderless
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
  </div>
</template>

<script>
export default {
  name: "editCustomer",
  data() {
    return {
      titre: "Facturation",
      modal: false,
      fields: ["number", "title", "Actions"],
      items: [
        {
          title: "Associée avocat",
          number: "1",
        },
      ],
      editedDatas: {},
      editedIndex: -1,
      modalEdit: false,
      loader: "dots",
      showPassifActif: false,
    };
  },
  components: {
    // modalEditMission,
  },

  methods: {
    addMission() {
      this.$router.push("/add-missions");
    },
    close() {
      this.modal = false;
    },
    closeEdit() {
      this.modalEdit = false;
    },
    pushNewMission: function (data) {
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
