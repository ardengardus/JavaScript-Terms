function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  let result = '';
  
  if (a > 10) {
    result = 'a > 10';
  } else {
    if (a === 5) {
      result = 'a <= 10 - пример особого случая';
    } else {
      result = 'a <= 10 ';
    }
  }
  
  if (a === 15) {
    result += 'но a не равно 15';
  }
  if (a > 5) {
    result += 'и a > 5';
  } else {
    result += 'и a <= 5 ';
  }
  if (a % 2) {
    result += ' и a - нечётное';
  } else {
    result += ' и a - чётное';
  }
  
  console.log(result);
  return result;
}

manyChecks();