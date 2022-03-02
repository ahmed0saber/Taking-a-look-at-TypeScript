var weeks;
(function (weeks) {
    weeks[weeks["sat"] = 0] = "sat";
    weeks[weeks["sun"] = 1] = "sun";
    weeks[weeks["mon"] = 2] = "mon";
    weeks[weeks["tues"] = 3] = "tues";
    weeks[weeks["wed"] = 4] = "wed";
    weeks[weeks["thrus"] = 5] = "thrus";
    weeks[weeks["fri"] = 6] = "fri";
})(weeks || (weeks = {}));
console.log(weeks);
console.log(weeks[0]);
console.log(weeks.mon);
console.log("----------");
var foods;
(function (foods) {
    foods["veg"] = "vegetables";
    foods["fru"] = "fruits";
})(foods || (foods = {}));
console.log(foods);
console.log(foods['fru']);
console.log(foods.veg);
