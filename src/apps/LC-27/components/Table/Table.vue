<template>
    <div>
        <div><ModalForm :user="updateUser" /></div>
        <div class="main-card mb-3 card">
            <div class="table-responsive">
                <table
                    class="align-middle text-truncate mb-0 table table-borderless table-hover"
                >
                    <thead>
                        <tr>
                            <th class="text-center">ID</th>
                            <th class="text-center">Photo</th>
                            <th class="text-center">Nom</th>
                            <th class="text-center">Société</th>
                            <th class="text-center">Status</th>
                            <th class="text-center">Crédits</th>
                            <th class="text-center">Temps</th>
                            <th class="text-center">Act</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td
                                class="text-center text-muted"
                                style="width: 80px;"
                            >
                                {{ user.ID }}
                            </td>
                            <td class="text-center" style="width: 80px;">
                                <img
                                    width="40"
                                    class="rounded-circle"
                                    src="@/assets/images/avatars/4.jpg"
                                    alt=""
                                />
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)">{{ user.Nom }}</a>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)"
                                    >Micro Electronics</a
                                >
                            </td>
                            <td class="text-center">
                                <div
                                    class="badge badge-pill badge-danger"
                                    v-if="!user.Status"
                                >
                                    Inactif
                                </div>
                                <div
                                    class="badge badge-pill badge-success"
                                    v-else
                                >
                                    Actif
                                </div>
                            </td>
                            <td class="text-center">
                                <div class="font-size-xlg">
                                    <span>{{ user.Credits }}</span>
                                    <small class="text-warning pl-2">
                                        <font-awesome-icon icon="dot-circle" />
                                    </small>
                                </div>
                            </td>
                            <td class="text-center">
                                <span class="pr-2 opacity-6">
                                    <font-awesome-icon icon="business-time" />
                                </span>
                                {{ user.Temps }}
                            </td>

                            <td class="text-center">
                                <div role="group" class="btn-group-xl">
                                    <b-button
                                        class="mb-2 mr-2  btn-pill btn-shadow"
                                        variant="primary"
                                        id="popover1"
                                        @click="$bvModal.show('modal-scoped')"
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
            </div>
        </div>
    </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faBatteryThreeQuarters,
    faAngleDown,
    faAngleUp,
    faAngleRight,
    faHome,
    faQuestionCircle,
    faDotCircle,
    faBusinessTime
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";
import VueNotifications from "vue-notifications";
import swal from "sweetalert";
import ModalForm from "../modals/modalForm";

function toast({ title, message, type }) {
    if (type === VueNotifications.types.warn) type = "warning";
    return swal(title, message, type);
}

const options = {
    warn: toast
};

Vue.use(VueNotifications, options);

library.add(
    faBatteryThreeQuarters,
    faAngleDown,
    faAngleUp,
    faAngleRight,
    faHome,
    faQuestionCircle,
    faDotCircle,
    faBusinessTime
);
export default {
    components: {
        "font-awesome-icon": FontAwesomeIcon,
        ModalForm
    },
    data() {
        return {
            updateUser: { message: "Coucou" },
            users: [
                {
                    ID: 1,
                    Photo: "@/assets/images/avatars/4.jpg",
                    Nom: "Marvin Gaye",
                    Societe: "Motown",
                    Status: false,
                    Credits: 0,
                    Temps: "05h00"
                },
                {
                    ID: 2,
                    Photo: "@/assets/images/avatars/3.jpg",
                    Nom: "Laurent Sauzet",
                    Societe: "Microsoft",
                    Status: true,
                    Credits: 1,
                    Temps: "06h00"
                },
                {
                    ID: 3,
                    Photo: "@/assets/images/avatars/3.jpg",
                    Nom: "Curtis Mayfield",
                    Societe: "Hatchworks",
                    Status: true,
                    Credits: 200,
                    Temps: "02h15"
                },
                {
                    ID: 4,
                    Photo: "@/assets/images/avatars/5.jpg",
                    Nom: "Roberta Flack",
                    Societe: "Riddle Electronics",
                    Status: false,
                    Credits: 120,
                    Temps: "07h00"
                },
                {
                    ID: 5,
                    Photo: "@/assets/images/avatars/6.jpg",
                    Nom: "Nancy Sinatra",
                    Societe: "Pixelcloud",
                    Status: true,
                    Credits: 5,
                    Temps: "05h00"
                }
            ]
        };
    },
    notifications: {
        showWarnMsg: {
            type: VueNotifications.types.warn,
            title: "Attention !",
            message: "Etes-vous sûr de vouloir effacer cette fiche ?"
        }
    },
    
};
</script>
