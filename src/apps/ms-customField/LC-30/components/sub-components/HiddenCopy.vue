<template>
  <div>
        <div class="card-hover-shadow-2x card">
            <div class="card-header-tab card-header">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal"><i class="header-icon lnr-users icon-gradient bg-malibu-beach"> 
                    </i>Adresse email en copie cachée</div>
            </div>
            <div class="scroll-area-">
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
            <div class="d-block text-right card-footer">
                <button @click="openModalEmail" class="btn btn-primary">Ajouter</button>
            </div>
        </div>
        <v-dialog v-model="modalEmail" persistent max-width="290">
            <v-card>
                <v-card-title class="headline">Ajouter adresse Email en CC</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field
                            v-model="createdEmail.value"
                            :rules="emailRules"
                            label="Email en copie cachée"
                            required
                        ></v-text-field>
                    </v-form>  
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn color="red darken-1" flat @click="closeModalEmail">Annuler</v-btn>
                    <v-btn color="blue darken-1" @click="saveHiddenEmail" flat >Enregistrer</v-btn>
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

