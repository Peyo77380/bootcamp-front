import {api} from '@/services/axios';

export const Lists = {

    methods: {
        async getAllLists(section=1,wl=1,lang="fr_FR") {
            try {
                const response = await api.get(`list/${section}/${wl}/${lang}`)
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
        async getListDetails (id) {
            try {
                const response = await api.get(`list/${id}`);
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
        async deleteDetailFromList (listId, item) {
            try {
                const response = await api.put(`list/data/rm/${listId}`, item);
                return response;
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
                return response;
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async storeDetailToList (listId, newItem) {
            try {
                const response = await api.post(`list/data/${listId}`, newItem);
                return response;
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
    },
}
