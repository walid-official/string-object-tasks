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

// let nameStr = "hello my name is walid hasan"; //0,6,9,14,21
// let splitStr = nameStr.split(" ");
// let change1 = splitStr[0] = "Hello";
// let change2 = splitStr[1] = "My";
// let change3 = splitStr[2] = "Name";
// let change4 = splitStr[3] = "Is";
// let change5 = splitStr[4] = "Walid";
// let change6 = splitStr[5] = "Hasan";

// console.log(splitStr);

// for(let check of splitStr){
//     console.log(check);
// }


// Object Task



// Task:-1
//*******



// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// let outColors = colors["golden rod"];
// console.log(outColors);




// Task:-2
//*******



// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car['passenger capacity'] = 3;

// console.log(car);




// Task:-3
//*******



// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// let mark = student.physics;
// console.log(mark);



// Task:-4
//*******




// let student_info = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// let keys = Object.keys(student_info);
// console.log(keys);
// let len = keys.length;
// console.log(len);




// Task:-5
//*******



let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};


for(let obj in myObject){
    console.log("key: " + obj + " || " + "Type: " + typeof myObject[obj]);
}

// jodi ay code console.log(info) likha hoi tahole property print korbe ar jodi console.log(stu_describe[info]) tahole value print korbe and jodi console.log(stu_describe) likhle object take array hishabe print korbe.