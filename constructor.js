function Createcube(x,y,z){
  this.x = x
  this.y = y
  this.z = z
totalVolume = function(){
  return this.x * this.y * this.z
}
}

const cube = new Createcube(5,5,5)

console.log(cube)
