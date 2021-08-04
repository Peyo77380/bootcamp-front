import { api_ms_room } from "@/services/axios";
export const ProductServices = {
    methods: {
        async getAllProductServices() {
            try {
                const response = await api_ms_room.get("service");
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
                const response = await api_ms_room.get(`service/${id}`);
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
                const response = await api_ms_room.delete(`service/${id}`);
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
                const response = await api_ms_room.put(
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
                // 1 pas d'image => 1 seul appel => service sans image
                // 2 une image => 1 appel d'api sur service si ok => recupérer l'_id si pas ok tu vas dans le catch
                //                2 => si OK appel point d'api dédié à la gestion de l'image avec l'_id récupérer du précédent appel api
                const response = await api_ms_room.post(`service`, newItem);
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
