<template>
    <b-row class="board h-100 pb-4">
        <b-col v-for="(item, index) in society" :key="index" class="">
            <b-card-group class="h-100">
                <b-card no-body class="overflow-hidden">
                    <b-row no-gutters class="h-100 p-5">
                        <!--MAIN INFOS -->
                        <b-col class="society-info-group pr-5">
                            <b-row class="society-info-group-main ml-0">
                                <b-col class="society-info text-center border">
                                    <b-img :src="item.avatar"
                                           alt="Avatar du membre"
                                           height="90"
                                           width="90"
                                           rounded="circle"
                                           class="society-info-avatar mx-4 mt-4 mb-3 border-sunglo">
                                    </b-img>
                                    <p class="text-sunglo font-weight-bold pt-2">
                                        {{ item.enterprise }}</p>

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
                                    <b-row class="">
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

                                    <!--MEMBRES-->
                                    <b-row class="society-info-members border-top py-2">
                                        <b-col class="text-left">
                                            <ul class="my-0">
                                                <li v-for="(item, index) in members"
                                                    :key="index"
                                                    class="">
                                                    <a href="#" class="px-2 py-1 w-100">
                                                        <b-img :src="item.avatar"
                                                               alt="Avatar du membre"
                                                               height="32"
                                                               width="32"
                                                               rounded="circle"
                                                               class="society-info-avatar mr-2 border-sunglo">
                                                        </b-img>
                                                        <span class="font-weight-bold pt-2 text-left">
                                            {{ item.firstname }} {{ item.lastname }} </span></a>
                                                </li>
                                            </ul>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>

                            <!--INFOS SUPPLÉMENTAIRES-->
                            <b-row class="society-info-group-action ml-0 mt-3">
                                <b-col class="col col-12 society-info">
                                    <b-row>
                                        <b-button @click="displayBillsQuotes"
                                                  :variant="activatedQuotes"
                                                  class="society-info-btn mb-2">
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
                                                  class="society-info-btn mb-2">
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
                                                  class="society-info-btn mb-2">
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
                                                  class="society-info-btn">
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
                        <b-col class="society-datas border h-100 px-5 pt-4 pb-4">
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
    name      : 'Societes',
    components: {
        invoicesQuotes: InvoicesQuotes,
        credits       : Credits,
        bookings      : Bookings,
        subscription  : Subscription
    },
    data() {
        return {
            actionsIcon: '<b-icon icon="gear" class="font-size-xlg"></b-icon',

            society: [
                {
                    enterprise: 'Le  cocktail hawaïen',
                    address   : {
                        street  : '17 rue de Vaucouleurs',
                        town    : 'Paris',
                        state   : 'Ille-de France',
                        zip_code: 75011
                    },
                    mail      : 'cocktail-hawaien@gmail.com',
                    phone     : '(+33) 11 22 33 44 55',
                    avatar    : require( '@/assets/images/avatars/avatar-society-01.png' ),
                    credits   : '134',
                    time      : '12',
                    status    : 'Externe'
                }
            ],
            members: [
                {
                    firstname: 'Patti',
                    lastname : 'Smith',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/1.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloremque excepturi explicabo natus nisi porro possimus quisquam totam, vero! '
                },
                {
                    firstname: 'Donny',
                    lastname : 'Hathaway',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/2.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloremque excepturi explicabo natus nisi porro possimus quisquam totam, vero! '
                },
                {
                    firstname: 'Otis',
                    lastname : 'Redding',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/3.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloremque excepturi explicabo natus nisi porro possimus quisquam totam, vero! '
                },
                {
                    firstname: 'Elvis',
                    lastname : 'Costello',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/4.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloremque excepturi explicabo natus nisi porro possimus quisquam totam, vero! '
                },
                {
                    firstname: 'Roberta',
                    lastname : 'Flack',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/5.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloremque excepturi explicabo natus nisi porro possimus quisquam totam, vero! '
                },
                {
                    firstname: 'Jamie',
                    lastname : 'Cullum',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/6.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloremque excepturi explicabo natus nisi porro possimus quisquam totam, vero! '
                },
                {
                    firstname: 'Sam',
                    lastname : 'Cooke',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/11.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloremque excepturi explicabo natus nisi porro possimus quisquam totam, vero! '
                },
                {
                    firstname: 'André',
                    lastname : 'Manoukian',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/8.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloremque excepturi explicabo natus nisi porro possimus quisquam totam, vero! '
                },
                {
                    firstname: 'Jarle',
                    lastname : 'Bernhoft',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/9.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'lorem20 '
                }, {
                    firstname: 'Marvin',
                    lastname : 'Gaye',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/1.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloremque excepturi explicabo natus nisi porro possimus quisquam totam, vero! '
                },
                {
                    firstname: 'Donny',
                    lastname : 'Hathaway',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/2.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloremque excepturi explicabo natus nisi porro possimus quisquam totam, vero! '
                }
            ],

            onBillsQuotes : true,
            onCredits     : false,
            onBookings    : false,
            onSubscription: false
        };
    },
    computed: {
        activatedQuotes() {
            return this.onBillsQuotes ? 'sunglo' : 'outline-sunglo';
        },
        activatedCredits() {
            return this.onCredits ? 'sunglo' : 'outline-sunglo';
        },
        activatedBookings() {
            return this.onBookings ? 'sunglo' : 'outline-sunglo';
        },
        activatedSubscription() {
            return this.onSubscription ? 'sunglo' : 'outline-sunglo';
        }
    },
    methods : {
        displayBillsQuotes() {
            this.onBillsQuotes = true;
            this.onCredits = false;
            this.onBookings = false;
            this.onSubscription = false;
        },
        displayCredits() {
            this.onBillsQuotes = false;
            this.onCredits = true;
            this.onBookings = false;
            this.onSubscription = false;
        },
        displayBookings() {
            this.onBillsQuotes = false;
            this.onCredits = false;
            this.onBookings = true;
            this.onSubscription = false;
        },
        displaySubscription() {
            this.onBillsQuotes = false;
            this.onCredits = false;
            this.onBookings = false;
            this.onSubscription = true;
        }
    }
};
</script>

