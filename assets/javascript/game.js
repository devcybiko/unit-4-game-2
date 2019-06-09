
var woody = {
    attack: 20,
    hp: 120,
    counter: 20,
    pic:"assets/images/woody.png"
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
var 

//function firstClick(){
    
$("#woody").one("click", function(){
    $("#character-one").html(" ");
    $("#attacker").html('<img alt="woody" id="woody" src="assets/images/woody.png">')
    secondClick();
});
$("#lightyear").one("click", function(){
    $("#character-two").html(" ");
    $("#attacker").html('<img alt="buzz" id="lightyear" src="assets/images/buzz.png">')
    secondClick();
});
$("#bullseye").one("click", function(){
    $("#character-three").html(" ");
    $("#attacker").html('<img alt="bullseye" id="bullseye" src="assets/images/bullseye.png">')
    secondClick();
});
$("#jessie").one("click", function(){
    $("#character-four").html(" ");
    $("#attacker").html('<img alt="jessie" id="jessie" src="assets/images/jessie.png">')
    secondClick();
});
//};

//firstClick();

function secondClick(){

$("#woody").one("click", function(){
    $("#character-one").html(" ");
    $("#defender").html('<img alt="woody" id="woody" src="assets/images/woody.png">')
});
$("#lightyear").one("click", function(){
    $("#character-two").html(" ");
    $("#defender").html('<img alt="buzz" id="lightyear" src="assets/images/buzz.png">')
});
$("#bullseye").one("click", function(){
    $("#character-three").html(" ");
    $("#defender").html('<img alt="bullseye" id="bullseye" src="assets/images/bullseye.png">')
});
$("#jessie").one("click", function(){
    $("#character-four").html(" ");
    $("#defender").html('<img alt="jessie" id="jessie" src="assets/images/jessie.png">')
});

};

