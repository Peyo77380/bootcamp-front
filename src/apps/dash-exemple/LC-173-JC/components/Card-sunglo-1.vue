<template>
    <b-row class="wallCard text-eternity">
        <b-col lg="6" class="mb-3" v-for="(item, index) in members" :key="index">
            <b-card-group class="itemCard">
                <b-card no-body class="overflow-hidden">
                    <b-row no-gutters align-v="center"  class="p-0">
                        <!--AVATAR-->
                        <b-col class="avatarCardInfo">
                            <b-img :src="item.avatar"
                                   alt=""
                                   height="80"
                                   width="80"
                                   rounded="circle"
                                   class="avatar mx-3 mt-1 border-sunglo">
                            </b-img>
                        </b-col>
                        <!--BODY-->
                        <b-col class="mainCardInfo mt-3">
                            <div class="firstnameCardInfo row"><p class="labelCardInfo">Prénom :</p>
                                <p class="cardInfo">{{ item.firstname }}</p></div>
                            <div class="nameCardInfo row"><p class="labelCardInfo">Nom :</p>
                                <p class="cardInfo">{{ item.lastname }}</p></div>
                            <div class="mailCardInfo row"><p class="labelCardInfo">Email :</p>
                                <p class="cardInfo">whatsgoingon@gmail.com</p></div>
                            <div class="phoneCardInfo row"><p class="labelCardInfo">Téléphone :</p>
                                <p class="cardInfo">(+33) ## ## ## ## ##</p></div>
                        </b-col>
                        <!--INFOS-->
                        <b-col class="addsCardInfo overflow-hidden pt-3 pb-2 bg-sunglo">
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
                },{
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
            ]
        };
    }
};
</script>

<style scoped>
.wallCard {
    letter-spacing: 0.025rem;
}

.wallCard > div {
    //padding : 0;
}

.card-group > .card:only-child {
    border-radius : 6px;
}

.card-body {
    //padding : 0;
}

.avatar {
    border : 2px solid;
    box-sizing : border-box;
}

.avatarCardInfo {
    max-width : 130px;
}

.mainCardInfo {
    line-height : 0.6rem;
    //font-weight : 600;
    width       : auto;
    margin-right: 20px;
    display: inline-block;
}

.labelCardInfo {
    width : 80px;
}


.cardInfo {
    font-weight : 600;
}

.addsCardInfo {
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
        padding-right : 20px;
    }

    .wallCard > div:nth-child(even) {
        padding-left : 20px;
    }
}
</style>