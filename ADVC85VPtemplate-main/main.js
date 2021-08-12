//Create a reference for canvas 
canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
greenCar_width=75;
greenCar_height=100;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greenCar_x=5;
greenCar_y=225;

function add() {
	//upload car, and background images on the canvas.
	background_imageTag= new Image();
	background_imageTag.onload= uploadBackground;
	background_imageTag.src= background_image;

	greenCar_imageTag= new Image();
	greenCar_imageTag.onload= uploadgreencar;
	greenCar_imageTag.src= greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greenCar_imageTag,greenCar_x,greenCar_y,greenCar_width,greenCar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greenCar_y>=0){
		greenCar_y=greenCar_y-10;
		console.log("When up arrow is pressed, x= "+ greenCar_x + "| y= " + greenCar_y);
		uploadBackground();
		uploadgreencar();

	}
}

function down()
{
	//Define function to move the car downward
	if(greenCar_y<=320){
		greenCar_y=greenCar_y+10;
		console.log("When down arrow is pressed, x= "+ greenCar_x + "| y= " + greenCar_y);
		uploadBackground();
		uploadgreencar();

	}
}

function left()
{
	//Define function to move the car left side
	if(greenCar_x>=0){
		greenCar_x=greenCar_x-10;
		console.log("When left arrow is pressed, x= "+ greenCar_x + "| y= " + greenCar_y);
		uploadBackground();
		uploadgreencar();

	}
}

function right()
{
	//Define function to move the car right side
	if(greenCar_x<=700){
		greenCar_x=greenCar_x+10;
		console.log("When right arrow is pressed, x= "+ greenCar_x + "| y= " + greenCar_y);
		uploadBackground();
		uploadgreencar();

	}
}
