'use strict'

// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법
// ""를 사용

import myData from './myData.json';

console.log(myData);

const user = {
  name: 'SOOWAN',
  age: 28,
  emails: [
    'dlsjdfjdf@gmail.com',
    'woeieuq@gmail.com'
  ]
}
console.log('user', user);

// JSON 형태로 변환시키는 메소드(stringify)
const str = JSON.stringify(user);
console.log('str', str);
console.log(typeof str);

// JSON데이터를 JS에 맞는 데이터타입으로 변환
const obj = JSON.parse(str);
console.log('obj', obj);