<template>    
    <!-- Onglet 3 du wizard-->
    <b-tab title="Services" class="p-2">
        <div class="scroll-gradient">
            <div class="scroll-area-xlg">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="mt-3 mb-3">
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
                                                <b-form-checkbox 
                                                v-model="form.checked"
                                                value="1"></b-form-checkbox>
                                            </td>
                                            <td class="text-left">{{ serviceDetail.title }}</td>
                                            <td class="text-center">
                                                <div class="row">
                                                    <b-button @click="openViewModale(serviceDetail)" class="mr-1 ml-2" variant="white">
                                                        <i class="pe-7s-look icon-gradient bg-malibu-beach"></i>
                                                    </b-button>
                                                    
                                                    <b-button @click="openPhotoModale(serviceDetail)" class="mr-1 ml-2" variant="white">
                                                        <i class="pe-7s-photo icon-gradient bg-sunny-morning"></i>
                                                    </b-button>
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
                    </div>
                </VuePerfectScrollbar>
            </div>
        </div>

        <!-- Modale -->
         <b-modal v-model="viewModal" :title=modaleInfo.title>
            <p class="my-4">
                {{ modaleInfo.description }}
            </p>
        </b-modal>

        <b-modal  v-model="photoModal" :title=modaleInfo.title>
            <p class="my-4">
                <v-img :src="require('@/assets/images/services/' + modaleInfo.photo + '.jpeg')"></v-img>
            </p>
        </b-modal>
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
            checked: []
        },
        serviceDetailsData: serviceDetailsData,
        viewModal: false,
        photoModal: false,
        modaleInfo: {
            title: '',
            description: '',
            photo: 'coworking'
        },
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
            this.form.checked = []
            
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        openViewModale(itemData) {
            this.modaleInfo.title = itemData.title
            this.modaleInfo.description = itemData.description
            this.viewModal = true;
        },
        openPhotoModale(itemData) {
            this.modaleInfo.title = itemData.title
            this.modaleInfo.photo = itemData.photo
            this.photoModal = true;
        }
    }
};
</script>