<template>
  <b-modal id="modal-scoped">
    <template>
      <form action="">
        <label for="test">Coucou</label>
        <input type="text" name="test" id="test">
      </form>
      <div>{{user}}</div>
    </template>

    <template #modal-footer="{ ok, cancel }">
      <b-button size="sm" variant="danger" @click="cancel()">
        Annuler
      </b-button>
      <b-button size="sm" variant="success" @click="ok()">
        Valider
      </b-button>
    </template>
  </b-modal>
</template>
<script>
export default {
    name: 'Modale',
    props: {user: {
      type: Object,
      default: function () {
        return { message: 'hello' }
    }}
  },
  data: () => ({
      dialog: false
    }),
}
</script>
