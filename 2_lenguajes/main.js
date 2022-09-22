/* let array = [];
const food = ["🍏", "🍷", "🥕", "🥘 ", "🍩"];
console.log("Original array:");
console.log(food);

console.log("1.1 Head:");
const head = ([first, ...rest] = array) => first;
console.log(head(food));

console.log("1.2 Tail:");
const tail = ([, ...rest] = array) => [, ...rest];
console.log(tail(food));

console.log("1.3 Init:");
const init = array => array.slice(0, -1);
console.log(init(food));

console.log("1.4 Last:");
const last = array => array[array.length - 1];
const lastOther = array => array.slice(-1);
console.log(last(food));
console.log(lastOther(food));

const main = ["🍅", "🥑", "🥕 ", "🌽"];
const drink = ["🍺", "🍹"];
const dessert = ["🫐", "🍨", "🍌"];

console.log("2.1 Concat:");
const concat = (a, ...spread) => a.concat(...spread); // Implementation here.
console.log(concat(main, drink, dessert));

console.log("3.1 Clone");
const orderFood = {
  main: "🍣",
  drink: "🍸",
  dessert: "🍦",
};

function clone(resource) {
  return Object.assign({}, resource);
}
const orderTheSame = clone(orderFood);
console.log("Original:");
console.log(orderFood);
console.log("Copy:");
console.log(clone(orderTheSame));

console.log("3.2 Merge");
const goCinema = {
  food: "🍿",
  film: "🎭",
  drink: "🫙",
};
const merge = (a, b) => Object.assign({}, a, b);
console.log(merge(orderFood, goCinema));
 */
console.log("4 Read Books");
const myBooks = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books, titleToSearch) {
  const bookFiltered = books.filter(book => book.title === titleToSearch);
  if (bookFiltered) {
    return bookFiltered.map(book => book.isRead === true);
  }
  return bookFiltered;
}

console.log(isBookRead(myBooks, "Devastación")); // true
console.log(isBookRead(myBooks, "Canción de hielo y fuego")); // false
console.log(isBookRead(myBooks, "Los Pilares de la Tierra")); // false
/* 

console.log("5 Slot Machine");

class SlothMachine {
   ...
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
 */
