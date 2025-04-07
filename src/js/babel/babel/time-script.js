"use strict";

let start = new Date();

function addNullToDate(time) {
    if (time < 10) {
        return "0" + time;
    } else return time;
}

let now = new Date();

let nowHour = now.getHours();
nowHour = addNullToDate(nowHour);

let nowMinute = now.getMinutes();
nowMinute = addNullToDate(nowMinute);

let nowSecond = now.getSeconds();
nowSecond = addNullToDate(nowSecond);

let nowDay = now.getDate();
nowDay = addNullToDate(nowDay);

let nowMonth = now.getMonth() + 1;
nowMonth = addNullToDate(nowMonth);

let nowYear = now.getFullYear();

let result = "Сьогодні " + nowDay + "." + nowMonth + "." + nowYear + " " + nowHour + ":" + nowMinute + ":" + nowSecond;
console.log(result);

let finish = new Date();
console.log(finish - start + " ms");