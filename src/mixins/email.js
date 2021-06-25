import api from "@/services/axios";

export const Emails = {
    methods: {
        async getAllEmails() {
            try {
                // send wl, section, lang dynamically
                const response = await api.get('email/1/2/fr_FR');
                console.log(response.data.datas)
                return response.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        }
    }
}