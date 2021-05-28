<template>
<div>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon />
    </div>
    <div>
        <email-list :EmailData="EmailData" @displayEmail="showDetails" /> 
    </div> 
    <div>
        <display-email @closeDisplay="displayOff" :dialog="dialog"/>
    </div>
</div>
    
</template>


<script>
import PageTitle from "@/Layout/Components/PageTitle";
import EmailList from "@/apps/ms-customField/LC-30/EmailList";
import DisplayEmail from "@/apps/ms-customField/LC-30/components/DisplayEmail";
import { EmailData } from "@/apps/ms-customField/LC-30/EmailData";
export default {
    components: {
        PageTitle,
        EmailList,
        DisplayEmail
    }, 
    data(){
        return {
            heading: "Email de services",
            subheading: "Créer l'ensemble des modèles de vos email de services ici.",
            icon: "pe-7s-mail",
            EmailData: EmailData, 
            dialog: false 
        }
    }, 
    methods: {
        showDetails() {
            this.dialog = true
        },
        displayOff() {
            this.dialog = false
        }
    }
}
</script>