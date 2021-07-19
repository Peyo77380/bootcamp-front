<template>
    <div>
        <page-title :heading=heading :icon=icon></page-title>
        <content-table></content-table>
        <pagination></pagination> <!-- A remplacer plus tard par le futur composent header !-->
        
    </div>
</template>


<script>


import PageTitle from "./components/PageTitle2.vue"
import ContentTable from './components/table'
import pagination from './components/pagination'
    

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