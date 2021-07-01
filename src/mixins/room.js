import api from '@/services/axios';

export const Rooms = {

    methods: {
        async getAllRooms() {
            try {
                const response = await api.get('room')
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
        async deleteRoom(id) {
            try {
                const response = await api.delete(`room/${id}`);
                console.log(response);
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
        // Thomas
        async getRoom(id) {
            try {
                const response = await api.get(`room/view/${id}`);
                console.log(response);
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
        }
        // Fin Thomas
    }
}