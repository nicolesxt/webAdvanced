class Flock{
ArrayList<Boid> boids;

Flock(){
  boids = new ArrayList<Boid>();
}
  
  void run(){
    for (Boid other:boids){
      other.run(boids);
    }
  }
  
  void addBoid(Boid other){
    boids.add(other);
  }
}
