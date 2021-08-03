<template>
  <div>
    <div
      class="row"
      style="display: flex; justify-content: center; align-items: center"
    >
      <div
        class="col-md-3 col-xl-2"
        v-for="category in categories"
        :key="category.id"
      >
        <div :class="category.class" class="card mb-3 widget-content">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">
                {{ category.value }}
              </div>
            </div>
            <div class="widget-content-right">
              <v-switch
                color="primary"
                v-model="selectedCategory"
                :value="category.id"
              ></v-switch>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-card mb-3 card col-12">
      <div class="card-header-tab card-header">
        <div
          class="
            card-header-title
            font-size-lg
            text-capitalize text-primary
            font-weight-normal
          "
        >
          <i class="header-icon pe-7s-mail-open mr-3 text-muted opacity-6"></i>
        </div>
        <div class="btn-actions-pane-right actions-icon-btn">
          <b-dropdown
            toggle-class="btn-icon btn-icon-only"
            variant="link"
            right
          >
            <span slot="button-content"
              ><i class="header-icon lnr-earth mr-3 text-muted opacity-6"></i
            ></span>
            <div>
              <button
                @click="changeFr"
                type="button"
                tabindex="0"
                class="dropdown-item"
              >
                <country-flag country="FR" size="small" class="mr-1" /><span
                  >Français</span
                >
              </button>
              <button
                @click="changeUs"
                type="button"
                tabindex="0"
                class="dropdown-item"
              >
                <country-flag country="GB" size="small" class="mr-1" /><span
                  >Anglais</span
                >
              </button>
              <button type="button" tabindex="0" class="dropdown-item">
                <country-flag country="DE" size="small" class="mr-1" /><span
                  >Allemand</span
                >
              </button>
            </div>
          </b-dropdown>
        </div>
      </div>
      <div class="table-responsive">
        <table
          class="
            align-middle
            mb-2
            table table-borderless table-striped table-hover
          "
        >
          <thead>
            <tr>
              <th class="text-center">Catégorie</th>
              <th class="text-center">Clé</th>
              <th class="text-center">Titre</th>
              <th class="text-center">Modifié il y a</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="email in filteredItems" :key="email._id">
              <td
                class="row justify-content-center"
                style="
                  font-weight: bold;
                  color: white;
                  opacity: 0.9;
                  font-size: 11px;
                "
              >
                <div
                  style="display: flex; justify-content: center"
                  class="swatch-holder swatch-holder-md"
                  :class="getClass(email.section)"
                >
                  {{ getCategoryInitial(email.section) }}
                </div>
              </td>
              <td class="text-center text-muted">
                {{ email.key }}
              </td>
              <td class="text-center">{{ email.title }}</td>
              <td class="text-center">
                <time-ago :datetime="email.updatedAt" locale="fr"></time-ago>
              </td>
              <td class="text-center">
                <div>
                  <button
                    type="button"
                    class="
                      btn
                      mb-2
                      mr-2
                      btn-icon btn-icon-only btn-pill btn-primary
                    "
                    id="editBouton"
                    @click="edit(email)"
                  >
                    <i class="lnr-pencil btn-icon-wrapper"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <b-popover
          target="editBouton"
          placement="bottomleft"
          triggers="hover focus"
          content="Modifier"
        >
        </b-popover>
        <b-popover
          target="viewBouton"
          placement="bottomleft"
          triggers="hover focus"
          content="Consulter"
        >
        </b-popover>
      </div>
    </div>
  </div>
</template>
<script>
import CountryFlag from "vue-country-flag";
import moment from "moment";
export default {
  name: "email-list",
  components: {
    CountryFlag,
  },

  data() {
    return {
      isActive: true,
      displayDetails: false,
      selectedCategory: "Toutes les catégories",
    };
  },

  props: {
    emails: {
      type: Array,
    },
    categories: {
      type: Array,
    },
  },

  computed: {
    filteredItems: function () {
      var vm = this;
      var category = vm.selectedCategory;

      if (category === "Toutes les catégories" || category === null) {
        return vm.emails;
      } else {
        return vm.emails.filter(function (email) {
          return email.section === category;
        });
      }
    },
    prows() {
      return this.filteredItems.length;
    },
  },

  methods: {
    edit(email) {
      this.$emit("edit", email);
    },
    changeUs() {
      this.$emit("changeUs");
    },
    changeFr() {
      this.$emit("changeFr");
    },
    getCategoryInitial(id) {
      const category = this.categories.filter((item) => {
        return item.id == id;
      });
      if (category[0]) {
        return category[0].initial;
      }
      return "";
    },
    getClass(id) {
      const category = this.categories.filter((item) => {
        return item.id == id;
      });
      if (category[0]) {
        return category[0].class;
      }
      return "";
    },
    getElapsedTime(time) {
      moment.locale("fr");
      return moment(time).fromNow();
    },
  },
};
</script>
