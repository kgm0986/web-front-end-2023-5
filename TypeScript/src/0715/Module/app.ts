import{add,subtract} from './math';

console.log(add(7,2));
console.log(subtract(7,2));

import{add as a, subtract as s} from './math';
console.log(add(10,6));
console.log(subtract(10,6));

import * as math from './math';
console.log(math.add(3,1));
import helloTs from './helloTs';
console.log(helloTs);
import{MathLib} from './mathName';
console.log(MathLib.add(4,3));
