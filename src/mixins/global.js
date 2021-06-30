import api from "@/services/axios";
import store from "@/store/store";

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
                    store.dispatch("pushParamsGlobal", response.data.datas);
                }
                return store.state.paramsGlobal;
            } catch (error) {
                throw new Error(error);
            }
        }
    }
};
