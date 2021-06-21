<template>
    <div id="headerContainer">
        <Breadcrumb class="mb-4" /> <!-- Dédicace à Romain, en attendant les finitions !--> <!-- Florian est-ce que je garde le br comme un easter egg dans la version finale ? mdr !-->
       <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div>
                    <img class="page-title-icon" :src="require(`@/assets/images/${image}`)"/>
                </div>
                <div>
                    {{heading}}
                    <div
                        class="page-title-subheading">
                        {{subheading}}
                    </div>
                </div>
            </div>
            <div class="page-title-actions">
                <button type="button" class="btn-shadow mr-3 btn btn-dark">
                    <font-awesome-icon icon="star"/>
                </button>
                <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success">
                    <font-awesome-icon class="mr-2" icon="plus"/>
                    Créer
                </button>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Breadcrumb from './Breadcrumb/breadcrumb.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faStar,
        faPlus
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faStar,
        faPlus,
    );

export default {
    components: {Breadcrumb, 'font-awesome-icon': FontAwesomeIcon,},
    
    data() {
        return {
            heading: 'Recherche',
            subheading: 'Ceci est un exemple de description pour la page de recherche',
            image: 'Logo/Logo bleue marine.png',
        }},
    
}
</script>