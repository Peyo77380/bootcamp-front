<template>
  <div>
        <div class="card-hover-shadow-2x card">
            <div class="card-header-tab card-header">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal"><i class="header-icon lnr-users icon-gradient bg-malibu-beach"> 
                    </i>Adresse email en copie cachée</div>
            </div>
            <div class="scroll-area-sm">
                <div class="chat-wrapper p-1">
                    <ul class="todo-list-wrapper list-group list-group-flush">
                        <li v-for="email in editedEmail.hiddenCopie" :key="email.id" class="list-group-item">
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
                                            variant="outline-primary"
                                            @click="editHiddenEmailCopy(email)">
                                            <i class="lnr-pencil btn-icon-wrapper"></i>
                                        </b-button>
                                        <b-button 
                                            class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" 
                                            variant="outline-danger"
                                            @click="deleteHiddenEmail(email)"
                                            >
                                            <i class="lnr-trash btn-icon-wrapper"></i>
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
        <v-dialog v-model="modalHiddenEmail" persistent max-width="400">
            <v-card>
                <v-card-title class="headline">Ajouter adresse Email en copie cachée</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-flex xs12 sm12 md12>
                            <div class="col-md-12">
                                <div class="position-relative form-group">
                                    <label>Email en copie</label>
                                    <input name="email"
                                    placeholder="Renseigner votre adresse email" 
                                    type="email" 
                                    class="form-control"
                                    v-model="createdEmail.value"
                                    required
                                    >
                                </div>
                            </div>
                        </v-flex>
                    </v-form>  
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                    <button 
                        type="button" 
                        class="btn mr-2 mb-2 btn-danger"
                        @click="closeModalEmail" 
                        >
                        Annuler
                    </button>
                    <button 
                        type="button" 
                        class="btn mr-2 mb-2 btn-success"
                        @click="saveHiddenEmail"
                        >
                        Enregistrer
                    </button>
                </v-card-actions>
            </v-card>
        </v-dialog> 
    </div>
</template>

<script>
export default {
  name: "Hidden-copy",
  created() {},

  data() {
    return {
        modalHiddenEmail: false,
        createdEmail: {},
        editedIndex: -1,
    };
  },
  props: {
      editedEmail: {
            type: Object
        }
  },

  methods: {
      openModalEmail() {
            this.modalHiddenEmail = true
      },
      closeModalEmail() {
            this.modalHiddenEmail = false;
      },
      saveHiddenEmail() {
          this.closeModalEmail()
          if(this.editedIndex>=0) {
              Object.assign (this.editedEmail.hiddenCopie[this.editedIndex], this.createdEmail),
              this.editedIndex=-1;
          }
          else {
              this.editedEmail.hiddenCopie.push(this.createdEmail)
              //TODO point API pour enregistrer nouveau email a mettre en copie caché 
          }
          this.createdEmail = {}
      },
      deleteHiddenEmail(email) {
          this.editedIndex = this.editedEmail.hiddenCopie.indexOf(email);
          this.editedEmail.hiddenCopie.splice(this.editedIndex,1)
          //TODO point API pour supprimer email a mettre en copie 
      },
      editHiddenEmailCopy(email) {
          this.openModalEmail();
          this.editedIndex = this.editedEmail.hiddenCopie.indexOf(email);
         //TODO point API pour modifier l'adresse mail a mettre en copie caché 
      }
  },
};
</script>

