let n = 5;
let symbol = '*';
let display = '';

for (let asterisks = 0; asterisks < n; asterisks += 1) {
    display += symbol;
};

for (let line = 0; line < n; line += 1 ){
    console.log(display);
};
