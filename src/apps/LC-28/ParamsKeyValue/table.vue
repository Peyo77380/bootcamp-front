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
                    <tbody>
                    <tr>
                        
                        <td class="text-center"> Édition de contenu</td>
                        <td class="text-center">COWORKING_BOOK_INFO</td>
                        
                        <td class="text-center">La colloc met à disposition de ses membres qui sont dans l'incapacité de faire du ... </td>
                       
                        
                        <td class="text-center">
                            <div role="group" class="btn-group-sm btn-group">
                                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-warning"><i class="pe-7s-look btn-icon-wrapper"> </i></b-button>
                           
                            </div>
                            <div role="group" class="btn-group-sm btn-group" >
                                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-primary"><i class="pe-7s-tools  btn-icon-wrapper"> </i></b-button>
                                 
                                 
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                      
                        <td class="text-center"> Modes de règlement </td>
                        <td class="text-center">PENDING</td>
                  
                        <td class="text-center">01009017</td>
                       
                        
                        <td class="text-center">
                            <div role="group" class="btn-group-sm btn-group">
                                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-warning"><i class="pe-7s-look btn-icon-wrapper"> </i></b-button>
                           
                            </div>
                            <div role="group" class="btn-group-sm btn-group" >
                                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-primary"><i class="pe-7s-tools btn-icon-wrapper"> </i></b-button>
                                 
                                 
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        
                        <td class="text-center"> Salles de réunion</td>
                        <td class="text-center">REFUND_DEPOSIT_PERCENT</td>
                        <td class="text-center">30</td>
                       
                        
                        <td class="text-center">
                            <div role="group" class="btn-group-sm btn-group">
                                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-warning"><i class="pe-7s-look btn-icon-wrapper"> </i></b-button>
                           
                            </div>
                            <div role="group" class="btn-group-sm btn-group" >
                                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-primary"><i class="pe-7s-tools btn-icon-wrapper"> </i></b-button>
                                 
                                 
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                      
                        <td class="text-center"> Réglages</td>
                        <td class="text-center">COWORKING_NUMBER</td>
                        <td class="text-center">10 </td>
                       
                        
                        <td class="text-center">
                            <div role="group" class="btn-group-sm btn-group">
                                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-warning"><i class="pe-7s-look btn-icon-wrapper"> </i></b-button>
                           
                            </div>
                            <div role="group" class="btn-group-sm btn-group" >
                                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-primary"><i class="pe-7s-tools btn-icon-wrapper"> </i></b-button>
                            </div>
                            
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
</div>
</template>

<script>
import fullscreen from "./fullscreen.vue"

    export default{
        components:{
            fullscreen,
        },
        data: () => ({
                items: [
                            { title: "Chargée de l'expédition et du stock chez Super chouette SAS", state:'pe-7s-sun', member:'', image:'', createdAt : ''},
                            { title: "Qui veut faire l'affiche du prochain after de la Colloc", state:'pe-7s-sun', member:'', image:'', createdAt : ''},
                            { title: 'Team Vintage Racing Ouest Motorsport - Partenariats / Sponsoring', state:'pe-7s-sun', member:'', image:'', createdAt : ''},
                            { title: "Chargée de l'expédition et du stock chez Super chouette SAS", state:'pe-7s-sun', member:'', image:'', createdAt : ''},
                            { title: 'Team Vintage Racing Ouest Motorsport - Partenariats / Sponsoring', state:'pe-7s-sun', member:'', image:'', createdAt : ''},
                            { title: "Qui veut faire l'affiche du prochain after de la Colloc", state:'pe-7s-sun', member:'', image:'', createdAt : ''},
                            { title: 'Partager locaux entre libéraux', state:'pe-7s-sun', member:'', image:'', createdAt : ''},
                            { title: "Chargée de l'expédition et du stock chez Super chouette SAS", state:'pe-7s-sun', member:'', image:'', createdAt : ''},
                            { title: 'Team Vintage Racing Ouest Motorsport - Partenariats / Sponsoring', state:'pe-7s-sun', member:'', image:'', createdAt : ''},
                            { title: 'Partager locaux entre libéraux', state:'pe-7s-sun', member:'', image:'', createdAt : ''},
                           
                    
                    ],
                    
    })
    }

</script>