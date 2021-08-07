<template>
    <b-row class="board h-100 pb-4">
        <b-col v-for="(item, index) in member" :key="index" class="">
            <b-card-group class="h-100">
                <b-card no-body class="overflow-hidden">
                    <b-row no-gutters class="h-100 p-5">
                        <!--MAIN INFOS -->
                        <b-col class="member-info-group pr-5">
                            <b-row class="member-info-group-main ml-0">
                                <b-col class="member-info text-center border">
                                    <b-img :src="item.avatar"
                                           alt="Avatar du membre"
                                           height="96"
                                           width="96"
                                           rounded="circle"
                                           class="member-info-avatar mx-4 mt-4 mb-3 border-sunglo">
                                    </b-img>
                                    <p class="text-sunglo font-weight-bold pt-2">
                                        {{ item.firstname }} {{ item.lastname }}</p>

                                    <b-row class="member-info-society text-left mb-3">
                                                <a href="#" class="mx-2 p-2">
                                                    <b-icon icon="building"
                                                            aria-hidden="true"
                                                            class="iconsInfo mx-2 mt-n2 text-sunglo font-size-xlg"
                                                            title=""></b-icon>
                                                    <span class="font-weight-bold ml-2 pt-2 text-left">
                                            {{ item.enterprise }} </span></a>

                                    </b-row>

                                    <b-row class="border-top pt-4">
                                        <b-col class="col-1">
                                            <b-icon icon="envelope"
                                                    aria-hidden="true"
                                                    class="iconsInfo mx-2 mt-n2 text-sunglo font-size-xlg"
                                                    title=""></b-icon>
                                        </b-col>
                                        <b-col>
                                            <p class="ml-3 text-left">{{ item.mail }}</p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col class="col-1">
                                            <b-icon icon="telephone"
                                                    aria-hidden="true"
                                                    class="iconsInfo mx-2 mt-n2 text-sunglo font-size-xlg"
                                                    title=""></b-icon>
                                        </b-col>
                                        <b-col>
                                            <p class="ml-3 text-left">{{ item.phone }}</p>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-3">
                                        <b-col class="col-1">
                                            <b-icon icon="gift"
                                                    aria-hidden="true"
                                                    class="iconsInfo mx-2 mt-n2 text-sunglo font-size-xlg"
                                                    title=""></b-icon>
                                        </b-col>
                                        <b-col>
                                            <p v-show="item.birthday"
                                               class="ml-3 pr-3 mb-1 pb-3 text-left">
                                                {{ item.birthday }}</p>
                                        </b-col>
                                    </b-row>

                                    <b-row class="border-top pt-4">
                                        <b-col class="col-1">
                                            <b-icon icon="house-door"
                                                    aria-hidden="true"
                                                    class="iconsInfo mx-2 mt-n2 text-sunglo font-size-xlg"
                                                    title=""></b-icon>
                                        </b-col>
                                        <b-col>
                                            <p class="main-info-addressPart1 ml-3 mb-2 text-left">
                                                {{ item.address.street }}
                                            </p>
                                            <p class="main-info-addressPart2 ml-3 text-left">
                                                {{ item.address.zip_code }} {{ item.address.town }}
                                                <span v-show="item.address.state">, {{ item.address.state }}</span>
                                            </p>
                                        </b-col>
                                    </b-row>

                                    <b-row class="border-top pt-4">
                                        <b-col class="col-1">
                                            <b-icon icon="wallet-2"
                                                    aria-hidden="true"
                                                    class="iconsInfo mx-2 mt-n2 text-sunglo font-size-xlg"
                                                    title=""></b-icon>
                                        </b-col>
                                        <b-col>
                                            <p class="ml-3 text-left">
                                                {{ item.credits }} crédits
                                            </p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col class="col-1">
                                            <b-icon icon="stopwatch"
                                                    aria-hidden="true"
                                                    class="iconsInfo mx-2 mt-n2 text-sunglo font-size-xlg"
                                                    title=""></b-icon>
                                        </b-col>
                                        <b-col>
                                            <p class="ml-3 text-left">
                                                {{ item.time }} heures
                                            </p>
                                        </b-col>
                                    </b-row>

                                    <b-row class="border-top pt-4">
                                        <b-col class="col-1">
                                            <b-icon icon="person-badge"
                                                    aria-hidden="true"
                                                    class="iconsInfo mx-2 mt-n2 text-sunglo font-size-xlg"
                                                    title=""></b-icon>
                                        </b-col>
                                        <b-col>
                                            <p class="ml-3 text-left">
                                                {{ item.status }}
                                            </p>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>

                            <b-row class="member-info-group-action ml-0 mt-3">
                                <b-col class="col col-12 member-info">
                                    <b-row>
                                        <b-button @click="displayBillsQuotes"
                                                  :variant="activatedQuotes"
                                                  class="member-info-btn mb-2">
                                            <span class="">Factures / Devis</span>

                                            <b-icon icon="arrow-right-circle-fill"
                                                    aria-hidden="true"
                                                    class="iconsInfo font-size-xlg"
                                                    title=""></b-icon>
                                        </b-button>
                                    </b-row>
                                    <b-row>
                                        <b-button @click="displayCredits"
                                                  :variant="activatedCredits"
                                                  class="member-info-btn mb-2">
                                            <span class="">Crédits</span>

                                            <b-icon icon="arrow-right-circle-fill"
                                                    aria-hidden="true"
                                                    class="iconsInfo font-size-xlg"
                                                    title=""></b-icon>
                                        </b-button>
                                    </b-row>
                                    <b-row>
                                        <b-button @click="displayBookings"
                                                  block
                                                  :variant="activatedBookings"
                                                  class="member-info-btn mb-2">
                                            <span class="">Réservations</span>
                                            <b-icon icon="arrow-right-circle-fill"
                                                    aria-hidden="true"
                                                    class="iconsInfo font-size-xlg"
                                                    title=""></b-icon>
                                        </b-button>
                                    </b-row>
                                    <b-row>
                                        <b-button @click="displaySubscription"
                                                  block
                                                  :variant="activatedSubscription"
                                                  class="member-info-btn">
                                            <span class="">Abonnement</span>
                                            <b-icon icon="arrow-right-circle-fill"
                                                    aria-hidden="true"
                                                    class="iconsInfo font-size-xlg"
                                                    title=""></b-icon>
                                        </b-button>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </b-col>

                        <!--BODY-->
                        <b-col class="member-datas border h-100 px-5 pt-4 pb-4">
                            <invoices-quotes v-if="onBillsQuotes"></invoices-quotes>
                            <credits v-else-if="onCredits"></credits>
                            <bookings v-else-if="onBookings"></bookings>
                            <subscription v-else-if="onSubscription"></subscription>
                        </b-col>
                    </b-row>
                </b-card>
            </b-card-group>
        </b-col>
    </b-row>

