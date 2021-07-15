<template>
    <div>
        <h3 class="drawer-heading">Ma liste de Tâches</h3>
        <div class="card-header-tab card-header">
            <div class="btn-actions-pane-right text-capitalize actions-icon-btn">
                <button 
                type="button" 
                class="btn mr-2 mb-2 p-2 mt-2 btn-pill btn-icon btn-success "
                @click="addModal"
                >
                    <i class="btn-icon-wrapper lnr-plus-circle"></i>
                    Nouvelle tâche
                </button>
            </div>
        </div>
        <div class="todo-box">
            <ul class="todo-list-wrapper list-group list-group-flush">
                <li class="list-group-item"
                v-for="data in AllTasks" 
                :key="data._id"
                >
                    <v-expansion-panel>
                        <v-expansion-panel-content hide-actions>
                            <template v-slot:header>
                                <div class="widget-content p-0">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div> 
                                                <span class="widget-heading">{{ data.title }}</span>
                                                <div :class="getStatus(data.status)">
                                                    {{ data.status }}
                                                </div>
                                                <b-dropdown
                                                    toggle-class="btn-icon btn-icon-only"
                                                    variant="link"
                                                    text="Left align"
                                                    toggle
                                                >
                                                    <span slot="button-content"></span>
                                                    <div>
                                                        <button
                                                            type="button"
                                                            tabindex="0"
                                                            class="dropdown-item"
                                                            @click="changeToDo(data)"
                                                        >
                                                            <div class="badge badge-primary ml-2">
                                                                à faire
                                                            </div>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            tabindex="0"
                                                            class="dropdown-item"
                                                            @click="changeProgress(data)"
                                                        >
                                                            <div class="badge badge-success ml-2">
                                                                en cours
                                                            </div>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            tabindex="0"
                                                            class="dropdown-item"
                                                            @click="changeOver(data)"
                                                        >
                                                            <div class="badge badge-danger ml-2">
                                                                terminé
                                                            </div>
                                                        </button>
                                                        <div
                                                            class="dropdown-divider"
                                                        ></div>
                                                        <div class="p-1 ml-4">
                                                            <button
                                                                type="button"
                                                                class="mr-2 btn-shadow btn-sm btn btn-warning"
                                                                @click="confirmDeleteAction(data)"
                                                            >
                                                                Supprimer
                                                            </button>
                                                        </div>
                                                    </div>
                                                </b-dropdown>
                                            </div>
                                            <div class="widget-subheading">
                                                <i>{{ data.type }}</i>
                                            </div> 
                                        </div>
                                        <div class="widget-content-right">
                                            <button 
                                            type="button" 
                                            class="btn mb-2 mr-2 btn-icon btn-icon-only btn-pill btn-primary"
                                            @click="editAction(data)"
                                            >
                                                <i class="lnr-pencil btn-icon-wrapper"></i>  
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </template>  
                            <v-card>  
                                <v-card-text>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left">
                                                <div class="widget-subheading"><i>Détails: {{ data.content }}</i></div><br>
                                                <div class="widget-heading">Résponsable: {{ data.admin_id}}</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <div class="widget-subheading"><i>Échéance: {{ data.end_date }}</i></div>
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
        <action-commercial-add
        :dialog="dialog"
        @closeModal="cancelModal"
        @saveDatas="saveNewDatas"
        :newDatas="newDatas"
        />
    </div>
</template>
    
<script>
import { commercialData } from "@/apps/LC-172/commercialData";
import ActionCommercialAdd from "@/apps/LC-172/components/ActionCommercialAdd";
import { Tasks } from "@/mixins/tasks";
export default {
    name: 'ToDoListe',
    data() {
        return {
            AllTasks: [],
            status: {
                start: "à faire",
                progress: "en cours",
                end: "terminé", 
            },
            dialog: false, 
            newDatas: {},
            editedIndex: -1
        }  
    }, 
    mixins: [Tasks],
    async mounted() {
        await this.loadAllTasks()
    },
    
    components: {
        ActionCommercialAdd
    },

    methods: {
        getStatus(status) {
            //selection of type of flage
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
        //Open Modal Add Commercial Action
        addModal() {
            this.dialog = true
        },
        //Close Add modal
        cancelModal() {
            this.dialog = false
        },
        // Save Action commercial add and modification
        async saveNewDatas() {
            //console.log(this.newDatas);
            if (this.editedIndex>=0) {
                const data = this.AllTasks.filter(updatedTask => updatedTask.id == this.newDatas.id);
                //console.log("test id", dat)
                console.log("test data", data)
                //await this.updateTasks(data.id, data);
                
                this.editedIndex=-1;
                this.$sweetNotif("Modification réussie !");
                this.AllTasks = await this.getAllTasks();
                this.cancelModal();
                this.newDatas = {};
            }
            else {
                await this.createTasks(this.newDatas); 
                this.AllTasks = await this.getAllTasks();
                this.$sweetNotif("Création nouvelle tâche réussie !");
                this.cancelModal();
                this.newDatas = {}
            }
        },
        async editAction(data) {
            this.addModal();
            await this.getTask(data); 
            this.editedIndex = this.AllTasks.indexOf(data);
            this.newDatas = data
        },
        deleteAction(data) {
            this.editedIndex = this.AllTasks.indexOf(data);
            this.AllTasks.splice(this.editedIndex,1)
          //TODO point API pour supprimer action commerciale
        },
        async confirmDeleteAction(data) {
            if (
                await this.$sweetConfirmation({
                    value: data.name
                })
            )
            this.deleteAction(data)
        },
        changeToDo(data) {
            //console.log (data); 
            data.status = "à faire";
            //TODO point API pour mettre status a 'a faire'
        },
        changeProgress(data) {
            data.status = "en cours";
            //TODO point API pour mettre status a 'en cours'
        },
        changeOver(data) {
             data.status = "terminé";
             //TODO point API pour mettre status a 'terminé'
        },
        async loadAllTasks() {
            try {
                this.AllTasks = await this.getAllTasks();
            } catch (error) {
                this.$sweetError("TDL-30");
            }
        },
    }, 
    computed: {
        
    }
}
</script>