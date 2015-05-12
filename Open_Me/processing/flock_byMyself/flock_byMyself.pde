Flock flock;


void setup(){
  size(800, 800);
  flock = new Flock();
  for (int i=0; i< 200; i++){
    Boid b = new Boid(width/2, height/2);
    flock.addBoid(b);
  }
}


void draw(){
  background(0);
  flock.run();
}
