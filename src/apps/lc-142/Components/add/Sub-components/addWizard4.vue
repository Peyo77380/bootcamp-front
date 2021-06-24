<template>    
<!-- Onglet 4 du wizard-->
<b-tab title="Photos" class="p-2">
    <div class="scroll-gradient">
        <div class="scroll-area-xlg">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
                <div class="mt-3 mb-3">
                    <!-- Contenu 4e wizard-->
                    <b-form>
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10">
                                <vue-dropzone multiple ref="myVueDropzone" id="dropzone" v-model="room.roomListPhoto" :options="dropzoneOptions"></vue-dropzone>
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
import { roomDetailsData } from "@/apps/lc-142/Components/data-roomDetails";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
    name: 'Wizard4',
    components: {
        VuePerfectScrollbar,
        vueDropzone: vue2Dropzone
    },
    props : {
        getData: {
            type: Number,
            default: 0
        }
    },
    watch : {
        getData(newVal) {
            if(newVal==1) {
                this.$emit('photoInfo', this.room.roomListPhoto)
            }
        }
    },
    data: () => ({
        room: {
            roomListPhoto: ''
        },
        roomDetailsData: roomDetailsData,
        dropzoneOptions: {
            url: 'https://httpbin.org/post',
            thumbnailWidth: 150,
            maxFilesize: 5,
            headers: { "My-Awesome-Header": "header value" }
        }
    })
};
</script>