let Gravity=0.01;
let G=0.007;
let number= 50;  // number of debris
let array_width=[];  // width of debri
let array_height=[];  // height of debri 
let arrayX=[];        // X position of debris
let array_xspeed=[];  // x position speed 
let arrayY=[];          // y position of debris
let array_test=[];    // array of random to stop debri on land at random position 
let arrayY2=[];
let arrayX2=[];
let array_yspeed=[];
let y_speed1=-1.3;
let y_speed2=-7.3;
let H=120;   // 280
let S=100;   // 72
let B=2;     // 35
let bool1=true;
let bool2=true;
let bool3=true;
let bool4=false;
let dribbling_poses1=[];
let dribbling_poses2=[];
let dribbling_poses3=[];
let dribbling_poses4=[];
let dribbling_poses5=[];
let dribbling_poses6=[];
let dribbling_poses7=[];
let dribble_posX=0;
let dribble_posY=20;
let ran1=0;
let ran2=2;
let laps;
function setup() {
  createCanvas(1080,850);
  
  angleMode(DEGREES);
  colorMode(HSB,360,100,100);
}


function draw() {
  if (bool4==false)  
  {frameCount=0;
  }
scale(1.3,1.2);
  if (frameCount>6 && frameCount<190)
    {bool1=true;
     number=frameCount*2;
     y_speed1=-1.3;
     y_speed2=-9.3;
    }
  translate(0,0);
  if (frameCount/10<40)
  {H=200+20*sin(frameCount/2);
  S=100-10*sin(frameCount/2);
  B=2+45*sin(frameCount/2);}
background(H,S,B);
if (G<1 && bool4==true)
{G+=Gravity*10;}
if (G>1 && bool4==true)
  {G=G*(1+Gravity);}
push(); 
  translate(295,298);
if (bool1==true && bool4==true)
  {for (let i=0; i<number; i++) 
    { array_width.push(random(0.3,4.5));
      array_height.push(random(0.3,10));
      arrayX.push(0);
      arrayY.push(0);
      array_xspeed.push(random(-4.7,5));
      array_yspeed.push(random(y_speed1,y_speed2));
      array_test.push(random(200,400));
    }
   
   bool1=false;
  }
  for (let i=0; i<number; i++) 
    { arrayX[i]=arrayX[i]+array_xspeed[i];
      arrayY[i]=arrayY[i]+array_yspeed[i]+G;
      arrayY=arrayY2;
      arrayX=arrayX2;
    }
  
  for (let i=0; i<number; i++) 
    { if (arrayY2[i]> array_test[i])
        {
          arrayY2[i]=array_test[i];
        }
    }
  
  for (let i=0; i<number; i++) 
    { if (arrayY2[i]==array_test[i])
        {
          arrayX2[i]=arrayX[i]-array_xspeed[i];
        }
    }
  
  print(frameCount/10);
pop(); 
  
 mountain_1();
 if (bool4==true) 
 {
 for (let i=0; i<number; i++) 
    {fill(random(20,45),100,100);   // colour of debris 
      ellipse(arrayX[i],arrayY[i],array_width[i],array_height[i]);
    } 
  
 var laps=(frameCount/12);
 var laps2=(frameCount/16);
 dribble_posX=10*cos(frameCount/3)*sin(frameCount);
 dribble_posY=5+laps;
 dribbling_poses1.push([dribble_posX-(frameCount/16)-4,(dribble_posY*3)-14,2,1,laps2]);
 dribbling_poses2.push([dribble_posX,-15+dribble_posY*3,1,0,laps2]);
 dribbling_poses3.push([dribble_posX+(frameCount/12)-8,(dribble_posY*2)-13,4,3,laps2]);
 dribbling_poses4.push([dribble_posX-(frameCount/16)-4,(dribble_posY*5)-23,1,1,laps2]);
 dribbling_poses5.push([dribble_posX-(frameCount/12)-4,(dribble_posY*4)-16,1,1,laps2]);
 dribbling_poses6.push([dribble_posX+(frameCount/14)-4,(dribble_posY*5)-26,1,2,laps2]);
 dribbling_poses7.push([dribble_posX+(frameCount/14)-8,(dribble_posY*2.3)-13,2,1,laps2]);
                   
  for (let i=0; i<dribbling_poses1.length; i++)
 {
   dribbling(dribbling_poses1[i][0], dribbling_poses1[i][1],dribbling_poses1[i][2],dribbling_poses1[i][3],dribbling_poses1[i][4]);  }
  for (let i=0; i<dribbling_poses2.length; i++)
 {
   dribbling(dribbling_poses2[i][0], dribbling_poses2[i][1],dribbling_poses2[i][2],dribbling_poses2[i][3],dribbling_poses2[i][4]);
 }
  
 for (let i=0; i<dribbling_poses3.length; i++)
 {
   dribbling(dribbling_poses3[i][0], dribbling_poses3[i][1],dribbling_poses3[i][2],dribbling_poses3[i][3],dribbling_poses3[i][4]);
 } 
  
 for (let i=0; i<dribbling_poses4.length; i++)
 {
   dribbling(dribbling_poses4[i][0], dribbling_poses4[i][1],dribbling_poses4[i][2],dribbling_poses4[i][3],dribbling_poses1[i][4]);
 } 
  
 for (let i=0; i<dribbling_poses5.length; i++)
 {
   dribbling(dribbling_poses5[i][0], dribbling_poses5[i][1],dribbling_poses5[i][2],dribbling_poses5[i][3],dribbling_poses1[i][4]);
 } 
  
 for (let i=0; i<dribbling_poses6.length; i++)
 {
   dribbling(dribbling_poses6[i][0], dribbling_poses6[i][1],dribbling_poses6[i][2],dribbling_poses6[i][3],dribbling_poses1[i][4]);
 } 
  
 for (let i=0; i<dribbling_poses7.length; i++)
 {
   dribbling(dribbling_poses7[i][0], dribbling_poses7[i][1],dribbling_poses7[i][2],dribbling_poses7[i][3],dribbling_poses1[i][4]);
 } 
 }
                          
  land();
  push();
  translate(-30,80);
  scale(1.3,0.5);
  mountain_2(); 
  pop();
  
  push();
  translate(-20,70);
  scale(1.5,0.9);
  mountain_3();
  pop();   
       // debris on land
  for (let i=0; i<number/2; i++) 
    {fill(random(20,45),100,100);   // colour of debris 
      ellipse(arrayX2[i],arrayY2[i],array_width[i],array_height[i]);
    } 
  
   if (bool4==false)
  {fill(30,100,100);
   textSize(30);
   text('press mouse to erupt volcano',-140, -120);}
}



 function dribbling(posX,posY,ran1,ran2,ran3)
 { if (frameCount>28)
 {  fill(48-ran3,100,98); // 20,100,98   
    triangle(posX+ran1,posY-1,posX-ran2,posY-1,posX,posY); }
 }

