<template>    
    <!-- Onglet 5 du wizard-->
    <b-tab title="Tarif et notes" class="p-2">
        <div class="scroll-gradient">
            <div class="scroll-area-lg">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="mt-3">
                        <!-- Contenu 5e wizard-->
                        <div class="row">
                            <div class="col-1"></div>
                                <div class="col-10">
                                <div class="table-responsive">
                                    <table class="align-middle mb-5 table table-border table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th class="text-center">Tarifs clients</th>
                                                <th class="text-center">par heure</th>
                                                <th class="text-center">par 1/2 jour</th>
                                                <th class="text-center">par jour</th>
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
                                                <td><input type="text" class="text-center border"/></td>
                                                <td><input type="text" class="text-center border"/></td>
                                                <td><input type="text" class="text-center border"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">Prix  membre</td>
                                                <td><input type="text" class="text-center border"/></td>
                                                <td><input type="text" class="text-center border"/></td>
                                                <td><input type="text" class="text-center border"/></td>
                                                <td><input type="text" class="text-center border"/></td>
                                                <td><input type="text" class="text-center border"/></td>
                                                <td><input type="text" class="text-center border"/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>    
                    </div>
                </VuePerfectScrollbar>
            </div>
        </div>
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
            name: '',
            
        },
        roomDetailsData: roomDetailsData,
        show: true
    }),

    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.name = ''
            
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
};
</script>