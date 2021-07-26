export const roomDetailsData = [
    {
        // Room List and wizard 1
        "_id": 1,
        "building_id": "1", // une salle est reliée a un batiment
        "name": "Salle L'atelier",
        "roomListPhoto": "atelier", // wizard 4
        "roomListPlan": "atelier", // wirard 4
        "surface": "100",
        "type": "0",
        "floor": "0",
        "maxCapacity": "10",
        "minRentalDuration": "1",
        "typeBooking": "1",
        "bookable": "0",
        "openingHours" : ['0', '1', '2', '3', '4', '5', '6'],
        
        // wizard 2
        "description": "description de la salle 1",

        // wizard 3
        "services": ['1', '2', '3', '4', '5', '6'],

        // wizard 4
        // roomListPhoto

        // wizard 5
        "prices": ['1', '2'],
        "notes": "notes commerciales",

        // wizard 6
        "meetings": ['1', '2', '3', '4', '5', '6'],
    },
    {
        // Room List and wizard 1
        "_id": 2,
        "building_id": "1", // une salle est reliée a un batiment
        "name": "Salle Conférence",
        "roomListPhoto": "conference", // wizard 4
        "roomListPlan": "conference", // wizard 4
        "surface": "200",
        "type": "1",
        "floor": "0",
        "maxCapacity": "20",
        "minRentalDuration": "4",
        "typeBooking": "1",
        "bookable": "",
        "openingHours" : ['0', '1', '2', '3', '4', '5', '6'],
        
        // wizard 2
        "description": "description de la salle 2",

        // wizard 3
        "services": ['1', '2', '3', '4', '5', '6'],

        // wizard 4
        // roomListPhoto

        // wizard 5
        "prices": ['1', '2'],
        "notes": "notes commerciales",

        // wizard 6
        "meetings": ['1', '2', '3', '4', '5', '6'],
        
    },
    {
        // Room List and wizard 1
        "_id": 3,
        "building_id": "1", // une salle est reliée a un batiment
        "name": "Salle Grande jaune",
        "roomListPhoto": "grande-jaune", // wizard 4
        "roomListPlan": "grande-jaune",
        "surface": "300",
        "type": "2",
        "floor": "1",
        "maxCapacity": "30",
        "minRentalDuration": "2 heures",
        "typeBooking": "1",
        "bookable": "1",
        "openingHours" : ['0', '1', '2', '3', '4', '5', '6'],
        
        // wizard 2
        "description": "description de la salle 3",

        // wizard 3
        "services": ['1', '2', '3', '4', '5', '6'],

        // wizard 4
        // roomListPhoto

        // wizard 5
        "prices": ['1', '2'],
        "notes": "notes commerciales",

        // wizard 6
        "meetings": ['1', '2', '3', '4', '5', '6'],
        
    },
    {
        // Room List and wizard 1
        "_id": 4,
        "building_id": "1",
        "name": "Salle Grande verte",
        "roomListPhoto": "grande-verte",
        "roomListPlan": "grande-verte",
        "surface": "400",
        "type": "3",
        "floor": "1",
        "maxCapacity": "30",
        "minRentalDuration": "2 heures",
        "typeBooking": "1",
        "bookable": "1",
        "openingHours" : ['0', '1', '2', '3', '4', '5', '6'],
        
        // wizard 2
        "description": "description de la salle 4",

        // wizard 3
        "services": ['1', '2', '3', '4', '5', '6'],

        // wizard 4
        // roomListPhoto

        // wizard 5
        "prices": ['1', '2'],
        "notes": "notes commerciales",

        // wizard 6
        "meetings": ['1', '2', '3', '4', '5', '6'],
        
    },
    {
        // Room List and wizard 1
        "_id": 5,
        "building_id": "1",
        "name": "Salle Moyenne rouge",
        "roomListPhoto": "moyenne-rouge",
        "roomListPlan": "moyenne-rouge",
        "surface": "500",
        "type": "4",
        "floor": "2",
        "maxCapacity": "30",
        "minRentalDuration": "2 heures",
        "typeBooking": "1",
        "bookable": "1",
        "openingHours" : ['0', '1', '2', '3', '4', '5', '6'],
        
        // wizard 2
        "description": "description de la salle 5",

        // wizard 3
        "services": ['1', '2', '3', '4', '5', '6'],

        // wizard 4
        // roomListPhoto

        // wizard 5
        "prices": ['1', '2'],
        "notes": "notes commerciales",

        // wizard 6
        "meetings": ['1', '2', '3', '4', '5', '6'],
        
    },
    {
        // Room List and wizard 1
        "_id": 6,
        "building_id": "1",
        "name": "Salle Petite bleu",
        "roomListPhoto": "petite-bleu",
        "roomListPlan": "petite-bleu",
        "surface": "600",
        "type": "3",
        "floor": "2",
        "maxCapacity": "30",
        "minRentalDuration": "2 heures",
        "typeBooking": "1",
        "bookable": "1",
        "openingHours" : ['0', '1', '2', '3', '4', '5', '6'],
        
        // wizard 2
        "description": "description de la salle 6",

        // wizard 3
        "services": ['1', '2', '3', '4', '5', '6'],

        // wizard 4
        // roomListPhoto

        // wizard 5
        "prices": ['1', '2'],
        "notes": "notes commerciales",

        // wizard 6
        "meetings": ['1', '2', '3', '4', '5', '6'],
        
    }
];

export const Types = [
    { 'value': null, 'text': 'Choisir un type', 'disabled': true },
    { 'value': '0', 'text': 'Bureau' },
    { 'value': '1', 'text': 'Open space' },
    { 'value': '2', 'text': 'Conférence' },
    { 'value': '3', 'text': 'Salle de réunion' },
    { 'value': '4', 'text': 'Bureau partagé' }
];

export const Floors = [
    { 'value': null, 'text': 'Choisir un niveau', 'disabled': true },
    { 'value': '0', 'text': 'Rez-de-chaussé' },
    { 'value': '1', 'text': '1er étage' },
    { 'value': '2', 'text': '2e  étage' },
    { 'value': '3', 'text': '3e  étage' }
];

export const Bookables = [
    { 'value': '0', 'text': 'Indisponible' }
];

export const TypeBookings = [
    { 'value': '0', 'text': 'Utilisateurs' },
    { 'value': '1', 'text': 'Évènement' }
];

export const MinRentalDurations = [
    { 'value': null, 'text': 'Choisir une durée', 'disabled': true },
    { 'value': '0', 'text': '1 heure' },
    { 'value': '1', 'text': '2 heures' },
    { 'value': '2', 'text': '1/2 journée' },
    { 'value': '3', 'text': '1 journée' }
];

