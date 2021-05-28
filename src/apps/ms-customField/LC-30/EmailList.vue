<template>   
    <div class="main-card mb-3 card col-12">
        <div class="table-responsive">
            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                <tr>
                    <th class="text-center">Clé</th>
                    <th class="text-center">Titre</th>
                    <th class="text-center">Modifié il y a</th>
                    <th class="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="email in EmailData" :key="email.id">
                    <td class="text-center text-muted">{{ email.key }}</td>
                    <td class="text-center">{{ email.title }}</td>
                    <td class="text-center">{{ email.updateDate }}</td>
                    <td class="text-center">
                        <div>
                            <b-button 
                            class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" 
                            variant="outline-primary"
                            id="viewBouton"
                            @click="displayEmail"><i class="pe-7s-search btn-icon-wrapper">  
                            </i>
                            </b-button>
                            <b-button 
                            class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" 
                            variant="outline-warning"
                            id="editBouton"><i class="pe-7s-pen btn-icon-wrapper">
                            </i>
                            </b-button>
                            <b-popover 
                                target="editBouton"
                                placement="bottomleft"
                                triggers="hover focus"
                                content="Modifier">
                            </b-popover>  
                            <b-popover 
                                target="viewBouton"
                                placement="bottomleft"
                                triggers="hover focus"
                                content="Consulter">
                            </b-popover>  
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            isActive: true,
        }
    },
    props: {
        EmailData: {
            type: Array
        }
    }, 
     methods: {
         displayEmail() {
             this.$emit("displayEmail")

         }
    //     deleteAction(data) {
    //         console.log(data),
    //         this.$emit("deleteAction", data)
    //     },
    //     getStatus(status) {
    //         //console.log(status);
    //         switch (status) {
    //             case "en cours":
    //                 return {
    //                     "badge badge-warning":true
    //                 };
    //             break;    
    //             case "valide":
    //                 return {
    //                     "badge badge-success":true
    //                 };
    //             break;        
    //         }
    //     },
    //     editAction(data) {
    //         this.$emit("editAction", data)
    //     }
     } 
}
</script> 