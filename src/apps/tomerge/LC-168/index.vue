<template>
    <div>
        <page-title :heading=heading :icon=icon @openModal="showNewAttributModal()"></page-title>
        
        <div>
            <div class="main-card mb-3 card">
            <div class="table-responsive">
                <table
                class="
                    align-middle
                    mb-0
                    table table-striped table-borderless table-hover
                "
                >
                <thead>
                    <tr>
                    <th class="text-center">Nom</th>
                    <th class="text-center">Identifiant</th>
                    <th class="text-center">Type</th>
                    <th class="text-center">Options</th>
                    <th class="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item._id">
                    <td class="text-center">{{ item.name }}</td>
                    <td class="text-center">{{ item.key }}</td>

                    <td class="text-center">
                        <v-chip outline :color="getClassType(item.typeData)">{{
                        item.typeData
                        }}</v-chip>
                    </td>
                    <td class="text-center" v-if="item.typeData === 'Champs texte'">
                        {{ item.options }}
                    </td>

                    <td
                        class="text-center"
                        v-if="
                        item.typeData === 'Un seul choix' ||
                        item.typeData === 'Liste de sélection'
                        "
                    >
                        <v-chip
                        small
                        v-for="(option, index) in item.datas"
                        :key="index"
                        label
                        color="blue"
                        text-color="white"
                        >
                        {{ option }}
                        </v-chip>
                    </td>

                    <td class="text-center">
                        <div role="group" class="btn-group-xl">
                        <b-button
                            class="mb-2 mr-2 btn-pill btn-shadow"
                            variant="primary"
                            id="popover1"
                            @click="showEditModal(item)"
                        >
                            <i class="lnr-pencil"></i>
                        </b-button>
                        <b-popover
                            :target="'popover1'"
                            placement="bottomleft"
                            triggers="hover focus"
                        ></b-popover>
                        <b-button
                            class="mb-2 mr-2 btn-icon btn-pill btn-shadow"
                            variant="danger"
                            id="popover2"
                            @click="remove(item._id)"
                            ><i class="pe-7s-trash"> </i
                        ></b-button>
                        <b-popover
                            :target="'popover2'"
                            placement="bottom"
                            triggers="hover focus"
                        ></b-popover>
                        </div>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
            <add-modal
                :closeAddModal="closeModalNew"
                :isAddMode="isAddMode"
                :handleAdd="handleAdd"
            ></add-modal>
            <edit-modal
                @closeEditModal="closeModalEdit()"
                @editedItem="keyValueEdit()"
                @isEditMode="isEditMode()"
                @handleUpdate="handleUpdate()"
                @key="componentKey()"
            ></edit-modal>
        </div>

        <pagination></pagination>
    </div>
</template>


<script>

import pagination from './components/pagination.vue'
import PageTitle from "./components/PageTitle2.vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { typesData } from "@/utils/globalAttribut";
import AddModal from "./components/newAttributModal.vue";
import EditModal from "./components/editModal.vue";
import { attributes } from "@/mixins/attributes";

    

    export default {

        components:{
            PageTitle, 
            pagination,
            "font-awesome-icon": FontAwesomeIcon,
            AddModal,
            EditModal,  
        }, 
        mixins: [ attributes ],
        data () {
            return {

                items: [],
                isEditMode: false,
                isAddMode: false,
                keyValueEdit: {},
                componentKey: 0,
                heading: "Attributs",
            icon: 'pe-7s-keypad icon-gradient bg-night-fade',
            }
            
        },
        async mounted() {
            await this.loadAttributes();
        },
        methods: {
            getClassType(label) {
            const typeC = typesData.filter((item) => {
                return item.label == label;
            });
            if (typeC[0]) {
                return typeC[0].classType;
            }
            return "";
            },
            closeModalNew() {
                this.isAddMode = false;
            },
            closeModalEdit() {
                this.isEditMode = false;
            },
            showNewAttributModal() {
                this.isAddMode = true;
            },
            showEditModal(item) {
                this.isEditMode = true;
                this.keyValueEdit = item;
                this.forceRerender();
            },
            async remove(Id) {
            // sweet alert sur la suppression
                let title = "Confirmer la suppression de cet item";
                if (await this.$sweetConfirmation({ title })) {
                    try {
                    const res = await this.deleteAttribute(Id);
                    this.loadAttributes();
                    this.$sweetNotif("Item supprimée");
                    } catch (error) {
                    console.error(error);
                    }
                }
            },
            async loadAttributes() {
                try {
                    const res = await this.getAttributes();
                    this.items = res;
                } catch (error) {
                    console.error(error);
                }
            },
            async handleUpdate(attr) {
                try {
                    const res = await this.modifyAttribute(attr);
                    this.loadAttributes();
                } catch (error) {
                    console.error(error);
                }
            },
            async handleAdd(attr) {
                try {
                    const res = await this.addAttribute(attr);
                    this.loadAttributes();
                } catch (error) {
                    this.$sweetError('Erreur d\'enregistrement - AA564')
                }
            },
            forceRerender() {
            this.componentKey += 1;
            },
        },
    }
</script>
