let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const saveValorA = varA;
const saveValorB = varB;
const saveValorC = varC;

varA = saveValorB;
varB = saveValorC;
varC = saveValorA;

console.log(varA, varB, varC);