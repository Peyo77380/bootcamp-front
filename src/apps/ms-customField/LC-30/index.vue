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
                :EmailData="EmailData"
                @displayEmail="showDetails"
                @edit="editEmail"
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
import { EmailData } from "@/apps/ms-customField/LC-30/EmailData";

export default {
    components: {
        PageTitle,
        EmailList,
        DisplayEmail,
        EditEmail
    },
    data() {
        return {
            heading: "Email de services",
            subheading:
                "Créer l'ensemble des modèles de vos email de services ici.",
            icon: "pe-7s-mail",
            EmailData: EmailData,
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
            this.editedIndex = this.EmailData.indexOf(this.editedEmail);
            var title = "Modification de l'email réussie !";
            this.$sweetNotif(title);
        }
    }
};
</script>
