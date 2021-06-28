<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog2" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Modification - {{ items._id }}</span>
        </v-card-title>
        <v-card-text>
          <b-form > 
            <b-form-group
              id="input-group-1"
              label="Activité:"
              label-for="input-1"
              
            >
              <b-form-input
                id="input-1"
                v-model="items.text"
                required
              ></b-form-input>
            </b-form-group>

            <div class="btn-group-sm btn-group">
              <b-button
                type="submit"
                @click="saveModification"
                variant="primary"
                >Sauvegarder</b-button
              >
              <b-button
                type="reset"
                @click="close2"
                variant="danger"
                class="ml-2"
                >Fermer</b-button
              > <!-- Standardiser les boutons et empecher que la modale se referme quand on clic à l'extérieur !-->
            </div>
          </b-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Modal",
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
    saveModification() {
      this.close2();
      this.$emit("saveModification", this.items);
    },
  },
};
</script>
