<template>
    <div>
        <h3 class="drawer-heading">Ma liste de Tâches</h3>
        <div class="row align-items-center col-12">
            <div class="btn-actions-pane-left align-items-center text-capitalize actions-icon-btn col-6">
                <b-form-radio-group 
                buttons
                class="btn-pill btn-outline"
                button-variant="outline-success"
                size="sm"
                v-model="TasksStatus"
                :options="optionsTasks"
                @change="changeStatus()"
                />
            </div>
            
            <div class="btn-actions-pane-right align-items-center text-capitalize actions-icon-btn col-4">
                <button 
                type="button" 
                class="btn mr-2 mb-2 p-2 mt-2 btn-pill btn-icon btn-success "
                @click="addModal"
                >
                    <i class="btn-icon-wrapper lnr-plus-circle"></i>
                    Créer un nouvelle tâche
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
                                                <div :class="getStatus(data)">
                                                    {{ getText(data) }}
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
                                                            class="dropdown-item"
                                                            @click="changeToDo(data)"
                                                        >
                                                            <div class="badge badge-primary ml-2">
                                                                à faire
                                                            </div>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            class="dropdown-item"
                                                            @click="changeToProgress(data)"
                                                        >
                                                            <div class="badge badge-success ml-2">
                                                                en cours
                                                            </div>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            class="dropdown-item"
                                                            @click="changeToOver(data)"
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
        <add-tasks
        :dialog="dialog"
        @closeModal="cancelModal"
        @saveDatas="saveNewDatas"
        :newDatas="newDatas"
        :taskType="taskType"
        :AdminTasks="AdminTasks"
        />
    </div>
</template>
    
<script>
import AddTasks from "@/apps/LC-172/components/AddTasks";
import { Tasks } from "@/mixins/tasks";
import { Lists } from "@/mixins/list";
export default {
    name: 'ToDoList',
    data() {
        return {
            AllTasks: [],
            ActiveTasks: [],
            AdminTasks: [],
            statusValue: "",
            class:"",
            dialog: false, 
            newDatas: {},
            editedIndex: -1,
            optionsTasks: [
                {text: 'Tâches actives', value: '1'},
                {text: 'Tâches archivées', value: '0'},
            ],
            TasksStatus: "1",
            statusArray: [{
                    value: "0",
                    text: "terminé",
                    badge : "ml-2 badge badge-danger"
                },
                {
                    value: "1",
                    text: "en cours",
                    badge : "ml-2 badge badge-success"
                },
                {
                    value: "2",
                    text: "à faire",
                    badge : "ml-2 badge badge-primary"
                }
            ],
            taskType: [], 
            taskAdmin: [],  
        }   
    }, 
    mixins: [Tasks, Lists],
    async mounted() {
        await this.loadTasksActive();
        await this.loadTasksType();
        await this.loadTasksAdmin();
    },

    components: {
        AddTasks
    },
   
    methods: {
        // Edit status badge (by Pierre Skippy le Dieu des GOUROUS)
        getStatus(data) {
            const flag = this.statusArray.find(element => element.value == data.status)
            return flag.badge  
        },
        //Edit status text 
        getText(data)  {
            const flag = this.statusArray.find(element => element.value == data.status)
            return flag.text  
        },     

        //Open Modal Add Commercial Action
        addModal() {
            this.dialog = true
        },
        //Close Add modal
        cancelModal() {
            this.dialog = false;
            //this.newDatas = {}
        },
        // Save Action commercial add and modification
        async saveNewDatas() {
            if (this.editedIndex>=0) {
                await this.updateTasks(this.newDatas.id, this.newDatas);
                this.editedIndex=-1;
                this.$sweetNotif("Modification réussie !");
                this.AllTasks = await this.getActiveTasks();
                this.cancelModal();
                this.newDatas = {};
            }
            else {
                //API point for create new task
                await this.createTasks(this.newDatas); 
                this.AllTasks = await this.getActiveTasks();
                this.$sweetNotif("Création nouvelle tâche réussie !");
                this.cancelModal();
                this.newDatas = {}
            }
        },
        async editAction(data) {
            // API point for get task by id 
            this.addModal();
            await this.getTask(data); 
            // console.log("test data", data);
            this.editedIndex = this.AllTasks.indexOf(data);
            this.newDatas = data
        },
        async deleteAction(data) {
            // action of delete task 
            await this.deleteTask(data);
        },
        async confirmDeleteAction(data) {
            if (
                await this.$sweetConfirmation({
                    value: data.title
                })
            )
            this.deleteAction(data);
            this.loadTasksActive();
            this.loadArchivedTasks()
        },
        async changeToDo(data) {
            // commande to change status to 'à faire'
            data.status = 1
            await this.updateTasks(data.id, data);
            this.AllTasks = await this.getActiveTasks();
            this.$sweetNotif("Modification réussie !");
            this.TasksStatus= "1" 
        },
        async changeToProgress(data) {
            // commande to change status to 'en cours'
            data.status = 2;
            await this.updateTasks(data.id, data);
            this.AllTasks = await this.getActiveTasks();
            this.$sweetNotif("Modification réussie !");
            this.TasksStatus= "1" 
        },
        async changeToOver(data) {
            // commande to change status to 'terminé'
            data.status = 0;
            await this.updateTasks(data.id, data);
            this.AllTasks = await this.getActiveTasks();
            this.$sweetNotif("Modification réussie !");
        },
        async loadTasksActive() {
            // API to load all active tasks 
            try {
                this.AllTasks = await this.getActiveTasks();
            } catch (error) {
                this.$sweetError("TDL-30");
            }
        },
        async loadArchivedTasks() {
            // API to load all archived tasks 
            try {
                await this.getArchiveTasks()
            } catch (error) {
                this.$sweetError("TDL-32");
            }
        },
        async changeStatus() {
            // methods to switch with active task and archive task 
            if(this.TasksStatus == 1) {
                await this.loadTasksActive()
            } else {
                this.AllTasks = await this.getArchiveTasks()
            }
        },
        async loadTasksType () {
            // load all task Type ms-custom-fiels
            const types = await this.getListDetails("60f8272d4182535f215a9bd8");
            this.taskType = types.datas.data.datas.datas;
    
        },
        async loadTasksAdmin () {
            // load all task Admin ms-crm
            this.AdminTasks = await this.getTasksAdmin();
           
        },
    }, 
}
</script>