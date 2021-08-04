import { apiCustomFields } from "@/services/axios";

export const vatRates = {
    methods: {
        async getVatRates() {
            try {
                const response = await apiCustomFields.get("vatRate/all/1");
                return response.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async deleteVatRate(id) {
            try {
                const response = await apiCustomFields.delete(`vatRate/${id}`);
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        },
        async modifyVatRate(rate) {
            try {
                const response = await apiCustomFields.put(
                    `vatRate/${rate._id}`,
                    rate
                );
                return {
                    status: 1,
                    data: response
                };
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        },
        async addVatRate(rate) {
            try {
                const response = await apiCustomFields.post(`vatRate/`, rate);
                return {
                    status: 1,
                    data: response
                };
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        }
    }
};
