<template>
    <div>
        <h3 class="drawer-heading">Mes actions commerciales</h3>
        <div class="card-header-tab card-header">
            <div class="btn-actions-pane-right text-capitalize actions-icon-btn">
                <button type="button" class="btn mr-2 mb-2 p-2 mt-2 btn-pill btn-icon btn-success ">
                    <i class="btn-icon-wrapper lnr-plus-circle"></i> Ajouter une nouvelle Action
                </button>
            </div>
        </div>
        <div class="todo-box">
            <ul class="todo-list-wrapper list-group list-group-flush">
                <li class="list-group-item"
                v-for="data in commercialData" :key="data.id"
                >
                    <v-expansion-panel>
                        <v-expansion-panel-content hide-actions>
                                <template v-slot:header>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left">
                                                <div> 
                                                    <span class="widget-heading">{{ data.name }}</span>
                                                    <div :class="getStatus(data.status)">
                                                        {{ data.status }}
                                                    </div>
                                                    <b-dropdown
                                                        toggle-class="btn-icon btn-icon-only"
                                                        variant="link"
                                                        left
                                                    >
                                                        <span slot="button-content"></span>
                                                        <div>
                                                            <button
                                                                type="button"
                                                                tabindex="0"
                                                                class="dropdown-item"
                                                            >
                                                                <div class="badge badge-primary ml-2">
                                                                    a faire
                                                                </div>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                tabindex="0"
                                                                class="dropdown-item"
                                                            >
                                                                <div class="badge badge-success ml-2">
                                                                    en cours
                                                                </div>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                tabindex="0"
                                                                class="dropdown-item"
                                                            >
                                                                <div class="badge badge-danger ml-2">
                                                                    terminé
                                                                </div>
                                                            </button>
                                                            <div
                                                                tabindex="-1"
                                                                class="dropdown-divider"
                                                            ></div>
                                                            <div class="p-1 ml-4">
                                                                <button
                                                                    type="button"
                                                                    class="mr-2 btn-shadow btn-sm btn btn-warning"
                                                                >
                                                                    Supprimer
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </b-dropdown>
                                                </div>
                                                <div class="widget-subheading">
                                                    <i>{{ data.action }}</i>
                                                </div> 
                                            </div>
                                            <div class="widget-content-right">
                                                <button type="button" class="btn mb-2 mr-2 btn-icon btn-icon-only btn-pill btn-primary">
                                                    <i class="lnr-pencil btn-icon-wrapper"></i>  
                                                </button>
                                                <!-- <button type="button" class=" btn mb-2 mr-2 btn-icon btn-icon-only btn-pill btn-warning">
                                                    <i class="lnr-trash btn-icon-wrapper"></i>  
                                                </button> -->
                                            </div>
                                        </div>
                                    </div>
                                </template>  
                                <v-card>  
                                    <v-card-text>
                                        <div class="widget-content p-0">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left">
                                                    <div class="widget-subheading"><i>Détails: {{ data.detail }}</i></div><br>
                                                    <div class="widget-heading">Résponsable: {{ data.responsable }}</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="widget-subheading"><i>Échéance: {{ data.date }}</i></div>
                                                </div>    
                                            </div>
                                        </div>
                                    </v-card-text>          
                                </v-card>  
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </li>
            </ul>
        </div>
    </div>
</template>
    
<script>
import { commercialData } from "@/apps/LC-172/commercialData";
export default {
    data() {
        return {
            commercialData: commercialData,
            status: {
                start: "à faire",
                progress: "en cours",
                end: "terminé", 
            } 
        }  
    }, 
    methods: {
        getStatus(status) {
            switch (status) {
                case this.status.progress:
                    return {
                        "ml-2 badge badge-success": true
                    };
                break;    
                case this.status.end:
                    return {
                        "ml-2 badge badge-danger": true
                    };
                break; 
                case this.status.start:
                    return {
                        "ml-2 badge badge-primary": true
                    };
                break;        
            }
        },

    }
}
</script>