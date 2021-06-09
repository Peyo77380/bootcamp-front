<template>    
    <!-- Onglet 2 du wizard-->
    <b-tab title="Description" class="p-2">
        <div class="scroll-gradient">
            <div class="scroll-area-lg">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="mt-3">
                        <!-- Contenu 2e wizard-->
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group id="input-group-1" label="Description de la salle :" label-for="input-1">
                                <b-form-input
                                id="input-1"
                                v-model="form.description"
                                autogrow
                                placeholder="Description de la salle :"
                                required
                                ></b-form-input>
                            </b-form-group>

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

export default {
    name: 'Wizard2',
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