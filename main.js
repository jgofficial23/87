
var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
   fabric.Image.fromURL(get_image, function(Img) {
   block_image_object = Img;
       
   block_image_object.scaleToWidth(block_image_width);
   block_image_object.scaleToHeight(block_image_height);
   block_image_object.set({
   top:block_y,
   left:block_x
   });
   canvas.add(block_image_object);

   });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
var test = document.getElementById("display");
document.getElementById("hiddenp").style.display="inline-block";
   if(keyPressed == '82')
   {
       
       new_image('rr1.png'); 
       console.log("r");
       window.alert("You pressed r. So you will now see a Red Ranger!");
      test.innerHTML="RED."+ " My LeftOffset is "+ test.offsetLeft
   }
   if(keyPressed == '71')
   {
       block_x = 200;
       new_image('gr.png'); 
       console.log("g");
       window.alert("You pressed g. So you will now see a Green Ranger!");
       test.innerHTML="GREEN."+ " My LeftOffset is "+ test.offsetLeft
   }
   
   if(keyPressed == '89')
   {
       block_x =350;
       new_image('yr.png'); 
       console.log("y");
       window.alert("You pressed y. So you will now see a Yellow Ranger!");
       test.innerHTML="YELLOW."+ " My LeftOffset is "+ test.offsetLeft
   }
   if(keyPressed == '80')
   {
       block_x = 600;
       new_image('pr.png'); 
       console.log("p");
       window.alert("You pressed p. So you will now see a Pink Ranger!");
       test.innerHTML="PINK."+ " My LeftOffset is "+ test.offsetLeft
   }
   if(keyPressed == '66')
   {
       block_x = 700;
       new_image('br.png'); 
       console.log("b");
       window.alert("You pressed b. So you will now see a Blue Ranger!");
       test.innerHTML="BLUE."+ " My LeftOffset is "+ test.offsetLeft
   }
   
}

