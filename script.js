"use strict"; //строгая запись

/*alert(3 +
    1
    + 2);*/

var message; //undefined -неопределенное значение 
message = 'Привет'; //задаем значение нашей переменной


// alert(message);

var age = '20';

var username = 'Вася', height = 200, message2 = 'Привет';

console.log (username + ' ' + height + ' ' + message2);

var hello = 'Привет Сергей';
var chat;
chat = hello;
console. log (chat);


var SRC_BD = '192.11.11.11';
const COLOR = '#fff';


//Числа number

var firstDayLiter = 10;

var d = 12.123; //так записывать не нужно, нужно записывать полное имя как выше
/*
Infinity - выражение которое стримится к безконечности
*/

 var num = 1 / 0;

 console.log(num);

 //NaN - когда множится какие то данные на число

 console.log('sdsdf' * 10);



 // Строки string

 var str = 'Мама мыла раму';

 var str2 = 'Текст "ТЕкст2"';

 //Булевый boolean

 var ledOn = true;
 ledOn = false;

 //null
 
 var noIndex = null;

 //undefined

 var good = undefined;

 //object объект

 var man = {
    name: 'Вася',
    age: 30
 };



 //Оператор typeof - возвращает обект который записан в переменную

 console.log( typeof(man) );
 console.log( typeof 'dsfsdferkfw');

 

 ///Операторы
 //Унарный, бинарный, операнд

 //Операнды 10 * 2 - операндами будут числа 10 и 2 те что учавствуют в операции (Еще их называют Аргумнты Оператора)
//Знак умножения это оператор

//Унарный оператор - тот который пременяется к одном Операнду.

var x = 1;
x = -x //Унарный минус
console.log(x);

//Бинарные операторы - те которые применяются к двум Операндам

var y = 1, z = 3;
console.log( y - z );

//Сложение сторк, бинарный плюс

var a = 'моя' + 'строка';
console.log(a);

//Преобразование к числу

console.log( +1 );
console.log( +(1-2) );

console.log( +'10' + + '10' );
console.log( +a );

//Оператор присваивания

x = 2 * 2 + 1;

var a, b, c;
a = b = c = 2 + 2;

console.log(a);
console.log(b);
console.log(c);

var a = 1;
var b = 2;

var c = 3 - (a = b + 1); //0

// Взятие остатка или %

console.log( 5%2 ); // 1
console.log( 6%3 ); // 0

//инкримент ++ и декримент --

var number = 1;
number++;
console.log(number); //2

var number = 1;
number--;
console.log(number); //0

//Постфиксная и префиксная форма

number++; //постфиксная
++number; // префиксная

var i = 1;
var a = i++;

console.log(a); //1
console.log(i); //2


var i = 1;
var a = ++i;


console.log(a); //1
console.log(i); //2

var i = 0;
console.log( i++ ); //0

//сокращенная арифметика += -= *= /= %=

var i = 10;
i += 3;

//Оператор запятая
 
var a = (5, 6);

console.log(a); //6



