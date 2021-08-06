import { apiRoomServices } from '@/services/axios';

export const Buildings = {

    methods: {
        async getAllBuildings() {
            try {
                const response = await apiRoomServices.get('building')
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
                const response = await apiRoomServices.get(`building/${id}`);
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
                const response = await apiRoomServices.post('building', data);
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
                await apiRoomServices.delete(`building/${id}`);
                return {
                    status: 1,
                    datas: "Successfully deleted"
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
                const response = await apiRoomServices.post(`building/${id}`, data);
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
        }

    }
}
