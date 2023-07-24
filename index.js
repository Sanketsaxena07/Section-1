console.log('Hello Javascript!!');
console.log('another line');

age = 27 ;

console.log(age);

console.log( typeof age );

message = 'nice';

console.log(message);

isHungry = true;

console.log(typeof isHungry);

empty = null ;

console.log(typeof null);

if(age >= 18){
    console.log('you are eligible for DL');
    x='this is global';
    let y = 'this should be local';
    console.log(y);
    var c = 'this is for funztion';
    const pi = 3.14;
    pi = 21.4353;
}else{
    console.log('noot eligible for DL');
}

console.log(x);
console.log(c);