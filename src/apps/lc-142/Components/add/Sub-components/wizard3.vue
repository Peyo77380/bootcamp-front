<template>    
    <!-- Onglet 3 du wizard-->
    <b-tab title="Services" class="p-2">
        <div class="scroll-gradient">
            <div class="scroll-area-lg">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="mt-3">
                        <!-- Contenu 3e wizard-->
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10">
                                <b-form-group id="input-group-9" v-slot="{ ariaDescribedby }" label="Services disponibles :" class="text-left" label-for="checkboxes-2">
                                    <b-form-multiple-checkbox-group
                                    v-model="form.servicesElement"
                                    id="checkboxes-2"
                                    :aria-describedby="ariaDescribedby"
                                    >
                                    <div class="row">
                                    <div class="col-5">
                                        <div class="row">
                                        <b-form-checkbox value="0">Service 1</b-form-checkbox><p class="ml-5">Description du service 1 qui est récupéré dans la table Services !</p>
                                        </div>
                                        <div class="row">
                                        <b-form-checkbox value="0">Service 2</b-form-checkbox><p class="ml-5">Description du service 2</p>
                                        </div>
                                        <div class="row">
                                        <b-form-checkbox value="0">Service 3</b-form-checkbox><p class="ml-5">Description du service 3</p>
                                        </div>
                                        <div class="row">
                                        <b-form-checkbox value="0">Service 4</b-form-checkbox><p class="ml-5">Description du service 4</p>
                                        </div>
                                        <div class="row">
                                        <b-form-checkbox value="0">Service 5</b-form-checkbox><p class="ml-5">Description du service 5</p>
                                        </div>
                                        <div class="row">
                                        <b-form-checkbox value="0">Service 6</b-form-checkbox><p class="ml-5">Description du service 6</p>
                                        </div>
                                    </div>
                                    <div class="col-2"></div>
                                    <div class="col-5">
                                        <div class="row">
                                        <b-form-checkbox value="0">Service 1</b-form-checkbox><p class="ml-5">Description du service 1</p>
                                        </div>
                                        <div class="row">
                                        <b-form-checkbox value="0">Service 2</b-form-checkbox><p class="ml-5">Description du service 2</p>
                                        </div>
                                        <div class="row">
                                        <b-form-checkbox value="0">Service 3</b-form-checkbox><p class="ml-5">Description du service 3</p>
                                        </div>
                                        <div class="row">
                                        <b-form-checkbox value="0">Service 4</b-form-checkbox><p class="ml-5">Description du service 4</p>
                                        </div>
                                        <div class="row">
                                        <b-form-checkbox value="0">Service 5</b-form-checkbox><p class="ml-5">Description du service 5</p>
                                        </div>
                                        <div class="row">
                                        <b-form-checkbox value="0">Service 6</b-form-checkbox><p class="ml-5">Description du service 6</p>
                                        </div>
                                    </div>
                                    </div>
                                    </b-form-multiple-checkbox-group>
                                </b-form-group>
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
import { roomDetailsData } from "@/apps/lc-142/Components/data-roomDetails";
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
            servicesElement: [],
            
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
            this.form.servicesElement = []
            
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
};
</script>