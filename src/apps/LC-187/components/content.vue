<template>
<div>
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i :class="icon"/>
                </div>
                <div>
                    {{heading}}
                    <div
                        class="page-title-subheading">
                        {{subheading}}
                    </div>
                </div>
            </div>
            <div class="page-title-actions" style="margin-bottom: 10px;">
            <button style="margin-right: 15px"
                @click="showNewBookingModal"
                type="button"
                class="btn-shadow d-inline-flex align-items-center btn btn-success"
            >
                <font-awesome-icon class="mr-2" icon="plus" />
                Ajouter une réservation
            </button>
            </div>
            
        </div>
        
    </div>
    <b-card class="main-card mb-3">
      <full-calendar :options="calendarOptions" :events="bookings">
      </full-calendar>
    </b-card>
    <add-modal-booking
        :closeAddModalBooking="closeModalNewBooking"
        :isAddModeBooking="isAddBooking"
        :handleAddBooking="handleAddBooking"
    ></add-modal-booking>
    </div>
    

</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faStar,
        faPlus
    } from '@fortawesome/free-solid-svg-icons'
    import { bookings } from "@/mixins/bookings";
    import { FullCalendar } from 'vue-full-calendar'
    import frLocale from "fullcalendar/dist/locale/fr";
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
    import AddModalBooking from './newBookingModal.vue';
    import { eventSources } from './test.js';
    library.add(
        faStar,
        faPlus,
    );
export default {
    
    components:{
        FullCalendar,
        AddModalBooking,
        'font-awesome-icon': FontAwesomeIcon,    
    },
    mixins: [bookings],
    async mounted() {
        this.bookings = eventSources;
        // await this.loadBookings();
    },


    data: () => ({
        
        isAddBooking:false,
        calendarOptions: {
          locale:frLocale,
          eventColor:'#000'
        },
        heading: 'Calendrier',
        subheading: 'Le calendrier des réservations',
        icon: 'pe-7s-date icon-gradient bg-warm-flame',
        
        bookings: [],
        }),
        
        methods:{
            closeModalNewBooking() {
            this.isAddBooking = false;
            
        },
        showNewBookingModal() {
            this.isAddBooking = true;
            
        },
        getEventColor (booking) {
        
        },

        async handleAddBooking(booking) {
                    try {
                        const res = await this.addBooking(booking);
                        this.loadBookings();
                    } catch (error) {
                        console.error(error);
                    }
                },


        async loadBookings() {
            try {
                this.bookings = await this.getAllBookings();
                // this.booking.forEach(element => {
                //     element.title = element.room.name
                // });
              
            } catch (error) {
                this.$sweetError("GPA-98");
            }
        }
        },



}
</script>
