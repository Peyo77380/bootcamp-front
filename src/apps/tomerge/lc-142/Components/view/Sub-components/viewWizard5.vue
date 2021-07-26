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
                        <div class="table-responsive m-5">
                            <table class="align-middle mb-5 table table-border table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th class="text-center border">Tarif par type de clients</th>
                                        <th class="text-center border">par heure</th>
                                        <th class="text-center border">par 1/2 jour</th>
                                        <th class="text-center border">par jour</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="priceDetail in priceDetailsData" :key="priceDetail.id">
                                        <td class="text-center border">{{ priceDetail.name }}</td>
                                        <td class="text-center border">{{ priceDetail.hour }}</td>
                                        <td class="text-center border">{{ priceDetail.halfDay }}</td>
                                        <td class="text-center border">{{ priceDetail.day }}</td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="table-responsive m-5">
                            <table class="align-middle mb-5 table table-border table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th class="text-center border">Tarif par type de clients</th>
                                        <th class="text-center border">par semaine</th>
                                        <th class="text-center border">par mois</th>
                                        <th class="text-center border">par trimestre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="priceDetail in priceDetailsData" :key="priceDetail.id">
                                        <td class="text-center border">{{ priceDetail.name }}</td>
                                        <td class="text-center border">{{ priceDetail.week }}</td>
                                        <td class="text-center border">{{ priceDetail.month }}</td>
                                        <td class="text-center border">{{ priceDetail.trimester }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                        <quill-editor v-model="room.notes"
                            class="m-5"
                            ref="myQuillEditor"
                            :options="editorOption">
                        </quill-editor>
                    </b-form>   
                </div>
            </VuePerfectScrollbar>
        </div>
    </div>
</b-tab>
</template>

<script>
import { roomDetailsData } from "@/apps/tomerge/lc-142/Components/data-roomDetails";
import { priceDetailsData } from "@/apps/tomerge/lc-142/Components/data-priceDetails";

import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { quillEditor } from 'vue-quill-editor';

export default {
    name: 'Wizard5',
    components: {
        VuePerfectScrollbar,
        quillEditor
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
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill
        }
    },
    data: () => ({
        room: {
            priceDetails: [roomDetailsData[0].priceDetails],
            notes: roomDetailsData[0].notes
        },
        roomDetailsData: roomDetailsData,
        priceDetailsData: priceDetailsData,
        editorOption: {
            // some quill options
        }
    })
};
</script>

<style lang="css">
  @import '~quill/dist/quill.core.css';
  @import '~quill/dist/quill.snow.css';
  @import '~quill/dist/quill.bubble.css';
</style>