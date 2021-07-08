import api from '@/services/axios';

export const Buildings = {

    methods: {
        async getAllBuildings() {
            try {
                const response = await api.get('building')
                console.log(response.data.datas);
                return {
                    status: 1,
                    datas: response.data.datas
                }
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
    }
}
