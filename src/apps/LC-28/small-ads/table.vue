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
                        
                        <th class="text-center">Image</th>
                        <th class="text-center">Titre</th>
                        <th class="text-center">État</th>
                        <th class="text-center">Membre</th>
                        
                       <th class="text-center">Créé le </th>
                       <th class="text-center">Dernière modification </th>
                        <th class="text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        
                        <td class="text-center" style="width: 80px;"><img width="40"  src="@/assets/images/image_smallads/affiche1.jpg" alt=""></td>
                        <td class="text-center">Chargée de l'expédition et du stock chez Super chouette SAS</td>
                        <td class="text-center">
                            <div class="badge badge-pill badge-danger">Expiré</div>
                        </td>
                        <td class="text-center">Christelle Marecaille</td>
                        
                        
                    <td class="text-center">
               
                            15 Dec
                        </td>
                        <td class="text-center">
                
                            28 Dec
                        </td>
                        <td class="text-center">
                            <div role="group" class="btn-group-sm btn-group" >
                                <fullscreen></fullscreen>
                                 
                                 
                                
                            </div>
                            <div role="group" class="btn-group-sm btn-group">
                                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></b-button>
                           
                            </div>
                        </td>
                    </tr>
                    <tr>
                      
                        <td class="text-center" style="width: 80px;">
                            <img width="40"  src="@/assets/images/image_smallads/affiche2.jpg" alt="">
                        </td>
                        <td class="text-center">Partager locaux entre libéraux</td>
                        <td class="text-center">
                            <div class="badge badge-pill badge-success">En ligne</div>
                        </td>
                        <td class="text-center">Louis Mayaud</td>
                        
                        <td class="text-center">
                
                            15 Dec
                        </td>
                       <td class="text-center">
                
                            20 Dec
                        </td>
                        <td class="text-center">
                            <div role="group" class="btn-group-sm btn-group" >
                                 <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-primary"><i class="pe-7s-tools btn-icon-wrapper"> </i></b-button>
                                
                            </div>
                            <div role="group" class="btn-group-sm btn-group">
                                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></b-button>
                           
                            </div>
                        </td>
                    </tr>
                    <tr>
                        
                        <td class="text-center" style="width: 80px;">
                            <img width="40" src="@/assets/images/image_smallads/affiche1.jpg" alt="">
                        </td>
                        <td class="text-center">Qui veut faire l'affiche du prochain after de la Colloc</td>
                        <td class="text-center">
                            <div class="badge badge-pill badge-danger">Expiré</div>
                        </td>
                        <td class="text-center">La Colloc</td>
                        
                        <td class="text-center">
                
                            19 Dec
                        </td>
                        <td class="text-center">
                
                            23 Dec
                        </td>
                        <td class="text-center">
                            <div role="group" class="btn-group-sm btn-group" >
                                 <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-primary"><i class="pe-7s-tools btn-icon-wrapper"> </i></b-button>
                                
                            </div>
                            <div role="group" class="btn-group-sm btn-group">
                                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></b-button>
                           
                            </div>
                        </td>
                    </tr>
                    <tr>
                      
                        <td class="text-center" style="width: 80px;">
                            <img width="40" src="@/assets/images/image_smallads/affiche2.jpg" alt="">
                        </td>
                        <td class="text-center">Team Vintage Racing Ouest Motorsport - Partenariats / Sponsoring</td>
                        <td class="text-center">
                            <div class="badge badge-pill badge-success">En ligne</div>
                        </td>
                        <td class="text-center">Association vintage racing Motorsport</td>
                        <td class="text-center">
                
                            19 Dec
                        </td>
                        <td class="text-center">
                
                            25 Dec
                        </td>
                        <td class="text-center">
                            <div role="group" class="btn-group-sm btn-group" >
                                 <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-primary"><i class="pe-7s-tools btn-icon-wrapper"> </i></b-button>
                                
                            </div>
                            <div role="group" class="btn-group-sm btn-group">
                                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></b-button>
                           
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