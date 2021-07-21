import api from "@/services/axios";

export const vatRates = {
    methods: {
        async getVatRates() {
            try {
                const response = await api.get('vatRate/all/1');
                return response.data.datas
            } catch (error) {
                throw new Error(error);         
            }
        },
        async deleteVatRate (id) {
            try {
                const response = await api.delete(`vatRate/${id}`);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async modifyVatRate (rate) {
            try {
                const response = await api.put(`vatRate/${rate._id}`,rate);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async addVatRate (rate) {
            try {
                const response = await api.post(`vatRate/`, rate);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        }

    }
}