import api from '@/services/axios';

export const Buildings = {

    methods: {
        async getAllBuildings() {
            try {
                const response = await api.get('building')
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
        async getBuildingById(id) {
            try {
                const response = await api.get(`building/${id}`);
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
        async storeBuilding (data) {
            // TODO : add validation
            try {
                const response = await api.post('building', data);
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
        async deleteBuilding (id) {
            try {
                const response = await api.delete(`building/${id}`);
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
        async updateBuilding (id, data) {
            // TODO : add validation
            try {
                const response = await api.put(`building/${id}`, data);
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
