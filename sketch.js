const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops=100;
var umbrella;

function preload(){
    
}

function setup(){
   umbrella= new Umbrella();
   for(var i=0; i<maxDrops; i++){
       drops.push(new createDrop(random(0,400), random(0,400)));
   }
    
}

function draw(){
    umbrella.display();
    drops.display();
    drops.update();
}   

