var inicioContagem = 17; //A partir de qual número começar a verificar
var finalContagem = 17; //Até qual número verificar (inclusive ele)
var primos = []; //Array que reunirá a lista de números primos

/* O primeiro for vai pegar números (possivelPrimo) dentro do intervalo definido nas variáveis acima; 
O segundo for vai pegar números (possivelDivisor) a partir do 2 e até o próprio número para checar se dividem o possivelPrimo;
Dentro desse for:
 o if verifica duas condições simultâneas: se o resto da divisão do possivelPrimo pelo possivelDivisor é zero e se esse possivelDivisor é diferente do possívelPrimo, se essa condição for verdadeira, o break encerra esse segundo for para o código seguir para o primeiro for; 
 o else if verifica duas condições simultâneas: se o resto da divisão do possivelPrimo pelo possivelDivisor é zero e se esse possivelDivisor é igual ao possívelPrimo, se essa condição for verdadeira, o método push adicionará esse número possívelPrimo ao Array Primos;
 se o if e o else if forem falsos, a iteração do segundo for continua e pegará outro número para possível divisor;
Quando qualquer uma das condicionais anteriores for verdadeira, a iteração do primeiro for continua pegando outro número do intervalo a ser verificado.
 */

for (var possivelPrimo = inicioContagem; possivelPrimo <= finalContagem; possivelPrimo++){
    for(var possivelDivisor = 2; possivelDivisor <= possivelPrimo; possivelDivisor++){
        if ((possivelPrimo % possivelDivisor == 0) && (possivelDivisor != possivelPrimo)) {
            break
            } else if ((possivelPrimo % possivelDivisor == 0) && (possivelDivisor == possivelPrimo)){
                primos.push(possivelPrimo)
             }
            } 
    }


var somaDosPrimos = 0;
for (var i = 0; i < primos.length; i++){
    somaDosPrimos += primos[i]
}

if ((inicioContagem == finalContagem) && (somaDosPrimos == 0)){
    console.log("O " + inicioContagem + " não é primo.");
} else if ((inicioContagem == finalContagem) && (somaDosPrimos == inicioContagem)){
    console.log("O " + inicioContagem + " é primo.");
} else {
console.log("Os primos de " + inicioContagem + " até " + finalContagem + " são " + primos + ", a soma deles vale " + somaDosPrimos);
}