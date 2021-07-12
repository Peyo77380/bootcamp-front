import api from "@/services/axios";

export const questions = {
    methods: {
        async getAllQuestions() {
            try {
                const response = await api.get('faq');
                return response.data.datas
            } catch (error) {
                throw new Error(error);         
            }
        },
        async deleteQuestion (id) {
            try {
                const response = await api.delete(`question/${id}`);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async modifyQuestion(quest) {
            try {
                const response = await api.put(`faq/${quest._id}`,quest);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async addQuestion (attr) {
            try {
                const response = await api.post(`faq/`, attr);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        }

    }
}
