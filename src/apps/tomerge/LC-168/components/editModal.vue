<template>
    <div class="text-xs-center">
        <v-dialog
            v-model="isEditMode"
            @click="closeEditModal"
            max-width="800px"
            persistent
            no-click-animation
        >
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Modification - {{ editItem.name }}
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <b-form row wrap>
                            <v-select
                                v-model="editItem.typeData"
                                :items="types"
                                item-text="label"
                                item-value="label"
                                persistent
                                return-object
                                single-line
                                outlined
                                readonly
                            >
                            </v-select>

                            <b-form-group label="Nom :">
                                <b-form-input
                                    v-model="editItem.name"
                                    required
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group label="Identifiant :">
                                <b-form-input
                                    v-model="editItem.key"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <div v-if="editItem.typeData === 'Champs texte'">
                                <b-form-group
                                    id="input-group-1"
                                    label="Options :"
                                    label-for="input-1"
                                >
                                    <b-form-textarea
                                        id="input-1"
                                        placeholder="Informations complémentaires..."
                                        v-model="editItem.unity"
                                        required
                                    ></b-form-textarea>
                                </b-form-group>
                            </div>
                            <div v-if="editedItem.typeData === 'Un seul choix'">
                                <label for="tags-pills"
                                    >Différents choix possibles</label
                                >
                                <v-combobox
                                    v-model="editItem.datas[0]"
                                    hide-selected
                                    :multiple="false"
                                    persistent
                                    small-chips
                                ></v-combobox>
                            </div>
                            <div
                                v-if="
                                    editedItem.typeData === 'Liste de sélection'
                                "
                            >
                                <label for="tags-pills-2"
                                    >Différents choix possibles</label
                                >
                                <v-combobox
                                    v-model="editItem.datas"
                                    hide-selected
                                    multiple
                                    persistent
                                    small-chips
                                ></v-combobox>
                            </div>

                            <div
                                class="p-1 text-right btn-group-sm"
                                style="margin-top:10px"
                            >
                                <b-button
                                    style="margin-right:10px"
                                    type="reset"
                                    @click="closeEditModal"
                                    variant="danger"
                                    >Retour
                                </b-button>
                                <b-button
                                    type="submit"
                                    variant="success"
                                    @click="modifUpdate"
                                    >Valider
                                </b-button>
                            </div>
                        </b-form>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { typeArray } from "@/utils/globalAttribut";
export default {
    name: "edit-attribut",
    props: {
        isEditMode: {
            type: Boolean
        },
        editedItem: {
            type: Object
        },
        handleUpdate: {
            type: Function
        },
        closeEditModal: {
            type: Function
        }
    },
    data() {
        return {
            types: typeArray
        };
    },
    computed: {
        editItem() {
            return { ...this.editedItem };
        }
    },
    methods: {
        async modifUpdate() {
            try {
                await this.handleUpdate(this.editItem);
                this.closeEditModal();
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
