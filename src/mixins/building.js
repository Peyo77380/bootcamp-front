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
        async storeBuildingWithImage (data) {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            let formData = new FormData();
            formData.append('body', data);
            formData.append('file', data.file);

            console.log(formData);
            
            apiRoomServices.post('building', formData, config)
                .then(function (response) {
                    currentObj.success = response.data.success;
                    currentObj.filename = "";
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
        },
        async deleteBuilding (id) {
            try {
                await apiRoomServices.delete(`building/${id}`);
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
                const response = await apiRoomServices.post(`building/${id}`, data);
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
