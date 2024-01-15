const canvas = document.getElementById("canvas1");
const context = canvas.getContext('2d')
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

function render(){
	context.fillStyle = "black";
	context.fillRect(0,0,canvasWidth,canvasHeight);
	context.fillStyle = "lightblue";

	for(var i = 1; i<20;i++){
		var x = Math.round(Math.random()*canvasWidth);
		var y = Math.round(Math.random()*canvasHeight)%canvasHeight;

		context.fillRect(x,y,1,7);
	}

    const t = setTimeout(function() {
        requestAnimationFrame(render);
    },16);

}

requestAnimationFrame(render);