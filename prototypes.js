const cubeprototype = {
  totalVolume: function (){
   return this.x * this.y * this.z
 }
}
const cube = {
  x: 30,
  y: 30,
  z: 30,
  totalVolume: function(){
    return this.x * this.y * this.z
  }
}
const newcubething = cube.bind(cubeprototype)
cube.prototype = cubeprototype;



console.log(cube.prototype)
