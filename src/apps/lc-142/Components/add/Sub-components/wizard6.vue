<template>    
    <!-- Onglet 6 du wizard-->
    <b-tab title="Plans salles/réunions" class="p-2">
        <div class="scroll-gradient">
            <div class="scroll-area-xlg">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="mt-3 mb-3">
                        <!-- Contenu 6e wizard-->
                        <div class="position-relative form-group"><label for="exampleCustomFileBrowser" class="">File Browser with Custom Label</label>
                            <div class="custom-file"><input type="file" id="exampleCustomFileBrowser" name="customFile" class="custom-file-input"><label class="custom-file-label" for="exampleCustomFileBrowser">Yo, pick a file!</label></div>
                        </div>
                        <p>Ajouter un tableau en v-for qui indiquera une liste de plans de la salle avec bouton pour modifier le titre ou supprimer la ligne</p>
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
    name: 'Wizard6',
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