<template>
    <div>
        <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="600px">
                <v-card>
                    <v-card-text>
                        <div class="">
                            <div class="row">
                                <div class="col-md-12">
                                    <h5 class="card-title mt-3">Création d'une action commerciale</h5>
                                    <form class="mt-5">
                                        <div class="position-relative form-group">
                                            <label>Nom de la société</label>
                                            <input 
                                            name="email" 
                                            placeholder="Saisir le nom de la société" 
                                            type="email" class="form-control">
                                        </div>
                                        <div class="position-relative form-group">
                                            <label for="exampleEmail" class="">Type d'action commerciale</label>
                                            <input 
                                            name="email" 
                                            placeholder="Saisir le type d'action commerciale" 
                                            type="email" class="form-control">
                                        </div>
                                        <div class="position-relative form-group"><label for="exampleSelect" class="">Select</label><select name="select" id="exampleSelect" class="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select></div>
                                        
                                        <div class="position-relative form-group"><label for="exampleText" class="">Détails</label><textarea name="text" id="exampleText" class="form-control"></textarea></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat 
                        @click="closeModal"
                        >
                        Close
                        </v-btn>
                        <v-btn color="blue darken-1" flat 
                        @click="saveDatas"
                        >
                        Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>
    </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {
      dialog: {
            type: Boolean   
        }
  },
  methods: {
      closeModal() {
          this.$emit("closeModal")
      },
      saveDatas() {
          this.closeModal()
      }
  },
};
</script>

<style lang="scss" scoped></style>