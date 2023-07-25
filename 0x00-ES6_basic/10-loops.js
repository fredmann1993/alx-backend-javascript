export default function appendToEachArrayValue(array, appendString) {
  let newArr = []
  for (let val of array) {
      val = appendString + val
      newArr.push(val)

  }

  return newArr;
}

