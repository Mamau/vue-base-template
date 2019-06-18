<template>
    <transition name="fade-trob">
        <div
            v-if="show"
            class="image-wrapper">
            <v-progress-circular
                :size="sizeTrobber"
                :width="5"
                class="progress"
                color="purple"
                indeterminate
            ></v-progress-circular>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        size: {
            type: Number,
            default: 100
        }
    },
    data() {
        return {
            show: false,
            blocked: false
        };
    },
    computed: {
        sizeTrobber() {
            return this.size;
        }
    },
    methods: {
        start() {
            if (!this.blocked) {
                this.show = true;
            }
        },
        finish(delay = 500) {
            setTimeout(() => {
                this.show = false;
            }, delay);
        }
    }
};
</script>
<style
    lang="scss"
    scoped>
.progress {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 45%;
}

.image-wrapper {
    z-index: 9999;
    position: fixed;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, .4);
    height: 100%;
    top: 0;
    transition: .3s;
    img {
        display: block;
        margin: 0 auto;
        position: relative;
        top: 30%;
    }
}

.fade-trob-enter-active, .fade-trob-leave-active, .fade-trob-enter-active, .fade-trob-leave-active {
    transition: opacity .4s ease;
}

.fade-trob-enter, .fade-trob-leave-to, .fade-trob-enter, .fade-trob-leave-to {
    opacity: 0;
}
</style>
