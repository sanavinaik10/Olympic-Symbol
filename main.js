canvas =document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
color = "blue";
ctx.beginPath();
ctx.strokeStyle =  color;
ctx.lineWidth=2;
ctx.arc(200,200,60,0,2*Math.PI);
ctx.stroke();

color = "black";
ctx.beginPath();
ctx.strokeStyle =  color;
ctx.lineWidth=2;
ctx.arc(330,200,60,0,2*Math.PI);
ctx.stroke();

color = "red";
ctx.beginPath();
ctx.strokeStyle =  color;
ctx.lineWidth=2;
ctx.arc(460,200,60,0,2*Math.PI);
ctx.stroke();

color = "yellow";
ctx.beginPath();
ctx.strokeStyle =  color;
ctx.lineWidth=2;
ctx.arc(260,290,60,0,2*Math.PI);
ctx.stroke();

color = "green";
ctx.beginPath();
ctx.strokeStyle =  color;
ctx.lineWidth=2;
ctx.arc(400,290,60,0,2*Math.PI);
ctx.stroke();