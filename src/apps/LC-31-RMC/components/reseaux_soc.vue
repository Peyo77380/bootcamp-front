<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <b-form-group
                        id="input-group-1"
                        label="Site internet:"
                        description="https://www.example.com/page"
                        label-for="input-1"
                    >
                        <b-form-input
                            id="input-1"
                            v-model="form.siteinternet"
                            type="url"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-2"
                        label="Linkedin:"
                        description="https://www.linkedin.com/page"
                        label-for="input-2"
                    >
                        <b-form-input
                            id="input-2"
                            v-model="form.linkedin"
                            type="url"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-3"
                        label="Twitter:"
                        description="https://twitter.com//page"
                        label-for="input-3"
                    >
                        <b-form-input
                            id="input-3"
                            v-model="form.twitter"
                            type="url"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-4"
                        label="Facebook:"
                        description="https://www.facebook.com//page"
                        label-for="input-4"
                    >
                        <b-form-input
                            id="input-4"
                            v-model="form.facebook"
                            type="url"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-5"
                        label="Instagram:"
                        description="https://www.instagram.com//page"
                        label-for="input-5"
                    >
                        <b-form-input
                            id="input-5"
                            v-model="form.instagram"
                            type="url"
                        ></b-form-input>
                    </b-form-group>
                </div>
            </div>
            <div class="row justify-content-end">
                <b-button
                    class="mb-2 mr-2"
                    size="sm"
                    type="reset"
                    variant="danger"
                    >Clear</b-button
                >
                <b-button
                    class="mb-2 mr-2"
                    size="sm"
                    type="submit"
                    variant="success"
                    >Valider</b-button
                >
            </div>
        </b-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                siteinternet: "",
                linkedin: "",
                twitter: "",
                facebook: "",
                instagram: ""
            },
            type: "url",
            show: true
        };
    },
    methods: {
        onSubmit() {
            this.$sweetNotif("Enregistré avec suces");
            // event.preventDefault();
            // alert(JSON.stringify(this.form));
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.siteinternet = "";
            this.form.linkedin = "";
            this.form.twitter = "";
            this.form.facebook = "";
            this.form.instagram = "";

            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        }
    }
};
</script>
