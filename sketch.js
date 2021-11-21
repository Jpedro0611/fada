var starImg,bgImg;
var star, starBody;
var fada, fadaImg;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    // starImg = loadImage("images/star.png");
	// bgImg = loadImage("images/starNight.png");
    // //carregar animação de fada 
    // fadaImg = loadImage('images/fairyImage1.png')
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada

    star = createSprite(650,30);
//	star.addImage(starImg);
	star.scale = 0.2;

    fada = new createSprite(200,200,100,100);
    //fada.addImage(fadaImg);
    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);


}

function draw(){
    background(0)




    drawSprites();
}