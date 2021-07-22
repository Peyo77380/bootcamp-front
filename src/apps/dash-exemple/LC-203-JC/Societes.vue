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
                                           height="96"
                                           width="96"
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
                                    <b-row class="society-info-members border-top py-4">
                                        <b-col class="text-left">
                                            <ul>
                                                <li v-for="(item, index) in members"
                                                    :key="index"
                                                    class="">
                                                    <a href="#" class="p-2">
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
                            <div v-if="onBillsQuotes">
                                <b-row class="society-datas-array mt-2">
                                    <table>
                                        <thead class="society-datas-bills-head sticky-top bg-white text-sunglo">
                                        <tr class="">
                                            <th colspan="11" class="text-eternity ">Factures</th>
                                        </tr>
                                        <tr class="">
                                            <th v-for="(field, index) in fieldsBills"
                                                :key="index"
                                                class="px-3 py-3 text-center">
                                                {{ field }}
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody class="society-datas-bills-body">
                                        <tr v-for="(value, index) in bills"
                                            :key="index">
                                            <td class="text-center border-top px-3"> {{ value.key }}</td>
                                            <td class="text-center border-top px-3 font-weight-medium bg-sunglo text-white">
                                                {{ value.number }}
                                            </td>
                                            <td class="text-center border-top px-3">{{ value.date }}</td>
                                            <td class="border-top px-2 py-3">{{ value.product }}</td>
                                            <td class="text-center border-top px-3">{{ value.exclTaxeValue }}</td>
                                            <td class="text-center border-top px-3">{{ value.addedTaxe }}</td>
                                            <td class="text-center border-top px-3 font-weight-medium">{{
                                                    value.inclTaxeValue
                                                                                                       }}
                                            </td>
                                            <td class="text-center border-top px-3">{{ value.currentCoin }}</td>
                                            <td class="text-center border-top px-3 font-weight-medium">{{
                                                    value.paymentStatus
                                                                                                       }}
                                            </td>
                                            <td class="text-center border-top px-3">{{ value.paymentMethod }}</td>
                                            <td class="actionsCell text-center border-top px-4">
                                                <b-button-group>
                                                    <b-dropdown right split text="•••" variant="outline-sunglo">
                                                        <b-dropdown-item>Item 1</b-dropdown-item>
                                                        <b-dropdown-item>Item 2</b-dropdown-item>
                                                        <b-dropdown-divider></b-dropdown-divider>
                                                        <b-dropdown-item>Item 3</b-dropdown-item>
                                                    </b-dropdown>
                                                </b-button-group>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </b-row>
                                <b-row class="society-datas-array mt-5">
                                    <table>
                                        <thead class="society-datas-bills-head sticky-top bg-white text-sunglo">
                                        <tr class="">
                                            <th colspan="11" class="text-eternity">Devis</th>
                                        </tr>
                                        <tr class="">
                                            <th v-for="(field, index) in fieldsQuotes"
                                                :key="index"
                                                class="px-3 py-3 text-center">
                                                {{ field }}
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody class="society-datas-bills-body">
                                        <tr v-for="(value, index) in quotes"
                                            :key="index">
                                            <td class="text-center border-top px-3"> {{ value.key }}</td>
                                            <td class="text-center border-top px-3 font-weight-medium bg-sunglo text-white">
                                                {{ value.number }}
                                            </td>
                                            <td class="text-center border-top px-3">{{ value.date }}</td>
                                            <td class="border-top px-2 py-3">{{ value.product }}</td>
                                            <td class="text-center border-top px-3">{{ value.exclTaxeValue }}</td>
                                            <td class="text-center border-top px-3">{{ value.addedTaxe }}</td>
                                            <td class="text-center border-top px-3 font-weight-medium">{{
                                                    value.inclTaxeValue
                                                                                                       }}
                                            </td>
                                            <td class="text-center border-top px-3">{{ value.currentCoin }}</td>
                                            <td class="text-center border-top px-3 font-weight-medium">{{
                                                    value.paymentStatus
                                                                                                       }}
                                            </td>
                                            <td class="text-center border-top px-3">{{ value.paymentMethod }}</td>
                                            <td class="actionsCell text-center border-top px-4">
                                                <b-button-group>
                                                    <b-dropdown right split text="•••" variant="outline-sunglo">
                                                        <b-dropdown-item>Item 1</b-dropdown-item>
                                                        <b-dropdown-item>Item 2</b-dropdown-item>
                                                        <b-dropdown-divider></b-dropdown-divider>
                                                        <b-dropdown-item>Item 3</b-dropdown-item>
                                                    </b-dropdown>
                                                </b-button-group>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </b-row>
                            </div>
                            <div v-else-if="onCredits">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci cum distinctio ea earum esse et eum eveniet in labore, laborum magni nihil nobis, perspiciatis qui quisquam sunt suscipit, temporibus voluptate voluptatum. Deleniti ducimus facere nesciunt quidem quis recusandae reiciendis? Dolore ea eligendi facere iste placeat ratione sit veniam. Blanditiis deserunt dolor ex excepturi facilis fuga id iusto magni obcaecati ratione, sunt ullam ut vitae, voluptate voluptatum. Adipisci amet delectus doloremque incidunt laborum, quae rerum. Consequuntur impedit ipsa labore magnam minima nisi quod sed? Ducimus earum esse illo iusto, laudantium magnam, modi, nulla numquam quaerat quas rem reprehenderit totam vero! A ab, asperiores assumenda delectus distinctio error excepturi labore laudantium magni natus nostrum numquam officiis quam quis repellendus sed voluptatum.</p>
                            </div>
                            <div v-else-if="onBookings">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis cumque exercitationem ipsam maxime nihil officiis sapiente, sunt. Adipisci fuga ipsam iste magnam minima nam pariatur, porro, quae, quisquam recusandae sequi sit voluptas! Ad, aliquam animi asperiores autem blanditiis corporis dolore dolorem dolores, dolorum ducimus eius eligendi enim est et eveniet excepturi facilis illo incidunt maiores mollitia necessitatibus neque nesciunt nobis odio pariatur porro quam quos ratione reiciendis rerum sapiente sint soluta sunt suscipit, temporibus tenetur veritatis. Accusantium consequatur corporis culpa deleniti ducimus facere facilis fugiat iste iusto non officia quam, qui saepe unde vero vitae voluptas? Accusantium animi, aperiam aspernatur autem beatae cumque cupiditate dolore eaque eligendi illo inventore laboriosam neque officiis perferendis quaerat quia quo sequi sunt vero?</p>
                            </div>
                            <div v-else-if="onSubscription">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto atque ea ipsam maxime minima odit, porro sed voluptas voluptatem. Accusamus accusantium amet animi architecto atque cumque deleniti deserunt doloribus eius esse explicabo facilis ipsa ipsam iste laborum molestias nemo, possimus praesentium quae quaerat quos recusandae tempore temporibus ullam voluptas! Accusamus adipisci dignissimos dolore eius et expedita hic odio perferendis quisquam quo, reiciendis sed sint tenetur vel, velit! Alias aliquid autem commodi corporis culpa deserunt distinctio dolorem ducimus excepturi laboriosam libero, minima non nostrum, numquam odio optio perferendis placeat quasi quibusdam quidem suscipit unde veniam voluptas. Animi aspernatur consequuntur dicta dolore, doloremque doloribus facilis ipsa ipsam itaque iure laboriosam odit omnis perspiciatis quaerat quia repellat totam voluptates. Impedit, magnam officiis!</p>
                            </div>
                        </b-col>
                    </b-row>
                </b-card>
            </b-card-group>
        </b-col>
    </b-row>

