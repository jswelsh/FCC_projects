const ToRomanConstructor = (decimalPlace, number) => {
  let rc = decimalPlace === 4
    ? {x:'M', y: 'L', z: 'C'}
    : rc = decimalPlace === 3
    ? {x:'C', y: 'D', z: 'M'}
    : decimalPlace === 2
    ? {x:'X', y: 'L', z: 'C'}
    : {x:'I', y: 'V', z: 'X'}
/*  */
  if(number < 5) {
    return (
      number < 3
        ? number === 0
        ? ''
        : number === 1
        ? rc.x
        : rc.x + rc.x
      : number === 3
        ? rc.x + rc.x + rc.x
        : rc.x + rc.y
    )
  } else {
    return (
      number < 8
        ? number === 5
          ? rc.y
          : number === 6
          ? rc.y + rc.x
          : rc.y + rc.x + rc.x
        : number === 8
          ? rc.y + rc.x + rc.x + rc.x
          : rc.x + rc.z
    )
  }
}

const convertToRoman = (number, romanStore = []) => {
  const arrOfNumber = typeof number === 'number'
  ? Array.from(number.toString()).map(Number)
  : number
  if ( arrOfNumber.length > 0){
    romanStore.push(ToRomanConstructor(arrOfNumber.length, arrOfNumber[0]))
    arrOfNumber.shift()
    romanStore.push(convertToRoman(arrOfNumber).toString())
  }
  return romanStore.join('')
}


convertToRoman(36);