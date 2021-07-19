<template>
    <v-breadcrumbs :items="items">
        <template v-slot:divider>
            <v-icon>forward</v-icon>
        </template>
    </v-breadcrumbs>
</template>
<script>
export default {
    data: () => ({
        items: [
            {
                text: "Dashboard",
                disabled: false,
                href: "breadcrumbs_dashboard"
            },
            {
                text: "Page parente",
                disabled: false,
                href: "breadcrumbs_page_parent"
            },
            {
                text: "Vous êtes ici",
                disabled: true,
                href: "breadcrumbs_actual_position"
            }
        ]
    })
};
</script>
