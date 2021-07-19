<template>
  <div class="text-xs-center">
    <v-pagination
      v-model="page"
      :length="5"
      :total-visible="7"
    ></v-pagination> <!-- Parler de la standardisation à Florian !-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        page: 1
      }
    }
  }
</script>
