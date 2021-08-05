<template>
    <div>
        <div class="app-page-title">
            <div class="page-title-wrapper">
                <div class="page-title-heading">
                    <div class="page-title-icon">
                        <i :class="icon" />
                    </div>
                    <div>
                        {{ heading }}
                        <div class="page-title-subheading">
                            {{ subheading }}
                        </div>
                    </div>
                </div>
                <div class="page-title-actions" style="margin-bottom: 10px">
                    <button
                        style="margin-right: 15px"
                        @click="showNewQuestionModal"
                        type="button"
                        class="btn-shadow d-inline-flex align-items-center btn btn-success"
                    >
                        <font-awesome-icon class="mr-2" icon="plus" />
                        Ajouter une question
                    </button>
                </div>
            </div>
        </div>

        <div class="col-12">
            <v-expansion-panel
                v-for="(category, index) in categories"
                :style="{ background: getClassName(index) }"
                :key="category._id"
            >
                <div
                    style="margin-bottom: 10px; margin-top: 10px"
                    class="title_font"
                >
                    {{ category.text }}
                    <b-button
                        style="margin-left: 20px"
                        class="mb-2 mr-2 btn-pill btn-shadow"
                        variant="primary"
                        id="popover1"
                        @click="showEditCategory(category)"
                    >
                        <i class="lnr-pencil"></i>
                    </b-button>
                    <b-popover
                        :target="'popover1'"
                        placement="bottomleft"
                        triggers="hover focus"
                    >
                    </b-popover>
                </div>

                <v-expansion-panel-content
                    v-for="question in getQuestionsByCategory(category._id)"
                    :key="question.id"
                >
                    <template v-slot:header>
                        <div class="question_font">
                            <i
                                style="margin-right: 10px"
                                class="
                  header-icon
                  lnr-question-circle
                  icon-gradient
                  bg-ripe-malin
                "
                            ></i
                            >{{ question.question }}
                        </div>
                    </template>
                    <v-card
                        style="display: flex; justify-content: space-around"
                    >
                        <v-card-text class="answer_font">
                            {{ question.answer }}
                        </v-card-text>

                        <div
                            style="display: flex; align-items: end; margin-right: 20px"
                            class="btn-group-xl"
                        >
                            <b-button
                                class="mb-2 mr-2 btn-pill btn-shadow"
                                variant="primary"
                                id="popover1"
                                @click="showEdit(question)"
                            >
                                <i class="lnr-pencil"></i>
                            </b-button>
                            <b-popover
                                :target="'popover1'"
                                placement="bottomleft"
                                triggers="hover focus"
                            >
                            </b-popover>
                            <b-button
                                class="mb-2 mr-2 btn-icon btn-pill btn-shadow"
                                variant="danger"
                                id="popover2"
                                @click="remove(question._id)"
                            >
                                <i class="pe-7s-trash"> </i>
                            </b-button>
                            <b-popover
                                :target="'popover2'"
                                placement="bottom"
                                triggers="hover focus"
                            >
                            </b-popover>
                        </div>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <edit-modal-question
                @saveModification="modificationQuestion"
                :faq="QuestionEdit"
                @close2="closeModalEdit"
                :dialog2="dialog2"
                :categories="categories"
            ></edit-modal-question>
            <edit-category-modal
                @saveModification="modificationCategory"
                @close="closeModalEditCategory"
                :updateCategory="handleModifyCategory"
                :dialog="dialog"
                :categories="CategoryEdit"
            ></edit-category-modal>
            <add-modal-question
                :closeAddModalQuestion="closeModalNewQuestion"
                :isAddModeQuestion="isAddQuestion"
                :handleAddQuestion="handleAddQuestion"
                :categories="categories"
            ></add-modal-question>
        </div>
    </div>
</template>

