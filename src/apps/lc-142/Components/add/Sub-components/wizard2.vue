<template>    
    <!-- Onglet 2 du wizard-->
    <b-tab title="Description" class="p-2">
        <div class="scroll-gradient">
            <div class="scroll-area-xlg">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="mt-3 mb-3">
                        <!-- Contenu 2e wizard-->
                        <b-form v-if="show">
                            <p>Ajout de l'API CKEDITOR</p>
                            <br>
                        </b-form>
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
        room: {
            description: '',
        },
        roomDetailsData: roomDetailsData,
        show: true
    }),

    methods: {
    }
};
</script>