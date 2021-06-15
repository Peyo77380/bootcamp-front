<template>
<div>
    
<div class="row" style="display: flex;justify-content: center; align-items: center;">
            <div class="col-md-3 col-xl-2" v-for="category in categories" :key="category.id" >
                <div :class="category.color" class="card mb-3 widget-content">
                    <div class="widget-content-wrapper text-white">
                        
                        <div class="widget-content-left">
                            <div class="widget-heading">{{category.label}}</div>
                            
                        </div>
                        <div class="widget-content-right">
                             <v-switch
                             color="primary"
                             
                            v-model="selectedCategory"
                            :value='category.label'
                            ></v-switch>
                        </div>
                    </div>
                </div>
            </div>      
</div>
<div class="main-card mb-3 card">
            
    <div class="table-responsive">
                <table  class="align-middle mb-0 table table-striped table-borderless table-hover">
                    <thead>
                    <tr>
                        
                        <th class="text-center">Catégorie</th>
                        <th class="text-center">Clé</th>
                       
                       <th class="text-center">Valeur</th> 
                        <th class="text-center">Actions</th>
                    </tr>
                    </thead>
                  
                    <tbody >
                  
                    <tr  v-for="item in filteredItems" :key="item.id">
                        <div style="display: flex;justify-content: center; align-items: center">
                        <td style="display: flex;justify-content: center; align-items: center" class="swatch-holder swatch-holder-md" :class=item.classcategory>
                         
                            <div class="text-center" style="font-weight :bold; color:white; opacity: .9; font-size : 11px"> 
                                {{item.initial}}
                            </div>
                        </td>
                        </div>
                        <td class="text-center">{{item.key}}</td>
                        
                        <td class="text-center">{{item.value}} </td>
                       
                        
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
<modal @saveModification="modificationEmail" :items="keyValueEdit" @close2="closeModalEdit" :dialog2="dialog2"></modal>
     
     
</div>

</template>

<script>
import modal from "./modal.vue"






    export default{
        components:{
            modal,
            
            
            
                
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
        { category: 'Édition de contenu', key: 'COWORKING_BOOK_INFO', value: "La colloc met à disposition de ses membres qui sont dans l'incapacité de faire du ...", info:'lorem ipsum', classcategory:'bg-success', initial:'ÉC' },
        { category: 'Modes de règlement', key: 'PENDING', value: '01009017', info:'lorem ipsum', classcategory:'bg-alternate', initial:'MR' },
        { category: 'Salles de réunion', key: 'REFUND_DEPOSIT_PERCENT', value: '30', info:'lorem ipsum', classcategory:'bg-danger', initial:'SR' },
        { category: 'Réglages', key: 'COWORKING_NUMBER', value: '10', info:'lorem ipsum', classcategory:'bg-night-sky', initial:'R' },
        { category: 'Membres', key: 'WELCOME_CREDITS', value: '10', info:'Nombre de co offerts lors du premier abonnement à la Colloc', classcategory:'bg-warning', initial:'M' },
        { category: 'Modes de règlement', key: 'SEPA', value: '01009011', info:'lorem ipsum', classcategory:'bg-alternate', initial:'MR' },
        { category: 'Salles de réunion', key: 'MEETINGROOM_BOOKING_HOUR_START', value: '08:00:00', info:'Heure minimum de début de location des salles de réunion', classcategory:'bg-danger', initial:'SR' },
        { category: 'Membres', key: 'FREETIME', value: '4', info:"Nombre d'heures de location de salle", classcategory:'bg-warning', initial:'M' },{ category: 'Édition de contenu', key: 'COWORKING_BOOK_INFO', value: "La colloc met à disposition de ses membres qui sont dans l'incapacité de faire du ...", info:'lorem ipsum', classcategory:'bg-success', initial:'ÉC' },
        { category: 'Modes de règlement', key: 'PENDING', value: '01009017', info:'lorem ipsum', classcategory:'bg-alternate', initial:'MR' },
        { category: 'Salles de réunion', key: 'REFUND_DEPOSIT_PERCENT', value: '30', info:'lorem ipsum', classcategory:'bg-danger', initial:'SR' },
        { category: 'Réglages', key: 'COWORKING_NUMBER', value: '10', info:'lorem ipsum', classcategory:'bg-night-sky', initial:'R' },
        { category: 'Membres', key: 'WELCOME_CREDITS', value: '10', info:'Nombre de co offerts lors du premier abonnement à la Colloc', classcategory:'bg-warning', initial:'M' },
        { category: 'Modes de règlement', key: 'SEPA', value: '01009011', info:'lorem ipsum', classcategory:'bg-alternate', initial:'MR' },
        { category: 'Salles de réunion', key: 'MEETINGROOM_BOOKING_HOUR_START', value: '08:00:00', info:'Heure minimum de début de location des salles de réunion', classcategory:'bg-danger', initial:'SR' },
        { category: 'Membres', key: 'FREETIME', value: '4', info:"Nombre d'heures de location de salle", classcategory:'bg-warning', initial:'M' },{ category: 'Édition de contenu', key: 'COWORKING_BOOK_INFO', value: "La colloc met à disposition de ses membres qui sont dans l'incapacité de faire du ...", info:'lorem ipsum', classcategory:'bg-success', initial:'ÉC' },
        { category: 'Modes de règlement', key: 'PENDING', value: '01009017', info:'lorem ipsum', classcategory:'bg-alternate', initial:'MR' },
        { category: 'Salles de réunion', key: 'REFUND_DEPOSIT_PERCENT', value: '30', info:'lorem ipsum', classcategory:'bg-danger', initial:'SR' },
        { category: 'Réglages', key: 'COWORKING_NUMBER', value: '10', info:'lorem ipsum', classcategory:'bg-night-sky', initial:'R' },
        { category: 'Membres', key: 'WELCOME_CREDITS', value: '10', info:'Nombre de co offerts lors du premier abonnement à la Colloc', classcategory:'bg-warning', initial:'M' },
        { category: 'Modes de règlement', key: 'SEPA', value: '01009011', info:'lorem ipsum', classcategory:'bg-alternate', initial:'MR' },
        { category: 'Salles de réunion', key: 'MEETINGROOM_BOOKING_HOUR_START', value: '08:00:00', info:'Heure minimum de début de location des salles de réunion', classcategory:'bg-danger', initial:'SR' },
        { category: 'Membres', key: 'FREETIME', value: '4', info:"Nombre d'heures de location de salle", classcategory:'bg-warning', initial:'M' }
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

