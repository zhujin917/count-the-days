<script>
export default {
    data: () => ({
        showSplashScreen: !localStorage.getItem("splash_displayed")
    }),
    watch: {
        showSplashScreen(val) {
            if (val) localStorage.removeItem("splash_displayed");
            else localStorage.setItem("splash_displayed", "1");
        }
    },
    methods: {
        setShow(i) {
            setTimeout(() => {
                if (i < this.$refs.quotation.children.length) {
                    this.$refs.quotation.children[i].classList.add("show");
                    this.setShow(i + 1);
                }
                else this.$refs.configuration.classList.add("show");
            }, 500);
        }
    },
    mounted() {
        this.setShow(0);
    }
}
</script>

<template>
    <div class="main">
        <div class="quotation" ref="quotation">
            <p class="text">世界上只有一种真正的英雄主义，</p>
            <p class="text">那就是在认清生活的真相后依然热爱生活。</p>
            <p class="author">——罗曼·罗兰</p>
        </div>
        <div class="configuration" ref="configuration">
            <div class="checkbox" :class="{ checked: showSplashScreen }" @click="showSplashScreen = !showSplashScreen">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
                    <path d="M10 24L20 34L40 14" stroke="#1f1f1f" stroke-width="8" />
                </svg>
            </div>
            <div class="label">下次加载时显示闪屏</div>
        </div>
    </div>
</template>

<style scoped>
@import url("@/assets/css/AboutView/style.css");
</style>