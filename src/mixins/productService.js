import {api_ms_room} from '@/services/axios';

export const ProductServices = {

    methods: {
        async getAllProductServices() {
            try {
                const response = await api_ms_room.get('service')
                return {
                    status: 1,
                    datas: response
                }
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async getProductServiceDetails (id) {
            try {
                const response = await api_ms_room.get(`service/${id}`);
                return {
                    status: 1,
                    datas: response
                }
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async deleteProductService (id) {
            try {
                const response = await api_ms_room.delete(`service/${id}`);
                return response;
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async modifyProductService (id, updatedItem) {
            try {
                const response = await api_ms_room.put(`service/${id}`, updatedItem)
                return response;
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async addProductService (newItem) {
            try {
                const response = await api_ms_room.post(`service`, newItem);
                return response;
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        }

    }

}
