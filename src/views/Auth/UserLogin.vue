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
                        <v-toolbar-title>Login</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                prepend-icon="mail_outline"
                                name="email"
                                label="Email"
                                type="text"></v-text-field>
                            <v-text-field
                                id="password"
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                type="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary">Login</v-btn>
                    </v-card-actions>
                </v-card>
                <v-layout>
                    <v-flex
                        text-xs-center
                        class="register-link"
                    >
                        <router-link :to="{name: 'register'}">Register</router-link>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    name: 'UserLogin'
};
</script>

