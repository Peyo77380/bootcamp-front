<template>
<div>
    <div class="page-title-actions" style="margin-bottom: 10px;">
        <button @click="showNewAttributModal" type="button"  class="btn-shadow d-inline-flex align-items-center btn btn-success">
            <font-awesome-icon class="mr-2" icon="plus"/>
            Ajouter un nouvel attribut
        </button>
    </div>
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
                <tbody>
                    <tr  v-for="item in items" :key="item.id">
                        <td class="text-center">{{item.nom}}</td>
                        <td class="text-center">{{item.identifiant}}</td>
                        
                        <td class="text-center"><div class="badge badge-pill pl-2 pr-2" style="color:white;" :class=item.classtype >{{item.type}}</div> </td>
                       <td class="text-center">{{item.options}} </td>
                        
                        <td class="text-center">
                                <div role="group" class="btn-group-xl">
                                    <b-button
                                        class="mb-2 mr-2  btn-pill btn-shadow"
                                        variant="primary"
                                        id="popover1"
                                        @click="showEditModal(item)"
                                    >
                                        <i class="lnr-pencil"></i>
                                    </b-button>
                                    <b-popover
                                        :target="'popover1'"
                                        placement="bottomleft"
                                        triggers="hover focus"
                                    ></b-popover>
                                    <b-button
                                        class="mb-2 mr-2 btn-icon btn-pill btn-shadow"
                                        variant="danger"
                                        id="popover2"
                                        @click="remove(item.id)"
                                        ><i class="pe-7s-trash"> </i
                                    ></b-button>
                                    <b-popover
                                        :target="'popover2'"
                                        placement="bottom"
                                        triggers="hover focus"
                                    ></b-popover>
                                </div>
                            </td>
                    </tr>
                    </tbody>
                </table>
            </div>
</div>
<modal @close2="closeModalNew" :dialog2="dialog2"></modal>
<edit-modal @close="closeModalEdit" :items="keyValueEdit" :dialog="dialog"></edit-modal>
</div>

</template>

<script>

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import modal from './newAttributModal.vue'
    import EditModal from './editModal.vue'

    export default{

        components:{
        'font-awesome-icon': FontAwesomeIcon,
        modal,
        EditModal,
    },
        data ()  {
            return{
                
        items: [
        { id: 1, nom: 'Surface', identifiant: 'surface', type: "Champs texte", options:'Lorem ipsum ', classtype:'bg-info'},
        { id: 2, nom: 'Période de renouvellement', identifiant: 'period', type: "Un seul choix", options:['lorem ipsum','lorem ipsum'], classtype:'bg-secondary'},
        { id: 3, nom: 'Étage', identifiant: 'level', type: "Liste de sélection", options:['sous-sol','rez de chaussée'], classtype:'bg-alternate'},
        { id: 4, nom: 'Date de renouvellement', identifiant: 'renewall', type: "Un seul choix", options:['lorem ipsum','lorem ipsum'], classtype:'bg-secondary'},
        
        { id: 5, nom: 'Tarif demi journée membre', identifiant: 'price_member_halfday', type: "Champs texte", options:'Lorem ipsum', classtype:'bg-info'},
       
        
        
      ],
      
        
         dialog2: false,
         dialog:false,
        
         keyValueEdit: {},
         
       
    }
    },
   
    
    methods: {
      closeModalNew(){
          this.dialog2 = false;
      },
      closeModalEdit(){
          this.dialog=false;
      },
      showNewAttributModal(){
        this.dialog2 = true;
        
        
      },
      showEditModal(item){
        this.dialog=true;
        this.keyValueEdit = item;
      },

      async remove(Id) {
      // sweet alert sur la suppression
      
        this.items = this.items.filter(
          (item) => item.id !== Id
        );
      
      
    },

      

    }
}

</script>