function land()
{ // land  
fill(77,90,35+abs(15*sin(frameCount/2)));  // 82,93,51
 if (frameCount/10>36)
    {
      fill(77,90,35);
    }
push();  
translate(0,20);  
rect(-450,180,1000,700);  
pop();
}

function mountain_1()
{noStroke();
 translate(300,300);
// 1st mountain 
fill(36+abs(4*sin(frameCount/4)),90,39.7+abs(10*sin(frameCount/4)));  // 41,100,55
beginShape();
vertex(8, 0);     // right upeer
vertex(35,39);
vertex(46,24);
vertex(71,88);
vertex(175,210);
vertex(-130,220);
vertex(-99,130);
vertex(-87,56);
vertex(-58,69);
vertex(-10,-3);  // down upper
endShape(CLOSE);
}

function mountain_2()
{
// 2nd mountain
push();
translate(-200,60);
fill(35,90,39)  ;
beginShape();
vertex(8, 0);     
vertex(35,39);
vertex(36,24);
vertex(91,-58);    // right upeer
vertex(325,211);   // right down
vertex(99,209);
 vertex(39,270);
vertex(-49,230);
vertex(-130,220);  // left down
vertex(-89,130);
vertex(-87,56);
vertex(-38,99);
vertex(-20,-3);  
endShape(CLOSE); 
  
//dark land 1
fill(77,90,35);
beginShape();
vertex(-49,230);     // right upeer
vertex(39,270);
vertex(99,209);
vertex(325,211);
vertex();  
vertex(80,320);
endShape(CLOSE); 
 pop();
}

function mountain_3()
{
// 3rd mountain 
push();
translate(195,30); 
fill(32,90,39)  ;
beginShape();
vertex(6, -20);     
vertex(35,39);
vertex(46,24);
vertex(65,88);
vertex(101,38); // 
vertex(175,171);
vertex(50,271);
vertex(-95,216);
vertex(-160,220);  // left down 
vertex(-99,130);
vertex(-87,102);
vertex(-58,69);
vertex(-10,-3);  // down upper
endShape(CLOSE);
  
//dark land 2
fill(77,90,35);
beginShape();
vertex(-160,218);     // right upeer
vertex(-109,210);
vertex(42,267);
vertex(99,209);
vertex(285,111); 
vertex(185,201); 
vertex(135,201); 
vertex(80,320);
endShape(CLOSE);   
pop();
}

function mousePressed ()
  { bool4=true;}
