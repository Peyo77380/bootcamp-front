import api from "@/services/axios";

export const Globals = {

    Methods: {

        async getGlobals() {
            try {
                const response = await api.get('global')
                return response.data.datas
            } catch (error) {
                throw new Error(error);         
            }
        }

    }

}














