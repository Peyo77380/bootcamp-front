import { apiCustomFields } from "@/services/axios";

export const payments = {
    methods: {
        async getPayments() {
            try {
                const response = await apiCustomFields.get('payment/all/1');
                return response.data.datas
            } catch (error) {
                throw new Error(error);         
            }
        },
        async deletePayment(id) {
            try {
                const response = await apiCustomFields.delete(`payment/${id}`);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async modifyPayment (payment) {
            try {
                const response = await apiCustomFields.put(`payment/${payment._id}`, payment);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async addPayment(payment) {
            try {
                const response = await api.post(`payment/`, payment);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        }
    }
}