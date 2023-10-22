// numbers
let x  = 10.8;
// let y = 1234n;
let z = NaN;

// string
let str = 'Hello world';
let symb = Symbol('as');

// boolean
let bool = true;
bool = false;

// nothing
let undef: undefined = undefined;
let nul: null = null;

// literal (литерал) - конкретное значение, которое не может быть измемено
const num = 100;
const str2 = 'sad';

// universal
let universal: any = 1
universal = []
universal = ''
// any позволяет обращаться к ПОТЕНЦИАЛЬНЫМ методам и свойствам значения
universal.toFixed()

let unk: unknown = 2
// unknown НЕ позволяет обращаться к ПОТЕНЦИАЛЬНЫМ методам и свойствам значения
if(typeof unk === 'string') unk.toLowerCase()

export {}