<template>
  <div>
    <div>
      <page-title :heading="heading" :subheading="subheading" :icon="icon" />
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
import PageTitle from "./components/PageTitle";
import EmailList from "@/apps/configuration/emails/EmailList";
import EditEmail from "@/apps/configuration/emails/components/EditEmail";
import { Emails } from "@/mixins/email";
import { Globals } from "@/mixins/global";

export default {
  components: {
    PageTitle,
    EmailList,
    EditEmail,
  },
  mixins: [Emails, Globals],
  async mounted() {
    await this.loadCategories();
    await this.loadEmails();
  },
  data() {
    return {
      heading: "Email de services",
      subheading: "Créer l'ensemble des modèles de vos email de services ici.",
      icon: "pe-7s-mail",
      emails: [],
      categories: [],
      dialog: false,
      emailDetails: {},
      editedEmail: {},
      behavior: {
        modalEdit: false,
        modalDisplay: false,
      },
      editedIndex: "",
    };
  },
  methods: {
    showDetails(email) {
      this.behavior.modalDisplay = true;
      this.emailDetails = email;
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
      this.editedIndex = this.emails.indexOf(this.editedEmail);
      this.$sweetNotif("Modification de l'email réussie !");
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
        this.categories = await this.getGlobals();
      } catch (error) {
        this.$sweetError("GLC-30");
      }
    },
  },
};
</script>
