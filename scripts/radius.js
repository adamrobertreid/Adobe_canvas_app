// function to set radius to equal radius
var setRadius = function(newRadius){
    if(newRadius<minRad)
        newRadius = minRad;
    else if(newRadius>maxRad)
        newRadius = maxRad;
        radius = newRadius;
        context.linewidth = radius*2;

        // sets radius html to radius number
        radSpan.innerHTML = radius;
}

var minRad = 0.5;
var maxRad = 100;
var defaultRad = 10;
var interval = 5;
var radSpan = document.getElementById('radiusvalue');
var decRad = document.getElementById('decradius');
var incRad = document.getElementById('incradius');


decRad.addEventListener('click', function(){
  setRadius(radius-interval);
});

incRad.addEventListener('click', function(){
  setRadius(radius+interval);
});

// sets the radius default to to deafualtRad
setRadius(defaultRad);
