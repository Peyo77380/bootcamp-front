<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
        <content-faq></content-faq>
    </div>
</template>


<script>


import PageTitle from "./components/PageTitle2.vue"
import ContentFaq from "./components/content.vue"

    export default {

        components:{
        PageTitle,
        ContentFaq,      
        }, 
        data: () => ({
            heading: "FAQ (Foire Aux Questions)",
            subheading:'Des réponses à vos questions',
            icon: 'pe-7s-way icon-gradient bg-night-fade',
            
        }),
    }
</script>
