<template>
    <div class="text-xs-center">
        <v-dialog
            v-model="isAddModeQuestion"
            @click="closeAddModalQuestion"
            max-width="600px"
            persistent
            no-click-animation
        >
            <div>
                <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title>
                        Création nouvelle question
                    </v-card-title>
                    <v-container>
                        <b-form row wrap>
                         <v-select
                            v-model="newQuestion.category"
                            :items="categories"
                            item-text="label"
                            item-value="label"
                            persistent-hint
                            return-object
                            single-line
                        >
                        </v-select>

                            <b-form-group
                                id="input-group-1"
                                label="Question :"
                                label-for="input-1"
                            >
                                <b-form-input
                                    id="input-1"
                                    v-model="newQuestion.label"
                                    required
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="input-group-1"
                                label="Réponse :"
                                label-for="input-1"
                            >
                                <b-form-textarea
                                    id="input-1"
                                    v-model="newQuestion.answer"
                                    required
                                ></b-form-textarea>
                            </b-form-group>
                            <div
                                class="p-1 text-right btn-group-sm "
                                style="margin-top:10px"
                            >
                                <b-button
                                    style="margin-right:10px"
                                    type="reset"
                                    @click="closeAddModalQuestion"
                                    variant="danger"
                                    >Retour</b-button
                                >
                                <b-button
                                    type="submit"
                                    @click="saveModification"
                                    variant="success"
                                    >Valider</b-button
                                >
                            </div>
                        </b-form>
                    </v-container>
                </v-card>
            </div>
        </v-dialog>
    </div>
</template>

<script>
import { categories } from "@/utils/globalCategories";
export default {
    name: "new-question-modal",
    components: {},
    data() {
        return {
            newQuestion: {
                answer: "Réponse",
                label: "Question ?",
            category : "Au sujet de La Colloc"
                
            },
            categories:categories
            
        };
    },
    props: {
        isAddModeQuestion: {
            type: Boolean
        },
        handleAddQuestion: {
            type: Function
        },
        closeAddModalQuestion: {
            type: Function
        },
        
    },
    methods: {
        async saveModification() {
            try {
                const newQuestWlAdded = Object.assign(
                    { wl: 1, lang: "fr_FR" },
                    this.newQuestion
                );
                await this.handleAddQuestion(newQuestWlAdded);
                this.closeAddModalQuestion();
                this.newQuestion = {
                    answer: "",
                    label: "",
                    key: ""
                };
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
<style>
.outlined {
    border: 1px solid #1967c0;
    border-radius: 50%;
}

.outlined:hover {
    background-color: #1967c0;
}
.icon-color {
    color: #1967c0;
}
.icon-color:hover {
    color: white;
}
</style>
