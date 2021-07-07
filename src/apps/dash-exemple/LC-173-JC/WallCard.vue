<template>
    <b-container>
        <b-row class="border-midnight-blue">
            <b-col class="corn col-2">Select</b-col>
            <b-col class="tradewind col-4">Search</b-col>
            <b-col class="sunglo col-6">Dropdown</b-col>
        </b-row>

        <hr>
        <!--        WALL CARDS-->
        <b-row class="wallCard">
            <b-col lg="6" class="mb-3">
                <b-card-group class="itemCard">
                    <b-card>

                    </b-card>
                </b-card-group>
            </b-col>
            <b-col lg="6" class="mb-3">
                <b-card-group class="">
                    <b-card>

                    </b-card>
                </b-card-group>
            </b-col>
            <b-col lg="6" class="mb-3">
                <b-card-group class="itemCard">
                    <b-card>

                    </b-card>
                </b-card-group>
            </b-col>
            <b-col lg="6" class="mb-3">
                <b-card-group class="">
                    <b-card>

                    </b-card>
                </b-card-group>
            </b-col>
            <b-col lg="6" class="mb-3">
                <b-card-group class="itemCard">
                    <b-card>

                    </b-card>
                </b-card-group>
            </b-col>
            <b-col lg="6" class="mb-3">
                <b-card-group class="">
                    <b-card>

                    </b-card>
                </b-card-group>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'WallCard'
};
</script>

<style scoped>
.corn {
    background-color : #E9C20C;
    border-radius    : 8px;
    color            : #FFF;
    padding          : 8px 16px;
}

.tradewind {
    background-color : #6BB4AE;
    border-radius    : 8px;
    color            : #FFF;
    padding          : 8px 16px;
}

.sunglo {
    background-color : #EC6465;
    border-radius    : 8px;
    color            : #FFF;
    padding          : 8px 16px;
}

.midnight-blue {
    border        : 1px solid #165166;
    border-radius : 8px;
    color         : #FFF;
    padding       : 8px 16px;
}

.card-group > .card:only-child {
    border-radius : 6px;
}

hr {
    margin-top    : 20px;
    margin-bottom : 20px;
}

.wallCard > div {
    padding : 0;
}

@media (min-width : 980px) {
    .wallCard > div:nth-child(odd) {
        padding-right : 20px;
    }

    .wallCard > div:nth-child(even) {
        padding-left : 20px;
    }
}
</style>