<template>    
    <!-- Onglet 2 du wizard-->
    <b-tab title="Description" class="p-2">
        <div class="scroll-gradient">
            <div class="scroll-area-lg">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="mt-3">
                        <!-- Contenu 2e wizard-->
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <p>Ajout de l'API CKEDITOR</p>

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
    name: 'Wizard2',
    components: {
        VuePerfectScrollbar,
    },
    data: () => ({
        slickOptions2: {
            slidesToShow: 1,
            dots: true
        },
        form: {
            description: '',
            
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
            this.form.description = ''
            
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
};
</script>