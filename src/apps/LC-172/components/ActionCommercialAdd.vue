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
                                            <label>Nom de la société*</label>
                                            <input 
                                            placeholder="Saisir le nom de la société" 
                                            type="email" class="form-control"
                                            v-model="newDatas.name"
                                            >
                                        </div>
                                        <div class="position-relative form-group">
                                            <label >
                                                Type d'action commerciale*
                                            </label>
                                            <select 
                                            name="select"  
                                            class="form-control"
                                            v-model="newDatas.action"
                                            >
                                            <option v-for="item in type" :key="item.value" > {{ item.text }}</option>
                                            </select>
                                        </div>
                                        <div class="position-relative form-group">
                                            <label>
                                                État de l'action commerciale*
                                            </label>
                                            <select 
                                            name="select"  
                                            class="form-control"
                                            v-model="newDatas.status"
                                            >
                                            <option v-for="item in etat" :key="item.value"> {{ item.text }}</option>
                                            </select>
                                        </div>
                                        <div class="position-relative form-group">
                                            <label >
                                                Résponsable de l'action commerciale*
                                            </label>
                                            <select 
                                            name="select"  
                                            class="form-control"
                                            v-model="newDatas.responsable"
                                            >
                                            <option v-for="item in responsable" :key="item.value"> {{ item.text }}</option>
                                            </select>
                                        </div>
                                        <div class="position-relative form-group">
                                            <label>Détails
                                            </label>
                                            <textarea name="text" 
                                            class="form-control"
                                            v-model="newDatas.detail"
                                            ></textarea>
                                        </div>
                                        <div class="position-relative form-group">
                                            <label>Date d'écheance*
                                            </label><br>
                                            <date-picker 
                                            v-model="newDatas.date" 
                                            lang="fr" 
                                            :not-before="new Date()"
                                            :format="format"
                                            valueType="format"
                                            >
                                            </date-picker>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    <small>*information obligatoire</small>
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
import DatePicker from 'vue2-datepicker'
export default {
  name: "ModalAdd",
  components: {     
      DatePicker
  },

  data() {
    return {
        type: [
            {text: 'Sélectionner votre action commerciale', value: null},
            {text: 'Rappel télephonique', value: 1},
            {text: 'Envoyer un email', value: 2},
        ],
        responsable: [
            {text: "Sélectionner le responsable de l'action commerciale", value: null},
            {text: 'Margaux JEZEQUEL', value: 1},
            {text: 'Irwin MAGADUR', value: 2},
        ],
        etat: [
            {text: "Sélectionner l'état de l'action commerciale", value: null},
            {text:'en cours', value: 1},
            {text:'terminé', value: 2},
            {text:'à faire', value: 3},
        ],
        valueDate: new Date(),
        format: 'dd/MM/YYYY'
    };
  },
  props: {
        dialog: {
            type: Boolean   
            },
        newDatas: {
            type: Object
        }

  },
  methods: {
      closeModal() {
          this.$emit("closeModal")
      },
      saveDatas() {
          this.closeModal()
          this.$emit("saveDatas", this.newDatas)
      }
  },
};
</script>
