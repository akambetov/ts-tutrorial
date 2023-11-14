const x = 1
const isNegative = x >= 0 ? 'no' : 'yes'

interface StringRecord {
  [key: string]: string
}

interface DateRecord {
  [key: string]: Date
}

// поддерживается вложенные тернарки. 
// !!! if/else, switch/case не работаю
type MyRecodr<T> = T extends string ? StringRecord : DateRecord

type StringRecordType = MyRecodr<string> 
const stringRecordObj:StringRecordType = {a: '1'}

type DateRecordType = MyRecodr<Date> 
const DateRecordObj:DateRecordType = {a: new Date()}

export {}