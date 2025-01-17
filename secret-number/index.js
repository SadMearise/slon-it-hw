const compareValues = (value, wantedValue) => value - wantedValue;

const findWithBinarySearch = (array, wanted) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = start + Math.floor((end - start) / 2);

    console.log(`Компьютер 2: Пробую число ${middle + 1}.`);
    
    if (compareValues(array[middle], wanted) === 0) {
      return console.log("Компьютер 1: Угадал!");
    };

		if (compareValues(array[middle], wanted) < 0) {
      console.log("Компьютер 1: Больше.");
      
      start = middle + 1;
    } else {
      console.log("Компьютер 1: Меньше.");

      end = middle - 1;
    }
  }
}

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const minRandomNumber = 1;
const maxRandomNumber = 100;

const secretNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
console.log("Компьютер 1 загадал число: ", secretNumber);

const rangeForSearch = Array(maxRandomNumber).fill().map((el, index) => index + 1);

findWithBinarySearch(rangeForSearch, secretNumber);
