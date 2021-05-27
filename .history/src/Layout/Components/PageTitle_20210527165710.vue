<template>
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i :class="icon"/>
                </div>
                <div>
                    {{heading}}
                    <div
                        class="page-title-subheading">
                        {{subheading}}
                    </div>
                </div>
            </div>
            <div class="row mb-3">
      <b-button
        variant="btn btn-warning btn-lg col-2"
        :to="{ name: 'AddMembers' }"
      >
        ajouter un membre
      </b-button>
    </div>
        </div>
    </div>
</template>

<script>
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
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
        props: {
            icon: String,
            heading: String,
            subheading: String,

        }
    }
</script>
