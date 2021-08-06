import { apiRoomServices } from "@/services/axios";
export const ProductServices = {
    methods: {
        async getAllProductServices() {
            try {
                const response = await apiRoomServices.get("service");
                return {
                    status: 1,
                    datas: response
                };
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        },
        async getProductServiceDetails(id) {
            try {
                const response = await apiRoomServices.get(`service/${id}`);
                return {
                    status: 1,
                    datas: response
                };
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        },
        async deleteProductService(id) {
            try {
                const response = await apiRoomServices.delete(`service/${id}`);
                return response;
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        },
        async modifyProductService(id, updatedItem) {
            try {
                const response = await apiRoomServices.put(
                    `service/${id}`,
                    updatedItem
                );
                return response;
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        },
        async addProductService(newItem) {
            try {
                const response = await apiRoomServices.post(`service`, newItem);
                return response;
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        }
    }
};
