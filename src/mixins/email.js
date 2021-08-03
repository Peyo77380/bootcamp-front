import { apiCustomFields } from "@/services/axios";

export const Emails = {
    methods: {
        async getAllEmails() {
            try {
                // send section, wl, lang dynamically
                const response = await apiCustomFields.get("email/2/fr_FR");
                return response.data.datas;
            } catch (error) {
                throw new Error(error);
            }
        },
        async modifyEmail(updatedEmail) {
            try {
                const putResponse = await apiCustomFields.put(
                    `email/${updatedEmail._id}`,
                    updatedEmail
                );
                putResponse.data.json;
            } catch (error) {
                throw new Error(error);
            }
        }
    }
};
