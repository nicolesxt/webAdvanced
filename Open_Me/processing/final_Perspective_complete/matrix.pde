float s = sqrt(3);

class matrix{
  matrix(){
  //positions
  x = width/2-2*a/3;
  y = height/2;
  //size
  a = 70;
  me = a/sqrt(3);
  }
  
  void update(){
  stroke(#FA5858);
  //horizontal
  line(0,y,2*x,y);
  line(0,y+1*a*s/3,2*x,y+1*a*s/3);
  line(0,y+2*a*s/3,2*x,y+2*a*s/3);
  line(0,y+3*a*s/3,2*x,y+3*a*s/3);
  line(0,y+4*a*s/3,2*x,y+4*a*s/3);
  line(0,y+5*a*s/3,2*x,y+5*a*s/3);
  line(0,y+6*a*s/3,2*x,y+6*a*s/3);
  line(0,y-1*a*s/3,2*x,y-1*a*s/3);
  line(0,y-2*a*s/3,2*x,y-2*a*s/3);
  line(0,y-3*a*s/3,2*x,y-3*a*s/3);
  line(0,y-4*a*s/3,2*x,y-4*a*s/3);
  line(0,y-5*a*s/3,2*x,y-5*a*s/3);
  line(0,y-6*a*s/3,2*x,y-6*a*s/3);
  //vertical
  line(x,0,x,2*y);
  }
}
