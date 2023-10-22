// Сужение (уточнение) типов
function example(x?: number | string) {
  if(typeof x === "string") {
    x.toLowerCase()
  } else if (typeof x === 'number') {
    x.toFixed(2)
  } else if (x === undefined) {
    console.log('no value')
  } else {
    x
  }
}

function example2(strs: string | string[] | null) {
  // if (typeof strs === 'object') - cant use, because null is also an object
  if (strs && typeof strs === 'object') {
    console.log(strs.join(' '))
  } else if (typeof strs === 'string') {
    strs.toUpperCase()
  }
}

example2(['sd'])