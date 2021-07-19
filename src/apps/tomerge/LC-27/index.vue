<template>
    <div>
        <Filters />

        <Table />
    </div>
</template>

<script>
import Table from "@/apps/tomerge/LC-27/components/Table/Table";
import Filters from "@/apps/tomerge/LC-27/components/Filters/Filters";

export default {
    components: {
        Table,
        Filters
    },
    data: () => ({
        heading: "Recherche",

        fields: ["first_name", "last_name", "age"],
        items: [
            { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
            { age: 21, first_name: "Larsen", last_name: "Shaw" },
            { age: 89, first_name: "Geneva", last_name: "Wilson" }
        ],
        striped: false,
        bordered: false,
        outlined: false,
        small: false,
        hover: false,
        dark: false,
        fixed: false,
        footClone: false
    }),

    methods: {}
};
</script>
