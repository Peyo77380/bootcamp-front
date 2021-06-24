import api from "@/services/axios";

export const Globals = {

    Methods: {

        async getGlobals() {
            try {
                const response = await api.get('email')
            } catch (error) {
                
            }
        }

    }

}














