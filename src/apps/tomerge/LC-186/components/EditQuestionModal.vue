<template>
    <div class="text-xs-center">
        <v-dialog v-model="dialog2" max-width="600px">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Modification - {{ faq.question }}
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <b-form row wrap>
                            <b-form-group
                                id="input-group-3"
                                label="Categorie :"
                                label-for="input-3"
                            >
                                <b-form-input
                                    id="input-3"
                                    :value="getCategoryName(faq.category)"
                                    :disabled="true"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="input-group-1"
                                label="Question :"
                                label-for="input-1"
                            >
                                <b-form-input
                                    id="input-1"
                                    v-model="faq.question"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-2"
                                label="Réponse :"
                                label-for="input-2"
                            >
                                <b-form-textarea
                                    id="input-2"
                                    v-model="faq.answer"
                                    required
                                ></b-form-textarea>
                            </b-form-group>

                            <div class="p-1 text-right btn-group-sm">
                                <b-button
                                    style="margin-right: 10px"
                                    type="reset"
                                    @click="close2"
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
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { Questions } from "@/mixins/questions";
export default {
    name: "edit-question",
    components: {},
    mixins: [Questions],
    data() {
        return {};
    },
    props: {
        dialog2: {
            type: Boolean
        },
        faq: {
            type: Object
        },
        editedCategory: {
            type: Object
        },
        categories: {
            type: Array
        }
    },
    methods: {
        getCategoryName(id) {
            const filteredCat = this.categories.filter(item => item._id === id);
            return filteredCat[0] ? filteredCat[0].text : " ";
        },
        close2() {
            this.$emit("close2");
        },
        async saveModification() {
            await this.update();
            this.close2();
            this.$emit("saveModification", this.faq);
        },

        async update() {
            // APPEL API => UPDATE
            try {
                const payload = {
                    _id: this.faq._id,
                    question: this.faq.question,
                    answer: this.faq.answer
                };
                await this.modifyQuestion(payload);
                this.close2();
                // eslint-disable-next-line no-empty
            } catch (error) {}
            //this.close2();
            // this.$emit("saveModification", this.items);
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
