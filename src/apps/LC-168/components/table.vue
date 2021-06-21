<template>
<div>
    


<div class="main-card mb-3 card">
            
    <div class="table-responsive">
                <table  class="align-middle mb-0 table table-striped table-borderless table-hover">
                    <thead>
                    <tr>
                        
                        <th class="text-center">Nom</th>
                        <th class="text-center">Identifiant</th>
                       
                       <th class="text-center">Type</th> 
                        <th class="text-center">Options</th>
                        <th class="text-center">Actions</th>
                    </tr>
                    </thead>
                  
                    <tbody >
                  
                    <tr  v-for="item in filteredItems" :key="item.id">
                        <td class="text-center">{{item.nom}}</td>
                        <td class="text-center">{{item.identifiant}}</td>
                        
                        <td class="text-center">{{item.type}} </td>
                       <td class="text-center">{{item.options}} </td>
                        
                        <td class="text-center">
                            <div role="group" class="btn-group-sm">
                              
                                <b-button
                                        class="mb-2 mr-2  btn-pill btn-shadow"
                                        variant="primary"
                                        id="popover2"
                                        @click="showEdit(item)" 
                                    >
                                        <i class="lnr-pencil"></i>
                                    </b-button>
                                    <b-popover
                                    :target="'popover2'"
                                    placement="bottomleft"
                                    
                                    triggers="hover focus"
                                ></b-popover>
                                
                               
                            </div>
                            
                            
                        </td>
                        
                    </tr>
                    </tbody>
                    
                    
                    
                </table>
            </div>
</div>

     
     
</div>

</template>

<script>







    export default{
        components:{
            
            
            
            
                
    },
        data ()  {
            return{
                categories: [
        { label: 'Édition de contenu', color:'bg-success' },
        { label: 'Réglages', color:'bg-night-sky' },
        { label: 'Modes de règlement', color:'bg-alternate' },
        { label: 'Salles de réunion', color:'bg-danger' },
        { label: 'Membres', color: 'bg-warning' },
        
      ],
        items: [
        { nom: 'Édition de contenu', identifiant: 'COWORKING_BOOK_INFO', type: "La colloc met à disposition de ses membres qui sont dans l'incapacité de faire du ...", options: ['lorem ipsum', 'lorem ipsum']},
        { nom: 'Édition de contenu', identifiant: 'COWORKING_BOOK_INFO', type: "La colloc met à disposition de ses membres qui sont dans l'incapacité de faire du ...", options: ['lorem ipsum', 'lorem ipsum']},
        { nom: 'Édition de contenu', identifiant: 'COWORKING_BOOK_INFO', type: "La colloc met à disposition de ses membres qui sont dans l'incapacité de faire du ...", options: ['lorem ipsum', 'lorem ipsum']},
        { nom: 'Édition de contenu', identifiant: 'COWORKING_BOOK_INFO', type: "La colloc met à disposition de ses membres qui sont dans l'incapacité de faire du ...", options: ['lorem ipsum', 'lorem ipsum']},
       { nom: 'Édition de contenu', identifiant: 'COWORKING_BOOK_INFO', type: "La colloc met à disposition de ses membres qui sont dans l'incapacité de faire du ...", options: ['lorem ipsum', 'lorem ipsum']},
        { nom: 'Édition de contenu', identifiant: 'COWORKING_BOOK_INFO', type: "La colloc met à disposition de ses membres qui sont dans l'incapacité de faire du ...", options: ['lorem ipsum', 'lorem ipsum']},
       
      ],
        
         dialog2: false,
        
         keyValueEdit: {},
         selectedCategory: "Toutes les catégories",
         perPage: 3,
         currentPage: 1,
       
    }
    },
    computed: {
		filteredItems: function() {
			var vm = this;
			var category = vm.selectedCategory;
			
            
			if(category === "Toutes les catégories" || category === null) {
				return vm.items;
			} else {
				return vm.items.filter(function(item) {
					return item.category === category;
				});
                
			}
            
            
            
		},
        prows() {
        return this.filteredItems.length
      }
        },
    
    methods: {
      closeModalEdit(){
          this.dialog2 = false
      },
     
      showEdit(item){
        this.dialog2 = true;
        this.keyValueEdit = item;
      },
      
        modificationEmail() {
            //TODO point API modification email de services
            
            var title = "Modification de la clé réussie !";
            this.$sweetNotif(title);
        },

    }
}

</script>