</template>

<script>
export default {
    name: 'Membres',
    data() {
        return {
            actionsIcon : '<b-icon icon="gear" class="font-size-xlg"></b-icon',
            society     : [
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
            members     : [
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
            fieldsBills : [ 'Clé', 'Numéro', 'Date', 'Produit', 'Montant H.T', 'Taxe', 'Montant T.T.C', 'Devise', 'Statut', 'Mode de règlement', 'Actions' ],
            bills       : [
                {
                    key          : 20307,
                    number       : 'LC010968',
                    date         : '01/06/2021',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 20006,
                    number       : 'LC010733',
                    date         : '03/05/2021',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 19766,
                    number       : 'LC010543',
                    date         : '01/04/2021',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 19348,
                    number       : 'LC010250',
                    date         : '01/03/2021',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 18991,
                    number       : 'LC010006',
                    date         : '01/02/2021',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 18639,
                    number       : 'LC009750',
                    date         : '04/01/2021',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 18490,
                    number       : 'LC009647',
                    date         : '03/12/2020',
                    product      : `Badge Café 50 euros`,
                    exclTaxeValue: 45.45,
                    addedTaxe    : 4.55,
                    inclTaxeValue: 50.00,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'CB TPE'
                },
                {
                    key          : 18393,
                    number       : 'LC009554',
                    date         : '01/12/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 18286,
                    number       : 'LC009471',
                    date         : '06/11/2020',
                    product      : `Badge Café 30 euros`,
                    exclTaxeValue: 27.27,
                    addedTaxe    : 2.73,
                    inclTaxeValue: 30.00,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'CB TPE'
                },
                {
                    key          : 18276,
                    number       : 'LC009465',
                    date         : '04/11/2020',
                    product      : `Yaourt Fruit`,
                    exclTaxeValue: 1.23,
                    addedTaxe    : 0.07,
                    inclTaxeValue: 1.30,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Espèce'
                },
                {
                    key          : 18175,
                    number       : 'LC09368',
                    date         : '02/11/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 18008,
                    number       : 'LC009262',
                    date         : '15/10/2020',
                    product      : `Badge Café 30 euros`,
                    exclTaxeValue: 27.27,
                    addedTaxe    : 2.73,
                    inclTaxeValue: 30.00,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'CB TPE'
                },
                {
                    key          : 17751,
                    number       : 'LC009081',
                    date         : '01/10/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 17259,
                    number       : 'LC008755',
                    date         : '01/09/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 16980,
                    number       : 'LC008551',
                    date         : '03/08/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 16802,
                    number       : 'LC008445',
                    date         : '09/07/2020',
                    product      : `Adhésion Simple`,
                    exclTaxeValue: 50.00,
                    addedTaxe    : 10.00,
                    inclTaxeValue: 60.00,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 16665,
                    number       : 'LC008327',
                    date         : '02/07/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 16266,
                    number       : 'LC008049',
                    date         : '02/06/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 16033,
                    number       : 'LC007855',
                    date         : '04/05/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 15882,
                    number       : 'LC007717',
                    date         : '01/04/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                }
            ],
            fieldsQuotes: [ 'Clé', 'Numéro', 'Date', 'Produit', 'Montant H.T', 'Taxe', 'Montant T.T.C', 'Devise', 'Statut', 'Mode de règlement', 'Actions' ],
            quotes      : [
                {
                    key          : 20307,
                    number       : 'LC010968',
                    date         : '01/06/2021',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 20006,
                    number       : 'LC010733',
                    date         : '03/05/2021',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 19766,
                    number       : 'LC010543',
                    date         : '01/04/2021',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 19348,
                    number       : 'LC010250',
                    date         : '01/03/2021',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 18991,
                    number       : 'LC010006',
                    date         : '01/02/2021',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 18639,
                    number       : 'LC009750',
                    date         : '04/01/2021',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 18490,
                    number       : 'LC009647',
                    date         : '03/12/2020',
                    product      : `Badge Café 50 euros`,
                    exclTaxeValue: 45.45,
                    addedTaxe    : 4.55,
                    inclTaxeValue: 50.00,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'CB TPE'
                },
                {
                    key          : 18393,
                    number       : 'LC009554',
                    date         : '01/12/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 18286,
                    number       : 'LC009471',
                    date         : '06/11/2020',
                    product      : `Badge Café 30 euros`,
                    exclTaxeValue: 27.27,
                    addedTaxe    : 2.73,
                    inclTaxeValue: 30.00,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'CB TPE'
                },
                {
                    key          : 18276,
                    number       : 'LC009465',
                    date         : '04/11/2020',
                    product      : `Yaourt Fruit`,
                    exclTaxeValue: 1.23,
                    addedTaxe    : 0.07,
                    inclTaxeValue: 1.30,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Espèce'
                },
                {
                    key          : 18175,
                    number       : 'LC09368',
                    date         : '02/11/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 18008,
                    number       : 'LC009262',
                    date         : '15/10/2020',
                    product      : `Badge Café 30 euros`,
                    exclTaxeValue: 27.27,
                    addedTaxe    : 2.73,
                    inclTaxeValue: 30.00,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'CB TPE'
                },
                {
                    key          : 17751,
                    number       : 'LC009081',
                    date         : '01/10/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 17259,
                    number       : 'LC008755',
                    date         : '01/09/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 16980,
                    number       : 'LC008551',
                    date         : '03/08/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 16802,
                    number       : 'LC008445',
                    date         : '09/07/2020',
                    product      : `Adhésion Simple`,
                    exclTaxeValue: 50.00,
                    addedTaxe    : 10.00,
                    inclTaxeValue: 60.00,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 16665,
                    number       : 'LC008327',
                    date         : '02/07/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 16266,
                    number       : 'LC008049',
                    date         : '02/06/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 16033,
                    number       : 'LC007855',
                    date         : '04/05/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                },
                {
                    key          : 15882,
                    number       : 'LC007717',
                    date         : '01/04/2020',
                    product      : `Bureau 0-5-B-1`,
                    exclTaxeValue: 242.00,
                    addedTaxe    : 48.40,
                    inclTaxeValue: 290.40,
                    currentCoin  : '€',
                    paymentStatus: 'Payée',
                    paymentMethod: 'Virement'
                }
            ],
            selected    : 'radio1',
            options     : [
                { text: 'Factures', value: 'radio1' },
                { text: 'Devis', value: 'radio2' }
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
.society-datas-array {
    height   : 34vh;
    overflow : scroll;
    width    : 100%;
//border-bottom: 3px solid #FFF;
}

.society-datas-bills-head > tr {
    border-bottom : 2px solid #EC6465 !important;;
}

.society-datas-bills-body > tr:nth-child(odd) {
    background-color : rgba(236, 100, 101, 0.15);
}

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

.society-info-members {
    max-height : 170px;
    overflow   : scroll;
}

.society-info-members ul {
    padding : 0 !important;
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
    min-width : 520px;
}

.society-header-choice span {
    display    : inline-block;
    margin-top : 2px;
}

.btn-group {
    margin-top : 0 !important;
}

.actionsCell {
    background-color : rgba(255, 255, 255, 0.6);
}


.actionsBtn {
    border : none;
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