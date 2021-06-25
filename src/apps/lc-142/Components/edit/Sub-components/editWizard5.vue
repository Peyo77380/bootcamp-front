<template>    
<!-- Onglet 5 du wizard-->
<b-tab title="Tarif et notes" class="p-2">
    <div class="scroll-gradient">
        <div class="scroll-area-xlg">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
                <div class="mt-3 mb-3">
                    <!-- Contenu 5e wizard-->
                    <b-form>
                    <div class="row">
                        <div class="table-responsive">
                            <table class="align-middle mb-5 table table-border table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th class="text-center">Type clients</th>
                                        <th class="text-center">par heure</th>
                                        <th class="text-center">par 1/2 jour</th>
                                        <th class="text-center">par jour</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="priceDetail in priceDetailsData" :key="priceDetail.id">
                                        <td class="text-center border">{{ priceDetail.id }}</td>
                                        <td class="text-center border" ><input type="text" class="text-center border" v-model="priceDetail.hour"/></td>
                                        <td class="text-center border" ><input type="text" class="text-center border" v-model="priceDetail.halfDay"/></td>
                                        <td class="text-center border" ><input type="text" class="text-center border" v-model="priceDetail.day"/></td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="table-responsive">
                            <table class="align-middle mb-5 table table-border table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th class="text-center">Type clients</th>
                                        <th class="text-center">par semaine</th>
                                        <th class="text-center">par mois</th>
                                        <th class="text-center">par trimestre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="priceDetail in priceDetailsData" :key="priceDetail.id">
                                        <td class="text-center border">{{ priceDetail.id }}</td>
                                        <td class="text-center border" ><input type="text" class="text-center border" v-model="priceDetail.week"/></td>
                                        <td class="text-center border" ><input type="text" class="text-center border" v-model="priceDetail.month"/></td>
                                        <td class="text-center border" ><input type="text" class="text-center border" v-model="priceDetail.trimester"/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <h2>PLUGIN CKEDITOR</h2>
                        <!-- <ckeditor :editor="editor2" v-model="room.notes" :config="editorConfig"></ckeditor> -->
                    </b-form>   
                </div>
            </VuePerfectScrollbar>
        </div>
    </div>
</b-tab>
</template>

<script>
import { roomDetailsData } from "@/apps/lc-142/Components/data-roomDetails";
import { priceDetailsData } from "@/apps/lc-142/Components/data-priceDetails";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
// import CKEditor from '@ckeditor/ckeditor5-vue';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: 'Wizard5',
    components: {
        VuePerfectScrollbar,
        // ckeditor: CKEditor.component
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
                this.room.prices = priceDetailsData
                this.$emit('priceInfo', this.room)
            }
        }
    },
    data: () => ({
        room: {
            priceDetails: [roomDetailsData[0].priceDetails],
            notes: roomDetailsData[0].notes
        },
        roomDetailsData: roomDetailsData,
        priceDetailsData: priceDetailsData
        // editor2: ClassicEditor,
        // editorData: '<p>Content of the editor.</p>',
        // editorConfig: {
        // The configuration of the editor.
        // }
    })
};
</script>