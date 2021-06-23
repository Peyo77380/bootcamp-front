<template>
    <div class="text-xs-center">
        <v-dialog v-model="dialog" max-width="600px">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Modification - {{ items.nom }}
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-layout row wrap>
                                <v-flex xs12 sm6>
                                    <v-text-field
                                        :value="items.nom"
                                        label="Nom"
                                        readonly
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-text-field
                                        :value="items.identifiant"
                                        label="Identifiant"
                                        readonly
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-form>
                    <v-container>
                        <b-form row wrap>
                            <b-form-group
                                id="input-group-1"
                                label="Valeur :"
                                label-for="input-1"
                            >
                                <b-form-input
                                    id="input-1"
                                    v-model="items.type"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-2"
                                label="Infos :"
                                label-for="input-2"
                            >
                                <b-form-input
                                    id="input-2"
                                    v-model="items.options"
                                    required
                                ></b-form-input>
                            </b-form-group>

                            <div class="p-1 text-right btn-group-sm ">
                                <b-button
                                    style="margin-right:10px"
                                    type="reset"
                                    @click="close"
                                    variant="danger"
                                    >Retour</b-button
                                >
                                <b-button
                                    type="submit"
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

export default {
    name: "edit-attribut",
    components: {
   
    },
    props: {
        dialog: {
            type: Boolean
        },
        items: {
            type: Object
        }
    },
    methods: {
        close() {
            this.$emit("close");
        },
        
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
