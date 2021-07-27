import {apiCRM} from "@/services/axios";

export const questions = {
    methods: {
        async getAllQuestions() {
            try {
                const response = await apiCRM.get('faq');
                return response.data.datas
            } catch (error) {
                throw new Error(error);         
            }
        },
        async deleteQuestion (id) {
            try {
                const response = await apiCRM.delete(`question/${id}`);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async modifyQuestion(quest) {
            try {
                const response = await apiCRM.put(`faq/${quest._id}`,quest);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async addQuestion (attr) {
            try {
                const response = await apiCRM.post(`faq/`, attr);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        }

    }
}
