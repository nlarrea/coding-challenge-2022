/*
Reto #47
vowel MÁS COMÚN
Fecha publicación enunciado: 21/11/22
Fecha publicación resolución: 28/11/22
Dificultad: FÁCIL

Enunciado: Crea un función que reciba un texto y retorne la vowel que más veces se repita.
Si no hay voweles podrá devolver vacío.

Statement: Create a function that receives a text and returns the most repeated vowel.
If there are no vowels it may return empty.

Creador de los retos semanales: https://github.com/mouredev
Repositorio original de Mouredev: https://github.com/mouredev/Weekly-Challenge-2022-Kotlin
*/

function mostUsedVowel(text){
    // create a const with the vowels
    const vowelList = [
        {value: "a", vowel: ["a","á","à","ä","â"], counter: 0},
        {value: "e", vowel: ["e","é","è","ë","ê"], counter: 0},
        {value: "i", vowel: ["i","í","ì","ï","î"], counter: 0},
        {value: "o", vowel: ["o","ó","ò","ö","ô"], counter: 0},
        {value: "u", vowel: ["u","ú","ù","ü","û"], counter: 0}
    ];
    text = text.toLowerCase(); // convert to lowercase
    // loop through the text
    for(char of text){
        // if the char is a vowel, increase the counter
        if(vowelList[0].vowel.includes(char)) vowelList[0].counter++;
        else if(vowelList[1].vowel.includes(char)) vowelList[1].counter++;
        else if(vowelList[2].vowel.includes(char)) vowelList[2].counter++;
        else if(vowelList[3].vowel.includes(char)) vowelList[3].counter++;
        else if(vowelList[4].vowel.includes(char)) vowelList[4].counter++;
    }
    // if there are no vowels, return empty
    if(vowelList.every(element => element.counter === 0)) return "empty"
    // sort the array by counter
    vowelList.sort((a,b) => b.counter-a.counter);
    // if the first and second element have the same counter, return that there is no most used vowel
    if(vowelList[0].counter === vowelList[1].counter) return "no vowels repeating more than others"
    // return the first element (the most repeated)
    return `"${vowelList[0].value}"`;
}

console.log(mostUsedVowel("Hello")); // "no vowels repeating more than others"
console.log(mostUsedVowel("ghdjf")); // "empty"
console.log(mostUsedVowel("Hello World")); // "o"
console.log(mostUsedVowel("This is a good day")); // "no vowels repeating more than others"
console.log(mostUsedVowel("Hola, ¿qué tal estás hoy?")); // "a"