<template>
    <div>
        <h1>Produits/Services</h1>
        <Table />
    </div>
</template>

<script>
import Table from "../LC-180/components/Table.vue";
export default {
    components: {
        Table
    },
    data: () => ({
        heading: "Recherche"
    })
};
</script>
