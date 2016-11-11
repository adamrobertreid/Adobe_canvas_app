// creates a variable that grabs the canvas
var canvas = document.getElementById('canvas');
// use the getContext method to tell javascript that the canvas is 2d game/animation
var context = canvas.getContext('2d');

// putPoint function creates a circle on the canvas when the mouse has been
// pressed down
var putPoint = function(event){
    context.beginPath();
    context.arc(event.offsetX, event.offsetY, 10, 0, Math.PI*2);
    context.fill();
}

// listens out for the mousedown event where the putPoint function will make a mark
canvas.addEventListener('mousedown', putPoint);
