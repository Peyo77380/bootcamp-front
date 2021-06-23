<template>
    <div>
        <div class="main-card mb-3 card">
            <div class="table-responsive">
                <table
                    class="align-middle text-truncate mb-0 table table-borderless table-striped table-hover"
                >
                    <thead>
                        <tr>
                           <th class="text-center">Taux</th>
                            <th class="text-center">Code Compta</th>                          
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <!-- <td
                                class="text-center text-muted"
                                style="width: 80px;"
                            >
                                {{ user.ID }}
                            </td> -->

                           <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    user.Taux
                                }}</a>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)">{{
                                    user.Codecompta
                                }}</a>
                            </td>

                            

                            <td class="text-center">
                                <div role="group" class="btn-group-xl">
                                    <b-button
                                        class="mb-2 mr-2  btn-pill btn-shadow"
                                        variant="primary"
                                        id="popover1"
                                        @click="updateForm(user)"
                                    >
                                        <i class="lnr-pencil"></i>
                                    </b-button>
                                    <b-popover
                                        :target="'popover1'"
                                        placement="bottomleft"
                                        title="Modifier la fiche"
                                        triggers="hover focus"
                                    ></b-popover>

                                    <b-button
                                        class="mb-2 mr-2 btn-icon btn-pill btn-shadow"
                                        variant="danger"
                                        id="popover2"
                                        @click="showWarnMsg()"
                                        ><i class="pe-7s-trash"> </i
                                    ></b-button>
                                    <b-popover
                                        :target="'popover2'"
                                        placement="bottom"
                                        title="Supprimer la fiche"
                                        triggers="hover focus"
                                    ></b-popover>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-block p-4 text-center card-footer">
                    <b-pagination align="center" class="mb-0" />
                </div>
                <div class="row justify-content-end">
                    <b-button class="mb-2 mr-2" variant="success" id="show-btn" @click="addForm(user)">ajouter un mode</b-button>
                </div>
            </div>
        </div>
        <modalForm :updateUser="updateUser" />
        <modalFormaj :addUser="modaladd" />
    </div>
</template>

<script>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueNotifications from "vue-notifications";
import modalForm from "./modalForm.vue";
import modalFormaj from "./modalFormaj.vue";

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        "font-awesome-icon": FontAwesomeIcon,
        modalForm,
        // eslint-disable-next-line vue/no-unused-components
        modalFormaj,
    },
    data() {
        return {
            updateUser: null,
            users: [
                {
                    Taux: "20.00",
                    Codecompta: "154876",  
                },
                {
                    Taux: "10.00",
                    Codecompta: "985647",  
                },
                {
                    Taux: "5.50",
                    Codecompta: "1678594",  
                },
                {
                    Taux: "00.00",
                    Codecompta: "7668712",  
                },
                {
                    Taux: "20.00",
                    Codecompta: "154876",  
                },
                
            ]
        };
    },
    notifications: {
        showWarnMsg: {
            type: VueNotifications.types.warn
        }
    },
    methods: {
        addForm(user) {
            this.$bvModal.show("modal-add")

        },
        
        updateForm(user) {
          
            this.updateUser = user, 
            this.$bvModal.show("modal-scoped");
        },
    },
};
</script>
