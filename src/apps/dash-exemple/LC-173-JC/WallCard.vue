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
            <b-col cols="6" class="mb-3">
                <b-card-group class="itemCard">
                    <b-card>

                    </b-card>
                </b-card-group>
            </b-col>
            <b-col cols="6" class="mb-3">
                <b-card-group class="">
                    <b-card>

                    </b-card>
                </b-card-group>
            </b-col>
            <b-col cols="6" class="mb-3">
                <b-card-group class="itemCard">
                    <b-card>

                    </b-card>
                </b-card-group>
            </b-col>
            <b-col cols="6" class="mb-3">
                <b-card-group class="">
                    <b-card>

                    </b-card>
                </b-card-group>
            </b-col>
            <b-col cols="6" class="mb-3">
                <b-card-group class="itemCard">
                    <b-card>

                    </b-card>
                </b-card-group>
            </b-col>
            <b-col cols="6" class="mb-3">
                <b-card-group class="">
                    <b-card>

                    </b-card>
                </b-card-group>
            </b-col>
            <!--                <b-card-group class="col-6">-->
            <!--                    <b-card no-body class="overflow-hidden">-->
            <!--                        <b-row >-->
            <!--                            <b-col class="col-3">-->
            <!--                                <b-card-img src="https://picsum.photos/400/400/?image=20"-->
            <!--                                            alt="Image"-->
            <!--                                            class="rounded-0"></b-card-img>-->
            <!--                            </b-col>-->
            <!--                            <b-col class="col-6">-->
            <!--                                <b-card-body title="Horizontal Card">-->
            <!--                                    <b-card-text>-->
            <!--                                        This is a wider card with supporting text as a natural lead-in to additional content.-->
            <!--                                        This content is a little bit longer.-->
            <!--                                    </b-card-text>-->
            <!--                                </b-card-body>-->
            <!--                            </b-col>-->
            <!--                            <b-col class="col-3">-->

            <!--                            </b-col>-->
            <!--                        </b-row>-->
            <!--                    </b-card>-->
            <!--                </b-card-group>-->
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
    background-color        : #E9C20C;
    border-radius : 8px;
    color         : #FFF;
    padding: 8px 16px;
}

.tradewind {
    background-color        : #6BB4AE;
    border-radius : 8px;
    color         : #FFF;
    padding: 8px 16px;
}

.sunglo {
    background-color        : #EC6465;
    border-radius : 8px;
    color         : #FFF;
    padding: 8px 16px;
}

.midnight-blue {
    border        : 1px solid #165166;
    border-radius : 8px;
    color         : #FFF;
    padding: 8px 16px;
}

.card-group > .card:only-child {
    border-radius : 6px;
}

hr {
    margin-top    : 20px;
    margin-bottom : 20px;
}

.wallCard > div:nth-child(odd) {
    padding-left : 0;
}

.wallCard > div:nth-child(even) {
    padding-right : 0;
}
</style>