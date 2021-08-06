<template>
    <b-container class="text-eternity">
        <!--        WALL CARDS HEADER-->
        <!--        sélection profil membres/sociétés-->
        <b-row align-h="between" class="wallCard-header">
            <b-form-radio-group
                id="btn-radios"
                v-model="selected"
                :options="options"
                :aria-describedby="ariaDescribedby"
                button-variant="outline-sunglo"
                size="sm"
                name="radio-btn-outline"
                class="wallCard-header-profile mr-3"
                buttons
            ></b-form-radio-group>

            <!--champ de recherche-->
            <b-input-group class="col col-6 wallCard-header-search p-0">
                <b-form-input placeholder="Qui recherchez-vous ?"></b-form-input>
                <b-input-group-append>
                    <b-button class="btn-search btn-sunglo">
                        <b-icon icon="search" aria-hidden="true" class="iconCardsInfo mr-2"></b-icon>
                        Rechercher
                    </b-button>
                </b-input-group-append>
            </b-input-group>

            <!--critères de recherche-->
            <b-button-group size="sm" class="criterions row mx-0 mt-4 ml-auto" align-content="end">
                <b-dropdown right text="Statut" variant="sunglo">
                    <b-dropdown-item>Item 1</b-dropdown-item>
                    <b-dropdown-item>Item 2</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
                <b-dropdown right text="Catégorie" variant="sunglo">
                    <b-dropdown-item>Item 1</b-dropdown-item>
                    <b-dropdown-item>Item 2</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
                <b-dropdown right text="Type d'adhésion" variant="sunglo">
                    <b-dropdown-item>Item 1</b-dropdown-item>
                    <b-dropdown-item>Item 2</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
                <b-dropdown right text="Tri" variant="sunglo">
                    <b-dropdown-item>Item 1</b-dropdown-item>
                    <b-dropdown-item>Item 2</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
            </b-button-group>
        </b-row>

        <hr class="p-3">
        <!--WALL CARDS BODY-->
        <card></card>


        <!--WALL CARDS FOOTER-->
        <b-row class="mt-4">
            <b-col>
                <b-pagination v-model="currentPage" :total-rows="rows" size="sm" align="center"></b-pagination>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
import Card from '@/apps/tomerge/LC-173-JC/components/Card-sunglo-2.vue';

export default {
    name      : 'WallCard',
    components: {
        'card': Card
    },
    data() {
        return {

            search  : '<b-icon icon=\'search\' aria-hidden=\'true\'></b-icon>',
            selected: 'radio1',
            options : [
                { text: 'Membres', value: 'radio1' },
                { text: 'Sociétés', value: 'radio2' }
            ]
        };
    }
};
</script>

<style>
.container {
    font-family : Montserrat, Arial, sans-serif;
    padding     : 0;
    max-width   : 1630px;
}

.wallCard-header {
    width     : 100%;
    max-width : 1630px;
    margin    : 0 auto;
}

.wallCard-header-profile span {
    display    : inline-block;
    margin-top : 2px;
}
.input-group.wallCard-header-search {
    min-width : 380px;
}

.page-item .page-link, .pagination .page-number .page-link {
    color : #EC6465;
}

.page-item.active .page-link, .pagination .active.page-number .page-link {
    background-color : #EC6465;
    border           : 1px solid #EC6465;
}

@media (min-width : 1197px) and (max-width : 1349px) {
    .btn-group {
        margin-top : 0 !important;
    }

    .criterions {
        margin-left : 0 !important;
    }
}

@media (min-width : 1350px) and (max-width : 1396px) {

}

@media (min-width : 1397px) {
    .btn-group {
        margin-top : 0 !important;
    }

    .criterions {
        margin-left : 0 !important;
    }
}

@media (min-width : 1197px) and (max-width : 1349px) {
    .input-group.wallCard-header-search {
        padding : 0 15px !important;
    }
}

@media (min-width : 1397px) {
    .input-group.wallCard-header-search {
        padding : 0 15px !important;
    }
}
</style>