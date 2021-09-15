'use strict'
// 하나의 모듈에서는 하나의 exprot default만 가능 
// name이 있는 export는 갯수 상관X
import _ from 'lodash'; // From `node_modules`!
import getType from './getType' // getType.js


// 이름이있는 export 가져오는 법 (as 키워드는 사용해서 이름 변경 가능)
// import { random, user as soowan} from './getRandom'; // getRandom.js
import * as R from './getRandom';

console.log(_.camelCase('the hello world'));
console.log(getType([1, 2, 3]));
// console.log(random(), random());
// console.log(soowan);
console.log(R);

