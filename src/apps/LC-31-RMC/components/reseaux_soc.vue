<template>
    <v-form v-model="valid">
        <v-container>
            <div class="row justify-content-center">
                <div class="col-md-5 bg-light">
                    <v-text-field
                        label="Site internet"
                        hint="www.example.com/page"
                        persistent-hint
                    ></v-text-field>

                    <v-text-field
                        label="Linkedin"
                        hint="https://www.linkedin.com/page"
                        persistent-hint
                    ></v-text-field>

                    <v-text-field
                        label="Twiter"
                        hint="https://twitter.com//page"
                        persistent-hint
                    ></v-text-field>

                    <v-text-field
                        label="Facebook"
                        hint="https://www.facebook.com//page"
                        persistent-hint
                    ></v-text-field>

                    <v-text-field
                        label="Instagram"
                        hint="https://www.instagram.com//page"
                        persistent-hint
                    ></v-text-field>
                </div>
            </div>
        </v-container>

        <div class="row justify-content-end">
            <v-btn @click="clear">clear</v-btn>
            <v-btn @click="submit" color="success">Valider</v-btn>
        </div>
    </v-form>
</template>

<script></script>
