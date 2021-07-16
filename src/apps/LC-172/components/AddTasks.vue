<template>
    <div>
        <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="600px">
                <v-card>
                    <v-card-text>
                        <div class="">
                            <div class="row">
                                <div class="col-md-12">
                                    <h5 class="card-title mt-3">Informations de la tâche</h5>
                                    <form class="mt-5">
                                        <div class="position-relative form-group">
                                            <label>Intitulé de la tâche*</label>
                                            <input 
                                            placeholder="Saisir le nom de la société" 
                                            type="email" class="form-control"
                                            v-model="newDatas.title"
                                            >
                                        </div>
                                        <div class="position-relative form-group">
                                            <label >
                                                Type de tâche*
                                            </label>
                                            <select 
                                            name="select"  
                                            class="form-control"
                                            v-model="newDatas.type"
                                            >
                                            <option v-for="item in type" :key="item.value" :value="item.value"> {{ item.text }}</option>
                                            </select>
                                        </div>
                                        <div class="position-relative form-group">
                                            <label>
                                                État*
                                            </label>
                                            <select 
                                            name="select"  
                                            class="form-control"
                                            v-model="newDatas.status"
                                            >
                                            <option v-for="item in status" :key="item.value" :value="item.value"> {{ item.text }}</option>
                                            </select>
                                        </div>
                                        <div class="position-relative form-group">
                                            <label >
                                                Résponsable de la tâche*
                                            </label>
                                            <select 
                                            name="select"  
                                            class="form-control"
                                            v-model="newDatas.admin_id"
                                            >
                                            <option v-for="item in admin" :key="item.value" :value="item.value"> {{ item.text }}</option>
                                            </select>
                                        </div>
                                        <div class="position-relative form-group">
                                            <label>Détails
                                            </label>
                                            <textarea name="text" 
                                            class="form-control"
                                            v-model="newDatas.content"
                                            ></textarea>
                                        </div>
                                        <div class="position-relative form-group">
                                            <label>Date d'écheance*
                                            </label><br>
                                            <date-picker 
                                            v-model="newDatas.end_date" 
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
                    <button type="button" class="btn mr-2 mb-2 btn-danger"
                    @click="closeModal"
                    > Annuler</button>
                    <button type="button" class="btn mr-2 mb-2 btn-success"
                    @click="saveDatas"
                    > Valider</button>
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
            {text: 'Rappel télephonique', value: "0"},
            {text: 'Envoyer un email', value: "1"},
        ],
        admin: [
            {text: "Sélectionner le responsable de l'action commerciale", value: null},
            {text: 'Margaux JEZEQUEL', value: "0"},
            {text: 'Irwin MAGADUR', value: "1"},
        ],
        status: [
            {text: "Sélectionner l'état de l'action commerciale", value: null},
            {text:'en cours', value: "2"},
            {text:'terminé', value: "0"},
            {text:'à faire', value: "1"},
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
