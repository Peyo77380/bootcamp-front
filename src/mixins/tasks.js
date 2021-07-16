import api from "@/services/axios";

export const Tasks = {
    methods: {
        async getAllTasks() {
            try {
                // send section, wl, lang dynamically
                const response = await api.get('tasks');
                return response.data.datas;
                
            } catch (error) {
                throw new Error(error);
            }
        },
        async createTasks(data) {
            try {
                // create new task
                const postResponse = await api.post('tasks/add', data);
                return postResponse.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async updateTasks(id, data) {
            try {
                // update task
                const putResponse = await api.put(`tasks/update/${id}`, data);
                console.log("test id", id)
                //return putResponse.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async getTask(data) {
            try {
                // get task by id 
                const getResponse = await api.get(`tasks/${data.id}`, data);
                return getResponse.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async deleteTask(data) {
            try {
                // delete task by id 
                const deleteResponse = await api.delete(`tasks/delete/${data.id}`, data);
                //console.log ("test id", deleteResponse)
                return deleteResponse.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
    }
}
