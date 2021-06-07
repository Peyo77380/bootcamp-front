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
        <div>
            <b-card>
                <b-tabs pills card vertical>
                    <b-tab
                        title="Informations générales"
                        background-color="red"
                        active
                    >
                        <forms1></forms1>
                    </b-tab>
                    <b-tab title="Référent">
                        <forms2></forms2>
                    </b-tab>
                    <b-tab title="Réseaux sociaux">
                        <forms3></forms3>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
        <div>
            <b-card>
                <div class="row justify-content-end">
                    <v-btn @click="clear">clear</v-btn>
                    <v-btn @click="submit" color="success">Valider</v-btn>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script>
import breadcrumb1 from "@/apps/LC-31-RMC/components/iconDividers";
import Vue from "vue";
import VueTextareaAutosize from "vue-textarea-autosize";
Vue.use(VueTextareaAutosize);
import forms1 from "@/apps/LC-31-RMC/components/info_general";
import forms2 from "@/apps/LC-31-RMC/components/contact";
import forms3 from "@/apps/LC-31-RMC/components/reseaux_soc";

export default {
    components: {
        breadcrumb1,
        forms1,
        forms2,
        forms3
    },

    methods: {
        submit() {
            this.$v.$touch();
        },
        clear() {
            this.$v.$reset();
            this.siret = "";
            this.nomsociete = "";
            this.numerotva = "";
            this.name = "";
            this.email = "";
            this.select = null;
            this.checkbox = false;
        }
    }
};
</script>
