<template>
    <!-- Onglet 4 du wizard-->
    <b-tab title="Photos de la salle" class="p-2">
        <div class="scroll-gradient">
            <div class="scroll-area-xlg">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="mt-3 mb-3">
                        <!-- Contenu 4e wizard-->
                        <b-form>
                            <div class="main-card mb-3 card">
                                <div class="card-body">
                                    <h5 class="card-title text-left">
                                        Photos de la salle :
                                    </h5>
                                    <vue-dropzone
                                        multiple
                                        ref="myVueDropzone"
                                        id="dropzone"
                                        v-model="photos.roomListPhoto"
                                        :options="dropzonePhotoOptions"
                                    ></vue-dropzone>
                                </div>
                            </div>

                            <div class="main-card mb-3 card">
                                <div class="card-body">
                                    <h5 class="card-title text-left">
                                        Plans de réunion de la salle :
                                    </h5>
                                    <vue-dropzone
                                        multiple
                                        ref="myVueDropzone"
                                        id="dropzone"
                                        v-model="photos.roomListPlan"
                                        :options="dropzonePlanOptions"
                                    ></vue-dropzone>
                                </div>
                            </div>
                        </b-form>
                    </div>
                </VuePerfectScrollbar>
            </div>
        </div>
    </b-tab>
</template>

<script>
import { roomDetailsData } from "@/apps/tomerge/lc-142/Components/data-roomDetails";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
//  TODO: connect dropzone to media api endpoint
export default {
    name: "Wizard4",
    components: {
        VuePerfectScrollbar,
        vueDropzone: vue2Dropzone
    },
    props: {
        getData: {
            type: Number,
            default: 0
        }
    },
    watch: {
        getData(newVal) {
            if (newVal == 1) {
                this.$emit("photoInfo", this.photos);
            }
        }
    },
    data: () => ({
        photos: {
            roomListPhoto: [],
            roomListPlan: []
        },
        roomDetailsData: roomDetailsData,
        dropzonePhotoOptions: {
            url: "https://httpbin.org/post",
            thumbnailWidth: 150,
            maxFilesize: 5,
            headers: { "My-Awesome-Header": "header value" },
            addRemoveLinks: true,
            dictDefaultMessage: "<i class='pe-7s-upload'></i>UPLOAD PHOTOS"
        },
        dropzonePlanOptions: {
            url: "https://httpbin.org/post",
            thumbnailWidth: 150,
            maxFilesize: 10,
            headers: { "My-Awesome-Header": "header value" },
            addRemoveLinks: true,
            dictDefaultMessage: "<i class='pe-7s-upload'></i>UPLOAD PLANS"
        }
    })
};
</script>
