var loop = 0;
var numberOfLoops = 6;
var loopInterval;
colorArray = [];

var colorArea;
var resultArea;
var showArrayButton;
var visualResultArea;

function setUpVars(){
	colorArea =  document.getElementById("colorArea");
	resultArea = document.getElementById("resultArea");
	showArrayButton = document.getElementById("showArrayButton");
	visualResultArea = document.getElementById("visualResultArea");
	generateArray();
}
function getRandomColor(){
	var random = Math.random();
		if(random < 0.25){
			return "red";
		}else if(random < 0.5){
			return "green";
		}else if(random < 0.75){
			return "blue";
		}else{
			return "black";
		}
}
function generateArray(){
	colorArray = [];
	while(colorArray.length < numberOfLoops)
	{
		var color = getRandomColor();
		var lastColor = colorArray[colorArray.length -1];
		if(lastColor != color){
			colorArray.push(color);
		}	
	}
}
function setColorToDiv(loop){
	colorArea.style.backgroundColor = colorArray[loop];
}

function runColors(){
	clearResult();
	loopInterval = setInterval(function(){
		startLooping();
	},1200);
}

function startLooping(){
	if(loop < numberOfLoops){
		setColorToDiv(loop);
		loop++;
	}else{
		visibleArrayButton();
		clearVars();
		stopLooping();
	}
}
function clearResult(){
	showArrayButton.style.visibility = "hidden";
	resultArea.innerHTML = "";
}


function visibleArrayButton(){
	showArrayButton.style.visibility = "visible";
}

function clearVars(){
	colorArea.style.backgroundColor = "white";
	loop = 0;
}
function stopLooping(){
	clearInterval(loopInterval);
}

function showArray(){
	for(var i =0; i < colorArray.length; i++){
		var colorDiv=document.createElement("Div");
		colorDiv.style.backgroundColor = colorArray[i];
		colorDiv.style.width = "15px";
		colorDiv.style.height = "15px";
		colorDiv.style.display = "inline-block";
		visualResultArea.appendChild(colorDiv);
	}
	resultArea.innerHTML = colorArray;
}
