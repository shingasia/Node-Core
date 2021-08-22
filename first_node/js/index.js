const { odd, even} = require('./var'); // import {odd, even} from './var';
const checkNumber = require('./func');

function checkStringOddOrEven(str){
    if(str.length %2){
        return odd;
    }else{
        return even;
    }
}

console.log(checkNumber(10)); //짝수입니다
console.log(checkStringOddOrEven('Hello')); //홀수입니다
// -> 실행할 때 콘솔에서 node [자바스크립트 파일 경로]로 실행 확장자(.js)는 생략 가능
// ex) first_node> node ./js/index.js