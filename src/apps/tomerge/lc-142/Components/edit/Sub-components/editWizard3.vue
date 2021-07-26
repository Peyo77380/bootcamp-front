<template>    
<!-- Onglet 3 du wizard-->
<b-tab title="Services" class="p-2">
    <div class="scroll-gradient">
        <div class="scroll-area-xlg">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
                <div class="mt-3 mb-3">
                    <!-- Contenu 3e wizard-->
                    <b-form>
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-10">
                        <div class="table-responsive">
                            <table class="align-middle mb-5 table table-border bordered table-striped table-hover">
                                <thead>
                                <tr>
                                    <th class="text-left border col-1">Sélection</th>
                                    <th class="text-left border col-9">Titre du service</th>
                                    <th class="text-left border col-1">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="serviceDetail in serviceDetailsData" :key="serviceDetail.id">
                                    <td class="text-center border">
                                        <b-form-checkbox-group
                                        v-model="servicesChecked"
                                        multiple
                                        >
                                            <b-form-checkbox :value="serviceDetail.id"></b-form-checkbox>
                                        </b-form-checkbox-group>
                                    </td>
                                    <td class="text-left border">{{ serviceDetail.title }}</td>
                                    <td class="text-center border">
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
                    </b-form>
                </div>
            </VuePerfectScrollbar>
        </div>
    </div>

    <!-- Modale -->
        <b-modal v-model="viewModal" :title=modaleInfo.title :hide-backdrop="true">
        <p class="my-4">
            {{ modaleInfo.description }}
        </p>
    </b-modal>

    <b-modal v-model="photoModal" :title=modaleInfo.title :hide-backdrop="true">
        <p class="my-4">
            <v-img :src="require('@/assets/images/services/' + modaleInfo.photo + '.jpeg')"></v-img>
        </p>
    </b-modal>
</b-tab>
</template>

<script>
import { serviceDetailsData } from "@/apps/tomerge/lc-142/Components/data-serviceDetails";
import { roomDetailsData } from "@/apps/tomerge/lc-142/Components/data-roomDetails";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
    name: 'Wizard3',
    components: {
        VuePerfectScrollbar
    },
    props : {
        getData: {
            type: Number,
            default: 0
        }
    },
    watch: {
        getData(newVal) {
            if(newVal==1) {
                this.room.services = this.servicesChecked
                this.$emit('servInfo', this.room.services)
            }
        }
    },
    data: () => ({
        room: {
            services: [roomDetailsData[0].services]
        },
        serviceDetailsData: serviceDetailsData,
        roomDetailsData:roomDetailsData,
        servicesChecked: [],
        viewModal: false,
        photoModal: false,
        modaleInfo: {
            title: '',
            description: '',
            photo: 'coworking'
        }
    }),
    computed: {
        serviceChecked: {
            get() {
                return this.servicesChecked;
            },
            set(newVal) {
                this.servicesChecked.push(newVal)
            }
        }
    },
    methods: {
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