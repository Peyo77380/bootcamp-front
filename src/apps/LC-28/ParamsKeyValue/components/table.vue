<template>
<div>
    <modal :items="keyValueEdit" @close2="closeModalEdit" :dialog2="dialog2"></modal>
     <modal-detail :items="keyValueDetails" @close="closeModal" :dialog="dialog"></modal-detail>
<div class="row">
            <div class="col-md-3 col-xl-2" style="margin-left:90px">
                <div class="card mb-3 widget-content bg-alternate">
                    <div class="widget-content-wrapper text-white">
                        <div class="widget-content-left">
                            <div class="widget-heading">Modes de règlement</div>
                            
                        </div>
                        <div class="widget-content-right">
                             <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="light"><i class="pe-7s-glasses btn-icon-wrapper"> </i></b-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-xl-2">
                <div class="card mb-3 widget-content bg-warning">
                    <div class="widget-content-wrapper text-white">
                        <div class="widget-content-left">
                            <div class="widget-heading">Membres</div>
                            
                        </div>
                        <div class="widget-content-right">
                             <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="light"><i class="pe-7s-glasses btn-icon-wrapper"> </i></b-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-xl-2">
                <div class="card mb-3 widget-content bg-success">
                    <div class="widget-content-wrapper text-white">
                        <div class="widget-content-left">
                            <div class="widget-heading">Édition de contenu</div>
                            
                        </div>
                        <div class="widget-content-right">
                             <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="light"><i class="pe-7s-glasses btn-icon-wrapper"> </i></b-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-xl-2">
                <div class="card mb-3 widget-content bg-danger">
                    <div class="widget-content-wrapper text-white">
                        <div class="widget-content-left">
                            <div class="widget-heading">Salles de réunion</div>
                    
                        </div>
                        <div class="widget-content-right">
                            <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="light"><i class="pe-7s-glasses btn-icon-wrapper"> </i></b-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-xl-2">
                <div class="card mb-3 widget-content bg-night-sky">
                    <div class="widget-content-wrapper text-white">
                        <div class="widget-content-left">
                            <div class="widget-heading">Réglages</div>
                        
                        </div>
                        <div class="widget-content-right">
                             <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="light"><i class="pe-7s-glasses btn-icon-wrapper"> </i></b-button>
                        </div>
                    </div>
                </div>
            </div>
</div>
<div class="main-card mb-3 card">
            
    <div class="table-responsive">
                <table class="align-middle mb-0 table table-striped table-borderless table-hover">
                    <thead>
                    <tr>
                        
                        <th class="text-center">Catégorie</th>
                        <th class="text-center">Clé</th>
                       
                       <th class="text-center">Valeur</th> 
                        <th class="text-center">Actions</th>
                    </tr>
                    </thead>
                  
                    <tbody >
                  
                    <tr v-for="item in items" :key="item.id">
                        
                        <div style="display: flex;justify-content: center; align-items: center; margin-top : 10px; margin-left:30px" class="swatch-holder swatch-holder-md" :class=item.classcategory>
                         
                            <td class="text-center" style="font-weight :bold; color:white; opacity: .9; font-size : 11px"> 
                                {{item.initial}}
                            </td>
                        </div>
                        <td class="text-center">{{item.key}}</td>
                        
                        <td class="text-center">{{item.value}} </td>
                       
                        
                        <td class="text-center">
                            <div role="group" class="btn-group-sm btn-group">
                                <v-btn class=" outlined-search btn-pill"
                        @click="showDetails(item)"
                        elevation="2"
                        icon
                        outlined
                        small
                        ><i class="pe-7s-search icon-color-search btn-icon-wrapper"> </i></v-btn>
                               
                            </div>
                            <div role="group" class="btn-group-sm btn-group" >
                                <v-btn class="outlined btn-pill" 
                                elevation="2" 
                                @click="showEdit(item)"  
                                icon 
                                outlined 
                                small ><i class="pe-7s-tools icon-color btn-icon-wrapper"> </i></v-btn>
                                
               
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
import modal from "./modal.vue"
import modalDetail from "./modal_detail"




    export default{
        components:{
            modal,
            modalDetail,
            
                
    },
        data ()  {
            return{
        items: [
        { category: 'Édition de contenu', key: 'COWORKING_BOOK_INFO', value: "La colloc met à disposition de ses membres qui sont dans l'incapacité de faire du ...", info:'lorem ipsum', classcategory:'bg-success', initial:'ÉC' },
        { category: 'Modes de règlement', key: 'PENDING', value: '01009017', info:'lorem ipsum', classcategory:'bg-alternate', initial:'MR' },
        { category: 'Salles de réunion', key: 'REFUND_DEPOSIT_PERCENT', value: '30', info:'lorem ipsum', classcategory:'bg-danger', initial:'SR' },
        { category: 'Réglages', key: 'COWORKING_NUMBER', value: '10', info:'lorem ipsum', classcategory:'bg-night-sky', initial:'R' },
        { category: 'Membres', key: 'WELCOME_CREDITS', value: '10', info:'Nombre de co offerts lors du premier abonnement à la Colloc', classcategory:'bg-warning', initial:'M' },
        { category: 'Modes de règlement', key: 'SEPA', value: '01009011', info:'lorem ipsum', classcategory:'bg-alternate', initial:'MR' },
        { category: 'Salles de réunion', key: 'MEETINGROOM_BOOKING_HOUR_START', value: '08:00:00', info:'Heure minimum de début de location des salles de réunion', classcategory:'bg-danger', initial:'SR' },
        { category: 'Membres', key: 'FREETIME', value: '4', info:"Nombre d'heures de location de salle", classcategory:'bg-warning', initial:'M' }
      ],
         dialog: false,
         dialog2: false,
         keyValueDetails: {},
         keyValueEdit: {},
    }
    }
    ,
    
    methods: {
      closeModalEdit(){
          this.dialog2 = false
      },
      closeModal() {
        this.dialog = false;
      },
      showEdit(item){
        this.dialog2 = true;
        this.keyValueEdit = item;
      },
      showDetails(item) {
        this.dialog = true;
        this.keyValueDetails = item;
        },
    }
}

</script>

