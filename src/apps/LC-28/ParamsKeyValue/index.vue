<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
        <content-table></content-table>
        <pagination></pagination>
        
    </div>
</template>


<script>


import PageTitle from "./PageTitle2.vue"
import ContentTable from './table'
import pagination from './pagination'
    

    export default {

        components:{
        PageTitle, 
        ContentTable,
        pagination
                
        }, 
        data: () => ({
            heading: "Paramètres Clé - Valeur",
            
            icon: 'pe-7s-key icon-gradient bg-night-fade',
            
        }),
    }
</script>