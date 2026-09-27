import { Solar, Lunar } from "lunar-javascript";

function getReqsByLunarMd(m, d, last = 1) {
    const ima = Solar.fromDate(new Date());
    const thisYear = Lunar.fromYmd(ima.getYear(), m, d).getSolar();
    const solar = ima.isBefore(thisYear.next(last)) ? thisYear : Lunar.fromYmd(ima.getYear() + 1, m, d).getSolar();
    return {
        year: solar.getYear(),
        month: solar.getMonth() - 1,
        date: solar.getDay()
    };
}

const timers = [{
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
    reqs: getReqsByLunarMd(1, 1, 8),
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
    reqs: getReqsByLunarMd(5, 5),
    last: [1, "d"],
    cycl: [1, "y"]
}, {
    text: "中秋节",
    reqs: getReqsByLunarMd(8, 15),
    last: [1, "d"],
    cycl: [1, "y"]
}, {
    text: "国庆节",
    reqs: { month: 9, date: 1 },
    last: [7, "d"],
    cycl: [1, "y"]
}];

export default timers;
