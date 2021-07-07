<template>
    <b-container>
        <!--        WALL CARDS HEADER-->
        <b-row>
            <b-form-radio-group
                id="btn-radios-2"
                v-model="selected"
                :options="options"
                :aria-describedby="ariaDescribedby"
                button-variant="outline-primary"
                size="lg"
                name="radio-btn-outline"
                buttons
            ></b-form-radio-group>

            <b-input-group :append-html="search" class="col col-4">
                <b-form-input size="lg" type="search" placeholder="Rechercher"></b-form-input>
            </b-input-group>

            <b-button-group>
                <b-dropdown right text="Statut" variant="primary">
                    <b-dropdown-item>Item 1</b-dropdown-item>
                    <b-dropdown-item>Item 2</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
                <b-dropdown right text="Catégorie" variant="primary">
                    <b-dropdown-item>Item 1</b-dropdown-item>
                    <b-dropdown-item>Item 2</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
                <b-dropdown right text="Type d'adhésion" variant="primary">
                    <b-dropdown-item>Item 1</b-dropdown-item>
                    <b-dropdown-item>Item 2</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
                <b-dropdown right text="Tri" variant="primary">
                    <b-dropdown-item>Item 1</b-dropdown-item>
                    <b-dropdown-item>Item 2</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
            </b-button-group>
        </b-row>
        <hr>
        <!--        WALL CARDS BODY-->
        <b-row class="wallCard">
            <b-col lg="6" class="mb-3" v-for="(item, index) in members" :key="index">
                <b-card-group class="itemCard ">
                    <b-card no-body class="overflow-hidden">
                        <b-row no-gutters align-v="center">
                            <b-col class="avatarCardInfo">
                                <b-img :src="item.avatar"
                                       alt=""
                                       height="80"
                                       width="80"
                                       rounded="circle"
                                       class="avatar ml-2">
                                </b-img>
                            </b-col>
                            <b-col class="mainCardInfo col-6 mt-3">
                                <div class="firstnameCardInfo row"><p class="labelCardInfo">Prénom :</p>
                                    <p class="cardInfo">{{ item.firstname }}</p></div>
                                <div class="nameCardInfo row"><p class="labelCardInfo">Nom :</p>
                                    <p class="cardInfo">{{ item.lastname }}</p></div>
                                <div class="mailCardInfo row"><p class="labelCardInfo">Email :</p>
                                    <p class="cardInfo">whatsgoingon@gmail.com</p></div>
                                <div class="phoneCardInfo row"><p class="labelCardInfo">Téléphone :</p>
                                    <p class="cardInfo">(+33) ## ## ## ## ##</p></div>
                            </b-col>
                            <b-col class="addsCardInfo overflow-hidden px-2 py-3">
                                <p class="mr-3 mb-2">325
                                    <b-icon icon="wallet-2" aria-hidden="true" class="iconCardsInfo ml-1"></b-icon>
                                </p>
                                <p class="mr-3 mb-2">1 h 30 min
                                    <b-icon icon="clock" aria-hidden="true" class="iconCardsInfo ml-1"></b-icon>
                                </p>
                                <b-row align-h="center">
                                    <!-- Using modifiers -->
                                    <b-button v-b-toggle.collapse-2 class="btn-outline-light m-1">
                                        <b-icon icon="card-text"
                                                aria-hidden="true"
                                                class="iconCardsInfo mr-1"></b-icon>
                                        Détails
                                    </b-button>
                                </b-row>
                            </b-col>

                        </b-row>
                        <!-- Element to collapse -->
                        <b-collapse id="collapse-2">
                            <b-card class="p-4">{{ item.details }}</b-card>
                        </b-collapse>
                    </b-card>
                </b-card-group>
            </b-col>
        </b-row>
        <hr>
        <!--        WALL CARDS FOOTER-->

        <!--        <b-row class="rowFooter w-100">-->
        <!--            &lt;!&ndash;            <hr>&ndash;&gt;-->
        <!--            <b-col class="wallCardFooter midnight-blue col col-12 ">Footer</b-col>-->
        <!--        </b-row>-->

    </b-container>
</template>

<script>
export default {
    name: 'WallCard',
    data() {
        return {
            search  : '<b-icon icon=\'search\' aria-hidden=\'true\'></b-icon>',
            selected: 'radio1',
            options : [
                { text: 'Membres', value: 'radio1' },
                { text: 'Sociétés', value: 'radio2' }
            ],
            members : [
                {
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
                    firstname: 'Billie',
                    lastname : 'Holliday',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/4.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloremque excepturi explicabo natus nisi porro possimus quisquam totam, vero! '
                },
                {
                    firstname: 'Sam',
                    lastname : 'Cooke',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/5.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloremque excepturi explicabo natus nisi porro possimus quisquam totam, vero! '
                },
                {
                    firstname: 'Sam',
                    lastname : 'Cooke',
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
                    avatar   : require( '@/assets/images/avatars/7.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloremque excepturi explicabo natus nisi porro possimus quisquam totam, vero! '
                },
                {
                    firstname: 'Sam',
                    lastname : 'Cooke',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/8.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloremque excepturi explicabo natus nisi porro possimus quisquam totam, vero! '
                },
                {
                    firstname: 'Roberta',
                    lastname : 'Flack',
                    mail     : 'whatsgoingon@gmail.com',
                    phone    : '## ## ## ## ##',
                    avatar   : require( '@/assets/images/avatars/9.jpg' ),
                    credits  : '',
                    time     : '',
                    details  : 'lorem20 '
                }
            ]
        }
            ;
    }
};
</script>

<style scoped>
.container {
    font-family : Montserrat, Arial, sans-serif;
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

.wallCardFooter {
    text-align : center;
    position   : relative;
    max-width  : 1140px;
}

.rowFooter {
    position : fixed;
    bottom   : 120px;
}

.card-body {
    padding : 0;
}

.avatar {
    border : 3px solid #EC6465;
}

.avatarCardInfo {
    padding-left  : 10px;
    padding-right : 10px;
}

.labelCardInfo {
    width : 80px;
}

.mainCardInfo {
    line-height : 0.6rem;
    padding-left: 0;
}

.cardInfo {
    font-weight : 600;
}

.addsCardInfo {
    background-color : #EC6465;
    text-align       : right;
}
p > .iconCardsInfo {
    color: #FFF;
}
.addsCardInfo button {
    border           : 1px solid #FFF;
    background-color : rgba(236, 100, 101, 0);
    color            : #FFF;
}

.addsCardInfo button:hover {
    color            : #EC6465;
    background-color : rgba(255, 255, 255, 1);
}

.addsCardInfo button:active {
    background-color : rgba(236, 100, 101, 1);
    color            : #FFF;
}

.iconCardsInfo {
    position             : relative;
    font-size : 1.3rem;
    top                  : -1px;
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