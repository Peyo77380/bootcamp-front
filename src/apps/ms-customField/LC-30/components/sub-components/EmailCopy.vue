<template>
    <div>
        <div class="card-hover-shadow-2x card">
            <div class="card-header-tab card-header">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal"><i class="header-icon lnr-user icon-gradient bg-malibu-beach"> 
                    </i>Adresse email en copie</div>
            </div>
            <div class="scroll-area-sm">
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
                                            variant="outline-primary"
                                            @click="EditEmailCopy(email)">
                                            <i class="lnr-pencil btn-icon-wrapper"></i>
                                        </b-button>
                                         <b-button 
                                            class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" 
                                            variant="outline-danger"
                                            @click="deleteEmail(email)"
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
        <v-dialog v-model="modalEmail" persistent max-width="400">
            <v-card>
                <v-card-title class="headline">Ajouter adresse Email</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-flex xs12 sm12 md12>
                            <div class="col-md-12">
                                <div class="position-relative form-group">
                                    <label>Email en copie</label>
                                    <input name="email"
                                    placeholder="" 
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
                        class="btn mr-2 mb-2 btn-primary"
                        @click="saveEmail"  
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
  name: "Email-copy",
  created() {},

  data() {
    return {
        modalEmail: false,
        createdEmail: {},
        editedIndex: -1,
        emailRules: [
        v => !!v || 'une adresse email est requise',
        v => /.+@.+/.test(v) || "l'email doit avoir un format valide"
      ]
    };
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
          this.modalEmail = false;
          this.createdEmail= {}
      },
      saveEmail() {
          this.closeModalEmail()
          if(this.editedIndex>=0) {
              Object.assign (this.editedEmail.emailCopy[this.editedIndex], this.createdEmail),
              this.editedIndex=-1;
          }
          else {
              this.editedEmail.emailCopy.push(this.createdEmail)
              //TODO point API pour enregistrer nouveau email a mettre en copie
          }
          this.createdEmail = {}
      },
      deleteEmail(email) {
          this.editedIndex = this.editedEmail.emailCopy.indexOf(email);
          this.editedEmail.emailCopy.splice(this.editedIndex,1)
          //TODO point API pour supprimer email a mettre en copie 
      },
      EditEmailCopy(email) {
          this.openModalEmail();
          this.editedIndex = this.editedEmail.emailCopy.indexOf(email);
         //TODO point API pour modifier l'adresse mail a mettre en copie
      }
  },
};
</script>

