<template>
  <div class="col-sm-12 col-lg-6">
        <div class="card-hover-shadow-2x mb-3 card">
            <div class="card-header-tab card-header">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal"><i class="header-icon lnr-users icon-gradient bg-malibu-beach"> 
                    </i>Adresse email en copie</div>
            </div>
            <div class="scroll-area-lg">
                <div class="chat-wrapper p-1">
                    <ul class="todo-list-wrapper list-group list-group-flush">
                        <li v-for="email in editedEmail.emailCopy" :key="email.id" class="list-group-item">
                            <div class="widget-content p-0">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                        <div>
                                            {{email.value}}
                                        </div>
                                    </div>
                                    <div class="widget-content-right ">
                                        <b-button 
                                            class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" 
                                            variant="outline-danger"
                                            @click="deleteEmail(email)"
                                            >
                                            <i class="lnr-trash btn-icon-wrapper"></i>
                                        </b-button>
                                        <b-button 
                                            class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" 
                                            variant="outline-primary"
                                            @click="EditEmailCopy(email)">
                                            <i class="lnr-pencil btn-icon-wrapper"></i>
                                        </b-button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="d-block text-right card-footer">
                <button @click="openModalEmail" class="btn btn-primary">Ajouter</button>
            </div>
        </div>
        <v-dialog v-model="modalEmail" persistent max-width="290">
            <v-card>
                <v-card-title class="headline">Ajouter adresse Email</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-flex xs12 sm12 md12>
                            <v-text-field 
                                v-model="createdEmail.value"
                                label="Adresse email à mettre en copie">
                            </v-text-field>
                        </v-flex>
                    </v-form>  
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn color="red darken-1" flat @click="closeModalEmail">Annuler</v-btn>
                    <v-btn color="blue darken-1" @click="saveEmail" flat >Enregistrer</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog> 
    </div>
</template>

<script>
export default {
  name: "Test",
  created() {},

  data() {
    return {
        modalEmail: false,
        createdEmail: {},
        editedIndex: "",

    };
  },

  components: {
      
  },

  props: {
      editedEmail: {
            type: Object
        }
  },

  methods: {
      openModalEmail() {
          this.modalEmail = true
      },
      closeModalEmail() {
          this.modalEmail = false
          //console.log("tets tableau", this.editedEmail.emailCopy)
      },
      saveEmail() {
          this.editedEmail.emailCopy.push(this.createdEmail),
          //@TODO point API pour enregistrer nouveau email a mettre en copie
          this.createdEmail = {},
          this.closeModalEmail()
      },
      deleteEmail(email) {
          this.editedIndex = this.editedEmail.emailCopy.indexOf(email);
          this.editedEmail.emailCopy.splice(this.editedIndex,1)
          //@TODO point API pour supprimer email a mettre en copie 
      },
      EditEmailCopy(email) {
          this.modalEmail = true;
          this.EditedIndex = this.editedEmail.emailCopy.indexOf(email);
          this.editedEmail.emailCopy.value.splice(this.editedIndex,1,this.createdEmail)
      }
  },
};
</script>

<style lang="scss" scoped></style>