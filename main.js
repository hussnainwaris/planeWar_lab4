
	function top() {
		var Position = document.getElementById("slider").style.top
		Position = Position.replace(/px/,"")
		document.getElementById("slider").style.top = (((Position*1) - 20) + "px")
	}

	function downward() {
		var Position = document.getElementById("slider").style.top
		Position = Position.replace(/px/,"")
		document.getElementById("slider").style.top = (((Position*1) + 20) + "px")
	}

	function rightward() {
		var Position = document.getElementById("slider").style.left
		Position = Position.replace(/px/,"")
		document.getElementById("slider").style.left = (((Position*1) + 20) + "px")
	}

	function left() {
		var Position = document.getElementById("slider").style.left
		sPosition = Position.replace(/px/,"")
		document.getElementById("slider").style.left = (((Position*1) - 20) + "px")
	}

	function moveSelection(event) {                    
                switch (event.keyCode) {
                    case 37:
                        left();
                    break;

                    case 39:
                        rightward();
                    break;

                    case 38:
                        top();
                    break;

                    case 40:
                        downward();
                    break;
                }
            };

         function docReady()
        {
        	window.addEventListener("keydown",moveSelection);

        }


   a = setInterval(function () {

var div = document.getElementById("enemy1");
    if (div.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
        var rect = div.getBoundingClientRect ();
        x = rect.left;
        y = rect.top;
        b = rect.bottom;
        r = rect.right;
        var positionsArray = [x,y,b,r];

    }

var div2 = document.getElementById("slider");
    if (div2.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
        var rect2 = div2.getBoundingClientRect ();
        x2 = rect2.left;
        y2 = rect2.top;
        b2 = rect2.bottom;
        r2 = rect2.right;

        var positionsArray2 = [x2,y2,b2,r2];
        

    }

	overlap = !(r2 < x || x2 > r || b2 < y || y2 > b);

if(overlap){
	/*hide the plane on collision*/
        document.getElementById("slider").style.display = "none";

	/*stop the obstacle*/
	document.getElementById("enemy1").style.animationPlayState = "paused";
	
	/*stop background */
	document.getElementById("slideshow").style.animationPlayState = "paused";

	
      
        clearInterval(a);
    }
}, 100);





function getObstaclePosition(){
    var div = document.getElementById("enemy1");
    if (div.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
        var rect = div.getBoundingClientRect ();
        x = rect.left;
        y = rect.top;
        b = rect.bottom;
        r = rect.right;
        var positionsArray = [x,y,b,r];
        return positionsArray;
    }

    
}

function getPlanePosition(){
    /*get position of plane*/
    var div2 = document.getElementById("slider");
    if (div2.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
        var rect2 = div2.getBoundingClientRect ();
        x2 = rect2.left;
        y2 = rect2.top;
        b2 = rect2.bottom;
        r2 = rect2.right;

        var positionsArray2 = [x2,y2,b2,r2];
        return positionsArray2;

    }

}


        
        
      