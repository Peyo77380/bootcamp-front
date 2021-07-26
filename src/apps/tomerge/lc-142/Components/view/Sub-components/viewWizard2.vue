<template>    
<!-- Onglet 2 du wizard-->
<b-tab title="Description" class="p-2">
    <div class="scroll-gradient">
        <div class="scroll-area-xlg">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
                <div class="mt-3 mb-3">
                    <!-- Contenu 2e wizard-->
                    <b-form>
                        <quill-editor v-model="room.description"
                            class="m-5"
                            ref="myQuillEditor"
                            :options="editorOption">
                        </quill-editor>
                    </b-form>
                </div>
            </VuePerfectScrollbar>
        </div>
    </div>
</b-tab>
</template>

<script>
import { roomDetailsData } from "@/apps/tomerge/lc-142/Components/data-roomDetails";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { quillEditor } from 'vue-quill-editor';

export default {
    name: 'Wizard2',
    components: {
        VuePerfectScrollbar,
        quillEditor
    },
     props : {
        getData: {
            type: Number,
            default: 0
        }
    },
    watch : {
        getData(newVal) {
            if(newVal==1) {
                this.$emit('destInfo', this.room.description)
            }
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill
        }
    },
    data: () => ({
        room: {
            description: roomDetailsData[0].description,
        },
        roomDetailsData: roomDetailsData,
        editorOption: {
            // some quill options
        }
    })
};
</script>

<style lang="css">
  @import '~quill/dist/quill.core.css';
  @import '~quill/dist/quill.snow.css';
  @import '~quill/dist/quill.bubble.css';
</style>