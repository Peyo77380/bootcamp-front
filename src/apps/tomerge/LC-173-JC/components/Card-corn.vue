<template>
    <b-row class="wallCard text-eternity">
        <b-col sm="12" md="6" xl="4" xxl="3" class="mb-3" v-for="(item, index) in members" :key="index">
            <b-card-group>
                <b-card no-body class="overflow-hidden">
                    <b-row no-gutters align-v="center" class="p-0">
                        <!--AVATAR-->
                        <b-col cols="12" class="avatarCardInfo">
                            <b-img :src="item.avatar"
                                   alt="Avatar du membre"
                                   height="80"
                                   width="80"
                                   rounded="circle"
                                   class="avatar mx-3 mt-1 border-corn">
                            </b-img>
                        </b-col>
                        <!--BODY-->
                        <b-col class="mainCardInfo mt-3 overflow-x-hidden no-wrap">
                            <p class="firstnameCardInfo text-corn">{{ item.firstname }} {{ item.lastname }}</p>
                            <p class="nameCardInfo"></p>
                            <p class="mailCardInfo">whatsgoingon@gmail.com</p>
                            <p class="phoneCardInfo">(+33) ## ## ## ## ##</p>
                        </b-col>
                        <!--INFOS-->
                        <b-col cols="12" class="addsCardInfo overflow-hidden ml-1 pt-3 pb-1 bg-corn">
                            <p class="pr-3 mb-1 font-weight-bold">Société
                                <b-icon icon="building" aria-hidden="true" class="iconCardsInfo ml-1"></b-icon>
                            </p>
                            <hr>
                            <p class="pr-3 mb-2"><span class="addsCardInfo-optional">325</span>
                                <b-icon icon="wallet-2" aria-hidden="true" class="iconCardsInfo ml-1"></b-icon>
                            </p>
                            <p class="pr-3 mb-2"><span class="addsCardInfo-optional">1 h 30 min</span>
                                <b-icon icon="clock" aria-hidden="true" class="iconCardsInfo ml-1"></b-icon>
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
    letter-spacing : 0.025rem;
}

.card-group > .card:only-child {
    border-radius : 6px;
}

.avatar {
    border     : 2px solid;
    box-sizing : border-box;
}

.mainCardInfo {
    line-height : 0.6rem;
    font-weight : 600;
    width       : auto;
}

.mailCardInfo {
    font-size : 0.85rem;
}

.avatarCardInfo {
    max-width : max-content;
}

.addsCardInfo {
    text-align : right;
    max-width  : max-content;
}

.addsCardInfo-optional {
    font-size     : 0.85rem;
    padding-right : 4px;
    padding-left  : 16px;
}

p > .iconCardsInfo {
    color : #FFF;
    font-size : 1.3rem;
}
</style>
