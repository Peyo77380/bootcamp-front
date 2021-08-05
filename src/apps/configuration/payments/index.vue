<template>
    <div>
        <page-title
            :heading="heading"
            :subheading="subheading"
            :icon="icon"
        ></page-title>

        <Table />
    </div>
</template>

<script>
import Table from "@/apps/configuration/payments/components/table";
import PageTitle from "./components/PageTitle";
export default {
    components: {
        Table,
        PageTitle
    },
    data: () => ({
        heading: "LaColloc - Modes de Réglements",
        subheading: "Modes de reglements disponibles",
        icon: "pe-7s-news-paper icon-gradient bg-night-fade"
    }),

    methods: {}
};
</script>
