<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog2" max-width="600px">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Modification - {{ items.key }}
        </v-card-title>
        <div class="card-header">
          <span slot="button-content"
            ><i class="header-icon lnr-earth mr-3 text-muted opacity-6"></i
          ></span>
          <div class="btn-actions-pane-right actions-icon-btn">
            <b-dropdown toggle-class="btn-icon" variant="link" right>
              <div>
                <button type="button" tabindex="0" class="dropdown-item">
                  <country-flag country="FR" size="small" class="mr-1" /><span
                    >Français</span
                  >
                </button>
                <button type="button" tabindex="0" class="dropdown-item">
                  <country-flag country="GB" size="small" class="mr-1" /><span
                    >Anglais</span
                  >
                </button>
                <button type="button" tabindex="0" class="dropdown-item">
                  <country-flag country="DE" size="small" class="mr-1" /><span
                    >Allemand</span
                  >
                </button>
              </div>
            </b-dropdown>
          </div>
        </div>
        <v-card-text>
          <v-form>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12 sm6>
                  <v-text-field
                    :value="items.catName"
                    label="Catégorie"
                    readonly
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    :value="items.key"
                    label="Clé"
                    readonly
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
          <v-container>
            <b-form row wrap>
              <b-form-group
                id="input-group-1"
                label="Valeur :"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="items.value"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Infos :"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="items.info"
                  required
                ></b-form-input>
              </b-form-group>

              <div class="p-1 text-right btn-group-sm">
                <b-button
                  style="margin-right: 10px"
                  type="reset"
                  @click="close2"
                  variant="danger"
                  >Retour</b-button
                >
                <b-button type="submit" @click="update" variant="success"
                  >Valider</b-button
                >
              </div>
            </b-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag";
import { Parameters } from "@/mixins/parameter";
export default {
  name: "edit-keyvalue",
  components: {
    CountryFlag,
  },
  mixins: [Parameters],

  props: {
    dialog2: {
      type: Boolean,
    },
    items: {
      type: Object,
    },
  },
  methods: {
    close2() {
      this.$emit("close2");
    },
    async update() {
      // APPEL API => UPDATE
      try {
        const payload = {
          value: this.items.value,
          info: this.items.info,
        };
        await this.updateParameter(this.items._id, payload);
        this.close2();
      // eslint-disable-next-line no-empty
      } catch (error) {}
      //this.close2();
      // this.$emit("saveModification", this.items);
    },
  },
};
</script>
<style>
.outlined {
  border: 1px solid #1967c0;
  border-radius: 50%;
}

.outlined:hover {
  background-color: #1967c0;
}
.icon-color {
  color: #1967c0;
}
.icon-color:hover {
  color: white;
}
</style>
