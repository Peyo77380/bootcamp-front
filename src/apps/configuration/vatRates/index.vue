<template>
    <div>
        <page-title
            :heading="heading"
            :icon="icon"
            @openModal="openModal"
        ></page-title>

        <Table :openModal="modal" @closeModal="closeModal" />
    </div>
</template>

<script>
import Table from "@/apps/configuration/vatRates/components/table";
import PageTitle from "@/apps/configuration/vatRates/components/PageTitle2.vue";
export default {
    components: {
        Table,
        PageTitle
    },
    data: () => ({
        heading: "Taux de TVA",

        icon: "pe-7s-key icon-gradient bg-night-fade",
        modal: false
    }),

    methods: {
        openModal() {
            this.modal = true;
        },
        closeModal() {
            this.modal = false;
        }
    }
};
</script>
