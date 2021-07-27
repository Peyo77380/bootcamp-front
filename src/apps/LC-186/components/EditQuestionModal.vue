<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog2" max-width="600px">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Modification - {{ questions.question }}
        </v-card-title>
        
        <v-card-text>
          
          <v-container>
            <b-form row wrap>
                <v-select
                                
                    :items="categories"
                    item-text="label"
                    item-value="label"
                    persistent
                    return-object
                    single-line
                    outlined
                            >
                            </v-select>

              <b-form-group
                id="input-group-1"
                label="Question :"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="questions.question"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Réponse :"
                label-for="input-2"
              >
                <b-form-textarea
                  id="input-2"
                  v-model="questions.answer"
                  required
                ></b-form-textarea>
              </b-form-group>

              <div class="p-1 text-right btn-group-sm">
                <b-button
                  style="margin-right: 10px"
                  type="reset"
                  @click="close2"
                  variant="danger"
                  >Retour</b-button
                >
                <b-button type="submit" @click="saveModification" variant="success"
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
import { categories } from "@/utils/globalCategories";

export default {
  name: "edit-question",
  components: {
    
  },
  data() {
        return {
            
            categories:categories
            
        };
    },
  computed: {
        editCategory() {
            return { ...this.editedCategory };
        }
    },


  props: {
    dialog2: {
      type: Boolean,
    },
    questions: {
      type: Object,
    },
    editedCategory: {
            type: Object
        },

  },
  computed: {
        editCategory() {
            return { ...this.categories };
        }
    },

  methods: {
    close2() {
      this.$emit("close2");
    },
    saveModification() {
      this.close2();
      this.$emit("saveModification", this.questions);
    },

    async update() {
      // APPEL API => UPDATE
      try {
        const payload = {
          question: this.questions.question,
          answer: this.questions.answer,
        };
        await this.updateParameter(this.questions.id, payload);
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
