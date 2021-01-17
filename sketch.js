

var database;
var player,game,form;
var proGameState=0;
var proplayerCount=0;
var allPlayer;

var car1,car1i;
var car2,car2i,car3,car3i,car4,car4i;
var groundi,track;
var cars;

function preload(){
 car1i=loadImage("my image/car1.png")
 car2i=loadImage("my image/car2.png")
 car3i=loadImage("my image/car3.png")
 car4i=loadImage("my image/car4.png")
 groundi=loadImage("my image/ground.png")
 track=loadImage("my image/track.jpg")
}

function setup(){
  createCanvas(1200,600);
  database = firebase.database();
 game= new Game()
 game.getGameState();
 game.start();
 
 

}

function draw(){
if(proplayerCount===4 ){
game.updateGameState(1);
}



if (proGameState==1){
 game.play();
}
}


