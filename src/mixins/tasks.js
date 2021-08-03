import {apiCRM}  from "@/services/axios";

export const Tasks = {
    methods: {
        
        async getActiveTasks() {
            try {
                // load all active tasks 
                const response = await apiCRM.get('tasks/active');
                return response.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async getArchiveTasks() {
            try {
                // load all archive tasks 
                const response = await apiCRM.get('tasks/archived');
                return response.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async getCountTasks() {
            try {
                // load count of activ tasks 
                const response = await apiCRM.get('tasks/countActives');
                return response.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async createTasks(data) {
            try {
                // create new task
                const postResponse = await apiCRM.post('tasks/add', data);
                return postResponse.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async updateTasks(id, data) {
            try {
                // update task
                const putResponse = await apiCRM.put(`tasks/update/${id}`, data);
                return putResponse.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async getTask(data) {
            try {
                // get task by id 
                const getResponse = await apiCRM.get(`tasks/${data.id}`, data);
                return getResponse.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async deleteTask(data) {
            try {
                // delete task by id 
                const deleteResponse = await apiCRM.delete(`tasks/delete/${data.id}`, data);
                return deleteResponse.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        }, 
        async getTasksAdmin() {
            try {
                // load all task user 
                const userResponse = await apiCRM.get(`user/admin`);
                return userResponse.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        }, 
    }
}
