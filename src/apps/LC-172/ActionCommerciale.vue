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
            v-for="action in commercialData" :key="action.id"
            >
                <v-expansion-panel>
                    <v-expansion-panel-content hide-actions>
                            <template v-slot:header>
                                <div class="todo-indicator bg-warning"></div>
                                <div class="widget-content p-0">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading"> {{ action.name }}
                                                <div class="badge badge-danger ml-2">En cours</div>
                                            </div>
                                            <div class="widget-subheading"><i>{{ action.action }}</i></div>
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
                                                <div class="widget-subheading"><i>{{ action.detail }}</i></div><br>
                                                <div class="widget-heading">{{ action.responsable }}</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <div class="widget-subheading"><i>Échéance: {{ action.date }}</i></div>
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
        }  
    }
}
</script>