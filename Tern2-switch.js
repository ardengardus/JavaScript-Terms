function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  let result = '';
  
  switch (true) {
    case a > 10:
      result = 'a > 10';
      break;
    default:
      switch (a) {
        case 5:
          result = 'a <= 10 - пример особого случая';
          break;
        default:
          result = 'a <= 10 ';
      }
  }
  
  switch (a) {
    case 15:
      result += 'но a не равно 15';
      break;
    default:
  }
  
  switch (true) {
    case a > 5:
      result += 'и a > 5';
      break;
    default:
      result += 'и a <= 5';
  }
  
  switch (a % 2) {
    case 1:
      result += ' и a - нечётное';
      break;
    case 0:
      result += ' и a - чётное';
      break;
  }
  
  console.log(result);
  return result;
}

manyChecks();