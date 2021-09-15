'use strict'

const user = {
  name: 'SOOWAN',
  age: 28,
  emails: [
      'disdlfjk@gmail.com',
      'wieur@gmail.com'
  ]
}


localStorage.setItem('user', JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem('user')));

// localStorage의 데이터 수정
const str = localStorage.getItem('user');
const obj = JSON.parse(str);

