type NestedNumbers = number | NestedNumbers[]

const nums: NestedNumbers = [1, 2, [3, 4, [5, 6, [7, 8]]]]

nums.push(9)
nums.push([10, 11])

console.log(nums)


// JSON
type JSONPrimitive = string | number | boolean | null
type JSONObject = {[k: string]: JSONValue}
type JSONArray = JSONValue[]
type JSONValue = JSONPrimitive | JSONObject | JSONArray

function isJSON ( arg: JSONValue) {}

isJSON('hi')
isJSON(5)
isJSON(true)
isJSON(null)
isJSON({"arr": "[1,2,3]", "num": 1, "str": 'str', obj: {oArr: [4,5], oObj: {a: 1, b:'2'}}})