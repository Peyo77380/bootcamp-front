import api from "@/services/axios";

export const Emails = {
    methods: {
        async getAllEmails() {
            try {
                // send section, wl, lang dynamically
                const response = await api.get('email/2/fr_FR');
                return response.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async modifyEmail(updatedEmail) {
            try {
                console.log("je suis dans le service modifyEmail")
                console.log(updatedEmail)
                const putResponse = await api.put(`email/${updatedEmail._id}`, updatedEmail);
                putResponse.data.json;
            } catch (error) {
                throw new Error(error);
            }
        }
    }
}