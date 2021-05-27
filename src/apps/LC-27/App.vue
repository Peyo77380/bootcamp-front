<template>
  <div>
    
    <div class="app-page-title">
        <Breadcrumb></Breadcrumb>
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                
                <h2>
                    {{heading}}
                    
                </h2>
            </div>
            <div class="page-title-actions">
                
                <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success">
                    <font-awesome-icon class="mr-2" icon="plus"/>
                    Nouvelle fiche
                </button>
            </div>
        </div>
    </div>
    <b-card title="Bootstrap Table Options" class="main-card mb-4">

    
    </b-card>
    
  </div>
</template>

<script>

  import Breadcrumb from "../LC-27/components/Breadcrumb/breadcrumb";

  export default {
    components: {
        Breadcrumb,
    },
    data: () => ({
      heading: 'Recherche',

      fields: [ 'first_name', 'last_name', 'age' ],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
      ],
      striped: false,
      bordered: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false
    }),

    methods: {

    }
  }
</script>