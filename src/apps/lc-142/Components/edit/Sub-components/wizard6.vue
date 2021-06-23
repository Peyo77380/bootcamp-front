<template>    
<!-- Onglet 6 du wizard-->
<b-tab title="Plans salles/réunions" class="p-2">
    <div class="scroll-gradient">
        <div class="scroll-area-xlg">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
                <div class="mt-3 mb-3">
                    <!-- Contenu 6e wizard-->
                    <b-form  @onComplete6="onComplete6">

                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-10">
                            <div class="row">
                                <div class="position-relative form-group col-10"><label for="customFileBrowser" class=""></label>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input">
                                        <label class="custom-file-label text-left" for="customFileBrowser"></label>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <b-button class="" type="text" variant="primary" @click="addPhoto()">ajouter</b-button>
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
                                            <td class="text-center border"><input class="col-12" type="text" v-model="room.idPlan"></td>
                                            <td class="text-center border"><input class="col-12" type="text" v-model="room.titlePlan"></td>
                                            <td class="text-center border"><input class="col-12" type="text" v-model="room.urlPlan"></td>
                                            <td class="text-center border">
                                                <div class="row">
                                                    <b-button @click="openPhotoModale(roomListPhoto)" class="ml-3" variant="white">
                                                        <i class="pe-7s-look icon-gradient bg-malibu-beach"></i>
                                                    </b-button>
                                                    
                                                    <b-button class="" @click="remove(roomDetailsData.roomListPhoto)" variant="white">
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
    name: 'Wizard6',
    components: {
        VuePerfectScrollbar,
    },
    data: () => ({
        photoModal: false,
        modaleInfo: {
            title: '',
            photo: 'coworking'
        },
        room: {
            idPlan: '',
            titlePlan: '',
            urlPlan: '',
        },
        roomDetailsData: roomDetailsData,
    }),

    methods: {
        onSubmit(event) {
            event.preventDefault()
            // afficher les valeurs recueillies par le form global
        },
        openPhotoModale(itemData) {
            this.modaleInfo.title = itemData.title
            this.modaleInfo.photo = itemData.photo
            this.photoModal = true;
        },
        remove (roomListPhoto) {
            // l'appel vers API de Laravel devra etre fait ici
            // remplacer le roomdetails par la liste des photos de la salle
            this.roomDetailsData = this.roomDetailsData.filter(roomDetail => roomDetail.roomListPhoto !== roomListPhoto)
        },
        addPhoto () {
            console.log("submit test photo");
        },
        onComplete6() {
        // validation premier wizard, save enn bdd et passage au wizard suivant
        }
    }
};
</script>