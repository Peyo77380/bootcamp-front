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
                        
                        <td class="text-center"><div class="badge badge-pill pl-2 pr-2" style="color:white;" :class=item.classtype >{{item.type}}</div> </td>
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
        { nom: 'Surface', identifiant: 'surface', type: "Champs texte", options:'Lorem ipsum ', classtype:'bg-info'},
        { nom: 'Période de renouvellement', identifiant: 'period', type: "Un seul choix", options:['lorem ipsum','lorem ipsum'], classtype:'bg-secondary'},
        { nom: 'Étage', identifiant: 'level', type: "Liste de sélection", options:['sous-sol','rez de chaussée'], classtype:'bg-alternate'},
        { nom: 'Date de renouvellement', identifiant: 'renewall', type: "Un seul choix", options:['lorem ipsum','lorem ipsum'], classtype:'bg-secondary'},
        
        { nom: 'Tarif demi journée membre', identifiant: 'price_member_halfday', type: "Champs texte", options:'Lorem ipsum', classtype:'bg-info'},
       
        
        
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

