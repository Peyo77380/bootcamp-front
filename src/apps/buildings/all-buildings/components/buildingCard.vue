<template>
    <b-card class="mb-3 mx-3 col-4 nav-justified" no-body>
        <b-tabs card>
            <b-tab title="Détail" active>
                <div>
                    <h4 class="text-center">
                        <img :src="`${mediaHost}image/1/1/${building._id}`" />
                    </h4>
                    <h5 class="text-center">
                        {{ building.name }}
                    </h5>
                    <h6 class="text-center">
                        {{ building.location.city }}
                    </h6>
                </div>
            </b-tab>
            <b-tab title="Action">
                <div>
                    <v-layout align-center>
                        <v-flex xs12 sm4 text-xs-center>
                            <div>
                                <v-btn
                                    depressed
                                    small
                                    :to="{
                                        name: 'show-building',
                                        params: { id: building._id }
                                    }"
                                >
                                    Afficher
                                </v-btn>
                            </div>
                            <div>
                                <v-btn
                                    depressed
                                    small
                                    color="primary"
                                    :to="{
                                        name: 'edit-building',
                                        params: { id: building._id }
                                    }"
                                >
                                    Editer
                                </v-btn>
                            </div>
                            <div>
                                <v-btn
                                    depressed
                                    small
                                    color="error"
                                    @click="handleDeleteBuilding(building._id)"
                                >
                                    Archiver
                                </v-btn>
                            </div>
                        </v-flex>
                    </v-layout>
                </div>
            </b-tab>
        </b-tabs>
    </b-card>
</template>

<script>
import { Buildings } from "@/mixins/building";
import { Images } from "@/mixins/image";

export default {
    name: "BuildingCard",
    props: ["building"],
    mixins: [Buildings, Images],
    data: () => ({
        currentTab: "building1",
        image: undefined
    }),
    computed: {
        mediaHost() {
            return this.getMediaHost();
        }
    },
    methods: {
        handleClick(newTab) {
            this.currentTab = newTab;
        },
        async handleDeleteBuilding(id) {
            const res = await this.deleteBuilding(id);
            if (res.error) {
                return this.$sweetError("BD-152");
            }
            return this.$emit("onDeletedBuilding", id);
        }
    }
};
</script>

<style scoped>
img {
    width: 100%;
    height: auto;
}
</style>
