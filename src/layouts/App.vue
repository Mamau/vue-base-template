<template>
    <v-app>
        <v-content>
            <transition
                name="slide-fade"
                mode="out-in"
            >
                <router-view></router-view>
            </transition>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            //
        };
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
}
</style>
