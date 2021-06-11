<template>    
    <!-- Onglet 4 du wizard-->
    <b-tab title="Photos" class="p-2">
        <div class="scroll-gradient">
            <div class="scroll-area-lg">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="mt-3">
                        <!-- Contenu 4e wizard-->
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10">
                                <div class="position-relative form-group"><label for="exampleCustomFileBrowser" class="">File Browser with Custom Label</label>
                                    <div class="custom-file">
                                        <input type="file" id="exampleCustomFileBrowser" name="customFile" class="custom-file-input">
                                        <label class="custom-file-label" for="exampleCustomFileBrowser">Veuillez sélectionner une photo</label>
                                    </div>
                                </div>

                                <div class="table-responsive">
                                    <table class="align-middle mb-5 table table-border table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th class="text-center col-1">Numero</th>
                                                <th class="text-center col-4">Titre de la photo</th>
                                                <th class="text-center col-6">Url</th>
                                                <th class="text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center border">1</td>
                                                <td class="text-center border">titre photo</td>
                                                <td class="text-center border">url photo</td>
                                                <td class="text-center border">voir / supprimer</td>
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
    name: 'Wizard4',
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