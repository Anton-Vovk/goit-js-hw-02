
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt(`Введите число`);

  if (input === null) {
    break;
  }
  input = Number(input);

  const value = Number(input);
  numbers.push(value);
  console.log(numbers);
};

for (const number of numbers) {
  console.log(number);
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);