function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  let result = '';
  
  switch (true) {
    case a > 10:
      result = 'a is bigger than 10';
      break;
    default:
      switch (a) {
        case 5:
          result = 'a is less than or equal to 10 an example of a special case';
          break;
        default:
          result = 'a is less than or equal to 10 ';
      }
  }
  
  switch (a) {
    case 15:
      result += 'but a is not 15';
      break;
    default:
  }
  
  switch (true) {
    case a > 5:
      result += 'and a is greater than 5';
      break;
    default:
      result += 'and a is less than or equal to 5 ';
  }
  
  switch (a % 2) {
    case 1:
      result += ' and a is odd';
      break;
    case 0:
      result += ' and a is even';
      break;
  }
  
  console.log(result);
  return result;
}

manyChecks();