<script>
import { Questions } from "@/mixins/questions";
import { Lists } from "@/mixins/list";
import EditCategoryModal from "./EditCategoryModal.vue";
import EditModalQuestion from "./EditQuestionModal.vue";
import AddModalQuestion from "./AddModalQuestion.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    components: {
        "font-awesome-icon": FontAwesomeIcon,
        EditModalQuestion,
        AddModalQuestion,
        EditCategoryModal
    },
    mixins: [Questions, Lists],
    async mounted() {
        await this.loadQuestions();
        await this.loadCategories();
    },

    data: () => ({
        isAddQuestion: false,
        isAddCategory: false,
        dialog2: false,
        QuestionEdit: {},
        dialog: false,

        CategoryEdit: {},
        heading: "FAQ (Foire Aux Questions)",
        subheading: "Des réponses à vos questions",
        icon: "pe-7s-way icon-gradient bg-night-fade",

        //TODO après merge de flo, cabler les catégories via la list de Gaelle LC-29
        categories: [],
        classes: [
            { classname: "#ec6465" },
            { classname: "#6bb4ae" },
            { classname: "#d46122" },
            { classname: "#e9c20c" }
        ],

        questions: [],
        catListId: ""
    }),
    methods: {
        getClassName(index) {
            var indexClass = index % 4;
            return this.classes[indexClass].classname;
        },
        getQuestionsByCategory(cat_id) {
            return this.questions.filter(item => item.category === cat_id);
        },
        async loadQuestions() {
            try {
                this.questions = await this.getAllQuestions();
                console.log(this.questions);
            } catch (error) {
                this.$sweetError("GPA-98");
            }
        },
        async loadCategories() {
            try {
                const categoriesLoaded = await this.getAllByKey("FAQ_LIST");
                this.catListId = categoriesLoaded.datas.data.datas[0]._id;
                this.categories = categoriesLoaded.datas.data.datas[0].datas;
            } catch (error) {
                this.$sweetError("GPA-98");
            }
        },
        async remove(Id) {
            let title = "Confirmer la suppression de l'activité";
            console.log(Id);
            if (await this.$sweetConfirmation({ title })) {
                try {
                    this.deleteQuestion(Id);
                    await this.loadQuestions();
                    this.$sweetNotif("Question supprimée");
                } catch (error) {
                    console.error(error);
                }
            }
        },
        closeModalEdit() {
            this.dialog2 = false;
        },
        closeModalEditCategory() {
            this.dialog = false;
        },
        async handleAddQuestion(question) {
            try {
                await this.addQuestion(question);
                this.loadQuestions();
            } catch (error) {
                console.error(error);
            }
        },
        async handleModifyCategory(category) {
            try {
                await this.updateDetailFromList(this.catListId, category);
                this.loadCategories();
            } catch (error) {
                console.error(error);
            }
        },

        closeModalNewQuestion() {
            this.isAddQuestion = false;
        },
        closeModalNewCategory() {
            this.isAddCategory = false;
        },
        showNewQuestionModal() {
            this.isAddQuestion = true;
        },

        showNewCategoryModal() {
            this.isAddCategory = true;
        },

        showEdit(question) {
            this.dialog2 = true;
            this.QuestionEdit = question;
        },
        showEditCategory(category) {
            this.dialog = true;
            this.CategoryEdit = category;
        },
        //TODO après merge de flo, cabler la modification des questions
        modificationQuestion(updatedQuestion) {
            var title = "Modification de la question réussie !";
            this.$sweetNotif(title);
        },
        modificationCategory() {
            var title = "Modification de la catégorie réussie !";
            this.$sweetNotif(title);
        }
    }
};
</script>
<style>
@font-face {
    font-family: "Montserrat-regular";
    src: url("../../../../../public/Montserrat/Montserrat-Regular.ttf");
}

.question_font {
    font-family: "Montserrat-regular";
}
@font-face {
    font-family: "Montserrat-medium";
    src: url("../../../../../public/Montserrat/Montserrat-Bold.ttf");
}
.title_font {
    font-family: "Montserrat-regular";
    font-size: 17px;
    color: white;
}

@font-face {
    font-family: "Montserrat-light";
    src: url("../../../../../public/Montserrat/Montserrat-Light.ttf");
}
.answer_font {
    font-family: "Montserrat-light";
}
</style>
