module.exports = function toReadable (number) {
  let answer = '';
  let spase = ' ';
  const numbers = {
      0:'zero',
      1:'one',
      2:'two',
      3:'three',
      4:'four',
      5:'five',
      6:'six',
      7:'seven',
      8:'eight',
      9:'nine',
      10:'ten',
      11:'eleven',
      12:'twelve',
      13:'thirteen',
      14:'fourteen',
      15:'fifteen',
      16:'sixteen',
      17:'seventeen',
      18:'eighteen',
      19:'nineteen',
      20:'twenty',
      30:'thirty',
      40:'forty',
      50:'fifty',
      60:'sixty',
      70:'seventy',
      80:'eighty',
      90:'ninety',
      100:'hundred'
  }
  let numString = String(number)
if (number <= 20||number == 20||number == 30||number == 40||number == 50||number == 60||number == 70||number == 80||number == 90) {
return numbers[number]
}
if ( number == 100||number == 200||number == 300||number == 400||number == 500||number == 600||number == 700||number == 800||number == 900 ) {
return  answer+=numbers[numString[0]]+spase+numbers[100]
}
if ( number > 20 && number < 30 ) {
return  answer+=numbers[20]+spase+numbers[numString[1]]
}
if ( number > 30 && number < 40 ) {
return answer+=numbers[30]+spase+numbers[numString[1]]
}
if ( number > 40 && number < 50 ) {
return answer+=numbers[40]+spase+numbers[numString[1]]
}
if ( number > 50 && number < 60 ) {
return answer+=numbers[50]+spase+numbers[numString[1]]
}
if ( number > 60 && number < 70 ) {
return  answer+=numbers[60]+spase+numbers[numString[1]]
}
if ( number > 70 && number < 80 ) {
return  answer+=numbers[70]+spase+numbers[numString[1]]
}
if ( number > 80 && number < 90 ) {
return  answer+=numbers[80]+spase+numbers[numString[1]]
}
if ( number > 90 && number < 100 ) {
return answer+=numbers[90]+spase+numbers[numString[1]]
}
if ( numString.length>=3 ) {  
for (let i = 0; i < numString.length; i++) {
let numString = String(number)
let newstr = numString.slice(1)
let nub = Number(newstr)
if ( numString[1] == 0 ) {
  return answer+=numbers[numString[0]]+spase+numbers[100]+spase+numbers[numString[2]]
}
if ( nub < 20) {
  return answer+=numbers[numString[0]]+spase+numbers[100]+spase+numbers[nub]
}
if ( nub > 20 && nub < 30 ) {
  return answer+=numbers[numString[0]]+spase+numbers[100]+spase+numbers[20]+spase+numbers[numString[2]]
}
if ( nub > 30 && nub < 40 ) {
  return answer+=numbers[numString[0]]+spase+numbers[100]+spase+numbers[30]+spase+numbers[numString[2]]
}
if ( nub > 40 && nub < 50 ) {
  return answer+=numbers[numString[0]]+spase+numbers[100]+spase+numbers[40]+spase+numbers[numString[2]]
}
if ( nub > 50 && nub < 60 ) {
  return answer+=numbers[numString[0]]+spase+numbers[100]+spase+numbers[50]+spase+numbers[numString[2]]
}
if ( nub > 60 && nub < 70 ) {
  return answer+=numbers[numString[0]]+spase+numbers[100]+spase+numbers[60]+spase+numbers[numString[2]]
}
if ( nub > 70 && nub < 80 ) {
  return answer+=numbers[numString[0]]+spase+numbers[100]+spase+numbers[70]+spase+numbers[numString[2]]
}
if ( nub > 80 && nub < 90 ) {
  return answer+=numbers[numString[0]]+spase+numbers[100]+spase+numbers[80]+spase+numbers[numString[2]]
}
if ( nub > 90) {
    return answer+=numbers[numString[0]]+spase+numbers[100]+spase+numbers[90]+spase+numbers[numString[2]]
}
if (numString[2] == 0) {
return answer+=numbers[numString[0]]+spase+numbers[100]+spase+numbers[newstr]
}
}
}
 return answer
}
//если число больше 10 тогда выводим twenty и 2ю цифру на инглише
//если число больше 100 тогда выводим one hundred и 2ю и 3ю цифру  на инглише