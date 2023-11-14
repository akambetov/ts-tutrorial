export {};
// Exclude
type T0 = Exclude<'a' | 'b' | 'c' , 'a'>
type T1 = Exclude<'a' | 'b' | 'c' , 'a' | 'b'>
type T2 = Exclude<string | number | (()=>void) , Function>

type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504

type NumericStatus = Exclude<Status, string>
type TextStatus = Exclude<Status, number>



// Extract
type T00 = Extract<'a' | 'b' | 'c' , 'a'>
type T01 = Extract<'a' | 'b' | 'c' , 'a' | 'b'>
type T02 = Extract<string | number | (()=>void) , Function>

interface Person {
  age: number
  firstName: string
  lastName: string
  sex: 'male' | 'female'
  country: string
  education: string,
  skills: string[]
}

type PersonNames = Extract<keyof Person, 'firsName' | 'lastName' | 'fullName'>

// NonNullable
type T000 = NonNullable<string | number | never| undefined | null>
type T001 = NonNullable<string[] | undefined | null>


// Example
function key<O extends object>(obj: O):Extract<keyof O, string>[] {
  const currentKeys = []
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key)
  }
  
  return currentKeys
}