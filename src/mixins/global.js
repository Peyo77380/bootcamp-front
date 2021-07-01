import api from "@/services/axios";
import store from "../store/store";

export const Globals = {
    methods: {
        // 1 => Vérifier les valeurs dans le store
        // 2 => si pas de valeur => faire l'appel d'api
        // 3 => mettre les valeurs récupérées du point d'api dans le store
        // 4 => retourner les valeurs du store.

        async getGlobals() {
            try {
                if (store.getters.globalEmpty) {
                    const response = await api.get("global");
                    console.log(response.data.datas)
                    store.dispatch("paramsStore/pushParamsGlobal", response.data.datas);
                }
                console.log(store.state.paramsGlobal)
                return store.state.parameters.paramsGlobal;
            } catch (error) {
                throw new Error(error);
            }
        }
    }
};