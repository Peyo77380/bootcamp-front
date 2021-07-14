<template>
    <b-row class="board h-100 pb-4">
        <b-col v-for="(item, index) in member" :key="index" class="">
            <b-card-group class="h-100">
                <b-card no-body class="overflow-hidden">
                    <b-row no-gutters class="h-100 p-5">
                        <!--MAIN INFOS -->
                        <b-col class="member-info-group pr-5">
                            <b-row class="h-100 ml-0">
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

                                    <b-row>
                                        <b-col class="col-1">
                                            <b-icon icon="building"
                                                    aria-hidden="true"
                                                    class="iconsInfo mx-2 mt-n2 text-sunglo font-size-xlg"
                                                    title=""></b-icon>
                                        </b-col>
                                        <b-col>
                                            <p v-show="item.enterprise"
                                               class="ml-3 pr-3 mb-1 pb-3 font-weight-bold text-left">
                                                {{ item.enterprise }}</p>
                                        </b-col>
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
                        </b-col>

                        <!--BODY-->
                        <b-col class="member-datas border h-100 px-5 pt-5 pb-4 ">
                            <b-row align-h="between" class="member-datas-header">
                                <b-form-radio-group
                                    id="btn-radios"
                                    v-model="selected"
                                    :aria-describedby="ariaDescribedby"
                                    :options="options"
                                    button-variant="outline-sunglo"
                                    buttons
                                    class="member-header-choice mr-3 align-self-center"
                                    name="radio-btn-outline"
                                    size="sm"
                                ></b-form-radio-group>

                                <b-button-group align-content="end" class="criterions row mx-0 mt-4 ml-auto" size="sm">
                                    <b-dropdown right text="Liste d'actions A" variant="sunglo">
                                        <b-dropdown-item>Item 1</b-dropdown-item>
                                        <b-dropdown-item>Item 2</b-dropdown-item>
                                        <b-dropdown-divider></b-dropdown-divider>
                                        <b-dropdown-item>Item 3</b-dropdown-item>
                                    </b-dropdown>
                                    <b-dropdown right text="Liste d'actions B" variant="sunglo">
                                        <b-dropdown-item>Item 1</b-dropdown-item>
                                        <b-dropdown-item>Item 2</b-dropdown-item>
                                        <b-dropdown-divider></b-dropdown-divider>
                                        <b-dropdown-item>Item 3</b-dropdown-item>
                                    </b-dropdown>
                                </b-button-group>
                            </b-row>
                            <hr class="mt-4">
                            <b-row class="member-datas-body my-5">
                                <b-col>
                                    <p>{{ memberBills.number }}</p>
                                    <div v-for="(item, index) in memberBills" :key="index">
                                        <p>
                                            {{ item.number }}
                                        </p>
                                    </div>
                                </b-col>
                            </b-row>
                            <!--WALL CARDS FOOTER-->
                            <b-row class="member-datas-footer">
                                <b-col>
                                    <b-pagination v-model="currentPage"
                                                  :total-rows="rows"
                                                  align="center"
                                                  size="sm"
                                                  variant="sunglo"></b-pagination>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-card>
            </b-card-group>
        </b-col>
    </b-row>

</template>

<script>
export default {
    name: 'Membres', data() {
        return {
            member     : [
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
            memberBills: [
                {
                    key          : 20685,
                    number       : 'LC011235',
                    date         : '27/06/2021',
                    product      : `Réservation d'une place dans l'espace co-working de La Colloc pour le lundi 28 juin 2021, de 09:00 à 18:00.
                            Réservation d'une demi-journée de co-working à La Colloc le lundi 28 juin 2021 - Horaires d'ouverture : 09:00 - 18:00`,
                    exclTaxeValue: 56.00,
                    addedTaxe    : 11.20,
                    inclTaxeValue: 67.20,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'CB'
                },
                {
                    key          : 20685,
                    number       : 'LC011235',
                    date         : '27/06/2021',
                    product      : `Réservation d'une place dans l'espace co-working de La Colloc pour le lundi 28 juin 2021, de 09:00 à 18:00.
                            Réservation d'une demi-journée de co-working à La Colloc le lundi 28 juin 2021 - Horaires d'ouverture : 09:00 - 18:00`,
                    exclTaxeValue: 56.00,
                    addedTaxe    : 11.20,
                    inclTaxeValue: 67.20,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'CB'
                }
            ]

            ,
            memberQuotes: [
                {
                    key          : 20685,
                    number       : 'LC011235',
                    date         : '27/06/2021',
                    product      : `Réservation d'une place dans l'espace co-working de La Colloc pour le lundi 28 juin 2021, de 09:00 à 18:00.
                            Réservation d'une demi-journée de co-working à La Colloc le lundi 28 juin 2021 - Horaires d'ouverture : 09:00 - 18:00`,
                    exclTaxeValue: 56.00,
                    addedTaxe    : 11.20,
                    inclTaxeValue: 67.20,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'CB'
                }
            ],
            selected    : 'radio1',
            options     : [
                { text: 'Factures', value: 'radio1' },
                { text: 'Devis', value: 'radio2' }
            ]
        };
    }
};
</script>

<style scoped>
.board {
    letter-spacing : 0.0125rem;
    font-family    : Montserrat, Arial, sans-serif;
    max-height     : inherit;
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

.member-info, .member-datas {
    border-radius : 8px;
}

.member-info {
    max-width : max-content;
}

.member-info-avatar {
    border     : 2px solid;
    box-sizing : border-box;
}

.member-datas {
    width     : 100%;
    min-width : 520px;
}

.member-datas-header {
//width     : 100%; //max-width : 1630px; margin : 0 auto;
}

.member-header-choice span {
    display    : inline-block;
    margin-top : 2px;
}

.btn-group {
    margin-top : 0 !important;
}
</style>

<style>
.page-item .page-link, .pagination .page-number .page-link {
    color : #EC6465 !important;
}

.page-item.active .page-link, .pagination .active.page-number .page-link {
    background-color : #EC6465 !important;
    border           : 1px solid #D26465 !important;
    color            : #FFF !important;
}
</style>