<template>
    <div class="mb-3 card text-center">
        

        <b-nav class="text-center p-3 nav " align="center">
        
            <div class="search-wrapper"  v-bind:class="{ active: searchOpen }">
                <div class="input-holder">
                    <input type="text" class="search-input" placeholder="Mots clé"/>
                            <button class="search-icon" v-on:click="searchOpen = !searchOpen"><span />
                            </button>
                </div>
                <button class="close" v-on:click="searchOpen = !searchOpen"/>
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
                        <b-dropdown-item-button
                            >Sociétés</b-dropdown-item-button
                        >
                    </b-dropdown>
                    <b-dropdown
                        variant="primary"
                        no-flip
                        id="ddown-lg"
                        size="lg"
                        text="Statut"
                        class="m-2 shadow"
                    >
                        <b-dropdown-item-button>Actifs</b-dropdown-item-button>
                        <b-dropdown-item-button
                            >Inactifs</b-dropdown-item-button
                        >
                    </b-dropdown>
                    <b-dropdown
                        variant="primary"
                        no-flip
                        id="ddown-lg"
                        size="lg"
                        text="Etat"
                        class="m-2 shadow"
                    >
                        <b-dropdown-item-button>Membres</b-dropdown-item-button>
                        <b-dropdown-item-button
                            >Sociétés</b-dropdown-item-button
                        >
                    </b-dropdown>
                    <b-dropdown
                        variant="primary"
                        no-flip
                        id="ddown-lg"
                        size="lg"
                        text="Catégories"
                        class="m-2 shadow"
                    >
                        <b-dropdown-item-button
                            >Catégorie 1</b-dropdown-item-button
                        >
                        <b-dropdown-item-button
                            >Catégorie 2</b-dropdown-item-button
                        >
                    </b-dropdown>
                    <b-dropdown
                        variant="primary"
                        no-flip
                        id="ddown-lg"
                        size="lg"
                        text="Adhésion"
                        class="m-2 shadow"
                    >
                        <b-dropdown-item-button>Oui</b-dropdown-item-button>
                        <b-dropdown-item-button>Non</b-dropdown-item-button>
                    </b-dropdown>
                    <b-dropdown
                        variant="primary"
                        no-flip
                        id="ddown-lg"
                        size="lg"
                        text="Statut commercial"
                        class="m-2 shadow"
                    >
                        <b-dropdown-item-button
                            >Statut 1</b-dropdown-item-button
                        >
                        <b-dropdown-item-button>Statut 2</b-dropdown-item-button>
                    </b-dropdown>
                    <b-dropdown
                        variant="primary"
                        no-flip
                        id="ddown-lg"
                        size="lg"
                        text="Trier"
                        class="m-2 shadow"
                    >
                        <b-dropdown-item-button
                            >A - Z</b-dropdown-item-button
                        >
                        <b-dropdown-item-button>Z - A</b-dropdown-item-button>
                    </b-dropdown>
                    
        </b-nav>
    </div>
</template>
<script>

export default {
    data() {
            return {
                searchOpen: false,
            }
        },
};
</script>
