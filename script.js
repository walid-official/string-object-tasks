// Task:-1
//********* 

// let str = "awake";
// for(let i=1; i <= str.length; i++){
//     if(str[i] !== "a"){
//         continue;
//     }
//     console.log(i);
//     console.log(str[i].length);
   
// }

// Task:-2
//********* 

// let str = "Avatar";
// let spilTcheck = str.split("");
// console.log(spilTcheck);

// for(let check of spilTcheck){
//     if(check !== "A" && check !== "a"){
//         continue;
//     }
//     console.log(check);
// }

// let str = "Avatar";
// for(let check of str){
//     if(check !== "A" && check !== "a"){
//         continue;
//     }
//     console.log(check);
// }


// Task:-3
//********* 

// let str = "education";


// for(let i = 0; i < str.length; i++){
//     if(str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u"){
//         continue;
//     }
//     let store = str[i];
//     console.log(store);
// }

// Task:-4
//********* 

// let str1 = "Excite";
// let str2 = "Complex";

// let change1 = str1.replace("x","y");
// console.log(change1);

// let change2 = str2.toUpperCase().replace("X","Y");
// console.log(change2);


// Task:-5
//*******

let nameStr = "hello my name is walid hasan"; //0,6,9,14,21
let splitStr = nameStr.split(" ");
let change1 = splitStr[0] = "Hello";
let change2 = splitStr[1] = "My";
let change3 = splitStr[2] = "Name";
let change4 = splitStr[3] = "Is";
let change5 = splitStr[4] = "Walid";
let change6 = splitStr[5] = "Hasan";

console.log(splitStr);

for(let check of splitStr){
    console.log(check);
}



// for(let check of upper){
//      console.log(check);
// }
// for(let i = 0; i < nameStr.length; i++){
// if(i === 0 || i === 6 || i === 9 || i === 14 || i === 17 || i === 23){
//    console.log(nameStr[i].toUpperCase());
// }
//     console.log(nameStr[i]);
// }