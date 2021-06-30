import api from "@/services/axios";

export const Parameters = {
    methods: {
        async getAllParameters() {
            try {
                const response = await api.get("parameter/1/FR_fr");
                return response.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async updateParameter(_id, datas) {
            try {
                const response = await api.put(`parameter/${_id}`, datas);
                return response.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        }
    }
};
