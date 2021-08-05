<template>
  
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
