/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else if (numero2 > numero1) {
        return numero2;
    } else
        return numero1;
}
export function findLongestWord(array) {
    if (array.length === 0) {
        return undefined;
    }
    let longestWord = array[0]; //doy el primer elemento del array a la variable longestWord
    for (let i = 1; i < array.length; i++) { //recorro el array
        if (array[i].length > longestWord.length) { //si la longitud del elemento del array es mayor que la longitud de la variable longestWord
            longestWord = array[i]; //doy el elemento del array a la variable longestWord
        }
    }
    return longestWord;
}
export function sumArray(num) {
    return num.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
}
/*     return num.reduce((a, b) => a + b, 0); } */
export function averageNumbers(num) {
    if (num.length === 0) {
        return undefined;
    }
    return sumArray(num) / num.length; //devuelve la suma de los elementos del array dividido por el número de elementos del array
}
export function averageWordLength(array) {
    if (array.lenght === 0) {
        return undefined;
    }
    let totalPalabras = 0; //corresponde a la suma de las longitudes de las palabras
    let validPalabras = 0; //corresponde al número de palabras válidas

    for (let word of array) {
        if (typeof word === 'string') { //si el tipo de dato es string
            totalPalabras += word.length; //sumo la longitud de la palabra a la variable totalLength
            validPalabras++; //sumo 1 a la variable validWords
        }
    }
    if (validPalabras === 0) {
        return undefined;
    }
    return totalPalabras / validPalabras; //devuelve la suma de las longitudes dividido por el número de palabras válidas
}
export function uniquifyArray(array) {
    if (array.length === 0) { //si el array está vacío
        return undefined;
    } else if (array.length === 1) { //si el array tiene un solo elemento
        return array;
    } else {
        const uniqueArray = [];
        for (let i = 0; i < array.length; i++) {
            if (!uniqueArray.includes(array[i])) { //si el elemento del array no está en el array uniqueArray
                uniqueArray.push(array[i]); //añado el elemento del array al array uniqueArray
            }
        }
        return uniqueArray;
    }
}
export function doesWordExist(array, palabra) {
    return array.includes(palabra); //devuelve true si la palabra está en el array
}
export function howManyTimes(array, palabra) {
    if (array.length === 0) {
        return undefined;
    } // devuelvo el undefind que pide el test
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === palabra) {
            contador++;
        }
    }
    return contador;
}
/*export function greatestProduct(){}  */