import api from "@/services/axios";

export const attributes = {
    methods: {
        async getAttributes() {
            try {
                const response = await api.get('attribute/1/fr_FR');
                return response.data.datas
            } catch (error) {
                throw new Error(error);         
            }
        },
        async deleteAttribute (id) {
            try {
                const response = await api.delete(`attribute/${id}`);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async modifyAttribute(attr) {
            try {
                const response = await api.put(`attribute/${attr._id}`,attr);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async addAttribute (attr) {
            try {
                const response = await api.post(`attribute/`, attr);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        }

    }
}
