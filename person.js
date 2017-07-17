// this is called a constructor, dude

function Person (firstname, lastname) {
this.firstname = firstname
this.lastname = lastname
  this.fullName = function () {
    return `${this.firstname} ${this.lastname}`
  }
}

// this initializes a new instance of said constructor so look at this if you forget how in the heck to call one

const jwo = new Person('Jesse', 'Wolgamott')
console.log(jwo.fullName())

function Housesdescriptor (address, owner, yearbuilt, price){
  this.address = address
  this.owner = owner
  this.yearbuilt = yearbuilt
  this.price = price
  this.listing = function () {
    return `located at: ${this.address} , this beautiful home is owned by ${this.owner}. Built in the year of our lord, anno ${this.yearbuilt}, it goes for a swell price of ${this.price} bucks.`
  }
}
const patsHouse = new Housesdescriptor('3910 Swathmoore Street', 'Padriag', 1990, 450000000)
patsHouse.owner = jwo.fullName()
console.log(patsHouse.listing())
