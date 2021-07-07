<template>
    <b-row class="wallCard text-eternity">
        <b-col sm="12" md="6" xl="4" xxl="3" class="mb-3" v-for="(item, index) in members" :key="index">
            <b-card-group>
                <b-card no-body class="overflow-hidden">
                    <b-row no-gutters align-v="center" class="p-0">
                        <b-col class="avatarCardInfo">
                            <b-img :src="item.avatar"
                                   alt=""
                                   height="80"
                                   width="80"
                                   rounded="circle"
                                   class="avatar mx-3 mt-1 border-chocolate">
                            </b-img>
                        </b-col>
                        <b-col class="mainCardInfo mt-3">
                            <p class="firstnameCardInfo text-chocolate">{{ item.firstname }} {{ item.lastname }}</p>
                            <p class="nameCardInfo"></p>
                            <p class="mailCardInfo">whatsgoingon@gmail.com</p>
                            <p class="phoneCardInfo">(+33) ## ## ## ## ##</p>
                        </b-col>
                        <b-col class="addsCardInfo overflow-hidden pt-3 pb-2 bg-chocolate">
                            <p class="pr-3 mb-2 font-weight-bold">Société
                                <b-icon icon="building" aria-hidden="true" class="iconCardsInfo ml-1 mt-n1"></b-icon>
                            </p>
                            <hr>
                            <p class="pr-3 mb-2">325
                                <b-icon icon="wallet-2" aria-hidden="true" class="iconCardsInfo ml-1 mt-n1"></b-icon>
                            </p>
                            <p class="pr-3 mb-2">1 h 30 min
                                <b-icon icon="clock" aria-hidden="true" class="iconCardsInfo ml-1 mt-n1"></b-icon>
                            </p>
                            <!--                            <b-row align-h="center" class="mx-0">-->
                            <!--                                &lt;!&ndash; Using modifiers &ndash;&gt;-->
                            <!--                                <b-button v-b-toggle.collapse-2 class="btn-outline-sunglo">-->
                            <!--                                    <b-icon icon="card-text"-->
                            <!--                                            aria-hidden="true"-->
                            <!--                                            class="iconCardsInfo mr-1"></b-icon>-->
                            <!--                                    Détails-->
                            <!--                                </b-button>-->
                            <!--                            </b-row>-->
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
</template>

<script>
export default {
    name: 'Card',
    data() {
        return {
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
        };
    }
};
</script>

<style scoped>
.wallCard {
    letter-spacing: 0.025rem;
}

.card-group {
    width : 100%;
    min-width: 440px;
    font-weight:  500;

}

.card-group > .card:only-child {
    border-radius : 6px;
}

hr {
    //margin-top    : 20px;
    //margin-bottom : 20px;
}

.wallCard > div {

}

.wallCard > div:nth-child(3) {

}

.card-body {
    //padding : 0;
}

.avatar {
    border     : 2px solid;
    box-sizing : border-box;
}

.avatarCardInfo {
    max-width : 110px;
}

.mainCardInfo {
    line-height : 0.6rem;
    font-weight : 600;
    width       : auto;
}

.addsCardInfo {
    //background-color : #EC6465;
    text-align       : right;
    max-width        : 130px;
    min-width        : 120px;
}


p > .iconCardsInfo {
    color : #FFF;
}

.addsCardInfo button {
    border           : 1px solid #FFF;
    background-color : rgba(236, 100, 101, 0);
    color            : #FFF;
    letter-spacing: 0.025rem;
    font-weight:  500;
    font-size: 1rem;
}

.addsCardInfo button:hover {
    //color            : #EC6465;
    //background-color : rgba(255, 255, 255, 1);
}

.addsCardInfo button:active {
    //background-color : rgba(236, 100, 101, 1);
    //color            : #FFF;
}

.iconCardsInfo {
    position  : relative;
    font-size : 1.3rem;
    top       : -1px;
}

@media (min-width : 980px) {
    .wallCard > div:nth-child(odd) {
    //padding-right : 20px;
    }

    .wallCard > div:nth-child(even) {
    //padding-left : 20px;
    }
}

@media (min-width : 980px) {
    .wallCard > div:nth-child(odd) {
    //padding-right : 20px;
    }

    .wallCard > div:nth-child(even) {
    //padding-left : 20px;
    }
}
</style>
