import _ from 'lodash';
'use strict'

const userA = [{
    userId: '1',
    name: 'SOOWAN'
  },
  {
    userId: '2',
    name: 'HYEBIN'
  }
]

const userB = [{
    userId: '1',
    name: 'SOOWAN'
  },
  {
    userId: '3',
    name: 'Dohyun'
  }
]

// 이미 중복이 발생된 병합데이터를 중복제거하는 함수
const userC = userA.concat(userB); // 배열 병합해서 새로운 배열을 반환
console.log('concat', userC);
console.log('uniqBy', _.uniqBy(userC, 'userId')); // .uniqBy(중복된 배열데이터, 중복방지 속성);

// 중복없이 데이터를 병합하는 함수
const userD = _.unionBy(userA, userB, 'userId'); // .unionBy(데이터1, 데이터2, 중복방지 속성)
console.log('unionBy', userD);

const users = [
  {
    userId: '1', name: 'SOOWAN'
  },
  {
    userId: '2', name: 'HYEBIN'
  },
  {
    userId: '3', name: 'DOHYUN'
  },
  {
    userId: '4', name: 'Evan'
  },
  {
    userId: '5', name: 'Amy'
  }
]

const foundUser = _.find(users, { name: 'Amy' });
const foundUserIndex = _.findIndex(users, { name: 'Amy' }); // users라는 배열데이터에서 Amy라는 name속성을 가진 객체의 인덱스를 추출
console.log(foundUser);
console.log(foundUserIndex);

_.remove(users, {name: 'SOOWAN' }); // users라는 배열데이터에서 name속성이 SOOWAN인 객체데이터 삭제
console.log(users);