<template>
  <v-layout row justify-center>
    <v-dialog persistent max-width="290" v-model="dialog">
      <v-card>
        <v-card-title class="headline"
          >Use Google's location service?</v-card-title
        >
        <v-card-text
          >Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.</v-card-text
        >
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return ;
 dialog
};
</script>
