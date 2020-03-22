// Есть явные и неявные преобразования типов данных
// Явные
let value

//Number to String
value = String(19);
value = String(10 /'2');

//with method
value = (24).toString();

// Boolean to String\
value = String(true);

// Array to String
value = ([2,2.3,42, 'fsdfsd']).toString();

//!!!! Object to String -> [object Object]
value = ({name: 'Vital'}).toString();

// Symbol to String
value = Symbol().toString();

// Неявное преобразование
value = 3 + '' + 32; // Concat: 332
value = 30 - 'sdkflskjfsd'; // NaN

value = true + 10;

value = 1 + false + null;

value = 1 + undefined; // NaN


// String to Number
value = Number('0');
value = Number(true); //1
value = Number(null); // 0
value = Number(undefined); // NaN
value = Number('true');
value = Number([2,3,3]);
value = Number({name: 'fdfdfd'});

// ParseInt and  parseFloat
value = parseInt(' 21.32sdlkfjdskjfdsl24')
value = parseFloat(' 21.32sdlkfjdskjfdsl24')
// value = parseFloat({name: '23'})


// Boolean

value = Boolean(''); // false
value = Boolean(' '); // true
value = Boolean(0);// false
value = Boolean(4); //true
value = Boolean(null); // false
value = Boolean(undefined); // false
value = Boolean([undefined, 21]); // true
value = Boolean({});

value = undefined + undefined;



console.log(value);
console.log(typeof value);