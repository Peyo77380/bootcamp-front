import { apiRoomServices } from '@/services/axios';

export const Services = {

    methods: {
        async getAllServices() {
            try {
                const response = await apiRoomServices.get('service');
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
                const response = await apiRoomServices.get(`service/${id}`);
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
                const response = await apiRoomServices.post(`service`, data);
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
                await apiRoomServices.delete(`service/${id}`);
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
                const response = await apiRoomServices.put(`service/${id}`, data);
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
