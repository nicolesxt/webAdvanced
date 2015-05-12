/*
The NeuroSky MindWave device did not ship with any proper Java bindings.
 Jorge C. S. Cardoso has release a processing library for the MindSet device
 but that communicates over the serial port. NeuroSky has since release a connector
 application that talks JSON over a normal socket. 
 
 Using the same API as the previous library this talks directly to the ThinkGear
 connector.
 
 Info on this library
 http://crea.tion.to/processing/thinkgear-java-socket
 
 Info on ThinkGear 
 http://developer.neurosky.com/
 
 Info on Cardoso's API
 http://jorgecardoso.eu/processing/MindSetProcessing/
 
 Have fun and get some peace of mind!
 
 xx
 Andreas Borg
 Jun, 2011
 borg@elevated.to
 */
import neurosky.*;
import org.json.*;
ThinkGearSocket neuroSocket;
int attention=10;
int meditation=10;
PFont font;


int attentionLength, distractionLength;
float transparency;
PVector pos1;

void setup() {
  size(600, 600);
  background(255);
//  ThinkGearSocket neuroSocket = new ThinkGearSocket(this);
//  try {
//    neuroSocket.start();
//  } 
//  catch (ConnectException e) {
//    //println("Is ThinkGear running??");
//  }
  smooth();
  //noFill();
//  font = createFont("Verdana", 12);
//  textFont(font);

  pos1 = new PVector();
  
}

void draw() {
  
  simulator();

//  background(255);
  smooth();
  transparency = map(attention, 0, 90, 0, 10);
  fill(255, 0, 0, transparency);
  noStroke();
  
  //attention circle
  ellipse(width/2, height/2, attention*5, attention*5);
  delay(0);
  
  //distraction circle
  fill(random(120, 190), random(200, 255), random(200, 255), random(100, 180));
  ellipse(pos1.x, pos1.y, distractionLength*10, distractionLength*10);

//attention
    if (attention >45) {
    attentionLength ++;
    distractionLength = 0;
  }
  else {
    attentionLength = 0;
    distractionLength ++;
    pos1.set(random(600), random(600),0);
  }
  
  println("attention length:" + attentionLength);
  println("distraction length:" + distractionLength);






  if (attentionLength>10) {
    //ellipse(random(600),random(600), attention, attention);
    attention10();
  }else if(attentionLength>30){
    attention30();
  }else if(attentionLength>50){
    attention50();
  }
  
if(distractionLength>1){
    largeDistraction();
  }
  
  
}

void simulator(){
  attention = int(random(20, 90));
}



void attention10(){
  
}

void attention30(){
  
}

void attention50(){
  
}

void smallDistraction(){

}

void largeDistraction(){
  background(255,255,255,20);
  println("ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
}


//
//
//public void attentionEvent(int attentionLevel) {
//  println("Attention Level: " + attentionLevel);
////  attention = attentionLevel;
//  
//}
//
//
//void rawEvent(int[] raw) {
//  //println("rawEvent Level: " + raw);
//}  
//
//void stop() {
//  neuroSocket.stop();
//  super.stop();
//}

