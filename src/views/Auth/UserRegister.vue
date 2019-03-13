<template>
    <v-container
        fluid
        fill-height>
        <v-layout
            align-center
            justify-center>
            <v-flex
                xs12
                sm8
                md4>
                <v-card class="elevation-12">
                    <v-toolbar
                        dark
                        color="primary">
                        <v-toolbar-title>Register</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-text-field
                            prepend-icon="mail_outline"
                            name="email"
                            label="Email"
                            type="text"></v-text-field>
                        <v-text-field
                            prepend-icon="lock"
                            name="password"
                            label="Password"
                            type="password"></v-text-field>
                        <v-text-field
                            prepend-icon="person"
                            name="name"
                            label="Your name"
                            type="text"></v-text-field>
                        <v-flex
                            text-xs-center
                            class="font-weight-medium"
                        >*If you want register business account
                        </v-flex>
                        <v-text-field
                            prepend-icon="link"
                            name="domain"
                            label="Your domain"
                            type="text"></v-text-field>
                        <v-text-field
                            prepend-icon="notes"
                            name="notes"
                            label="Notes"
                            type="text"></v-text-field>
                        <v-checkbox
                            v-model="agree"
                            color="primary"
                            label="Checkbox"
                        ></v-checkbox>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary">Register</v-btn>
                    </v-card-actions>
                </v-card>
                <v-layout>
                    <v-flex
                        text-xs-center
                        class="register-link"
                    >
                        <router-link :to="{name: 'login'}">Login</router-link>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'UserLogin',
    data() {
        return {
            agree: true
        };
    }
};
</script>

