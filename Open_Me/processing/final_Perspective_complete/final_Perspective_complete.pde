firstScene scene001;
thirdScene scene003;
fourthScene scene004;
fifthScene scene005;
sixthScene scene006;
seventhScene scene007;
eighthSceneA scene008A;
eighthSceneB scene008B;
ninthScene scene009;
//matrix Matrix;
matrixx Matrixx;

//position parameter
float x;
float y;
//size parameter
float a;
float me;
//points for 1-4th scenes
PVector aa,bb,cc,dd,ee,ff,a1,a2,a3,a4,a5,a6;

float fadeOut;


void setup(){
  size(620,600);
  scene001 = new firstScene();
  scene003 = new thirdScene();
  scene004 = new fourthScene();
  scene005 = new fifthScene();
  scene006 = new sixthScene();
  scene007 = new seventhScene();
  scene008A = new eighthSceneA();
  scene008B = new eighthSceneB();
  scene009 = new ninthScene();
  //Matrix = new matrix();
  Matrixx = new matrixx();
  //
  fadeOut = 255;
}

void draw(){
  smooth();
  background(255);
  switchSystem();
  //scene007.update();
  //scene007.movement();
  //scene008B.update();
  //scene008B.cutLine();
  //scene009.update();
  //scene003.update();
  //scene003.cutLine();
  println(millis());
}

void switchSystem(){
  //credit to the Github collaboration with Marco & Kate & Kim for the game system
  if (millis()<7000){
    scene001.update();
  }
  else if(millis()>7000 && millis()<8000){
    scene003.update();
    scene003.cutLine();
  }else if (millis()>8000 && millis()<9900){
    scene004.update();
  }else if (millis()<17000 && millis()>9900){
    scene005.update();
  }else if (millis()>17000 && millis()<26000){
    scene006.update();
  }else if (millis()>26000 && millis()<27300){
    Matrixx.update(fadeOut);
    if(fadeOut>0){ fadeOut-=5;}
    println(fadeOut);
    scene007.update();
  }else if (millis()>26500 && millis()<30000){
    scene007.update();
    scene007.movement();
  }else if(millis()>30000 && millis()<31000){
    scene008B.update();
    scene008B.cutLine();
  }else if(millis()>31000 && millis()<38000){
    scene009.update();
  }
  
  
  
}
