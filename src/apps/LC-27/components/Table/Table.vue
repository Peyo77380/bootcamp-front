<template>
    <div>
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
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                class="text-center text-muted"
                                style="width: 80px;"
                            >
                                #54
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
                                <a href="javascript:void(0)">Marvin Gaye</a>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)"
                                    >Micro Electronics</a
                                >
                            </td>
                            <td class="text-center">
                                <div class="badge badge-pill badge-danger">
                                    Inactif
                                </div>
                            </td>
                            <td class="text-center">
                                <div class="font-size-xlg">
                                    <span>429</span>
                                    <small class="text-warning pl-2">
                                        <font-awesome-icon icon="dot-circle"/>
                                    </small>
                                </div>
                            </td>
                            <td class="text-center">
                                <span class="pr-2 opacity-6">
                                    <font-awesome-icon icon="business-time" />
                                </span>
                                03h30
                            </td>

                            <td class="text-center">
                                <div role="group" class="btn-group-xl">
                                    <b-button
                                        class="mb-2 mr-2  btn-pill btn-shadow"
                                        variant="primary"
                                        id="popover1"
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
                        <tr>
                            <td
                                class="text-center text-muted"
                                style="width: 80px;"
                            >
                                #55
                            </td>
                            <td class="text-center" style="width: 80px;">
                                <img
                                    width="40"
                                    class="rounded-circle"
                                    src="@/assets/images/avatars/3.jpg"
                                    alt=""
                                />
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)">Curtis Mayfield</a>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)">Hatchworks</a>
                            </td>
                            <td class="text-center">
                                <div class="badge badge-pill badge-success">
                                    Actif
                                </div>
                            </td>
                            <td class="text-center">
                                <div class="font-size-xlg">
                                    <span>200</span>
                                    <small class="text-warning pl-2">
                                        <font-awesome-icon icon="dot-circle"/>
                                    </small>
                                </div>
                            </td>
                            <td class="text-center">
                                <span class="pr-2 opacity-6">
                                    <font-awesome-icon icon="business-time" />
                                </span>
                                02h15
                            </td>

                            <td class="text-center">
                                <div role="group"
                                    class="btn-group-xl">
                                    <b-button
                                        class="mb-2 mr-2  btn-pill btn-shadow"
                                        variant="primary"
                                        id="popover3"
                                    >
                                        <i class="lnr-pencil"></i>
                                    </b-button>
                                    <b-popover
                                        :target="'popover3'"
                                        placement="bottomleft"
                                        title="Modifier la fiche"
                                        triggers="hover focus"
                                    ></b-popover>
                                    <b-button
                                        class="mb-2 mr-2 btn-icon btn-pill btn-shadow"
                                        variant="danger"
                                        id="popover4"
                                        ><i class="pe-7s-trash"> </i
                                    ></b-button>
                                    <b-popover
                                        :target="'popover4'"
                                        placement="bottom"
                                        title="Supprimer la fiche"
                                        triggers="hover focus"
                                    ></b-popover>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td
                                class="text-center text-muted"
                                style="width: 80px;"
                            >
                                #56
                            </td>
                            <td class="text-center" style="width: 80px;">
                                <img
                                    width="40"
                                    class="rounded-circle"
                                    src="@/assets/images/avatars/2.jpg"
                                    alt=""
                                />
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)">Roberta Flack</a>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)"
                                    >Riddle Electronics</a
                                >
                            </td>
                            <td class="text-center">
                                <div class="badge badge-pill badge-danger">
                                    Inactif
                                </div>
                            </td>
                            <td class="text-center">
                                <div class="font-size-xlg">
                                    <span>120</span>
                                    <small class="text-warning pl-2">
                                        <font-awesome-icon icon="dot-circle"/>
                                    </small>
                                </div>
                            </td>
                            <td class="text-center">
                                <span class="pr-2 opacity-6">
                                    <font-awesome-icon icon="business-time" />
                                </span>
                                07h00
                            </td>

                            <td class="text-center">
                                <div
                                    role="group"
                                    class="btn-group-xl"
                                >
                                    <b-button class="mb-2 mr-2  btn-pill btn-shadow" variant="primary" id="popover5">
                                        <i class="lnr-pencil"></i>
                                    </b-button>
                                    <b-popover :target="'popover5'" placement="left" title="Modifier la fiche" triggers="hover focus"></b-popover>
                                    <b-button class="mb-2 mr-2 btn-icon btn-pill btn-shadow" variant="danger" id="popover6"><i class="pe-7s-trash"> </i></b-button>
                                    <b-popover :target="'popover6'" placement="bottom" title="Supprimer la fiche" triggers="hover focus"></b-popover>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td
                                class="text-center text-muted"
                                style="width: 80px;"
                            >
                                #56
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
                                <a href="javascript:void(0)">Nancy Sinatra</a>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)">Pixelcloud</a>
                            </td>
                            <td class="text-center">
                                <div class="badge badge-pill badge-success">
                                    Actif
                                </div>
                            </td>
                            <td class="text-center">
                                <div class="font-size-xlg">
                                    <span>5</span>
                                    <small class="text-warning pl-2">
                                        <font-awesome-icon icon="dot-circle"/>
                                    </small>
                                </div>
                            </td>
                            <td class="text-center">
                                <span class="pr2 opacity-6">
                                    <font-awesome-icon icon="business-time" />
                                </span>
                                05h00
                            </td>

                            <td class="text-center">
                                <div
                                    role="group"
                                    class="btn-group-xl"
                                >
                                    <b-button class="mb-2 mr-2  btn-pill btn-shadow" variant="primary" id="popover7">
                                        <i class="lnr-pencil"></i>
                                    </b-button>
                                    <b-popover :target="'popover7'" placement="left" title="Modifier la fiche" triggers="hover focus"></b-popover>
                                    <b-button class="mb-2 mr-2 btn-icon btn-pill btn-shadow" variant="danger" id="popover8"><i class="pe-7s-trash"> </i></b-button>
                                    <b-popover :target="'popover8'" placement="bottom" title="Supprimer la fiche" triggers="hover focus"></b-popover>

                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                <div class="d-block p-4 text-center card-footer">
                    <b-pagination align="center" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="mb-0" />
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
    }
};
</script>
