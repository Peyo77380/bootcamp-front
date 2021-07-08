<template>
    <div>
        <page-title
            :heading="heading"
            :subheading="subheading"
            :icon="icon"
        ></page-title>

        <!--
        <tabs
            :tabs="tabs"
            :currentTab="currentTab"
            :wrapper-class="'body-tabs shadow-tabs'"
            :tab-class="'tab-item'"
            :tab-active-class="'tab-item-active'"
            :line-class="'tab-item-line'"
            @onClick="handleClick"
        />
        -->
        <!-- First building -->

        <div class="content">
            <div v-if="currentTab === 'building1'">
                <b-row>
                    <b-col md="4">
                        <b-card class="mb-3 nav-justified" no-body>
                            <b-tabs card>
                                <b-tab title="Bâtiment 1" active>
                                    <div>
                                        <h4 class="text-center">
                                            <i
                                                class="pe-7s-culture icon-gradient bg-happy-itmeo"
                                            ></i>
                                        </h4>
                                        <h5 class="text-center">
                                            Nom du bâtiment
                                        </h5>
                                        <br />
                                        <h6 class="text-center">
                                            informations
                                        </h6>
                                    </div>
                                </b-tab>
                                <b-tab title="Détail">
                                    <div>
                                        <v-layout align-center>
                                            <v-flex xs12 sm4 text-xs-center>
                                                <div>
                                                    <v-btn depressed small
                                                        >Afficher</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="primary"
                                                        >Editer</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="error"
                                                        >Archiver</v-btn
                                                    >
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </b-card>

                        <b-card class="mb-3 nav-justified" no-body>
                            <b-tabs card>
                                <b-tab title="Bâtiment 2" active>
                                    <div>
                                        <h4 class="text-center">
                                            <i
                                                class="pe-7s-culture icon-gradient bg-happy-itmeo"
                                            ></i>
                                        </h4>
                                        <h5 class="text-center">
                                            Nom du bâtiment
                                        </h5>
                                        <br />
                                        <h6 class="text-center">
                                            informations
                                        </h6>
                                    </div>
                                </b-tab>
                                <b-tab title="Détail">
                                    <div>
                                        <v-layout align-center>
                                            <v-flex xs12 sm4 text-xs-center>
                                                <div>
                                                    <v-btn depressed small
                                                        >Afficher</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="primary"
                                                        >Editer</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="error"
                                                        >Archiver</v-btn
                                                    >
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </b-card>
                    </b-col>

                    <b-col md="4">
                        <b-card class="mb-3 nav-justified" no-body>
                            <b-tabs card>
                                <b-tab title="Bâtiment 3" active>
                                    <div>
                                        <h4 class="text-center">
                                            <i
                                                class="pe-7s-culture icon-gradient bg-happy-itmeo"
                                            ></i>
                                        </h4>
                                        <h5 class="text-center">
                                            Nom du bâtiment
                                        </h5>
                                        <br />
                                        <h6 class="text-center">
                                            informations
                                        </h6>
                                    </div>
                                </b-tab>

                                <b-tab title="Détail">
                                    <div>
                                        <v-layout align-center>
                                            <v-flex xs12 sm4 text-xs-center>
                                                <div>
                                                    <v-btn depressed small
                                                        >Afficher</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="primary"
                                                        >Editer</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="error"
                                                        >Archiver</v-btn
                                                    >
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </b-card>
                        <b-card class="mb-3 nav-justified" no-body>
                            <b-tabs card>
                                <b-tab title="Bâtiment 4" active>
                                    <div>
                                        <h4 class="text-center">
                                            <i
                                                class="pe-7s-culture icon-gradient bg-happy-itmeo"
                                            ></i>
                                        </h4>
                                        <h5 class="text-center">
                                            Nom du bâtiment
                                        </h5>
                                        <br />
                                        <h6 class="text-center">
                                            informations
                                        </h6>
                                    </div>
                                </b-tab>

                                <b-tab title="Détail">
                                    <div>
                                        <v-layout align-center>
                                            <v-flex xs12 sm4 text-xs-center>
                                                <div>
                                                    <v-btn depressed small
                                                        >Afficher</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="primary"
                                                        >Editer</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="error"
                                                        >Archiver</v-btn
                                                    >
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </b-card>
                    </b-col>
                    <b-col md="4">
                        <b-card class="mb-3 nav-justified" no-body>
                            <b-tabs card>
                                <b-tab title="Bâtiment 5" active>
                                    <div>
                                        <h4 class="text-center">
                                            <i
                                                class="pe-7s-culture icon-gradient bg-happy-itmeo"
                                            ></i>
                                        </h4>
                                        <h5 class="text-center">
                                            Nom du bâtiment
                                        </h5>
                                        <br />
                                        <h6 class="text-center">
                                            informations
                                        </h6>
                                    </div>
                                </b-tab>

                                <b-tab title="Détail">
                                    <div>
                                        <v-layout align-center>
                                            <v-flex xs12 sm4 text-xs-center>
                                                <div>
                                                    <v-btn depressed small
                                                        >Afficher</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="primary"
                                                        >Editer</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="error"
                                                        >Archiver</v-btn
                                                    >
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </b-card>

                        <b-card class="mb-3 nav-justified" no-body>
                            <b-tabs card>
                                <b-tab title="Bâtiment 6" active>
                                    <div>
                                        <h4 class="text-center">
                                            <i
                                                class="pe-7s-culture icon-gradient bg-happy-itmeo"
                                            ></i>
                                        </h4>
                                        <h5 class="text-center">
                                            Nom du bâtiment
                                        </h5>
                                        <br />
                                        <h6 class="text-center">
                                            informations
                                        </h6>
                                    </div>
                                </b-tab>

                                <b-tab title="Détail">
                                    <div>
                                        <v-layout align-center>
                                            <v-flex xs12 sm4 text-xs-center>
                                                <div>
                                                    <v-btn depressed small
                                                        >Afficher</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="primary"
                                                        >Editer</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="error"
                                                        >Archiver</v-btn
                                                    >
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </b-card>
                    </b-col>
                </b-row>
            </div>

            <!-- Second building -->

            <div v-if="currentTab === 'building2'">
                <b-row>
                    <b-col md="4">
                        <b-card class="mb-3 nav-justified" no-body>
                            <b-tabs card>
                                <b-tab title="Bâtiment 7" active>
                                    <div>
                                        <h4 class="text-center">
                                            <i
                                                class="pe-7s-culture icon-gradient bg-happy-itmeo"
                                            ></i>
                                        </h4>
                                        <h5 class="text-center">
                                            Nom du bâtiment
                                        </h5>
                                        <br />
                                        <h6 class="text-center">
                                            informations
                                        </h6>
                                    </div>
                                </b-tab>

                                <b-tab title="Détail">
                                    <div>
                                        <v-layout align-center>
                                            <v-flex xs12 sm4 text-xs-center>
                                                <div>
                                                    <v-btn depressed small
                                                        >Afficher</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="primary"
                                                        >Editer</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="error"
                                                        >Archiver</v-btn
                                                    >
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </b-card>

                        <b-card class="mb-3 nav-justified" no-body>
                            <b-tabs card>
                                <b-tab title="Bâtiment 8" active>
                                    <div>
                                        <h4 class="text-center">
                                            <i
                                                class="pe-7s-culture icon-gradient bg-happy-itmeo"
                                            ></i>
                                        </h4>
                                        <h5 class="text-center">
                                            Nom du bâtiment
                                        </h5>
                                        <br />
                                        <h6 class="text-center">
                                            informations
                                        </h6>
                                    </div>
                                </b-tab>

                                <b-tab title="Détail">
                                    <div>
                                        <v-layout align-center>
                                            <v-flex xs12 sm4 text-xs-center>
                                                <div>
                                                    <v-btn depressed small
                                                        >Afficher</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="primary"
                                                        >Editer</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="error"
                                                        >Archiver</v-btn
                                                    >
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </b-card>
                    </b-col>

                    <b-col md="4">
                        <b-card class="mb-3 nav-justified" no-body>
                            <b-tabs card>
                                <b-tab title="Bâtiment 9" active>
                                    <div>
                                        <h4 class="text-center">
                                            <i
                                                class="pe-7s-culture icon-gradient bg-happy-itmeo"
                                            ></i>
                                        </h4>
                                        <h5 class="text-center">
                                            Nom du bâtiment
                                        </h5>
                                        <br />
                                        <h6 class="text-center">
                                            informations
                                        </h6>
                                    </div>
                                </b-tab>

                                <b-tab title="Détail">
                                    <div>
                                        <v-layout align-center>
                                            <v-flex xs12 sm4 text-xs-center>
                                                <div>
                                                    <v-btn depressed small
                                                        >Afficher</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="primary"
                                                        >Editer</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="error"
                                                        >Archiver</v-btn
                                                    >
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </b-card>
                        <b-card class="mb-3 nav-justified" no-body>
                            <b-tabs card>
                                <b-tab title="Bâtiment 10" active>
                                    <div>
                                        <h4 class="text-center">
                                            <i
                                                class="pe-7s-culture icon-gradient bg-happy-itmeo"
                                            ></i>
                                        </h4>
                                        <h5 class="text-center">
                                            Nom du bâtiment
                                        </h5>
                                        <br />
                                        <h6 class="text-center">
                                            informations
                                        </h6>
                                    </div>
                                </b-tab>

                                <b-tab title="Détail">
                                    <div>
                                        <v-layout align-center>
                                            <v-flex xs12 sm4 text-xs-center>
                                                <div>
                                                    <v-btn depressed small
                                                        >Afficher</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="primary"
                                                        >Editer</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="error"
                                                        >Archiver</v-btn
                                                    >
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </b-card>
                    </b-col>
                    <b-col md="4">
                        <b-card class="mb-3 nav-justified" no-body>
                            <b-tabs card>
                                <b-tab title="Bâtiment 11" active>
                                    <div>
                                        <h4 class="text-center">
                                            <i
                                                class="pe-7s-culture icon-gradient bg-happy-itmeo"
                                            ></i>
                                        </h4>
                                        <h5 class="text-center">
                                            Nom du bâtiment
                                        </h5>
                                        <br />
                                        <h6 class="text-center">
                                            informations
                                        </h6>
                                    </div>
                                </b-tab>

                                <b-tab title="Détail">
                                    <div>
                                        <v-layout align-center>
                                            <v-flex xs12 sm4 text-xs-center>
                                                <div>
                                                    <v-btn depressed small
                                                        >Afficher</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="primary"
                                                        >Editer</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="error"
                                                        >Archiver</v-btn
                                                    >
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </b-card>

                        <b-card class="mb-3 nav-justified" no-body>
                            <b-tabs card>
                                <b-tab title="Bâtiment 12" active>
                                    <div>
                                        <h4 class="text-center">
                                            <i
                                                class="pe-7s-culture icon-gradient bg-happy-itmeo"
                                            ></i>
                                        </h4>
                                        <h5 class="text-center">
                                            Nom du bâtiment
                                        </h5>
                                        <br />
                                        <h6 class="text-center">
                                            informations
                                        </h6>
                                    </div>
                                </b-tab>

                                <b-tab title="Détail">
                                    <div>
                                        <v-layout align-center>
                                            <v-flex xs12 sm4 text-xs-center>
                                                <div>
                                                    <v-btn depressed small
                                                        >Afficher</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="primary"
                                                        >Editer</v-btn
                                                    >
                                                </div>
                                                <div>
                                                    <v-btn
                                                        depressed
                                                        small
                                                        color="error"
                                                        >Archiver</v-btn
                                                    >
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </b-card>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from "@/Layout/Components/PageTitle.vue";
import Tabs from "vue-tabs-with-active-line";
import { Buildings } from "@/mixins/building"

const TABS = [
    {
        title: "Espace 1",
        value: "building1"
    },
    {
        title: "Espace 2",
        value: "building2"
    }
];

export default {
    components: {
        PageTitle,
        Tabs
    },
    mixins: [ Buildings ],
    data: () => ({
        heading: "LA COLLOC - UNE FABRIQUE DE TRANSITION(S)",
        subheading: "listing des espaces de coworking",
        icon: "pe-7s-paper-plane icon-gradient bg-happy-itmeo",

        tabs: TABS,
        currentTab: "building1",
        buildings: []
    }),
    mounted () {
        this.getBuildings();
    },
    methods: {
        handleClick(newTab) {
            this.currentTab = newTab;
        },
        async getBuildings () {
            const res = await this.getAllBuildings();
            if (res.error) {
                return console.log(res.error);
            }
            this.buildings = res.datas;
            console.log(this.buildings);
        }
    }
};
</script>
