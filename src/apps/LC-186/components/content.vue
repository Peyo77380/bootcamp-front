<template>
<div>
<div class="col-12 page-title-actions" style="margin-bottom: 10px;">
            <button style="margin-right: 15px"
                @click="showNewQuestionModal"
                type="button"
                class="btn-shadow d-inline-flex align-items-center btn btn-success"
            >
                <font-awesome-icon class="mr-2" icon="plus" />
                Ajouter une question
            </button>
            <button
                @click="showNewCategoryModal"
                type="button"
                class="btn-shadow d-inline-flex align-items-center btn btn-success"
            >
                <font-awesome-icon class="mr-2" icon="plus" />
                Ajouter une catégorie
            </button>
</div>
<div class="col-12 ">
  <v-expansion-panel   :style="{background:category.classname}"
  v-for="category in categories" :key="category.id"
  >
  <div style="margin-bottom:10px; margin-top:10px" class="title_font">{{category.label}}</div>
 
      
    <v-expansion-panel-content 
      v-if="question.id_category === category.id"
      v-for="question in questions"
      :key="question.id"
    >
      <template v-slot:header >
        <div class="question_font"><i style="margin-right:10px" class="header-icon lnr-question-circle icon-gradient bg-ripe-malin"></i>{{question.label}}</div>
      </template>
      <v-card style="display:flex; justify-content:space-around">
        <v-card-text  class="answer_font">
            {{question.answer}}
        </v-card-text>
      
        <div style="display:flex; align-items: end" class="btn-group-xl">
            <b-button
                class="mb-2 mr-2  btn-pill btn-shadow"
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
                @click="remove(question.id)"
                                        >
                <i class="pe-7s-trash"> </i
                                    >
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
    <modal
        @saveModification="modificationQuestion"
        :questions="QuestionEdit"
        @close2="closeModalEdit"
        :dialog2="dialog2"
    ></modal>
    <add-modal-category
        :closeAddModalCategory="closeModalNewCategory"
        :isAddModeCategory="isAddCategory"
        :handleAddCategory="handleAddCategory"
    ></add-modal-category>
    <add-modal-question
        :closeAddModalQuestion="closeModalNewQuestion"
        :isAddModeQuestion="isAddQuestion"
        :handleAddQuestion="handleAddQuestion"
    ></add-modal-question>


  </div>
  </div>
</template>

<script>
import modal from "./EditModal.vue"
import AddModalCategory from './AddModalCategory.vue'
import AddModalQuestion from './AddModalQuestion.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default{
    components:{
        "font-awesome-icon": FontAwesomeIcon,
        modal,
        AddModalCategory,
        AddModalQuestion
    },
     data: () => ({
            isAddQuestion: false,
            isAddCategory: false,
            dialog2: false,
            QuestionEdit: {},
            categories:
            [
            { label:'Au sujet de La Colloc', id:1, classname:'#ec6465' },
            { label:'Questions fréquentes', id:2, classname:'#6bb4ae' },
            { label:'À propos des espaces de travail', id:3, classname:'#d46122' },
            { label:'Au sujet des membres', id:4, classname:'#e9c20c' }
            ],

            questions:
            [
            {id:1, label:'Première question ??',answer:"Premiere réponse", id_category:1 },
            {id:2,label:'Deuxième question ??',answer:'Deuxième réponse', id_category:2 },
            {id:3,label:'Troisième question ??',answer:'Troisième réponse', id_category:1 },
            {id:4,label:'Quatrième question ??',answer:'Quatrième réponse', id_category:4 },
            {id:5,label:'Cinquième question ??',answer:'Cinquième réponse', id_category:2 },
            {id:6,label:'Sixième question ??',answer:'Sixième réponse', id_category:3 },
            {id:7,label:'Septième question ??',answer:'Septième réponse', id_category:2 },
            {id:8,label:'Huitième question ??',answer:'Huitième réponse', id_category:4 }
            ]
            
        }),
        methods:{
          async remove(Id) {
      // sweet alert sur la suppression
      
        this.questions = this.questions.filter(
          (question) => question.id !== Id
        );
        

    },
        closeModalEdit() {
            this.dialog2 = false;
        },
        async handleAddQuestion(question) {
            try {
                const res = await this.addQuestion(question);
                this.loadQuestions();
            } catch (error) {
                console.error(error);
            }
        },
        async handleAddCategory(category) {
                    try {
                        const res = await this.addCategory(category);
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
        modificationQuestion() {
            //TODO point API modification email de services

            var title = "Modification de la question réussie !";
            this.$sweetNotif(title);
        }





        }

}
  
  

</script>
<style>
@font-face {
  font-family: "Montserrat-regular";
  src: url("../../../../public/Montserrat/Montserrat-Regular.ttf");
  }

  .question_font{
      font-family: "Montserrat-regular";
};
@font-face {
  font-family: "Montserrat-medium";
  src: url("../../../../public/Montserrat/Montserrat-Bold.ttf");
  };
  .title_font{
      font-family:"Montserrat-regular";
      font-size:17px;
      color:white;
     
  }

  @font-face {
  font-family: "Montserrat-light";
  src: url("../../../../public/Montserrat/Montserrat-Light.ttf");
  };
  .answer_font{
      font-family:"Montserrat-light";
  }

</style>
