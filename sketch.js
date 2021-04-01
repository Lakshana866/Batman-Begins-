const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var thunder, thunder1, thunder2, thunder3, thunder4;
var maxDrops = 100;
var drops = [];
var engine, world;
var umbrella;
var ThunderCreated;
var bgImg;
var music;
var manImg, man;
function preload() {
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
    bgImg = loadImage("wp3752737.jpg");
    music = loadSound("Mazhai-Vara-Pogudhe (mp3cut.net).mp3")
    manImg = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png",
                        "walking_5.png","walking_6.png","walking_7.png","walking_8.png", )

}

function setup(){
    createCanvas(400,650);
    engine = Engine.create();
    world = engine.world;
if(frameCount%200 === 0){
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,300), random(0,400), 5));
}

    umbrella = new Umbrella(250, 350);
}
music.play();
man = createSprite(100, 400, 5, 10);

man.addAnimation("man", manImg);
man.scale = 0.4;
}

function draw(){
    background(bgImg);
    Engine.update(engine);
    if(frameCount%80 === 0){
    var rand = Math.round(random(1, 4));
    ThunderCreated=frameCount;
    thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
    
    switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break;
        case 3: thunder.addImage(thunder3);
        break;
        case 4: thunder.addImage(thunder4);
        break;
        default: break;
    }
    thunder.scale = random(0.3, 1.0);
    
    }
    if(ThunderCreated + 10 ===frameCount && thunder){
        thunder.destroy();
    }
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
        
    }
umbrella.display();

    drawSprites();
}
    
