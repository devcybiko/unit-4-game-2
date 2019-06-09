
var woody = {
    attack: 20,
    hp: 120,
    counter: 20,
    pic: "assets/images/woody.png"
};
var buzz = {
    attack: 10,
    hp: 160,
    counter: 10,
    pic: "assets/images/buzz.png"
};
var bullseye = {
    attack: 15,
    hp: 140,
    counter: 15,
    pic: "assets/images/bullseye.png"
};
var jessie = {
    attack: 25,
    hp: 100,
    counter: 25,
    pic: "assets/images/jessie.png"
};

var attacker;
var defender;

var where = ["#attacker", "#defender", false];
var iWhere = 0;
//function firstClick(){

$("#woody").on("click", function () {
    if (where[iWhere]) {
        $("#character-one").html(" ");
        $(where[iWhere]).html('<img alt="woody" id="woody" src="assets/images/woody.png">')
        iWhere++;
    }
});
$("#lightyear").on("click", function () {
    if (where[iWhere]) {
        $("#character-two").html(" ");
        $(where[iWhere]).html('<img alt="buzz" id="lightyear" src="assets/images/buzz.png">')
        iWhere++;
    }
});
$("#bullseye").on("click", function () {
    if (where[iWhere]) {
        $("#character-three").html(" ");
        $(where[iWhere]).html('<img alt="bullseye" id="bullseye" src="assets/images/bullseye.png">')
        iWhere++;
    }
});
$("#jessie").on("click", function () {
    if (where[iWhere]) {
        $("#character-four").html(" ");
        $(where[iWhere]).html('<img alt="jessie" id="jessie" src="assets/images/jessie.png">')
        iWhere++;
    }
});


