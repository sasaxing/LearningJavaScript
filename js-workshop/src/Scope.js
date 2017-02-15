'use strict'

module.exports = function OuterScope () {
  this.getInnerScope = function () {
    return new InnerScope()
  }

  let outerScope0 = 0

  function InnerScope () {
    class InnerScope0 {
    }

    this.getOuterScope0 = () => outerScope0
    this.getOuterScope1 = () => outerScope1
    this.getOuterScope2 = () => outerScope2
    this.getOuterScope3 = () => outerScope3

    this.getInnerScope0 = () => InnerScope0
    this.getInnerScope1 = () => innerScope1
    this.getInnerScope2 = () => innerScope2
    this.getInnerScope3 = () => InnerScope3

    var innerScope1 = 1
    let innerScope2 = 2

    class InnerScope3 {
    }
  }

  var outerScope1 = 1
  let outerScope2 = 2
  const outerScope3 = 3

  this.getOuterScope0 = () => outerScope0
  this.getOuterScope1 = () => outerScope1
  this.getOuterScope2 = () => outerScope2
  this.getOuterScope3 = () => outerScope3

  this.getInnerScope0 = () => InnerScope0
  this.getInnerScope1 = () => innerScope1
  this.getInnerScope2 = () => innerScope2
  this.getInnerScope3 = () => InnerScope3
}
