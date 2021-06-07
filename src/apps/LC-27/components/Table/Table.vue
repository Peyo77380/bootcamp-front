<template>
    <div>
        
        <div class="main-card mb-3 card">
            <div class="table-responsive">
                <table
                    class="align-middle text-truncate mb-0 table table-borderless table-striped table-hover"
                >
                    <thead>
                        <tr>
                            <th class="text-center">ID</th>
                            <th class="text-center">Photo</th>
                            <th class="text-center">Nom</th>
                            <th class="text-center">Société</th>
                            <th class="text-center">Statut</th>
                            <th class="text-center">Activité</th>
                            <th class="text-center">Catégories</th>
                            <th class="text-center">Adhésion/th>
                            <th class="text-center">Crédits</th>
                            <th class="text-center">Temps</th>
                            <th class="text-center">Actions</th>
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
                                    src="@/assets/images/avatars/1.jpg"
                                    alt=""
                                />
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)">{{ user.Nom }}</a>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)"
                                    >{{ user.Societe }}</a
                                >
                            </td>
                            
                            <td class="text-center">
                                <a href="javascript:void(0)"
                                    >{{ user.Statut }}</a
                                >
                            </td>
                            <td class="text-center">
                                <div
                                    class="badge badge-pill badge-danger"
                                    v-if="!user.Activite"
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
                                <a href="javascript:void(0)"
                                    >{{ user.Categorie }}</a
                                >
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)"
                                    >{{ user.Adhesion }}</a
                                >
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
            </div>
        </div>
        <div><ModalForm :user="updateUser" /></div>
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
import VueNotifications from "vue-notifications";
import ModalForm from "../modals/modalForm";




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
                    Photo: "1.jpg",
                    Nom: "Marvin Gaye",
                    Societe: "Motown",
                    Statut: "Société",
                    Activite: false,
                    Categorie: "Coworker",
                    Adhesion: "Non-membre",
                    Credits: 0,
                    Temps: "05h00"
                },
                {
                    ID: 2,
                  //  Photo: "@/assets/images/avatars/3.jpg",
                    Nom: "Laurent Sauzet",
                    Societe: "Microsoft",
                    Statut: "Salarié",
                    Activite: true,
                    Categorie: "Coworker",
                    Adhesion: "Non-membre",
                    Credits: 1,
                    Temps: "06h00"
                },
                {
                    ID: 3,
                  //  Photo: "@/assets/images/avatars/3.jpg",
                    Nom: "Curtis Mayfield",
                    Societe: "Hatchworks",
                    Statut: "Salarié",
                    Activite: true,
                    Categorie: "Salle de réunion",
                    Adhesion: "Membre",
                    Credits: 200,
                    Temps: "02h15"
                },
                {
                    ID: 4,
                  //  Photo: "@/assets/images/avatars/5.jpg",
                    Nom: "Roberta Flack",
                    Societe: "Riddle Electronics",
                    Statut: "Indépendant",
                    Activite: false,
                    Categorie: "Bureau",
                    Adhesion: "Résident",
                    Credits: 120,
                    Temps: "07h00"
                },
                {
                    ID: 5,
                  //  Photo: "@/assets/images/avatars/6.jpg",
                    Nom: "Nancy Sinatra",
                    Societe: "Pixelcloud",
                    Statut: "Société",
                    Activite: true,
                    Categorie: "Bureau",
                    Adhesion: "Résident",
                    Credits: 5,
                    Temps: "05h00"
                } 
            ]
        }; 
    },
    notifications: {
        showWarnMsg: {
            type: VueNotifications.types.warn
        }
    },
    methods: {
        updateForm (user) {
           
            this.updateUser = user,
            this.$bvModal.show('modal-scoped')
        }
    }
    // TODO: Faire le système de tri 
    
};

</script>
