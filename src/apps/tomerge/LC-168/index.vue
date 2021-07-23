<template>
    <div>
        <page-title :heading=heading :icon=icon></page-title>
        <content-table></content-table>
        <pagination></pagination>
       
        
    </div>
</template>


<script>

import pagination from './components/pagination.vue'
import PageTitle from "./components/PageTitle2.vue"
import ContentTable from './components/table'

    

    export default {

        components:{
        PageTitle, 
        ContentTable,
        pagination 
                
        }, 
        data: () => ({
            heading: "Attributs",
            
            icon: 'pe-7s-keypad icon-gradient bg-night-fade',
            
        }),
    }
</script>
