<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'La Colloc Admin',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: 'Contacts',
          disabled: false,
          href: 'breadcrumbs_link_1'
        },
        {
          text: 'Ajouter un fiche société',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ]
    })
  }
</script>
