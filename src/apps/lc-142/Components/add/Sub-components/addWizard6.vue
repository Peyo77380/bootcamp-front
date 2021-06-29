<template>    
<!-- Onglet 6 du wizard-->
<b-tab title="Plans salles/réunions" class="p-2">
    <div class="scroll-gradient">
        <div class="scroll-area-xlg">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
                <div class="mt-3 mb-3">
                    <!-- Ancien Contenu 6e wizard -->
                    <b-form>
                        <div class="row">
                        <div class="col-1"></div>
                        <div class="col-10">
                        <div class="table-responsive">
                            <table class="align-middle mb-5 table table-border bordered table-striped table-hover">
                                <thead>
                                <tr>
                                    <th class="text-center border col-1">Sélection</th>
                                    <th class="text-left border col-7">Type de plan de salle</th>
                                    <th class="text-center border col-2">Capacité maximale</th>
                                    <th class="text-center border col-1">Plan</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="meetingRoomDetail in meetingRoomDetailsData" :key="meetingRoomDetail.id" >
                                    <td class="text-center border">
                                        <b-form-checkbox-group
                                        
                                        multiple
                                        >
                                            <b-form-checkbox v-model="meetingsChecked" :value="meetingRoomDetail.id"></b-form-checkbox>
                                        </b-form-checkbox-group>
                                    </td>
                                    <td class="text-left border">{{ meetingRoomDetail.title }}</td>
                                    <td class="text-center border"><input type="text" v-model="meetingRoomDetail.maxCapacity" class="text-center border"/></td>
                                    <td class="text-center border">
                                        <div class="row">
                                            <b-button @click="openMeetingModale(meetingRoomDetail)" class="m-auto" variant="white">
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
    <b-modal v-model="meetingModale" :title=modaleInfo.title :hide-backdrop="true">
        <p class="my-4">
            <v-img :src="require('@/assets/images/meetings/' + modaleInfo.plan + '.jpeg')"></v-img>
        </p>
    </b-modal>

</b-tab>
</template>

<script>
import { roomDetailsData } from "@/apps/lc-142/Components/data-roomDetails";
import { meetingRoomDetailsData } from "@/apps/lc-142/Components/data-meetingRoomDetails";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
    name: 'Wizard6',
    components: {
        VuePerfectScrollbar
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
                // meetings n'est pas egale a meetingsChecked mais meetings [] = [ 'meetingsChecked[0]', 'meetingsChecked[1]', etc]
                this.room.meetings = this.meetingsChecked
                this.$emit('meetingInfo', this.room.meetings)
            }
        }
    },
    data: () => ({
        room: {
            meetings: []
        },
        roomDetailsData: roomDetailsData,
        meetingRoomDetailsData: meetingRoomDetailsData,
        meetingsChecked: [],
        meetingModale: false,
        modaleInfo: {
            title: '',
            plan: 'en-u'
        }
    }),
    computed: {
        meetingChecked: {
            get() {
                return this.meetingsChecked;
            },
            set(newVal) {
                this.meetingsChecked.push(newVal)
            }
        }
    },
    methods: {
        openMeetingModale(itemData) {
            this.modaleInfo.title = itemData.title
            this.modaleInfo.photo = itemData.photo
            this.meetingModale = true;
        }
    }
};
</script>