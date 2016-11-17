var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);

// creates a variable that grabs the canvas
var canvas = document.getElementById('canvas');
// use the getContext method to tell javascript that the canvas is 2d game/animation
var context = canvas.getContext('2d');

// collects color value from dom element input color
var colorInput = document.getElementById('color');

// set the radius of arc to 10
var radius = 10;
var movingMouse = false;

// sets canvas to be entire height of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// set mousedown to fasle so when it's set to true in a function it will
// render a line until mouseup equalling false

// Context property(lineWidth) increases the line to radius size
context.lineWidth = radius * 2;

// putPoint function creates a circle on the canvas when the mouse has been
// pressed down
var putPoint = function(e){
    if(movingMouse){
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
      context.strokeStyle = colorInput.value;
      context.beginPath();
      context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
      context.fill();
      context.fillStyle = colorInput.value;
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
  }
}

function handleImage(e){
  var reader = new FileReader();
  reader.onload = function(e){
    var img = new Image();
    img.onload = function(){
      context.drawImage(img, 0,0);
    }
    img.src = e.target.result
  }
  reader.readAsDataURL(e.target.files[0]);
}

var engage = function(e){
    movingMouse = true;
    // having put point called in this function allows you to create a point
    putPoint(e);
}

var disengage = function(){
    movingMouse = false;
    // having begin path here prevents the end of a line connecting to the
    // beginning of the start of a new line ends context.moveto
    context.beginPath();
}

// Gets clear element ID to clear canvas
    document.getElementById('clear').addEventListener('click', function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }, false);


// // define variables to keep track of the touch positions
// var touchX;
// var touchY;
//
// function touchStart(){
//   getTouchPos();
//   putPoint(context,touchX,touchY,12);
//
//   // prevents an additional mousedown event from triggering
//   e.preventDefault();
// }
//
// function touchMove(e) {
//   // update the touch co-ordinates
//   getTouchPos(e);
//
//   // we do not need to check if the touch is engaged, since there will always
//   // be contact with the screen by definition.
//   putPoint(context,touchX,touchY,12);
//
//   // Prevent a scrolling action as a result of this touchmove triggering.
//   e.preventDefault();
//
// }
//
// // Get the touch position relative to the top-left of the canvas
// // When we get the raw values of pageX and pageY below, they take into account the scrolling on the page
// // but not the position relative to our target div. We'll adjust them using "target.offsetLeft" and
// // "target.offsetTop" to get the correct values in relation to the top left of the canvas.
// function getTouchPos(e) {
//     if (!e)
//         var e = event;
//
//     if(e.touches) {
//       if(e.touches.length == 1) { // Only deal with one finger
//         var touch = e.touches[0]; // Get the information for finger #1
//         touchX=touch.pageX - touch.target.offsetLeft;
//         touchY=touch.pageY - touch.target.offsetTop;
//       }
//     }
// }

// listens out for the mousemove event where the putPoint function will make a mark
canvas.addEventListener('mousemove', putPoint);

// listens for mousedown event
canvas.addEventListener('mousedown', engage);

// listens for mouseup event
canvas.addEventListener('mouseup', disengage);

// canvas.addEventListener('touchstart', touchStart, false);
// canvas.addEventListener('touchmove', touchMove, false);
