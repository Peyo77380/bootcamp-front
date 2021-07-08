<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Modification de la catégorie "{{ categories.label }}""
        </v-card-title>
        
        <v-card-text>
          
          <v-container>
            <b-form row wrap>
                
              <b-form-group
                id="input-group-1"
                label="Categorie :"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="categories.label"
                  required
                ></b-form-input>
              </b-form-group>


              <div class="p-1 text-right btn-group-sm">
                <b-button
                  style="margin-right: 10px"
                  type="reset"
                  @click="close"
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

export default {
  name: "edit-category",
  components: {
    
  },

  props: {
    dialog: {
      type: Boolean,
    },
    categories: {
      type: Object,
    },
   
  },

  methods: {
    close() {
      this.$emit("close");
    },
    async update() {
      // APPEL API => UPDATE
      try {
        const payload = {
          label: this.categories.label,
        };
        await this.updateParameter(this.categories.id, payload);
        this.close();
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
