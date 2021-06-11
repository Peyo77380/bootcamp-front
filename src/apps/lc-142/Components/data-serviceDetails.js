export const serviceDetailsData = [
    {
        "id": 1,
        "title": "Service 1: Coworking",
        "description": "Description du service 1 avec rappels des informations, tarifs sélectionné par le commercial",
        "photo": "coworking",
        "isSelected": true,
    },
    {
        "id": 2,
        "title": "Service 2: Location de bureaux",
        "description": "Description du service 2 avec rappels des informations, tarifs sélectionné par le commercial",
        "photo": "location-bureau",
        "isSelected": false,
    },
    {
        "id": 3,
        "title": "Service 3: Location de salles de réunions",
        "description": "Description du service 3 avec rappels des informations, tarifs sélectionné par le commercial",
        "photo": "salle-reunion",
        "isSelected": true,
    },
    {
        "id": 4,
        "title": "Service 4: Organisation de séminaires",
        "description": "Description du service 4 avec rappels des informations, tarifs sélectionné par le commercial",
        "photo": "seminaire",
        "isSelected": false,
    },
    {
        "id": 5,
        "title": "Service 5: Salle de sieste",
        "description": "Description du service 5 avec rappels des informations, tarifs sélectionné par le commercial",
        "photo": "sieste",
        "isSelected": true,
    },
    {
        "id": 6,
        "title": "Service 6: Petit déjeuné",
        "description": "Description du service 6 avec rappels des informations, tarifs sélectionné par le commercial",
        "photo": "petit-dej",
        "isSelected": false,
    }
];





// partie a revoir
// ensuite tu vas faire une boucle for à l'intérieur de ta première boucle for de ton data-model
export const dataModel = [
    {
         "id": 1,
         "photoList": [
              {
                   "photo_id": 1,
                   "url": "url-photo-1",
                   "titre": "titre de la photo 1"
              },
              {
                   "photo_id": 2,
                   "url2": "url-photo-2",
                   "titre2": "titre de la photo 2"
              }
         ]
    },
    {
         "id": 2,
         "photoList": [
              {
                   "photo_id": 1,
                   "url1": "url-photo-1",
                   "titre1": "titre de la photo 1"
              },
              {
                   "photo_id": 2,
                   "url2": "url-photo-2",
                   "titre2": "titre de la photo 2"
              }
         ]
    },
    ];