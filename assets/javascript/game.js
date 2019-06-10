
var woody = {
    attack: 20,
    hp: 120,
    counter: 20,
    pic: "assets/images/woody.png",
    mydiv: "#character-one",
    myname: "woody"
};
var buzz = {
    attack: 10,
    hp: 160,
    counter: 10,
    pic: "assets/images/buzz.png",
    mydiv: "#character-two",
    myname: "buzz"
};
var bullseye = {
    attack: 15,
    hp: 140,
    counter: 15,
    pic: "assets/images/bullseye.png",
    mydiv: "#character-three",
    myname: "bullseye"
};
var jessie = {
    attack: 25,
    hp: 100,
    counter: 25,
    pic: "assets/images/jessie.png",
    mydiv: "#character-four",
    myname: "jessie"
};

var attacker;
var defender;

var where = ["#attacker", "#defender", false];
var iWhere = 0;
//function firstClick(){

function firstclick(event) {
    console.log("event:" + event);
    var obj = event.data;
    if (where[iWhere]) {
        $(obj.mydiv).html(" ");
        $(where[iWhere]).html('<img alt="' + obj.myname + '" id="' + '" src="' + obj.pic + '">')
        iWhere++;
    }
}
console.log("1");
$("#woody").on("click", woody, firstclick);
console.log("2");
$("#buzz").on("click", buzz, firstclick);
console.log("3");
$("#bullseye").on("click", bullseye, firstclick);
console.log("4");
$("#jessie").on("click", jessie, firstclick);
console.log("5");


