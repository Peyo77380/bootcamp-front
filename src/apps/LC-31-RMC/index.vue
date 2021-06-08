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
                <b-tabs pills card vertical >
                    <b-tab title="Informations générales" active >
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
    </div>
</template>

<script>
import breadcrumb1 from "@/apps/LC-31-RMC/components/iconDividers";
import Vue from "vue";
import VueTextareaAutosize from "vue-textarea-autosize";
Vue.use(VueTextareaAutosize);
import forms1 from "@/apps/LC-31-RMC/components/infos_generales";
import forms2 from "@/apps/LC-31-RMC/components/referent";
import forms3 from "@/apps/LC-31-RMC/components/reseaux_soc";

export default {
    components: {
        breadcrumb1,
        forms1,
        forms2,
        forms3
    },
};
</script>
