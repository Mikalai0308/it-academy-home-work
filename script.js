// задача №1
let k = '#';
for (let i=0; i<7; i=i+1) {
console.log(k);
k=k + '#';
};


// задача №2
let symb1 = '#';
let symb2 = ' ';
let result ='';
let rev = true;
for (let i = 0; i < 8; i=i+1) {
  for (let k = 0; k < 8; k=k+1) {
    if ((k+rev) % 2 == 0) {
      result=result + symb2;
    } else {
      result=result + symb1;
    }
  }
  console.log(result);
  result='';
  rev = ! rev;
}

// задача №3
let n;
do {
  n = prompt("Введите число больше 100?");
} while (n <= 100 && n);