<style scoped>
.board {
    letter-spacing : 0.0125rem;
    font-family    : Montserrat, Arial, sans-serif;
    min-width : 1600px;
}

.card-group {
    width     : 100%;
    min-width : 940px;
}

.card-group > .card:only-child {
    border-radius : 8px;
}

.society-info-group {
    max-width : max-content;
}

.society-info-group-action {
    border-radius : 8px;
}

.society-info, .society-datas {
    border-radius : 8px;
}

.society-info {
    width : 300px;
}

.society-info-avatar {
    border     : 2px solid;
    box-sizing : border-box;
}


.society-info-members ul {
    padding    : 0 !important;
    margin     : 0 !important;
    max-height : 160px;
    overflow   : scroll;
}

.society-info-members li {
    list-style-type : none;

}

.society-info-members a {
    display         : inline-block;
    text-decoration : none;
    width           : 100%;
    border-radius   : 8px;
    border          : 1px solid rgba(236, 100, 101, 0);
    box-sizing      : border-box;
    color           : #2E2D2C
}

.society-info-members a:hover {
    display          : inline-block;
    background-color : rgba(236, 100, 101, 0.15);
    border           : 1px solid rgba(236, 100, 101, 1);
    box-sizing       : border-box;
    color            : #EC6465;

}

.society-info-btn {
    width           : 100%;
    display         : flex;
    justify-content : space-between;
    border-radius   : 6px;
    padding-left    : 58px;
    padding-right   : 29px;
}

.society-info-btn.iconsInfo {
}

.society-datas {
    width     : 100%;
    min-width : 980px;

}

.society-header-choice span {
    display    : inline-block;
    margin-top : 2px;
}

</style>

<style>
.componentTitle {
    font-size      : 1.15rem;
    font-weight    : bold;
    padding-bottom : 10px;
}
</style>