import { apiCustomFields, mediaHost } from "@/services/axios";

export const Images = {
    methods: {
        async storeImage(data, relatedEntityId) {
            const formData = new FormData();

            formData.append("file", data.file);
            formData.append(
                "details",
                JSON.stringify({
                    ...data,
                    relatedEntityId
                })
            );

            try {
                const response = await apiCustomFields.post(`image`, formData);
                return {
                    status: 1,
                    response
                };
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        },

        async getImageByRelatedEntityAndWL(
            relatedEntityId,
            relatedEntityType,
            WL
        ) {
            try {
                const response = await apiCustomFields.get(
                    `image/${WL}/${relatedEntityType}/${relatedEntityId}`
                );
                return response;
            } catch (error) {
                return {
                    status: 0,
                    error
                };
            }
        },

        getMediaHost() {
            return mediaHost;
        }
    }
};
