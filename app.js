//2) Ededlerden ibaret bir array verilir. Hemin arrayi boyukden ededden kiciye  dogru sort elemek.

let arr = [2,3,3,5,52,5,7];

let rev = arr.sort((a, b) => b-a);

console.log("Tersden duzulmush reqemler: " + rev)












//3) ["Yanvar","Fevral","Mart","Aprel"]  - bu arrayi parametr kimi qebul eden bir function yazirsiz.Hemin function geriye yeni bir array qaytarir. Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir. Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"].

let months = ["yanvar", "fevral", "mart", "arpel", "may"]
let newarr = [];
//custom function:
function month(array) {
    for (let index = 0; index < array.length; index++) {
        const i = array[index] + " " + (index + 1);
        newarr.push(i);
        
    }
    return newarr;
    
}
console.log(month(months)); 

//map ile yazilmish function:

console.log(months.map((value, index) => value  + " " + (index + 1)));















//4)String qebul eden bir function yaziriq. Hemin function yeni bir array qaytaracaq, hemin arrayin elementleri functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir. Meselen: Functiona gelen string - "Salam olsun hamiya", hemin functionun qaytardiqi array ise - [5,5,6] olacaq.



let text = "hi how are you";
function WordCounter(str) {
  let arrn = str.split(" ");
  let arr1 = [];
  for (let index = 0; index < arrn.length; index++) {
    let element = arrn[index];

    arr1.push(element.split("").length);
  }
  return arr1;
}
console.log("Loop ile " + WordCounter(text));




// loopsuz normal funksiya ile: 
 let word = "this should do the job this time"

function wordCounter(thing){
        let counted=thing.split(" ")
        return counted.map(function innerFunction(thing){
            return thing.length;
        });
}

//arrowlu funskiya ile
function wordCounterArrowed(thing){
        let counted=thing.split(" ")
        return counted.map(thing=>thing.length);
}

console.log("Loopsuz normal funskiya ile " + wordCounter(word));
console.log("Loopsuz arrow funskiya ile " + wordCounterArrowed(word));
