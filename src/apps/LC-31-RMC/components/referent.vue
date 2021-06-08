<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <b-form-group
                        id="input-group-1"
                        label="Adresse email:"
                        label-for="input-1"
                    >
                        <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            placeholder="Entrez l'email"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-2"
                        label="Nom:"
                        label-for="input-2"
                    >
                        <b-form-input
                            id="input-2"
                            v-model="form.name"
                            placeholder="Entrez le nom"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-3"
                        label="Prenom:"
                        label-for="input-3"
                    >
                        <b-form-input
                            id="input-3"
                            v-model="form.prenom"
                            placeholder="Entrez le prenom"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-4"
                        label="Téléphone:"
                        label-for="input-4"
                    >
                        <b-form-input
                            id="input-4"
                            v-model="form.telephone"
                            placeholder="Entrez le numero de téléphone"
                            required
                        ></b-form-input>
                    </b-form-group>
                </div>
            </div>
<div class="row justify-content-end">
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
</div>
        </b-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: "",
                name: "",
                prenom: "",
                telephone: "",
            },
            show: true
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.email = "";
            this.form.name = "";
            this.form.prenom = "";
            this.form.telephone = "";
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        }
    }
};
</script>
