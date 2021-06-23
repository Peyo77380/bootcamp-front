export const roomDetailsData = [

    {
        "id": 1,
        "name": "Salle L'atelier",
        "floor": "RDC",
        "roomListPhoto": "atelier",
        "description": "description de la salle 1",
        "building_id": "1",
        "color": "#fff",
        "bookable": "1",
        "typeBooking": "1",
        "surface": "500",
        "minRentalDuration": "2 heures",
        "maxCapacity": "200",

        "openingHours" : ['0', '1', '2', '3', '4', '5', '6'],
        
        "services": ['0', '1', '2', '3']
    },

    {
        "id": 2,
        "name": "Salle Conférence",
        "floor": "RDC",
        "roomListPhoto": "conference",
        "description": "description de la salle 1",
        "building_id": "1",
        "color": "#fff",
        "bookable": "0",
        "typeBooking": "0",
        "surface": "500",
        "minRentalDuration": "2 heures",
        "maxCapacity": "200",

        "openingHours" : ['0', '1', '2', '3', '4', '5', '6'],
        
        "services": ['0', '1', '2', '3']
    },

    {
        "id": 3,
        "name": "Salle Grande jaune",
        "floor": "1er étage",
        "roomListPhoto": "grande-jaune",
        "description": "description de la salle 1",
        "building_id": "1",
        "color": "#fff",
        "bookable": "1",
        "typeBooking": "1",
        "surface": "500",
        "minRentalDuration": "2 heures",
        "maxCapacity": "200",

        "openingHours" : ['0', '1', '2', '3', '4', '5', '6'],
        
        "services": ['0', '1', '2', '3']
    },

    {
        "id": 4,
        "name": "Salle Grande verte",
        "floor": "1er étage",
        "roomListPhoto": "grande-verte",
        "description": "description de la salle 1",
        "building_id": "1",
        "color": "#fff",
        "bookable": "0",
        "typeBooking": "0",
        "surface": "500",
        "minRentalDuration": "2 heures",
        "maxCapacity": "200",

        "openingHours" : ['0', '1', '2', '3', '4', '5', '6'],
        
        "services": ['0', '1', '2', '3']
    },

    {
        "id": 5,
        "name": "Salle Moyenne rouge",
        "floor": "2e étage",
        "roomListPhoto": "moyenne-rouge",
        "description": "description de la salle 1",
        "building_id": "1",
        "color": "#fff",
        "bookable": "1",
        "typeBooking": "1",
        "surface": "500",
        "minRentalDuration": "2 heures",
        "maxCapacity": "200",

        "openingHours" : ['0', '1', '2', '3', '4', '5', '6'],
        
        "services": ['0', '1', '2', '3']
    },

    {
        "id": 6,
        "name": "Salle Petite bleu",
        "floor": "2e étage",
        "roomListPhoto": "petite-bleu",
        "description": "description de la salle 1",
        "building_id": "1",
        "color": "#fff",
        "bookable": "1",
        "typeBooking": "0",
        "surface": "500",
        "minRentalDuration": "2 heures",
        "maxCapacity": "200",

        "openingHours" : ['0', '1', '2', '3', '4', '5', '6'],

        "services": ['0', '1', '2', '3']
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

export const MinRentalDurations = [
    { 'value': '0', 'text': '1 heure' },
    { 'value': '1', 'text': '2 heures' },
    { 'value': '2', 'text': '1/2 journée' },
    { 'value': '3', 'text': '1 journée' }
];