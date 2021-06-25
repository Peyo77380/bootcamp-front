<template>
    <div>
        <div>
            <page-title
                :heading="heading"
                :subheading="subheading"
                :icon="icon"
            />
        </div>
        <div>
            <email-list
                :emails="emails"
                :categories="categories"
                @displayEmail="showDetails"
                @edit="editEmail"
                @changeUs="translateUs"
                @changeFr="translateFr"
            />
        </div>
        <div>
            <display-email
                :details="emailDetails"
                @closeDisplay="displayOff"
                :dialog="behavior.modalDisplay"
            />
        </div>
        <div>
            <edit-email
                @saveModification="modificationEmail"
                :editedEmail="editedEmail"
                :dialog="behavior.modalEdit"
                @close="closeEdit"
            />
        </div>
    </div>
</template>

<script>
import PageTitle from "@/Layout/Components/PageTitle";
import EmailList from "@/apps/ms-customField/LC-30/EmailList";
import DisplayEmail from "@/apps/ms-customField/LC-30/components/DisplayEmail";
import EditEmail from "@/apps/ms-customField/LC-30/components/EditEmail";
//import { EmailData } from "@/apps/ms-customField/LC-30/EmailData";
import { Emails } from "@/mixins/email";
import { Globals } from "@/mixins/global";
import { EmailDataUs } from "@/apps/ms-customField/LC-30/EmailDataUs";
import { CategoryName } from "@/apps/ms-customField/LC-30/CategoryName";

export default {
    components: {
        PageTitle,
        EmailList,
        DisplayEmail,
        EditEmail
    },
    mixins: [Emails, Globals],
    async mounted() {
        await this.loadEmails();
        await this.loadCategories();
    },
    data() {
        return {
            heading: "Email de services",
            subheading:
                "Créer l'ensemble des modèles de vos email de services ici.",
            icon: "pe-7s-mail",
            emails: [],
            //TODO API affichage de l'ensemble des données
            EmailDataUs: Emails,
            EmailDataFr: Emails,
            categories: [],
            //TODO API affichage de l'ensemble des catégories
            dialog: false,
            emailDetails: {},
            editedEmail: {},
            behavior: {
                modalEdit: false,
                modalDisplay: false
            },
            editedIndex: ""
        };
    },
    methods: {
        showDetails(email) {
            this.behavior.modalDisplay = true;
            this.emailDetails = email;
            //TODO point API affichage details de l'email
        },
        displayOff() {
            this.behavior.modalDisplay = false;
        },
        editEmail(email) {
            this.behavior.modalEdit = true;
            this.editedEmail = email;
        },
        closeEdit() {
            this.behavior.modalEdit = false;
        },
        modificationEmail() {
            //TODO point API modification email de services
            this.editedIndex = this.emails.indexOf(this.editedEmail);
            let title = "Modification de l'email réussie !";
            this.$sweetNotif(title);
        },
        translateUs() {
            this.emails = this.EmailDataUs;
            //TODO point API pour importer les data en anglais
        },
        translateFr() {
            this.emails = this.EmailDataFr;
            //TODO point API pour importer les data en francais
        },
        async loadEmails() {
            try {
                this.emails = await this.getAllEmails();
            } catch (error) {
                this.$sweetError("GLC-30");
            }
        },
        async loadCategories() {
            try {
                this.categories = await this.getAllCategories();
            } catch (error) {
                this.$sweetError("GLC-30");
            }
        }
    }
};
</script>
