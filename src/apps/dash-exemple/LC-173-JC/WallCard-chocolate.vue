<template>
    <b-container class="text-eternity">
        <!--        WALL CARDS HEADER-->
        <b-row align-h="between" class="wallCard-header">
            <b-form-radio-group
                id="btn-radios"
                v-model="selected"
                :options="options"
                :aria-describedby="ariaDescribedby"
                button-variant="outline-chocolate"
                size="sm"
                name="radio-btn-outline"
                class="wallCard-header-profile"
                buttons
            ></b-form-radio-group>


            <b-input-group class="col col-5 wallCard-header-search">
                <b-form-input placeholder="Qui recherchez-vous ?"></b-form-input>
                <b-input-group-append>
                    <b-button class="btn-search btn-chocolate">
                        <b-icon icon="search" aria-hidden="true" class="iconCardsInfo mr-2"></b-icon>
                        Rechercher
                    </b-button>
                </b-input-group-append>
            </b-input-group>


            <b-button-group size="sm" class="row m-0" align-content="end">
                <b-dropdown right text="Statut" variant="chocolate">
                    <b-dropdown-item>Item 1</b-dropdown-item>
                    <b-dropdown-item>Item 2</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
                <b-dropdown right text="Catégorie" variant="chocolate">
                    <b-dropdown-item>Item 1</b-dropdown-item>
                    <b-dropdown-item>Item 2</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
                <b-dropdown right text="Type d'adhésion" variant="chocolate">
                    <b-dropdown-item>Item 1</b-dropdown-item>
                    <b-dropdown-item>Item 2</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
                <b-dropdown right text="Tri" variant="chocolate">
                    <b-dropdown-item>Item 1</b-dropdown-item>
                    <b-dropdown-item>Item 2</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
            </b-button-group>
        </b-row>

        <hr class="p-3">
        <!--        WALL CARDS BODY-->
        <card></card>


        <!--        WALL CARDS FOOTER-->
        <b-row class="mt-4">
            <b-col>
                <b-pagination v-model="currentPage" :total-rows="rows" size="sm" align="center"></b-pagination>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
import Card2 from '@/apps/dash-exemple/LC-173-JC/components/Card-chocolate.vue';

export default {
    name      : 'WallCard2',
    components: {
        'card': Card2
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

.wallCard-header{
    width: 100%;
    max-width : 1630px;
    margin: 0 auto;
}

.wallCard-header-profile span{
    display: inline-block;
    margin-top: 2px;
}

.page-item .page-link, .pagination .page-number .page-link {
    //color: #d46122;
    color: chocolate;
}

.page-item.active .page-link, .pagination .active.page-number .page-link {
    //background-color: #d46122;
    background-color: chocolate;
    //border: 1px solid #d46122;
    border: 1px solid chocolate;
}

</style>