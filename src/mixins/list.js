import {apiCustomFields} from '@/services/axios';

export const Lists = {

    methods: {
        async getAllLists(wl=1,lang="fr_FR") {
            try {
                const response = await apiCustomFields.get(`list/${wl}/${lang}`)
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
        async getListByWLLangKey(key, wl=1,lang="fr_FR") {
            try {
                const response = await apiCustomFields.get(`list/key/${wl}/${lang}/${key}`)
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
                const response = await apiCustomFields.get(`list/${id}`);
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
                const response = await apiCustomFields.put(`list/data/rm/${listId}`, item);
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
                const response = await apiCustomFields.put(`list/data/${listId}`, {
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
                const response = await apiCustomFields.post(`list/data/${listId}`, newItem);
                return response;
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        }

    }

}
