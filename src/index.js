module.exports = function toReadable (number) {
  let numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
  }
  let resultReadbleNumber = '';
  if(number /100 >= 1){
    resultReadbleNumber += `${numbers[Math.floor(number / 100)]} hungred`;
  }
  if(number%100 > 19){
    result += `${numbers[Math.floor((number%100) / 10) * 10]} `; 
    if(number%10 !== 0){
      result += `${numbers[number % 10]}`;
    }
  }else{
    resultReadbleNumber += `${numbers[number%20]}`;
  }
  if (number == 0 && result == '') {
    return 'zero';
  }
  return resultReadbleNumber.trim();
}
