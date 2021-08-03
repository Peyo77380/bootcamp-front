import { apiCustomFields } from '@/services/axios';

export const Images = {

    methods: {
        async storeImage (data, relatedEntityId, relatedEntityType) {
            const formData = new FormData();

            formData.append('file', data.file);
            formData.append('details', JSON.stringify({
                ...data,
                relatedEntityId,
                relatedEntityType
            })); 

            try {
                const response = await apiCustomFields.post(`image`, formData);
                return {
                    status: 1,
                    response
                }
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        }

    }

}