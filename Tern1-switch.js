let a = Math.floor(Math.random() * 100);
let result;

let firstPart;
switch (true) {
  case a > 10:
    firstPart = a;
    break;
  default:
    firstPart = a * 2;
}

switch (true) {
  case firstPart > 5:
    result = (2 * a) + 1;
    break;
  default:
    let secondPart;
    switch (true) {
      case a < 3:
        secondPart = 1;
        break;
      default:
        secondPart = 2 * (a - 2);
    }
    
    switch (true) {
      case secondPart > 4:
        result = 5;
        break;
      default:
        switch (true) {
          case a % 2 == 0:
            result = 6;
            break;
          default:
            result = 7;
        }
    }
}

console.log(`a = ${a}`);
console.log(`Результат: ${result}`);