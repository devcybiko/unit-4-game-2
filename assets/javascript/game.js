
var woody = {
    attack: 20,
    hp: 120,
    counter: 20,
};
var buzz = {
    attack: 10,
    hp: 160,
    counter: 10,
};
var bullseye = {
    attack: 15,
    hp: 140,
    counter: 15,
};
var jessie = {
    attack: 25,
    hp: 100,
    counter: 25,
};

function firstClick(){
    
$("#woody").one("click", function(){
    $("#character-one").html(" ");
    $("#attacker").html('<img alt="woody" id="woody" src="assets/images/kisspng-sheriff-woody-jessie-buzz-lightyear-toy-story-andy-toys-5abd86d623cfd2.7909066115223702621467.png">')
    secondClick();
});
$("#lightyear").one("click", function(){
    $("#character-two").html(" ");
    $("#attacker").html('<img alt="buzz" id="lightyear" src="assets/images/kisspng-buzz-lightyear-toy-story-pixar-film-series-toy-story-5abd66b9844b93.6003267515223620415419.png">')
    secondClick();
});
$("#bullseye").one("click", function(){
    $("#character-three").html(" ");
    $("#attacker").html('<img alt="bullseye" id="bullseye" src="assets/images/kisspng-bullseye-jessie-sheriff-woody-horse-buzz-lightyear-toy-story-cartoon-5ae2dcd2bc6395.6827763915248171067717.png">')
    secondClick();
});
$("#jessie").one("click", function(){
    $("#character-four").html(" ");
    $("#attacker").html('<img alt="jessie" id="jessie" src="assets/images/kisspng-jessie-toy-story-sheriff-woody-buzz-lightyear-andy-gudi-5ac88f52d7f959.2881777715230933308846.png">')
    secondClick();
});
};

firstClick();

function secondClick(){

$("#woody").one("click", function(){
    $("#character-one").html(" ");
    $("#defender").html('<img alt="woody" id="woody" src="assets/images/kisspng-sheriff-woody-jessie-buzz-lightyear-toy-story-andy-toys-5abd86d623cfd2.7909066115223702621467.png">')
});
$("#lightyear").one("click", function(){
    $("#character-two").html(" ");
    $("#defender").html('<img alt="buzz" id="lightyear" src="assets/images/kisspng-buzz-lightyear-toy-story-pixar-film-series-toy-story-5abd66b9844b93.6003267515223620415419.png">')
});
$("#bullseye").one("click", function(){
    $("#character-three").html(" ");
    $("#defender").html('<img alt="bullseye" id="bullseye" src="assets/images/kisspng-bullseye-jessie-sheriff-woody-horse-buzz-lightyear-toy-story-cartoon-5ae2dcd2bc6395.6827763915248171067717.png">')
});
$("#jessie").one("click", function(){
    $("#character-four").html(" ");
    $("#defender").html('<img alt="jessie" id="jessie" src="assets/images/kisspng-jessie-toy-story-sheriff-woody-buzz-lightyear-andy-gudi-5ac88f52d7f959.2881777715230933308846.png">')
});

};

