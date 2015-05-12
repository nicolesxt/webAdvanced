class Boid{
PVector location;
PVector velocity;
PVector acceleration;
int r;
float maxforce;
float maxspeed;

  
  Boid (float x, float y){
    acceleration = new PVector(0,0);
    float angle = random(TWO_PI);
    velocity = new PVector(cos(angle), sin(angle));
    location = new PVector(x, y);
    r = 2;
    maxspeed = 2;
    maxforce = 0.03;
  }
  void run(ArrayList<Boid> boids){
   flock(boids);
   render();
   update();
   borders();
  }
  void applyForce(PVector force){
    acceleration.add(force);
  }
  void flock(ArrayList<Boid> boids){
  PVector sep = separation(boids);
  PVector ali = alignment(boids);
  PVector coh = cohesion(boids);
  
  sep.mult(2.0);
  ali.mult(1.5);
  coh.mult(1.5);
  
  applyForce(sep);
  applyForce(ali);
  applyForce(coh);
  
  }
  void update(){
    velocity.add(acceleration);
    velocity.limit(maxspeed);
    location.add(velocity);
    acceleration.mult(0);
  }
  PVector seek(PVector target){
    PVector desired = PVector.sub(target, location);
    desired.normalize();
    desired.mult(maxspeed);
    PVector steer = PVector.sub(desired, velocity);
    steer.limit(maxforce);
    return steer;
  }
  void render(){
    float head = velocity.heading2D() +radians(90);
    fill(255,255,0);
    stroke(255);
    pushMatrix();
    translate(location.x, location.y);
    ellipse(0,0,r,r);
    popMatrix();
  }
  void borders(){
    if (location.x < mouseX-130)
    location.x = mouseX+130;
    if (location.y < mouseY-130)
    location.y = mouseY+130;
    if (location.x > mouseX+130)
    location.x = mouseX-130;
    if (location.y > mouseY+130)
    location.y = mouseY+130;
  }
  ////////////////SEPARATION
  PVector separation (ArrayList<Boid> boids){
    float neighbordist = 25.0f;
    PVector steer = new PVector (0,0,0);
    int count = 0;
    for (Boid other:boids){
      float d = PVector.dist(location, other.location);
      if ((d>0) && (d<neighbordist)){
        PVector diff = PVector.sub(location, other.location);
        diff.normalize();
        diff.div(d);
        steer.add(diff);
        count++;
    }
    }
    if (count>0){
      steer.div((float)count);
    }
    return steer;
  }
  //////////////ALIGNMENT
  PVector alignment (ArrayList<Boid> boids){
    float neighbordist = 50;
    PVector sum = new PVector (0,0);
    int count = 0;
    for (Boid other:boids){
      float d = PVector.dist(location, other.location);
      if ((d>0) && (d<neighbordist)){
      sum.add(other.velocity);
      count ++;
      }
    }
    if (count>0){
    sum.div(count);//sum.div(boid.size());
    sum.normalize();
    sum.mult(maxspeed);
    PVector steer = PVector.sub(sum, velocity);
    steer.limit(maxforce);
    return steer;
  }else{
    return new PVector(0,0);
  }
  }
  //////////////COHESION
  PVector cohesion (ArrayList<Boid> boids){
    float neighbordist = 50;
    PVector sum = new PVector(0,0);
    int count = 0;
    for (Boid other:boids){
      float d = PVector.dist(location, other.location);
      if ((d>0) && (d<neighbordist)){
      sum.add(other.location);
      count++;
      }
    }
    if (count>0){
      sum.div(count);
      return seek(sum);//seek average location of our neighbors
    }else{
      return new PVector(0,0);
    }
  }
  
  
  
}
