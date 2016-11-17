var canvas;
var ctx;
var lastPt=null;

  var touchzone = document.getElementById("canvas");
  touchzone.addEventListener("touchmove", draw, false);
  touchzone.addEventListener("touchend", end, false);
  ctx = touchzone.getContext("2d");


function draw(e) {
  e.preventDefault();
  if(lastPt!=null) {
    ctx.beginPath();
    ctx.moveTo(lastPt.x, lastPt.y);
    ctx.lineTo(e.touches[0].pageX, e.touches[0].pageY);
    ctx.stroke();
  }
  lastPt = {x:e.touches[0].pageX, y:e.touches[0].pageY};
}

function end(e) {
  e.preventDefault();
  // Terminate touch path
  lastPt=null;
}
