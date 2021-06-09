export const roomDetailsData = [

    {
        "id": 1,
        "name": "Salle L'atelier",
        "floor": "RDC",
        "plan": "atelier",
        "description": "description de la salle 1",
        "building_id": "1",
        "bookable": "1",
        "typeBooking": "membres",
        "surface": "500",
        "minRentalDuration": "2 heures",
        "maxCapacity": "200",
        "openingHours" : {
            "day": "0",
            "start": "8",
            "end": "20"
        },
        "color": "#fff",
        "services": [
            "service_1",
            "service_2",
            "service_3"
        ]
    },

    {
        "id": 2,
        "name": "Salle Conférence",
        "floor": "RDC",
        "plan": "conference",
        "building_id": "1",
        "bookable": "1",
        "typeBooking": "membres",
        "surface": "500",
        "minRentalDuration": "2 heures",
        "openingHours" : {
            "day": "0",
            "start": "8",
            "end": "20"
        },
        "color": "#fff",
        "services": [
            "service_1",
            "service_2",
            "service_3"
        ]
    },

    {
        "id": 3,
        "name": "Salle Grande jaune",
        "floor": "1er étage",
        "plan": "grande-jaune",
        "building_id": "1",
        "bookable": "1",
        "typeBooking": "membres",
        "surface": "500",
        "minRentalDuration": "2 heures",
        "openingHours" : {
            "day": "0",
            "start": "8",
            "end": "20"
        },
        "color": "#fff",
        "services": [
            "service_1",
            "service_2",
            "service_3"
        ]
    },

    {
        "id": 4,
        "name": "Salle Grande verte",
        "floor": "1er étage",
        "plan": "grande-verte",
        "building_id": "1",
        "bookable": "1",
        "typeBooking": "membres",
        "surface": "500",
        "minRentalDuration": "2 heures",
        "openingHours" : {
            "day": "0",
            "start": "8",
            "end": "20"
        },
        "color": "#fff",
        "services": [
            "service_1",
            "service_2",
            "service_3"
        ]
    },

    {
        "id": 5,
        "name": "Salle Moyenne rouge",
        "floor": "2e étage",
        "plan": "moyenne-rouge",
        "building_id": "1",
        "bookable": "1",
        "typeBooking": "membres",
        "surface": "500",
        "minRentalDuration": "2 heures",
        "openingHours" : {
            "day": "0",
            "start": "8",
            "end": "20"
        },
        "color": "#fff",
        "services": [
            "service_1",
            "service_2",
            "service_3"
        ]
    },

    {
        "id": 6,
        "name": "Salle Petite bleu",
        "floor": "2e étage",
        "plan": "petite-bleu",
        "building_id": "1",
        "bookable": "1",
        "typeBooking": "membres",
        "surface": "500",
        "minRentalDuration": "2 heures",
        "openingHours" : {
            "day": "0",
            "start": "8",
            "end": "20"
        },
        "color": "#fff",
        "services": [
            "service_1",
            "service_2",
            "service_3"
        ]
    }
];

export const Floors = [
    { 'value': '0', 'text': 'Rez-de-chaussé' },
    { 'value': '1', 'text': '1er étage' },
    { 'value': '2', 'text': '2e  étage' },
    { 'value': '3', 'text': '3e  étage' }
];

export const Bookables = [
    { 'value': '0', 'text': 'Indisponible' },
    { 'value': '1', 'text': 'Réservable' }
];

export const TypeBookings = [
    { 'value': '0', 'text': 'Membre' },
    { 'value': '1', 'text': 'Évènement' }
];

export const Days = [
    { 'value': '1', 'text': 'Lundi' },
    { 'value': '2', 'text': 'Mardi' },
    { 'value': '3', 'text': 'Mercredi' },
    { 'value': '4', 'text': 'Jeudi' },
    { 'value': '5', 'text': 'Vendredi' },
    { 'value': '6', 'text': 'Samedi' },
    { 'value': '0', 'text': 'Dimanche' }
];

export const MinRentalDurations = [
    { 'value': '0', 'text': '1 heure' },
    { 'value': '1', 'text': '2 heures' },
    { 'value': '2', 'text': '1/2 journée' },
    { 'value': '3', 'text': '1 journée' }
];