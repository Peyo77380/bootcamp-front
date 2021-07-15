<template>
  <v-container>
    <v-card>
      <v-card-text>
        <h4>
          <i> Détail de la facture:</i>
        </h4>
        <div class="main-card">
          <v-form ref="form">
            <b-list-group class="col-6 mt-3 mr-auto ml-auto">
              <b-list-group-item
                v-for="(mission, index) in missions"
                :key="mission.id"
                class="form-row"
              >
                <b-row class="mr-auto ml-auto justify-center">
                  <div class="p-1 m-auto">
                    {{ mission }}
                  </div>
                  <button
                    type="button"
                    class="btn btn-link m-1"
                    @click="editMissions(mission, index)"
                  >
                    <i class="icon-gradient bg-grow-early lnr-pencil"> </i>
                  </button>

                  <button
                    type="button"
                    class="btn btn-link m-1"
                    @click="removeRelation(mission)"
                  >
                    <i class="lnr-trash icon-gradient bg-love-kiss"> </i>
                  </button>
                </b-row>
              </b-list-group-item>
            </b-list-group>

            <div class="dropdown-divider"></div>
          </v-form>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="save">Sauvegarder</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
// import InputSelects from "../../../../DemoPages/Forms/Components/InputSelects.vue";
// import Global from '@/services/globals'

// import Rules from "@/services/rules";

export default {
  //   components: { InputSelects },
  name: "MissionInfoModal",
  data() {
    return {
      id: 2,
      name: "",
      title: "",
      createdAt: new Date().toLocaleDateString("fr-Fr", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      selected: [0],
      nature: Global.nature,
      nameMission: "",
      editMission: {},
      missions: [],
      description: "",
      indexSelect: null,
      isEditing: false,
      rules: Rules.dft,
    };
  },

  methods: {
    getNature(type) {
      let currentType = this.nature.filter((item) => {
        return item.value == type;
      });
      if (currentType.length == 0 || currentType[0].value === 0) {
        return "";
      }
      return currentType[0].text;
    },

    pushNewMission: function (missionItem) {
      this.missions.push(this.nameMission);
      this.nameMission = "";
    },
    editMissions(nameMission, index) {
      this.nameMission = nameMission;
      this.indexSelect = index;
      this.isEditing = true;
    },
    upDateMission() {
      this.missions.splice(this.indexSelect, 1, this.nameMission);
      this.isEditing = false;
      this.nameMission = "";
    },
    removeRelation(item) {
      const index = this.missions.indexOf(item);
      this.missions.splice(index, 1);
    },
    save() {
      if (this.$refs.form.validate()) {
        // @todo : make api request
        this.$swal
          .fire({
            title: "Relation effectuée",
            icon: "success",
          })
          .then(() => {
            console.log("Okay !");
          });
      }
    },
  },
};
</script>