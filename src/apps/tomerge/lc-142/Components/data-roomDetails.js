// TODO : create dedicated list on mscustomfields
export const Types = [
    { value: null, text: "Choisir un type", disabled: true },
    { value: "0", text: "Bureau" },
    { value: "1", text: "Open space" },
    { value: "2", text: "Conférence" },
    { value: "3", text: "Salle de réunion" },
    { value: "4", text: "Bureau partagé" }
];

// TODO : create dedicated list on mscustomfields
export const Floors = [
    { value: null, text: "Choisir un niveau", disabled: true },
    { value: "0", text: "Rez-de-chaussé" },
    { value: "1", text: "1er étage" },
    { value: "2", text: "2e  étage" },
    { value: "3", text: "3e  étage" }
];

export const Bookables = [{ value: "0", text: "Indisponible" }];

export const TypeBookings = [
    { value: "0", text: "Utilisateurs" },
    { value: "1", text: "Évènement" }
];

export const MinRentalDurations = [
    { value: null, text: "Choisir une durée", disabled: true },
    { value: "0", text: "1 heure" },
    { value: "1", text: "2 heures" },
    { value: "2", text: "1/2 journée" },
    { value: "3", text: "1 journée" }
];
