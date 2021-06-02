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
                            <v-btn dark flat >Sauvegarder</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                </div>
                <div class="row justify-content-center">
                    <div class="main-card card col-11 mb-5">
                        <div class="table-responsive card-body"><h5 class="card-title">Informations génerales</h5>
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
                            <v-form>
                                <v-flex xs12 sm6 md6>
                                    <v-text-field
                                        label="Titre"
                                    > {{ editedEmail.title }}</v-text-field>
                                </v-flex>
                                <p>{{ editedEmail.title }}</p>
                                <v-flex xs12 sm6 md6>
                                    <v-text-field
                                        label="Description"
                                    > {{ editedEmail.description }}</v-text-field>
                                </v-flex>
                                <p>{{ editedEmail.description }}</p>
                            </v-form>
                        </div>
                    </div>  
                    <div class="main-card card col-11  mb-5">
                        <div class="card-body"><h5 class="card-title">Destinataires</h5>
                            <div class="scroll-area-sm">
                            </div>
                        </div>
                    </div> 
                </div>    
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
export default {
    name: "edit-email",
    data() {
    return {
        icon: "pe-7s-mail-open-file"
    };
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
        }
    },
};
</script>

