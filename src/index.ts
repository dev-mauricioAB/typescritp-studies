// import { bitwiseComplement } from './studies/complement'
// import { OperatorsStudies } from './studies/operators'

// function main() {
//   console.log('< MAIN >')
// }

// main();
// bitwiseComplement(5);

// const t = new OperatorsStudies();
// t.getResults();


function hasTrailingZeros(nums: number[]): boolean {
  const candidate = new Array<number>();

  nums.map(num => {
    const numBit = num.toString(2);

    if (numBit.endsWith('0')) {
      candidate.push(num)
    }
  });

  return candidate.length >= 2;
};

const arrayTest = [1, 2, 3, 4, 5];
const arrayTest2 = [2, 4, 8, 16];
const arrayTest3 = [1, 3, 5, 7, 9];
const arrayTest4 = [2, 2];
const result = hasTrailingZeros(arrayTest);
// const result2 = hasTrailingZeros(arrayTest2);
// const result3 = hasTrailingZeros(arrayTest3);
// const result4 = hasTrailingZeros(arrayTest4);
console.log('RESULT: ', result);
// console.log('RESULT2: ', result2);
// console.log('RESULT3: ', result3);
// console.log('RESULT4: ', result4);