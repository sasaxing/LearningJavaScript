'use strict'

class Greeter {
  constructor (name, greetStyle) {
    this.name = name
    this.greetStyle = greetStyle
  }

  greet () {
    return this.greetStyle()
  }

}

module.exports = Greeter
