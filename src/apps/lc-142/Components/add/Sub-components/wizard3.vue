<template>    
    <!-- Onglet 3 du wizard-->
    <b-tab title="Services" class="p-2">
        <div class="scroll-gradient">
            <div class="scroll-area-xlg">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="mt-3">
                        <!-- Contenu 3e wizard-->
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                        <div class="row">
                            <div class="col-1"></div>
                                <div class="col-10">
                                <div class="table-responsive">
                                    <table class="align-middle mb-5 table table-border bordered table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th class="text-left col-1">Sélection</th>
                                                <th class="text-left col-9">Titre du service</th>
                                                <th class="text-left col-2">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="serviceDetail in serviceDetailsData" :key="serviceDetail.id">
                                                <td>
                                                    <b-form-group id="input-group-9" v-slot="{ ariaDescribedby }" label="" class="m-2" label-for="checkboxes-9">
                                                        <b-form-checkbox-group
                                                        v-model="form.selectedService"
                                                        id="checkboxes-9"
                                                        :aria-describedby="ariaDescribedby"
                                                        >
                                                        <b-form-checkbox value="selected"></b-form-checkbox>
                                                        </b-form-checkbox-group>
                                                    </b-form-group>
                                                </td>
                                                <td class="text-left">{{ serviceDetail.title }}</td>
                                                <td class="text-center">
                                                    <div class="row">
                                                        <b-button v-b-modal.modal-view class="mr-1 ml-2">
                                                            <i class="pe-7s-look" variant="primary"></i>
                                                        </b-button>
                                                        
                                                        <b-modal id="modal-view" :title=serviceDetail.title>
                                                            <p class="my-4">
                                                                {{ serviceDetail.description }}
                                                            </p>
                                                        </b-modal>
                                                        
                                                        <b-button v-b-modal.modal-photo class="mr-1 ml-2">
                                                            <i class="pe-7s-photo" variant="info"></i>
                                                        </b-button>
                                                        
                                                        <b-modal id="modal-photo" :title=serviceDetail.title>
                                                            <p class="my-4">
                                                                <v-img :src="require('@/assets/images/services/' + serviceDetail.photo + '.jpeg')"></v-img>
                                                            </p>
                                                        </b-modal>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div> 

                            <b-button class="m-1 col-2" type="reset" variant="danger">Reset</b-button>
                            <b-button class="m-1 col-2" type="submit" variant="primary">Suivant</b-button>
                        </b-form>

                        <b-card class="mt-3" header="Form Data Result">
                        <pre class="m-0">{{ form }}</pre>
                        </b-card>
                    </div>
                </VuePerfectScrollbar>
            </div>
        </div>
    </b-tab>
</template>

<script>
import { serviceDetailsData } from "@/apps/lc-142/Components/data-serviceDetails";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
    name: 'Wizard3',
    components: {
        VuePerfectScrollbar,
    },
    data: () => ({
        slickOptions2: {
            slidesToShow: 1,
            dots: true
        },
        form: {
            selectedService: [],
            
        },
        serviceDetailsData: serviceDetailsData,
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
            this.form.selectedService = []
            
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
};
</script>