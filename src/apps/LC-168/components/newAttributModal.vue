<template>
    <div class="text-xs-center">
        <v-dialog
            v-model="isAddMode"
            @click="closeAddModal"
            max-width="800px"
            persistent
            no-click-animation
        >
            <div>
                <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title>
                        Création nouvel attribut
                    </v-card-title>
                    <v-container>
                        <v-select
                            v-model="newAttribute.typeData"
                            :items="types"
                            item-text="label"
                            item-value="label"
                            persistent-hint
                            return-object
                            single-line
                        >
                        </v-select>

                        <b-form row wrap>
                            <b-form-group
                                id="input-group-1"
                                label="Nom :"
                                label-for="input-1"
                            >
                                <b-form-input
                                    id="input-1"
                                    v-model="newAttribute.name"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-2"
                                label="Identifiant :"
                                label-for="input-2"
                            >
                                <b-form-input
                                    id="input-2"
                                    v-model="newAttribute.key"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <div
                                v-if="newAttribute.typeData === 'Champs texte'"
                            >
                                <b-form-group
                                    id="input-group-1"
                                    label="Options :"
                                    label-for="input-1"
                                >
                                    <b-form-textarea
                                        id="input-1"
                                        v-model="newAttribute.unity"
                                        placeholder="Informations complémentaires..."
                                        required
                                    ></b-form-textarea>
                                </b-form-group>
                            </div>
                            <div
                                v-if="newAttribute.typeData === 'Un seul choix'"
                            >
                                <label for="tags-pills"
                                    >Différents choix possibles</label
                                >
                                <v-combobox
                                    v-model="newAttribute.datas"
                                    hide-selected
                                    :multiple="false"
                                    persistent-hint
                                    small-chips
                                ></v-combobox>
                            </div>
                            <div
                                v-if="
                                    newAttribute.typeData ===
                                        'Liste de sélection'
                                "
                            >
                                <label for="tags-pills-2"
                                    >Différents choix possibles</label
                                >
                                <v-combobox
                                    v-model="newAttribute.datas"
                                    hide-selected
                                    multiple
                                    persistent-hint
                                    small-chips
                                ></v-combobox>
                            </div>

                            <div
                                class="p-1 text-right btn-group-sm "
                                style="margin-top:10px"
                            >
                                <b-button
                                    style="margin-right:10px"
                                    type="reset"
                                    @click="closeAddModal"
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
import { typeArray } from "@/utils/globalAttribut";
export default {
    name: "new-attribut-modal",
    components: {},
    data() {
        return {
            newAttribute: {
                typeData: "Champs texte",
                name: "",
                key: ""
            },
            types: typeArray
        };
    },
    props: {
        isAddMode: {
            type: Boolean
        },
        handleAdd: {
            type: Function
        },
        closeAddModal: {
            type: Function
        }
    },
    methods: {
        async saveModification() {
            try {
                const newAttrWlAdded = Object.assign(
                    { wl: 1, lang: "fr_FR" },
                    this.newAttribute
                );
                await this.handleAdd(newAttrWlAdded);
                this.closeAddModal();
                this.newAttribute = {
                    typeData: "Champs texte",
                    name: "",
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
