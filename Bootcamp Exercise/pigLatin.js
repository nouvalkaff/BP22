/*Pig latin rules
1. First consonant of a word moves 
it to the end of the word and suffixes (ends) with an "ay"

2. If the word begins with a vowel, just add "way" to the end.

3. Must be in all lowercase input strings.
*/

function pigLatin(str){
    const vocalWord = /[aiueo]/;
    let firstVowel = str.match(vocalWord);
    let firstPosition = str.indexOf(firstVowel);


    if (firstPosition !== 0) {
        return str
        .split(' ')
        .map(([f, ...rest]) => rest.join('') + f + 'ay')
        .join(' ');
    } else
        return str.slice(firstPosition) + str.slice(0, firstPosition)
        + "way";    
    }
  
  console.log(pigLatin("food"));         //oodfay
  console.log(pigLatin("snap"));         //napsay
  console.log(pigLatin('guide'));        //uidegay
  console.log(pigLatin("beli makanan")); //elibay akananmay
  console.log(pigLatin("apel"));         //apelway