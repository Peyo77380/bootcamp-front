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

    }

}