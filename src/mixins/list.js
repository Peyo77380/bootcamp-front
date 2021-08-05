import { apiCustomFields } from "@/services/axios";

export const Lists = {
    methods: {
        async getAllLists() {
            try {
                const response = await apiCustomFields.get("list/1/fr_FR");
                return {
                    status: 1,
                    datas: response
                };
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        },
        async getAllByKey(key) {
            try {
                const response = await apiCustomFields.get(`list/key/1/fr_FR/${key}`);
                return {
                    status: 1,
                    datas: response
                };
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        },
        async getListDetails(id) {
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
                };
            }
        },
        async deleteDetailFromList(listId, item) {
            try {
                const response = await apiCustomFields.put(
                    `list/data/rm/${listId}`,
                    item
                );
                return response;
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        },
        async updateDetailFromList(listId, updatedItem) {
            try {
                const response = await apiCustomFields.put(
                    `list/data/${listId}`,
                    {
                        _id: updatedItem._id,
                        text: updatedItem.text
                    }
                );
                return response;
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        },
        async storeDetailToList(listId, newItem) {
            try {
                const response = await apiCustomFields.post(
                    `list/data/${listId}`,
                    newItem
                );
                return response;
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        }
    }
};
