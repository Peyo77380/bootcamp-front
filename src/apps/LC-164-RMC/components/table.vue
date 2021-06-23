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
                                <a href="javascript:void(0)">{{ user.Taux }}</a>
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
                                        @click="remove(user.Taux)"
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
                    <div class="row justify-content-end">
                        <b-button
                            class="mb-2 mr-2"
                            variant="success"
                            v-b-modal.modal-add
                            >ajouter un mode</b-button
                        >
                    </div>
                </div>
            </div>
        </div>
        <modalMod :updateUser="updateUser" />
        <modalAdd :addUser="modaladd" />
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import modalMod from "./modalMod.vue";
import modalAdd from "./modalAdd.vue";

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        "font-awesome-icon": FontAwesomeIcon,
        modalMod,
        // eslint-disable-next-line vue/no-unused-components
        modalAdd
    },
    data() {
        return {
            updateUser: null,
            users: [
                {
                    Taux: "20.00",
                    Codecompta: "154876"
                },
                {
                    Taux: "10.00",
                    Codecompta: "985647"
                },
                {
                    Taux: "5.50",
                    Codecompta: "1678594"
                },
                {
                    Taux: "00.00",
                    Codecompta: "7668712"
                },
                {
                    Taux: "20.00",
                    Codecompta: "154876"
                }
            ]
        };
    },
  
    methods: {
        updateForm(user) {
            (this.updateUser = user), this.$bvModal.show("modal-scoped");
        },
        async remove(activityId) {
      // sweet alert sur la suppression
      let title = "Confirmer la suppression de cet item";
      if (await this.$sweetConfirmation({ title })) {
        this.lists = this.lists.filter(
          (activity) => activity.id !== activityId
        );
        this.$sweetNotif("Item supprimée");
      }
    },
    }
};
</script>
