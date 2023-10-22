function tuplePairCreator<T>(first: T) {
  return function<U>(second: U) : [T , U]{
    return [first, second]
  }
}

const toTupleWith1 = tuplePairCreator(1)
const tuplePair = toTupleWith1(2)
const tuplePair2 = toTupleWith1('2')
console.log({tuplePair, tuplePair2})