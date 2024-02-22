<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
        <div class="brand">
            <p class="text">计日以俟</p>
        </div>
        <div class="separator"></div>
        <div class="nav" ref="nav">
            <RouterLink v-for="link in navLinks" v-bind:key="link" :to="link.path">
                <div class="link" :data-path="link.path">{{ link.text }}</div>
            </RouterLink>
        </div>
    </header>

    <div class="view">
        <RouterView></RouterView>
    </div>

    <div class="splash" ref="splash">
        <p>献给勇敢面对生活的你。</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navLinks: [{
                text: "计时",
                path: "/"
            }, {
                text: "关于",
                path: "/about"
            }]
        };
    },
    mounted() {
        let splash = this.$refs.splash;
        let splash_p = splash.querySelector("p");
        setTimeout(() => {
            splash_p.style.opacity = "1";
        }, 1000);
        setTimeout(() => {
            splash.style.opacity = "0";
        }, 4000);
        setTimeout(() => {
            splash.remove();
        }, 5000);
    },
    watch: {
        $route(to) {
            for (let dom of this.$refs.nav.getElementsByClassName("link")) {
                dom.classList[
                    dom.getAttribute("data-path") == to.path ? "add" : "remove"
                ]("active");
            }
        }
    }
};
</script>

<style>
/* global */
@import url("@/assets/css/global.css");
</style>

<style scoped>
@import url("@/assets/css/App/style.css");
@import url("@/assets/css/App/mobile.css") screen and (max-width: 600px);
</style>