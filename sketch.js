const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

var time;

function preload() {
    getBackgroundImg() 
    //backgroundImg= loadImage(bg);

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
 

}

function draw(){

    // add condition to check if any background image is there to add
    
    if(backgroundImg)
    //backgroundImg= loadImage(bg);
    

    background(backgroundImg);

   


    Engine.update(engine);

    // write code to display time in correct format here

    getBackgroundImg();

    textSize(18);
    text("TIME: " + time, 50, 50);


}

async function getBackgroundImg(){

    // write code to fetch time from API

    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson= await response.json();

    console.log(responseJson);
    var datetime= responseJson.datetime;

    var hour= datetime.slice(11, 13);

    

    console.log(hour);
    time= hour;
    
    if(hour >= 04 && hour <= 06){

        bg= "sunrise1.png";

    }
    else if(hour >=06 &&  hour<= 08){

        bg= "sunrise2.png";
    }

else if(hour >= 08 && hour <= 10){

bg= "sunrise3.png";
}
else if(hour >= 10 && hour <= 11){

    bg= "sunrise3.png";
}
else if(hour >= 11 && hour<= 13){

    bg= "sunrise4.png";
}
else if(hour >= 13 && hour<= 15){

    bg= "sunrise5.png";
}
else if(hour >= 15 && hour<= 17){

    bg= "sunrise6.png";
}
else if(hour >= 17 && hour<= 19){

    bg= "sunset7.png";
}
else if(hour >= 19 && hour<= 21){

    bg= "sunset8.png";
}
else if(hour >= 21 && hour <= 23){

    bg= "sunset9.png";
}
else if(hour >= 23 && hour == 0){

    bg= "sunset10.png";
}
else if(hour == 0 && hour<= 03){

    bg= "sunset11.png";
}
else {
    bg= "sunset12.png";
}
backgroundImg= loadImage(bg);

}

