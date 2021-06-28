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
        },
        async deleteDetailFromList (listId, item) {
            try {
                const response = await api.put(`list/data/rm/${listId}`, item);
                console.log(response);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async updateDetailFromList (listId, updatedItem) {
            try {
                const response = await api.put(`list/data/${listId}`, {
                    _id: updatedItem._id,
                    text: updatedItem.text
                })
                console.log(response);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        }

    }

}