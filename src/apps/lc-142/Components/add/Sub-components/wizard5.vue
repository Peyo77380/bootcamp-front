<template>    
    <!-- Onglet 5 du wizard-->
    <b-tab title="Tarif et notes" class="p-2">
        <div class="scroll-gradient">
            <div class="scroll-area-xlg">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="mt-3 mb-3">
                        <!-- Contenu 5e wizard-->
                        <b-form v-if="show">
                        <div class="row">
                            <div class="table-responsive">
                                <table class="align-middle mb-5 table table-border table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Tarifs clients</th>
                                            <th class="text-center">par heure</th>
                                            <th class="text-center">par 1/2 jour</th>
                                            <th class="text-center">par jour</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center text-muted">Prix public</td>
                                            <td><input type="text" class="text-center border"/></td>
                                            <td><input type="text" class="text-center border"/></td>
                                            <td><input type="text" class="text-center border"/></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center text-muted">Prix  membre</td>
                                            <td><input type="text" class="text-center border"/></td>
                                            <td><input type="text" class="text-center border"/></td>
                                            <td><input type="text" class="text-center border"/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> 
                        <div class="row">
                            <div class="table-responsive">
                                <table class="align-middle mb-5 table table-border table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Tarifs clients</th>
                                            <th class="text-center">par semaine</th>
                                            <th class="text-center">par mois</th>
                                            <th class="text-center">par trimestre</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center text-muted">Prix public</td>
                                            <td><input type="text" class="text-center border"/></td>
                                            <td><input type="text" class="text-center border"/></td>
                                            <td><input type="text" class="text-center border"/></td>
                                            
                                        </tr>
                                        <tr>
                                            <td class="text-center text-muted">Prix membre</td>
                                            <td><input type="text" class="text-center border"/></td>
                                            <td><input type="text" class="text-center border"/></td>
                                            <td><input type="text" class="text-center border"/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </b-form>   
                    </div>
                </VuePerfectScrollbar>
            </div>
        </div>
          <p>Ajout de l'API CKEDITOR</p>
    </b-tab>
</template>

<script>
import { roomDetailsData } from "@/apps/lc-142/Components/data-roomDetails";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
    name: 'Wizard5',
    components: {
        VuePerfectScrollbar,
    },
    data: () => ({
        slickOptions2: {
            slidesToShow: 1,
            dots: true
        },
        form: {
            name: ''
        },
        roomDetailsData: roomDetailsData,
        show: true
    }),

    methods: {
    }
};
</script>