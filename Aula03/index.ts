
//npx tsc --init    
//npx tsc
//node dist/Aula02/aula.js 

function digaOi(): void {
    console.log("oi")

}
let x = undefined;


function fazOperacao(funcao: any): void{
    console.log("Antes");
    console.log(funcao(10,30));
    console.log("Depois");
}
function soma(x: number, y: number): number {
    return x+y;
}
fazOperacao(soma);

//Usando Spread (...)
var a = {"nome": "Vitor", "cidade": "Nova Friburgo"};
var b = {"cidade": "Miracema", "gostosMusicais": ["Rock"]};
var c = {...a, ...b};
console.log(c);
var d  = [1,2];
var e = [3, 4];
var f = [...d, ...e];
console.log(f);
function somaNova(...valores: number[]): number {
    var resultado = 0;
    for (var x:number=0;x<valores.length;x++){
        resultado+= valores[x];
    }
    return resultado;
}
console.log(somaNova());
console.log(somaNova(10));
console.log(somaNova(10,20));

var aa: number[] = [];
var ab: number[] = [1,2];
var ac: string[] = ["Java", "Html"];

var array: number[] = [3,4,5,1,8];

array.forEach((val: number, index: number)=>{
    console.log( val + " "+ index);
}) 


