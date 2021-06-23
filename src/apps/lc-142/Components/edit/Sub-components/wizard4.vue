<template>    
<!-- Onglet 4 du wizard-->
<b-tab title="Photos" class="p-2">
    <div class="scroll-gradient">
        <div class="scroll-area-xlg">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
                <div class="mt-3 mb-3">
                    <!-- Contenu 4e wizard-->
                    <b-form @onComplete4="onComplete4">

                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-10">
                            <div class="row">
                                <div class="position-relative form-group col-10"><label for="customFileBrowser"></label>
                                    <div class="custom-file">
                                        <input type="file" @change="onFileSelected" class="custom-file-input">
                                        <label class="custom-file-label text-left" for="customFileBrowser"></label>
                                    </div>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table class="align-middle mb-5 table table-border table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center col-1">Numéro</th>
                                            <th class="text-center col-4">Titre de la photo</th> <!-- Recuperer nom bât + salle + index photo -->
                                            <th class="text-center col-6">Url</th>
                                            <th class="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center border"><input class="col-12" type="text" v-model="room.idPhoto"></td>
                                            <td class="text-center border"><input class="col-12" type="text" v-model="room.titlePhoto"></td>
                                            <td class="text-center border"><input class="col-12" type="text" v-model="room.urlPhoto"></td>
                                            <td class="text-center border">
                                                <div class="row">
                                                    <b-button @click="openPhotoModale(roomListPhoto)" class="ml-3" variant="white">
                                                        <i class="pe-7s-look icon-gradient bg-malibu-beach"></i>
                                                    </b-button>
                                                    
                                                    <b-button  class="" @click="remove(roomDetailsData.roomListPhoto)" variant="white">
                                                        <i class="pe-7s-trash icon-gradient bg-sunny-morning"></i>
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
        room: {
            idPhoto: '',
            titlePhoto: '',
            urlPhoto: ''
        },
        roomDetailsData: roomDetailsData,
        photoModal: false,
        modaleInfo: {
            titlePhoto: '',
            photo: 'coworking'
        },
        selectedFile: null
    }),

    methods: {
        openPhotoModale(itemData) {
            this.modaleInfo.titlePhoto = itemData.titlePhoto
            this.modaleInfo.photo = itemData.photo
            this.photoModal = true;
        },
        remove (roomListPhoto) {
            // l'appel vers API de Laravel devra etre fait ici
            // remplacer le roomdetails par la liste des photos de la salle
            this.roomDetailsData = this.roomDetailsData.filter(roomDetail => roomDetail.roomListPhoto !== roomListPhoto)
        },
        //addPhoto () {
        //    console.log("submit test photo");
        //},
        onFileSelected (event) {
            this.selectedFile = event.target.files[0];
            console.log(this.selectedFile);
        },
        onComplete4() {
        // validation premier wizard, save enn bdd et passage au wizard suivant
        }
    }
};
</script>