<template>
    <div class="main">
        <div class="quotation" ref="quotation">
            <p class="text">世界上只有一种真正的英雄主义，</p>
            <p class="text">那就是在认清生活的真相后依然热爱生活。</p>
            <p class="author">——罗曼·罗兰</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        setShow(i) {
            setTimeout(() => {
                this.$refs.quotation.children[i].classList.add("show");
                if (i + 1 < this.$refs.quotation.children.length) {
                    this.setShow(i + 1);
                }
            }, 500);
        }
    },
    mounted() {
        this.setShow(0);
    }
}
</script>

<style scoped>
@import url("@/assets/css/AboutView/style.css");
</style>