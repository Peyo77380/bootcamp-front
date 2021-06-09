<template>    
    <!-- Onglet 6 du wizard-->
    <b-tab title="Plans salles/réunions" class="p-2">
        <div class="scroll-gradient">
            <div class="scroll-area-lg">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="mt-3">
                        <!-- Contenu 6e wizard-->
                        <p>Wizard 6</p>
                    </div>
                </VuePerfectScrollbar>
            </div>
        </div>
    </b-tab>
</template>

<script>
import { roomDetailsData } from "@/apps/lc-142/Components/data-roomDetails";

export default {
    name: 'Wizard6',
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