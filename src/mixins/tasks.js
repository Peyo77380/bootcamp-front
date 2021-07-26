import {api_ms_crm}  from "@/services/axios";

export const Tasks = {
    methods: {
        
        async getActiveTasks() {
            try {
                // load all active tasks 
                const response = await api_ms_crm.get('tasks/active');
                //console.log(response)
                return response.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async getArchiveTasks() {
            try {
                // load all archive tasks 
                const response = await api_ms_crm.get('tasks/archived');
                return response.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async getCountTasks() {
            try {
                // load count of activ tasks 
                const response = await api_ms_crm.get('tasks/countActives');
                return response.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async createTasks(data) {
            try {
                // create new task
                const postResponse = await api_ms_crm.post('tasks/add', data);
                return postResponse.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async updateTasks(id, data) {
            try {
                // update task
                const putResponse = await api_ms_crm.put(`tasks/update/${id}`, data);
                //console.log("test id", id)
                return putResponse.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async getTask(data) {
            try {
                // get task by id 
                const getResponse = await api_ms_crm.get(`tasks/${data.id}`, data);
                return getResponse.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async deleteTask(data) {
            try {
                // delete task by id 
                const deleteResponse = await api_ms_crm.delete(`tasks/delete/${data.id}`, data);
                return deleteResponse.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        }, 
    }
}
