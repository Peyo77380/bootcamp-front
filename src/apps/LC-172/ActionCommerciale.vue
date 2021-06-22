<template>
<div>
    <h3 class="drawer-heading">Mes actions commerciales</h3>
    <div class="todo-box col-12">
        <ul class="todo-list-wrapper list-group list-group-flush">
            <li class="list-group-item">
                <v-expansion-panels accordion>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <div class="todo-indicator bg-warning"></div>
                            <div class="widget-content p-0">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                        <div class="widget-heading"> Architecture07-Architecture dplg
                                            <div class="badge badge-danger ml-2">En cours</div>
                                        </div>
                                        <div class="widget-subheading"><i>Rappel téléphonique</i></div>
                                    </div>
                                    <div class="widget-content-right">
                                        <button type="button" class="btn mb-2 mr-2 btn-icon btn-icon-only btn-pill btn-primary">
                                            <i class="lnr-pencil btn-icon-wrapper"></i>  
                                        </button>
                                        <button type="button" class=" btn mb-2 mr-2 btn-icon btn-icon-only btn-pill btn-warning">
                                            <i class="lnr-trash btn-icon-wrapper"></i>  
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </v-expansion-panel-header>  
                        <v-expansion-panel-content>         
                            <div class="widget-subheading"><i>Rappel téléphonique</i></div>
                        </v-expansion-panel-content>  
                    </v-expansion-panel>
                </v-expansion-panels>
            </li>
            <li class="list-group-item">
                <div class="todo-indicator bg-focus"></div>
                <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-2">
                            <div class="custom-checkbox custom-control">
                                <input type="checkbox" id="exampleCustomCheckbox1666" class="custom-control-input">
                                <label class="custom-control-label" for="exampleCustomCheckbox1666">&nbsp;</label></div>
                        </div>
                        <div class="widget-content-left">
                            <div class="widget-heading">Task with hover dropdown menu</div>
                            <div class="widget-subheading">
                                <div>By Johnny
                                    <div class="badge badge-pill badge-info ml-2">NEW</div>
                                </div>
                            </div>
                        </div>
                        <div class="widget-content-right widget-content-actions">
                            <div class="d-inline-block">
                                <b-dropdown toggle-class="btn-icon btn-icon-only border-0 btn-transition" variant="link" no-caret>
                                    <span slot="button-content"><font-awesome-icon icon="ellipsis-h" /></span>
                                    <div>
                                        <button type="button" disabled="" tabindex="-1" class="disabled dropdown-item">Action</button>
                                        <button type="button" tabindex="0" class="dropdown-item">Another Action</button>
                                        <div tabindex="-1" class="dropdown-divider"></div>
                                        <button type="button" tabindex="0" class="dropdown-item">Another Action</button>
                                    </div>
                                </b-dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="todo-indicator bg-primary"></div>
                <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-2">
                            <div class="custom-checkbox custom-control">
                                <input type="checkbox" id="exampleCustomCheckbox4777" class="custom-control-input">
                                <label class="custom-control-label" for="exampleCustomCheckbox4777">&nbsp;</label></div>
                        </div>
                        <div class="widget-content-left flex2">
                            <div class="widget-heading">Badge on the right task</div>
                            <div class="widget-subheading">This task has show on hover actions!</div>
                        </div>
                        <div class="widget-content-right widget-content-actions">
                            <button class="border-0 btn-transition btn btn-outline-success">
                                <font-awesome-icon icon="check" />
                            </button>
                        </div>
                        <div class="widget-content-right ml-3">
                            <div class="badge badge-pill badge-success">Latest Task</div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="todo-indicator bg-info"></div>
                <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-2">
                            <div class="custom-checkbox custom-control">
                                <input type="checkbox" id="exampleCustomCheckbox2444" class="custom-control-input">
                                <label class="custom-control-label" for="exampleCustomCheckbox2444">&nbsp;</label></div>
                        </div>
                        <div class="widget-content-left mr-3">
                            <div class="widget-content-left"><img width="42" class="rounded" src="@/assets/images/avatars/1.jpg" alt=""/></div>
                        </div>
                        <div class="widget-content-left">
                            <div class="widget-heading">Go grocery shopping</div>
                            <div class="widget-subheading">A short description ...</div>
                        </div>
                        <div class="widget-content-right widget-content-actions">
                            <button class="border-0 btn-transition btn btn-sm btn-outline-success">
                                <font-awesome-icon icon="check" />
                            </button>
                            <button class="border-0 btn-transition btn btn-sm btn-outline-danger">
                                <font-awesome-icon icon="trash-alt" />
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="todo-indicator bg-success"></div>
                <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-2">
                            <div class="custom-checkbox custom-control">
                                <input type="checkbox" id="exampleCustomCheckbox3222" class="custom-control-input">
                                <label class="custom-control-label" for="exampleCustomCheckbox3222">&nbsp;</label></div>
                        </div>
                        <div class="widget-content-left flex2">
                            <div class="widget-heading">Development Task</div>
                            <div class="widget-subheading">Finish React ToDo List App</div>
                        </div>
                        <div class="widget-content-right">
                            <div class="badge badge-warning mr-2">69</div>
                        </div>
                        <div class="widget-content-right">
                            <button class="border-0 btn-transition btn btn-outline-success">
                                <font-awesome-icon icon="check" />
                            </button>
                            <button class="border-0 btn-transition btn btn-outline-danger">
                                <font-awesome-icon icon="trash-alt" />
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>

</div>
    
</template>
    
<script>
export default {
    
}
</script>