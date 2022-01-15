class Dog {
  constructor(name, colour) {
    this._name = name
    this._colour = colour
  }
  get name() {
    return this._name
  }
  set name(new_name) {
    this._name = new_name
  }
  get colour() {
    return this._colour
  }
  set colour(new_colour) {
    this._colour = new_colour
  }
  speak() {
    console.log(`Woof! My name is ${this._name}!`)
  }
}

const bonzo = new Dog('Bonzo', 'brown')
console.log(bonzo.name)
bonzo.colour = 'pied'
console.log(bonzo.colour)
bonzo.speak()
console.log(typeof bonzo)
