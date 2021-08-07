<template>
    <div class="">
        <b-row class="society-datas-array mt-2">
            <table>
                <thead class="society-datas-bills-head sticky-top bg-white text-sunglo">
                <tr class="">
                    <th colspan="11" class="componentTitle text-eternity pb-0">Factures</th>
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
                    <th colspan="11" class="componentTitle text-eternity pb-0">Devis</th>
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
</template>

<script>
export default {
    name: 'InvoicesQuotes',
    data(){
        return {
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
        }
    }
};
</script>

<style scoped>
.society-datas-array {
    height   : 34vh;
    overflow : scroll;
    min-width: fit-content;
}

.society-datas-bills-head > tr {
    border-bottom : 2px solid #EC6465 !important;;
}

.society-datas-bills-body > tr:nth-child(odd) {
    background-color : rgba(236, 100, 101, 0.15);
}

.actionsCell {
    background-color : rgba(255, 255, 255, 0.6);
}
</style>