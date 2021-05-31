<template>
  <b-modal id="modal-scoped">
    <template>
      <p>Je suis un modal</p>
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
    
}
</script>