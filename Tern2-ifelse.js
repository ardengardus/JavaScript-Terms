function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  let result = '';
  
  if (a > 10) {
    result = 'a is bigger than 10';
  } else {
    if (a === 5) {
      result = 'a is less than or equal to 10 an example of a special case';
    } else {
      result = 'a is less than or equal to 10 ';
    }
  }
  
  if (a === 15) {
    result += 'but a is not 15';
  }
  
  if (a > 5) {
    result += 'and a is greater than 5';
  } else {
    result += 'and a is less than or equal to 5 ';
  }
  
  if (a % 2) {
    result += ' and a is odd';
  } else {
    result += ' and a is even';
  }
  
  console.log(result);
  return result;
}

manyChecks();