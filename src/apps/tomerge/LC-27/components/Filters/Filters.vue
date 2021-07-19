<template>
    <div class="mb-3 card text-center">
        <b-nav class="p-3 nav " align="center">
            <b-form-radio-group
                class="m-2 shadow"
                id="btnradios2"
                buttons
                button-variant="outline-primary"
                size="lg"
                v-model="selected2"
                :options="options2"
                name="radioBtnOutline"
            />
            <div
                class="search-wrapper m-2"
                v-bind:class="{ active: searchOpen }"
            >
                <div class="input-holder">
                    <input
                        type="text"
                        class="search-input"
                        placeholder="Mots clé"
                    />
                    <button
                        class="search-icon"
                        v-on:click="searchOpen = !searchOpen"
                    >
                        <span />
                    </button>
                </div>
                <button class="close" v-on:click="searchOpen = !searchOpen" />
            </div>
            <b-dropdown
                variant="primary"
                no-flip
                id="ddown-lg"
                size="lg"
                text="Type"
                class="m-2 shadow"
            >
                <b-dropdown-item-button>Membres</b-dropdown-item-button>
                <b-dropdown-item-button>Sociétés</b-dropdown-item-button>
            </b-dropdown>
            <b-dropdown
                variant="primary"
                no-flip
                id="ddown-lg"
                size="lg"
                text="Statut"
                class="m-2 shadow"
            >
                <b-dropdown-item-button>Indépendant</b-dropdown-item-button>
                <b-dropdown-item-button>Salarié</b-dropdown-item-button>
            </b-dropdown>
            <b-dropdown
                variant="primary"
                no-flip
                id="ddown-lg"
                size="lg"
                text="Activité"
                class="m-2 shadow"
            >
                <b-dropdown-item-button>Actifs</b-dropdown-item-button>
                <b-dropdown-item-button>Inactifs</b-dropdown-item-button>
            </b-dropdown>

            <b-dropdown
                variant="primary"
                no-flip
                id="ddown-lg"
                size="lg"
                text="Catégories"
                class="m-2 shadow"
            >
                <b-dropdown-item-button>Coworker</b-dropdown-item-button>
                <b-dropdown-item-button
                    >Salle de réunion</b-dropdown-item-button
                >
                <b-dropdown-item-button>Bureau</b-dropdown-item-button>
            </b-dropdown>
            <b-dropdown
                variant="primary"
                no-flip
                id="ddown-lg"
                size="lg"
                text="Adhésion"
                class="m-2 shadow"
            >
                <b-dropdown-item-button>Membre</b-dropdown-item-button>
                <b-dropdown-item-button>Non-membre</b-dropdown-item-button>
                <b-dropdown-item-button>Résident</b-dropdown-item-button>
            </b-dropdown>

            <b-dropdown
                variant="info"
                no-flip
                id="ddown-lg"
                size="lg"
                text="Trier"
                class="m-2 shadow"
            >
                <b-dropdown-item-button>A - Z</b-dropdown-item-button>
                <b-dropdown-item-button>Z - A</b-dropdown-item-button>
            </b-dropdown>

            <b-button class="m-2 shadow" size="lg" variant="alternate"
                >Rechercher</b-button
            >
        </b-nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchOpen: false,
            buttons: [
                {
                    loading: false,
                    dataStyle: "expand-left",
                    progress: 0
                },
                {
                    loading: false,
                    dataStyle: "expand-right",
                    progress: 0
                },
                {
                    loading: false,
                    dataStyle: "zoom-in",
                    progress: 0
                },
                {
                    loading: false,
                    dataStyle: "zoom-out",
                    progress: 0
                },
                {
                    loading: false,
                    dataStyle: "slide-left",
                    progress: 0
                },
                {
                    loading: false,
                    dataStyle: "slide-right",
                    progress: 0
                },
                {
                    loading: false,
                    dataStyle: "slide-up",
                    progress: 0
                },
                {
                    loading: false,
                    dataStyle: "slide-down",
                    progress: 0
                },
                {
                    loading: false,
                    dataStyle: "expand-up",
                    progress: 0
                },
                {
                    loading: false,
                    dataStyle: "expand-down",
                    progress: 0
                }
            ],
            selected2: "radio1",
            options2: [
                { text: "Membres", value: "radio1" },
                { text: "Sociétés", value: "radio2" }
            ]
        };
    }
};
</script>
