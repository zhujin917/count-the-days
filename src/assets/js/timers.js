const timers = [{
    text: "午休",
    reqs: { hour: 13 },
    last: [1, "h"],
    cycl: [1, "d"]
}, {
    text: "困觉",
    reqs: { hour: 22 },
    last: [8, "h"],
    cycl: [1, "d"]
}, {
    text: "周末",
    reqs: { day: 6 },
    last: [2, "d"],
    cycl: [7, "d"]
}, {
    text: "元旦",
    reqs: { month: 0, date: 1 },
    last: [1, "d"],
    cycl: [1, "y"]
}, {
    text: "春节",
    reqs: { year: 2025, month: 0, date: 29 },
    last: [8, "d"],
    cycl: [1, "y"]
}, {
    text: "清明节",
    reqs: { month: 3, date: 4 },
    last: [3, "d"],
    cycl: [1, "y"]
}, {
    text: "劳动节",
    reqs: { month: 4, date: 1 },
    last: [5, "d"],
    cycl: [1, "y"]
}, {
    text: "端午节",
    reqs: { month: 5, date: 10 },
    last: [1, "d"],
    cycl: [1, "y"]
}, {
    text: "中秋节",
    reqs: { month: 8, date: 15 },
    last: [3, "d"],
    cycl: [1, "y"]
}, {
    text: "国庆节",
    reqs: { month: 9, date: 1 },
    last: [7, "d"],
    cycl: [1, "y"]
}, {
    text: "寒假",
    reqs: { month: 0, date: 19 },
    last: [1, "m"],
    cycl: [1, "y"]
}, {
    text: "暑假",
    reqs: { month: 6, date: 1 },
    last: [2, "m"],
    cycl: [1, "y"]
}];

export default timers;
