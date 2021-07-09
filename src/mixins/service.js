import api from '@/services/axios';

export const Services = {

    methods: {
        async getAllServices() {
            try {
                const response = await api.get('service');
                return {
                    status: 1,
                    datas: response.data.datas
                }
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async getServicegById(id) {
            try {
                const response = await api.get(`service/${id}`);
                return {
                    status: 1,
                    datas: response.data.datas
                }
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async storeService (data) {
            // TODO : add validation
            try {
                const response = await api.post(`service`, data);
                return {
                    status: 1,
                    datas: response.data.datas
                }
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async deleteService (id) {
            try {
                await api.delete(`service/${id}`);
                return {
                    status: 1,
                    success: "Successfully deleted"
                }
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async updateService (id, data) {
            // TODO : add validation
            try {
                const response = await api.put(`service/${id}`, data);
                return {
                    status: 1,
                    success: response.data.datas
                }
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        }

    }
}
