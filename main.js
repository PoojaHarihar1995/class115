
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");//Variable,and 2d means for all 2d images like line,arc,circle,square

ctx.beginPath();//will allow you to get circle at mouse location
ctx.strokeStyle = "red";//will give color
ctx.lineWidth = 2;//width
ctx.arc(600, 200, 40 ,0 , 2*Math.PI);//X,Y,radius,startAngle(0=circle),(math.pi=half circle)
ctx.stroke();//at start will give you circle

canvas.addEventListener("mousedown", my_mousedown);//event-mousedown, with function name

function my_mousedown(e)//parameter e for getin X,Y axis
{
    
   mouse_x = e.clientX-canvas.offsetLeft ;//clientX will give X co-ordinate and to get actual X location on canvas canvas-offsetLeft is used
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);//X=123,Y=200
    ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
    
}

