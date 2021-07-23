<template>
  <div>
    <div class="page-title-actions" style="margin-bottom: 10px">
      <button
        @click="showNewAttributModal"
        type="button"
        class="btn-shadow d-inline-flex align-items-center btn btn-success"
      >
        <font-awesome-icon class="mr-2" icon="plus" />
        Ajouter un nouvel attribut
      </button>
    </div>
    <div class="main-card mb-3 card">
      <div class="table-responsive">
        <table
          class="
            align-middle
            mb-0
            table table-striped table-borderless table-hover
          "
        >
          <thead>
            <tr>
              <th class="text-center">Nom</th>
              <th class="text-center">Identifiant</th>
              <th class="text-center">Type</th>
              <th class="text-center">Options</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item._id">
              <td class="text-center">{{ item.name }}</td>
              <td class="text-center">{{ item.key }}</td>

              <td class="text-center">
                <v-chip outline :color="getClassType(item.typeData)">{{
                  item.typeData
                }}</v-chip>
              </td>
              <td class="text-center" v-if="item.typeData === 'Champs texte'">
                {{ item.options }}
              </td>

              <td
                class="text-center"
                v-if="
                  item.typeData === 'Un seul choix' ||
                  item.typeData === 'Liste de sélection'
                "
              >
                <v-chip
                  small
                  v-for="(option, index) in item.datas"
                  :key="index"
                  label
                  color="blue"
                  text-color="white"
                >
                  {{ option }}
                </v-chip>
              </td>

              <td class="text-center">
                <div role="group" class="btn-group-xl">
                  <b-button
                    class="mb-2 mr-2 btn-pill btn-shadow"
                    variant="primary"
                    id="popover1"
                    @click="showEditModal(item)"
                  >
                    <i class="lnr-pencil"></i>
                  </b-button>
                  <b-popover
                    :target="'popover1'"
                    placement="bottomleft"
                    triggers="hover focus"
                  ></b-popover>
                  <b-button
                    class="mb-2 mr-2 btn-icon btn-pill btn-shadow"
                    variant="danger"
                    id="popover2"
                    @click="remove(item._id)"
                    ><i class="pe-7s-trash"> </i
                  ></b-button>
                  <b-popover
                    :target="'popover2'"
                    placement="bottom"
                    triggers="hover focus"
                  ></b-popover>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <add-modal
      :closeAddModal="closeModalNew"
      :isAddMode="isAddMode"
      :handleAdd="handleAdd"
    ></add-modal>
    <edit-modal
      :closeEditModal="closeModalEdit"
      :editedItem="keyValueEdit"
      :isEditMode="isEditMode"
      :handleUpdate="handleUpdate"
      :key="componentKey"
    ></edit-modal>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { typesData } from "@/utils/globalAttribut";
import AddModal from "./newAttributModal.vue";
import EditModal from "./editModal.vue";
import { attributes } from "@/mixins/attributes";

export default {
  components: {
    "font-awesome-icon": FontAwesomeIcon,
    AddModal,
    EditModal,
  },
  mixins: [attributes],
  async mounted() {
    await this.loadAttributes();
  },
  data() {
    return {
      items: [],
      isEditMode: false,
      isAddMode: false,
      keyValueEdit: {},
      componentKey: 0,
    };
  },
  methods: {
    getClassType(label) {
      const typeC = typesData.filter((item) => {
        return item.label == label;
      });
      if (typeC[0]) {
        return typeC[0].classType;
      }
      return "";
    },
    closeModalNew() {
      this.isAddMode = false;
    },
    closeModalEdit() {
      this.isEditMode = false;
    },
    showNewAttributModal() {
      this.isAddMode = true;
    },
    showEditModal(item) {
      this.isEditMode = true;
      this.keyValueEdit = item;
      this.forceRerender();
    },
    async remove(Id) {
      // sweet alert sur la suppression
      let title = "Confirmer la suppression de cet item";
      if (await this.$sweetConfirmation({ title })) {
        try {
          const res = await this.deleteAttribute(Id);
          this.loadAttributes();
          this.$sweetNotif("Item supprimée");
        } catch (error) {
          console.error(error);
        }
      }
    },
    async loadAttributes() {
      try {
        const res = await this.getAttributes();
        this.items = res;
      } catch (error) {
        console.error(error);
      }
    },
    async handleUpdate(attr) {
      try {
        const res = await this.modifyAttribute(attr);
        this.loadAttributes();
      } catch (error) {
        console.error(error);
      }
    },
    async handleAdd(attr) {
      try {
        const res = await this.addAttribute(attr);
        this.loadAttributes();
      } catch (error) {
        console.error(error);
      }
    },
    forceRerender() {
      this.componentKey += 1;
    },
  },
};
</script>
