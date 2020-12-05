var ABall, database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  ABall = createSprite(250,250,10,10);
  ABall.shapeColor = "red";


  var ABallPosition = database.ref('Ball/Position');
  ABallPosition.on("value", readPosition);
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
  database.ref('Ball/Position').set({
    x: position.x + x ,
    y: position.y + y
  })
}

function readPosition(data){
  position = data.val();
  ABall.x = position.x;
  ABall.y = position.y;
}