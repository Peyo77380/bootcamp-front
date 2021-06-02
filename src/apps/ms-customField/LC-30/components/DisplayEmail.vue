<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card> 
        <div>
          <div class="mb-5">
            <v-toolbar dark color="primary" class="mb-6">
              <v-btn icon dark @click="closeDisplay">
                <v-icon>close</v-icon>
              </v-btn>
              <v-toolbar-title>Informations de l'email</v-toolbar-title>
              <v-spacer></v-spacer>
                <v-toolbar-items>
                <v-btn dark flat>Modifier</v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </div>
          <div class="main-card card col-11 mb-5">
            <div class="table-responsive card-body"><h5 class="card-title">Information génerales</h5>
              <table class="align-middle mb-0 table table-borderless table-striped">
                <tbody>
                  <tr>
                      <td class="text-center font-weight-bold">Clé</td>
                      <td class="text-center text-muted">{{ details.key }}</td>
                  </tr>
                  <tr>
                      <td class="text-center font-weight-bold">Titre</td>
                      <td class="text-center text-muted">{{ details.title }}</td>
                  </tr>
                  <tr>
                      <td class="text-center font-weight-bold">Description</td>
                      <td class="text-center text-muted">{{ details.description }}</td>
                  </tr>
                  <tr>
                      <td class="text-center font-weight-bold">Date de création</td>
                      <td class="text-center text-muted">{{ details.creationDate }}</td>
                  </tr>
                  <tr>
                      <td class="text-center font-weight-bold">Date de modification</td>
                      <td class="text-center text-muted">{{ details.updateDate }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>  
          <div class="main-card card col-11  mb-5">
            <div class="card-body"><h5 class="card-title">Contenu de l'email</h5>
              <div class="scroll-area-sm">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                  <p>{{ details.content }}</p>
                </VuePerfectScrollbar>
              </div>
            </div>
          </div> 
        </div>       
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  export default {
    name: "display-email",
    components: {
      VuePerfectScrollbar
    },
    data () {
      return {
      }
    }, 
    props: {
        dialog: {
            type: Boolean
        },
        details: {
          type: Object
        }
    }, 
    methods: {
      closeDisplay() {
        this.$emit("closeDisplay")
      }
    }
  }
</script>
