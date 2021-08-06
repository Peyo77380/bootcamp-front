import {api} from '@/services/axios';

export const Images = {

    methods: {
        async getImage(id) {
            try {
                const response = await api.get(`image/${id}`);
                return {
                    status: 1,
                    datas: response
                }
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async storeImage (data, relatedEntityId) {
            const formData = new FormData();
            formData.append('file', data.file);
            formData.append('details', JSON.stringify({
                ...data,
                relatedEntityId
            })); 
            try {
                const response = await api.post(`image`, formData);
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
