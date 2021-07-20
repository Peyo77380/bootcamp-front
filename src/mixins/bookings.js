import api from "@/services/axios";

export const bookings = {
    methods: {
        async getAllBookings() {
            try {
                const response = await api.get('booking/full');
                return response.data.datas
            } catch (error) {
                throw new Error(error);         
            }
        },
        async deleteBooking (id) {
            try {
                const response = await api.delete(`booking/${id}`);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async modifyBooking(book) {
            try {
                const response = await api.put(`booking/${book._id}`,book);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        },
        async addBooking (book) {
            try {
                const response = await api.post(`booking/`, book);
            } catch (error) {
                return {
                    status: 0,
                    error
                }
            }
        }

    }
}
