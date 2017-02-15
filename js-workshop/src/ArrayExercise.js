module.exports =
  class {
    static getAllEvenNumbers (numbers) {
      return numbers.filter(x => x%2===0)
    }

    static contains (numbers, contains) {
      return numbers.some(x => x===contains)
    }

    static doubleEachValue (numbers) {
      return numbers.map(x => 2*x)
    }

    static sortByLastChar (strings) {
      return strings.sort((a,b) => a[a.length-1] > b[b.length-1])
    }
}
