var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);

// Gets clear element ID to clear canvas
    document.getElementById('clear').addEventListener('click', function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }, false);

var colorInput = document.getElementById('color');


// creates a variable that grabs the canvas
var canvas = document.getElementById('canvas');
// use the getContext method to tell javascript that the canvas is 2d game/animation
var context = canvas.getContext('2d');

// sets canvas to be entire height of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// set mousedown to fasle so when it's set to true in a function it will
// render a line until mouseup equalling false
var movingMouse = false;

// set the radius of arc to 10
var radius = 10;
// Context property(lineWidth) increases the line to radius size
context.lineWidth = radius * 2;

// putPoint function creates a circle on the canvas when the mouse has been
// pressed down
var putPoint = function(event){
    if(movingMouse){
      context.lineTo(event.offsetX, event.offsetY);
      context.stroke();
      context.strokeStyle = colorInput.value;
      context.beginPath();
      context.arc(event.offsetX, event.offsetY, radius, 0, Math.PI*2);
      context.fill();
      context.fillStyle = colorInput.value;
      context.beginPath();
      context.moveTo(event.offsetX, event.offsetY);
  }
}

function handleImage(e){
  var reader = new FileReader();
  reader.onload = function(event){
    var img = new Image();
    img.onload = function(){
      // canvas.width = img.width;
      // canvas.height = img.height;
      context.drawImage(img, 0,0);
    }
    img.src = event.target.result
  }
  reader.readAsDataURL(e.target.files[0]);
}

var engage = function(event){
    movingMouse = true;
    // having put point called in this function allows you to create a point
    putPoint(event);
}

var disengage = function(){
    movingMouse = false;
    // having begin path here prevents the end of a line connecting to the
    // beginning of the start of a new line
    context.beginPath();
}
// listens out for the mousemove event where the putPoint function will make a mark
canvas.addEventListener('mousemove', putPoint);

// listens for mousedown event
canvas.addEventListener('mousedown', engage);

// listens for mouseup event
canvas.addEventListener('mouseup', disengage);

canvas.addEventListener('touchstart', engage);

canvas.addEventListener('touchend', disengage);

canvas.addEventListener('touchmove', putPoint);
