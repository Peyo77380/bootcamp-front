import {apiCustomFields} from "@/services/axios";

export const Questions = {
    methods: {
        async getAllQuestions() {
            try {
                const response = await apiCustomFields.get('faq');
                return response.data.datas
            } catch (error) {
                throw new Error(error);         
            }
        },
        async deleteQuestion (id) {
            try {
                const response = await apiCustomFields.delete(`faq/${id}`);
                return {
                    status: 1,
                    datas: response
                };
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async modifyQuestion(quest) {
            try {
                const response = await apiCustomFields.put(`faq/${quest._id}`,quest);
                return {
                    status: 1,
                    datas: response
                };
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async addQuestion (attr) {
            try {
                const response = await apiCustomFields.post(`faq/`, attr);
                return {
                    status: 1,
                    datas: response
                };
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        }

    }
}
