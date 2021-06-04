<template>
    <div class="main-card mb-3 card col-12">
        <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize text-primary font-weight-normal">
                <i class="header-icon pe-7s-mail-open mr-3 text-muted opacity-6"></i>
                Liste des emails de services
            </div>
            <div class="btn-actions-pane-right actions-icon-btn">
                <b-dropdown toggle-class="btn-icon btn-icon-only" variant="link" right>
                    <span slot="button-content"><i class=" header-icon lnr-earth mr-3 text-muted opacity-6"></i></span>
                    <div>
                        <button 
                        @click="changeFr"
                        type="button" tabindex="0" class="dropdown-item"><country-flag country='FR' size='small' class="mr-1"/><span>Français</span></button>
                        <button 
                        @click="changeUs" 
                        type="button" tabindex="0" class="dropdown-item"><country-flag country='US' size='small' class="mr-1"/><span>Anglais</span></button>
                        <button type="button" tabindex="0" class="dropdown-item"><country-flag country='DE' size='small' class="mr-1"/><span>Allemand</span></button>
                    </div>
                </b-dropdown>
            </div>
        </div>
        <div class="table-responsive">
            <table class="align-middle mb-2 table table-borderless table-striped table-hover">
                <thead>
                    <tr>
                        <th class="text-center">Clé</th>
                        <th class="text-center">Titre</th>
                        <th class="text-center">Modifié il y a</th>
                        <th class="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="email in EmailData" :key="email.id">
                        <td class="text-center text-muted">{{ email.key }}</td>
                        <td class="text-center">{{ email.title }}</td>
                        <td class="text-center">{{ email.updateDate }}</td>
                        <td class="text-center">
                            <div>
                                <b-button
                                    class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                                    variant="outline-warning"
                                    id="viewBouton"
                                    @click="displayEmail(email)"
                                >
                                    <i
                                        class="pe-7s-search btn-icon-wrapper"
                                    ></i>
                                </b-button>
                                <b-button
                                    class="mb-2 mr-2 btn-icon btn-icon-only btn-pill"
                                    variant="outline-primary"
                                    id="editBouton"
                                    @click="edit(email)"
                                >
                                    <i class="pe-7s-tools btn-icon-wrapper"></i>
                                </b-button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <b-popover
                target="editBouton"
                placement="bottomleft"
                triggers="hover focus"
                content="Modifier"
            >
            </b-popover>
            <b-popover
                target="viewBouton"
                placement="bottomleft"
                triggers="hover focus"
                content="Consulter"
            >
            </b-popover>
        </div>
    </div>
</template>
<script>
import CountryFlag from 'vue-country-flag'
export default {
    name: "email-list",

    components:{
        CountryFlag
    },

    data() {
        return {
            isActive: true,
            displayDetails: false
        };
    },

    props: {
        EmailData: {
            type: Array
        }
    },

    methods: {
        displayEmail(email) {
            this.$emit("displayEmail", email);
        },
        edit(email) {
            this.$emit("edit", email);
        },
        changeUs() {
            this.$emit("changeUs")
        },
        changeFr() {
            this.$emit("changeFr")
        }
    }
};
</script>
