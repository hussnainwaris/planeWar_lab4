
	function top() {
		var Position = document.getElementById("plane").style.top
		Position = Position.replace(/px/,"")
		document.getElementById("plane").style.top = (((Position*1) - 20) + "px")
	}

	function downward() {
		var Position = document.getElementById("plane").style.top
		Position = Position.replace(/px/,"")
		document.getElementById("plane").style.top = (((Position*1) + 20) + "px")
	}

	function rightward() {
		var Position = document.getElementById("plane").style.left
		Position = Position.replace(/px/,"")
		document.getElementById("plane").style.left = (((Position*1) + 20) + "px")
	}

	function left() {
		var Position = document.getElementById("plane").style.left
		Position = Position.replace(/px/,"")
		document.getElementById("plane").style.left = (((Position*1) - 20) + "px")
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


   setInterval(function () {

var div = document.getElementById("enemy1");
    if (div.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
        var rect = div.getBoundingClientRect ();
        l = rect.left;
        t = rect.top;
        b = rect.bottom;
        r = rect.right;
        var positionsArray = [l,t,b,r];

    }

var div1 = document.getElementById("enemy2");
    if (div1.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
        var rect = div1.getBoundingClientRect ();
        l2 = rect.left;
        t2 = rect.top;
        b2 = rect.bottom;
        r2 = rect.right;
        var positionsArray = [l2,t2,b2,r2];

    }

    var div3 = document.getElementById("enemy3");
    if (div3.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
        var rect = div3.getBoundingClientRect ();
        l3 = rect.left;
        t3 = rect.top;
        b3 = rect.bottom;
        r3 = rect.right;
        var positionsArray = [l3,t3,b3,r3];

    }

var div4 = document.getElementById("enemy4");
    if (div4.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
        var rect = div4.getBoundingClientRect ();
        l4 = rect.left;
        t4 = rect.top;
        b4 = rect.bottom;
        r4 = rect.right;
        var positionsArray = [l4,t4,b4,r4];

    }
    
    var div5 = document.getElementById("enemy5");
    if (div5.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
        var rect = div5.getBoundingClientRect ();
        l5 = rect.left;
        t5 = rect.top;
        b5 = rect.bottom;
        r5 = rect.right;
        var positionsArray = [l5,t5,b5,r5];

    }


var div2 = document.getElementById("plane");
    if (div2.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
        var rect2 = div2.getBoundingClientRect ();
        x2 = rect2.left;
        y2 = rect2.top;
        b2 = rect2.bottom;
        r2 = rect2.right;

        var positionsArray2 = [x2,y2,b2,r2];
        

    }

	overlap = !(r2 < l || x2 > r || b2 < t || y2 > b);
    overlap2 =  !(r2 < l2 || x2 > r2 || b2 < t2 || y2 > b2);
    overlap3 =  !(r2 < l3 || x2 > r3 || b2 < t3 || y2 > b3);
    overlap4 =  !(r2 < l4 || x2 > r4 || b2 < t4 || y2 > b4);
    overlap5 =  !(r2 < l5 || x2 > r5 || b2 < t5 || y2 > b5);



if(overlap || overlap2 ||overlap3 || overlap4 ||overlap5 ){
	/*hide the plane on collision*/
    document.getElementById("plane").style.display = "none";

	/*stop the obstacle*/
        //document.getElementById("plane").style.webkitAnimationPlayState = "paused";

	document.getElementById("enemy1").style.webkitAnimationPlayState = "paused";
	document.getElementById("enemy2").style.webkitAnimationPlayState = "paused";
	document.getElementById("enemy3").style.webkitAnimationPlayState = "paused";
    document.getElementById("enemy4").style.webkitAnimationPlayState = "paused";
    document.getElementById("enemy5").style.webkitAnimationPlayState = "paused";
    /*stop background */
	document.getElementById("slideshow").style.webkitAnimationPlayState = "paused";

	
      
        clearInterval(a);
    }
}, 100);




function getObstaclePositionEnemy1(){
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


function getObstaclePositionEnemy2(){
    var div = document.getElementById("enemy2");
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

function getObstaclePositionEnemy3(){
    var div = document.getElementById("enemy3");
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

function getObstaclePositionEnemy4(){
    var div = document.getElementById("enemy4");
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

function getObstaclePositionEnemy5(){
    var div = document.getElementById("enemy5");
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
    var div2 = document.getElementById("plane");
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


        
        
      