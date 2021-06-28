import api from '@/services/axios';

export const Globals = {

    methods: {

        async getGlobals() {
            try {
                const response = await api.get('list/1/1/fr_FR')
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
        async getListDetails (id) {
            console.log('list details', id);
            try {
                const response = await api.get(`list/${id}`);
                return {
                    status: 1,
                    datas: response.data.datas.datas
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