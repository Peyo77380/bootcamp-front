<template>
    <div>
        <div>
            <breadcrumb1></breadcrumb1>
        </div>
        <div>
            <h3>
                Ajouter une fiche société
            </h3>
        </div>
        <b-card class="mb-3" no-body>
              <b-tabs card vertical>
                    <b-tab title="Informations générales" active>
                        <forms1></forms1>
                    </b-tab>
                    <b-tab title="Contacts">
                        <forms2></forms2>
                    </b-tab>
                </b-tabs>
              <!-- <div class="d-block text-right card-footer">
                      <button class="mr-2 btn btn-link btn-sm">Abandoner</button>
                      <button class="btn btn-success btn-lg">Créer</button>
                </div> -->
        </b-card>
        
                  
        
        
       
    </div>
</template>

<script>
import breadcrumb1 from '@/apps/LC-31-RMC/components/iconDividers';
import Vue from 'vue'
import VueTextareaAutosize from 'vue-textarea-autosize'
Vue.use(VueTextareaAutosize);
import forms1 from '@/apps/LC-31-RMC/components/info_general';
import forms2 from '@/apps/LC-31-RMC/components/contact';


export default {
    components:{
        breadcrumb1,
        forms1,
        forms2
    },
}
</script>
