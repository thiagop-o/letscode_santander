/*MAP*/
const vetor = ["10", "20", "30"];
const stringToInt = (x) => parseInt(x);
const vetor2 = vetor.map(stringToInt);
console.log(vetor2);

const vetor3 = vetor2.map(x => x*x);
console.log(vetor3);




/*Filter*/
const vetor = [1,2,3,4,5,6,7,8,9,10];

const pares = vetor.filter(x => x%2 ==0);

console.log (pares);

/*REDUCE*/
const vetor = [1,2,3,4,5,6];
const soma = vetor.reduce((estado,item)=> estado+item);
console.log(soma);

const matriz = [
    [1,2,3,4,5,6],
    [6,5,4,3,2,1],
    [6,1,5,2,3,4]
];

const somaColuna = (estado,item) => {
    return [estado[0]+item[0]+item[1],
            estado[1]+item[2]+item[3],
            estado[2]+item[2]+item[1] ]
};

const vetor2 =matriz.reduce(somaColuna,[0,0,0]);
console.log(vetor2);