
const cube = {
  x: 30,
  y: 30,
  z: 30
}


const kids = ['jack', 'hank']

Array.prototype.upcaseAndJoin = function(){
  const uppers = []
  for (var i = 0; i < this.length; i++) {
    uppers.push(this[i].toUpperCase())
  }
  return uppers.join(", ")
}

console.log(kids.upcaseAndJoin)
