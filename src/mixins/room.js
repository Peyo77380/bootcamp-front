import { apiRoomServices } from '@/services/axios';

export const Rooms = {

    methods: {
        async getAllRooms() {
            try {
                const response = await apiRoomServices.get('room')
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
                const response = await apiRoomServices.delete(`room/${id}`);
                console.log(response);
                return {
                    status: 1,
                }
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async getRoom(id) {
            try {
                const response = await apiRoomServices.get(`room/${id}`);
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
        async updateRoom(id, datas) {
            try {
                const response = await apiRoomServices.put(`room/${id}`, datas);
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
        async createRoom(datas) {
            try {
                const response = await apiRoomServices.post("room", datas);
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
    }
}