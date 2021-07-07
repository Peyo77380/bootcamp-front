<template>
    <div class="text-xs-center">
        <v-dialog
            v-model="isAddModeCategory"
            @click="closeAddModalCategory"
            max-width="600px"
            persistent
            no-click-animation
        >
            <div>
                <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title>
                        Création nouvelle catégorie
                    </v-card-title>
                    <v-container>
                        

                        <b-form row wrap>
                            <b-form-group
                                id="input-group-1"
                                label="Label :"
                                label-for="input-1"
                            >
                                <b-form-input
                                    id="input-1"
                                    v-model="newCategory.label"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <div
                                class="p-1 text-right btn-group-sm "
                                style="margin-top:10px"
                            >
                                <b-button
                                    style="margin-right:10px"
                                    type="reset"
                                    @click="closeAddModalCategory"
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

export default {
    name: "new-category-modal",
    components: {},
    data() {
        return {
            newCategory: {
                label: "Champs texte",
               
            },
        };
    },
    props: {
        isAddModeCategory: {
            type: Boolean
        },
        handleAddCategory: {
            type: Function
        },
        closeAddModalCategory: {
            type: Function
        }
    },
    methods: {
        async saveModification() {
            try {
                const newCateWlAdded = Object.assign(
                    { wl: 1, lang: "fr_FR" },
                    this.newCategory
                );
                await this.handleAddCategory(newCateWlAdded);
                this.closeAddModalCategory();
                this.newCategory = {
                    label: "Champs texte",
                  
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