</template>

<script>

import InvoicesQuotes from '@/apps/tomerge/LC-203-JC/components/InvoicesQuotes';
import Credits from '@/apps/tomerge/LC-203-JC/components/Credits';
import Bookings from '@/apps/tomerge/LC-203-JC/components/Bookings';
import Subscription from '@/apps/tomerge/LC-203-JC/components/Subscription';

export default {
    name: 'Membres',
    components: {
        invoicesQuotes : InvoicesQuotes,
        credits: Credits,
        bookings: Bookings,
        subscription: Subscription
    },
    data() {
        return {
            actionsIcon : '<b-icon icon="gear" class="font-size-xlg"></b-icon',
            member      : [
                {
                    firstname : 'Bruno',
                    lastname  : 'Mars',
                    birthday  : '14/12/1989',
                    enterprise: 'Le  cocktail hawaïen',
                    address   : {
                        street  : '17 rue de Vaucouleurs',
                        town    : 'Paris',
                        state   : 'Ille-de France',
                        zip_code: 75011
                    },
                    mail      : 'bruno.mars@gmail.com',
                    phone     : '(+33) 11 22 33 44 55',
                    avatar    : require( '@/assets/images/avatars/3.jpg' ),
                    credits   : '134',
                    time      : '12',
                    status    : 'Externe'
                }
            ],

            onBillsQuotes : true,
            onCredits     : false,
            onBookings    : false,
            onSubscription: false
        }
    },
    computed: {
        activatedQuotes() {
            return this.onBillsQuotes ? "sunglo" : "outline-sunglo";
        },
        activatedCredits() {
            return this.onCredits ? "sunglo" : "outline-sunglo";
        },
        activatedBookings() {
            return this.onBookings ? "sunglo" : "outline-sunglo";
        },
        activatedSubscription() {
            return this.onSubscription ? "sunglo" : "outline-sunglo";
        }
    },
    methods: {
        displayBillsQuotes() {
            this.onBillsQuotes = true
            this.onCredits = false
            this.onBookings = false
            this.onSubscription = false
        },
        displayCredits() {
            this.onBillsQuotes = false
            this.onCredits = true
            this.onBookings = false
            this.onSubscription = false
        },
        displayBookings() {
            this.onBillsQuotes = false
            this.onCredits = false
            this.onBookings = true
            this.onSubscription = false
        },
        displaySubscription() {
            this.onBillsQuotes = false
            this.onCredits = false
            this.onBookings = false
            this.onSubscription = true
        }
    }
};
</script>

<style scoped>
.board {
    letter-spacing : 0.0125rem;
    font-family    : Montserrat, Arial, sans-serif;
}

.card-group {
    width     : 100%;
    min-width : 940px;
}

.card-group > .card:only-child {
    border-radius : 8px;
}

.member-info-group {
    max-width : max-content;
}

.member-info-group-action {
    border-radius : 8px;
}

.member-info, .member-datas {
    border-radius : 8px;
}

.member-info {
    width : 300px;
}

.member-info-avatar {
    border     : 2px solid;
    box-sizing : border-box;
}

.member-datas {
    width     : 100%;
    min-width : 520px;
}

.member-header-choice span {
    display    : inline-block;
    margin-top : 2px;
}

.btn-group {
    margin-top : 0 !important;
}

.member-info-society {

}

.member-info-society a {
    display         : inline-block;
    text-decoration : none;
    width           : 100%;
    border-radius   : 8px;
    border          : 1px solid rgba(236, 100, 101, 0);
    box-sizing      : border-box;
    color           : #2E2D2C
}

.member-info-society a:hover {
    display          : inline-block;
    background-color : rgba(236, 100, 101, 0.15);
    border           : 1px solid rgba(236, 100, 101, 1);
    box-sizing       : border-box;
    color            : #EC6465;

}

.member-info-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 6px;
    padding-left: 58px;
    padding-right: 29px;
}

.member-info-btn.iconsInfo {
}

</style>

<style>
.componentTitle {
    font-size: 1.15rem;
    font-weight: bold;
    padding-bottom: 10px;
}
</style>