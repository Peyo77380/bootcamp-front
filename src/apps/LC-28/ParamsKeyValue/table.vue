<template>
<div class="main-card mb-3 card">
            <div class="card-header" style="display:flex; justify-content:space-between">
                <div >
                    <b-form-group horizontal  class="mb-0">
            <b-input-group>
              <b-form-select v-model="sortDirection">
                <option value="asc">Modes de règlement</option>
                <option value="asc">Membres</option>
                <option value="desc">Édition de contenu</option>
                <option value="last">Salles de réunion</option>
                <option value="last">Réglages</option>
              </b-form-select>
            </b-input-group>
          </b-form-group>
                </div>
                
                <div>
                    <b-form-group horizontal class="mb-0">
                        <b-input-group>
                        <b-form-input v-model="filter" placeholder="Recherche" />
                        <b-input-group-append>
                            <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
                        </b-input-group-append>
                        </b-input-group>
                     </b-form-group> 
                </div>
            </div>
    <div class="table-responsive">
                <table class="align-middle text-truncate mb-0 table table-borderless table-hover">
                    <thead>
                    <tr>
                        
                        <th class="text-center">Catégorie</th>
                        <th class="text-center">Clé</th>
                       
                       <th class="text-center">Valeur</th> 
                        <th class="text-center">Actions</th>
                    </tr>
                    </thead>
                    
                    <tbody v-for="item in items" :key="item.id">
                  
                    <tr>
                        
                        <div style="margin-left:20px;" class="mb-2 mr-2 badge badge-pill badge-info"><td class="text-center "> {{item.category}}</td></div>
                        <td class="text-center">{{item.key}}</td>
                        
                        <td class="text-center">{{item.value}} </td>
                       
                        
                        <td class="text-center">
                            <div role="group" class="btn-group-sm btn-group">
                                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-warning"><i class="pe-7s-search btn-icon-wrapper"> </i></b-button>
                           
                            </div>
                            <div role="group" class="btn-group-sm btn-group" >
                                <modal></modal>
                                 
                                 
                                
                            </div>
                            
                        </td>
                    </tr>
                    </tbody>
                    
                    
                    
                </table>
            </div>
</div>
</template>

<script>
import modal from "./modal.vue"


    export default{
        components:{
            modal,
            
        },
        data: () => ({
                items: [
        { category: 'édition de contenu', key: 'COWORKING_BOOK_INFO', value: "La colloc met à disposition de ses membres qui sont dans l'incapacité de faire du ...", info:'lorem ipsum' },
        { category: 'modes de règlement', key: 'PENDING', value: '01009017', info:'lorem ipsum' },
        { category: 'salles de réunion', key: 'REFUND_DEPOSIT_PERCENT', value: '30', info:'lorem ipsum' },
        { category: 'réglages', key: 'COWORKING_NUMBER', value: '10', info:'lorem ipsum' },
        
      ],
                    
    })
    }

</script>