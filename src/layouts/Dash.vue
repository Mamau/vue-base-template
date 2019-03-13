<template>
    <v-app>
        <v-content>
            <h1>Dashboard</h1>
            <HelloWorld/>
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
import HelloWorld from '@/components/HelloWorld';

export default {
    name: 'Dash',
    components: {
        HelloWorld
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
}
</style>
