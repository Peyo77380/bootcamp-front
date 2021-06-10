<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card> 
                <div class="mb-5">
                    <v-toolbar dark color="primary" class="mb-6">
                    <v-btn icon dark 
                    @click="closeEdit"
                    >
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Modification de l'email</v-toolbar-title>
                    <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark flat @click="saveModification">Sauvegarder</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                </div>
                <div class="row justify-content-center">
                    <div class="main-card card col-11 mb-5">
                        <div class="row card-body"> 
                            <div class="col-9">
                                <h5 class="card-title">Informations génerales</h5>
                                <div class="main-card card col-12 mb-3 p-4">
                                    <div class="row justify-content-between">
                                        <div class="card-shadow-primary col-3 mb-3 widget-chart widget-chart2 text-left card">
                                            <div class="widget-chat-wrapper-outer">
                                                <div class="widget-chart-content"><h6 class="widget-subheading">Clé</h6>
                                                    <div class="widget-chart-flex">
                                                        <div class="widget-numbers mb-0 w-100">
                                                            <div class="widget-chart-flex">
                                                                <div class="fsize-2">
                                                                    {{ editedEmail.key }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-3">
                                            <button 
                                            @click="openModalEmailTest"
                                            type="button" 
                                            class="btn mr-2 mb-2 btn-pill btn-icon btn-success">
                                                <i class="btn-icon-wrapper lnr-location"></i>
                                                Envoyer un email test
                                            </button>
                                            <div>
                                                <v-dialog v-model="modalEmailTest" persistent max-width="400">
                                                    <v-card>
                                                        <v-card-title class="headline">Saisir les destinataires</v-card-title>
                                                        <v-card-text>
                                                            <v-form>
                                                                <v-flex xs12 sm12 md12>
                                                                    <v-text-field
                                                                        
                                                                        
                                                                        label="destinataires"
                                                                        required
                                                                    ></v-text-field>
                                                                </v-flex>
                                                                <div class="col-md-12"><div class="position-relative form-group"><label for="exampleEmail11">Email</label><input name="email" id="exampleEmail11" placeholder="with a placeholder" type="email" class="form-control"></div></div>
                                                            </v-form>  
                                                        </v-card-text>
                                                        <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                            <v-btn color="red darken-1" flat >Annuler</v-btn>
                                                            <v-btn color="blue darken-1" flat >Envoyer</v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog> 
                                            </div>
                                        </div>   
                                    </div>
                                    <v-form>
                                        <v-flex md8>
                                            <v-text-field
                                                label="Titre"
                                                v-model="editedEmail.title"
                                            > {{ editedEmail.title }}</v-text-field>
                                        </v-flex>
                                        <v-flex md8>
                                            <v-text-field
                                                label="Description"
                                                v-model="editedEmail.description"
                                            > {{ editedEmail.description }}
                                            </v-text-field>
                                        </v-flex>
                                    </v-form>  
                                </div>   
                                <h5 class="card-title">Contenu de l'email</h5>  
                                <div class="main-card card col-12 mb-5 p-3">
                                    <ckeditor v-model="editedEmail.content" :editor="editor" ></ckeditor>
                                </div>
                            </div>
                             
                            <div class="col-3">
                                <div class="col-12 mb-2">
                                    <email-copy :editedEmail="editedEmail"/>
                                </div>
                                <div class="col-12 mb-2">
                                    <hidden-copy :editedEmail="editedEmail"/>
                                </div>
                                <div class="col-12 mb-2">
                                    <variable :editedEmail="editedEmail"/>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>    
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
import EmailCopy from "@/apps/ms-customField/LC-30/components/sub-components/EmailCopy";
import HiddenCopy from "@/apps/ms-customField/LC-30/components/sub-components/HiddenCopy";
import Variable from "@/apps/ms-customField/LC-30/components/sub-components/Variable";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: "edit-email",
    components: { 
        EmailCopy,
        HiddenCopy,
        Variable,
    },
    data() {
        return {
            icon: "pe-7s-mail-open-file",
            newEmail: {},
            editor: ClassicEditor,
            modalEmailTest: false,
        }
    },
    props: {
        dialog: {
            type: Boolean
        },
        editedEmail: {
            type: Object
        }
    },
    methods: {
        closeEdit() {
            this.$emit("close")
        }, 
        saveModification() {
            this.closeEdit();
            this.$emit("saveModification", this.editedEmail)

        },
        openModalEmailTest() {
            this.modalEmailTest = true;
        }
    },
};
</script>

<style>
  .ck-editor__editable {
    min-height: 400px;
   }
</style>