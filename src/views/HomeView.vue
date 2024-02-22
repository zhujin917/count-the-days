<script setup>
import timers from "@/assets/js/timers";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";
dayjs.extend(isBetween);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale("zh-cn");
</script>

<template>
    <div class="main">
        <div class="timer" v-for="r of results" v-bind:key="r">
            <svg class="progress">
                <circle class="first"></circle>
                <circle class="second" :style="`stroke-dasharray: calc(${getDaCoef(r)} * var(--r)), 1000`"></circle>
            </svg>
            <p class="dura">{{ r.isIn ? "就是现在" : dayjs.duration(r.diff).humanize() }}</p>
            <p class="text">{{ r.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            results: []
        };
    },
    methods: {
        getDaCoef(r) {
            return 2 * Math.PI * (r.isIn ? 1 : 1 - (r.diff / r.cycl));
        },
        refreshTimers() {
            let results = [];
            let now = dayjs();
            for (let timer of timers) {
                let near = now;
                for (let reqName of Object.keys(timer.reqs)) {
                    near = near[reqName](timer.reqs[reqName]);
                }
                let next = near.isAfter(now) ? near : near.add(...timer.cycl);
                let previous = near.isBefore(now) ? near : near.subtract(...timer.cycl);
                results.push({
                    text: timer.text,
                    diff: next.diff(now),
                    cycl: dayjs.duration(...timer.cycl).asMilliseconds(),
                    isIn: now.isBetween(previous, previous.add(...timer.last))
                });
            }
            results.sort((a, b) => {
                if (a.isIn && !b.isIn) return -1;
                return a.diff - b.diff;
            });
            this.results = results;
        }
    },
    mounted() {
        this.refreshTimers();
        setInterval(this.refreshTimers, 1000);
    }
}
</script>

<style scoped>
@import url("@/assets/css/HomeView/style.css");
@import url("@/assets/css/HomeView/mobile.css") screen and (max-width: calc((112px + 18px + 18px) * 4));
</style>