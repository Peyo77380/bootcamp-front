<template>
  <div id="headerContainer">
    <Breadcrumb /><br>
    <!-- Dédicace à Romain, validée par Florian pour rester dans la version finale ! !-->
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div>
            <img
              class="page-title-icon"
              :src="require(`@/assets/images/${image}`)"
            />
          </div>
          <div>
            <h1>{{ heading }}</h1>
            <div class="page-title-subheading">
              <p>{{ subheading }}</p>
            </div>
          </div>
        </div>
        <div class="page-title-actions">
          <button type="button" class="btn-shadow mr-3 btn btn-dark">
            <font-awesome-icon icon="star" />
          </button>
          <button
            type="button"
            class="btn-shadow d-inline-flex align-items-center btn btn-success"
          >
            <font-awesome-icon class="mr-2" icon="plus" />
            Créer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from "./Breadcrumb/breadcrumb.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faStar, faPlus);

export default {
  components: { Breadcrumb, "font-awesome-icon": FontAwesomeIcon },

  data() {
    return {
      heading: "Recherche",
      subheading:
        "Ceci est un exemple de description pour la page de recherche",
      image: "Logo/Logo bleue marine.png",
    };
  },
};
</script>