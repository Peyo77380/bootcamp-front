<template>    
<!-- Onglet 2 du wizard-->
<b-tab title="Description" class="p-2">
    <div class="scroll-gradient">
        <div class="scroll-area-xlg">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
                <div class="mt-3 mb-3">
                    <!-- Contenu 2e wizard-->
                    <h2>PLUGIN CKEDITOR</h2>
                    <b-form @onComplete2="onComplete2">
                        <!-- <ckeditor :editor="editor2" v-model="room.description" :config="editorConfig"></ckeditor> -->
                    </b-form>
                </div>
            </VuePerfectScrollbar>
        </div>
    </div>
</b-tab>
</template>

<script>
import { roomDetailsData } from "@/apps/lc-142/Components/data-roomDetails";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
// import CKEditor from '@ckeditor/ckeditor5-vue';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: 'Wizard2',
    components: {
        VuePerfectScrollbar,
        // ckeditor: CKEditor.component
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
                this.$emit('destInfo',this.room.description)
            }
        }
    },
    data: () => ({
        room: {
            description: '',
        },
        roomDetailsData: roomDetailsData,
        // editor2: ClassicEditor,
        // editorData: '<p>Content of the editor.</p>',
        // editorConfig: {
        // The configuration of the editor.
        // },
    }),

    methods: {
        onComplete2() {
        // validation premier wizard, save enn bdd et passage au wizard suivant
        }
    }
};
</script>