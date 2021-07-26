import { apiCustomFields } from "@/services/axios";

export const attributes = {
    methods: {
        async getAttributes() {
            try {
                const response = await apiCustomFields.get('attribute/1/fr_FR');
                return response.data.datas
            } catch (error) {
                throw new Error(error);         
            }
        },
        async deleteAttribute (id) {
            try {
                const response = await apiCustomFields.delete(`attribute/${id}`);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async modifyAttribute(attr) {
            try {
                const response = await apiCustomFields.put(`attribute/${attr._id}`,attr);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async addAttribute (attr) {
            try {
                const response = await apiCustomFields.post(`attribute/`, attr);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        }

    }
}
