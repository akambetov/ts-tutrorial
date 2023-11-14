type Answer_1 = 64 extends number ? true : false // true
type Answer_2 = number extends 64 ? true : false // false
type Answer_3 = string[] extends any ? true : false // true
type Answer_4 = string[] extends any[] ? true : false // true
type Answer_5 = never extends any ? true : false // true
type Answer_6 = any extends any ? true : false // true

// в Anwser_7 некорректное стравнение, потому что тут для Date возрващается interface Date
type Answer_7 = Date extends {new(...args: any[]): any} ? true : false
// поэтому в Answer_8 к Date применяем typeof
type Answer_8 = typeof Date extends {new(...args: any[]): any} ? true : false
