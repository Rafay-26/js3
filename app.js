// var arr = ["Ali", "Ahmed", "Billal",  "Hasnain" ]
// arr.push (prompt ("Enter New Name")) 
// document.write(arr)



// var arr = ["Pencil", "Rubber", "Scale",  "Pen" ]
// arr.push (prompt ("Enter New Object")) 
// document.write(arr)

// var colours = [ 'Red', 'Blue', 'Green','Orange' ]
// colours.splice(2,0,'Yellow')
// document.write(colours);



// var colours = [ 'Red', 'Blue', 'Green','Orange' ]
// colours.splice(2,1,'Yellow')
// document.write(colours);


// var fruits = ["apple", "banana", "orange", "grape"];

// document.write(`${fruits[0]} <br>`)
// document.write(`${fruits[1]} <br>`)
// document.write(`${fruits[2]} <br>`)
// document.write(`${fruits[3]} <br>`)
// document.write("Array length: " + fruits.length);

// var num = +prompt("Enter Your Table Number")
// var table = +prompt("Enter Your Table Number")
// for(i=1; i <=table; i++){
//     document.write(`${num} x ${i} = ${num*i} <br>`)
// }


// var table = +prompt("Enter Your Table Number")
// for(i=1; i <=10; i++){
//     document.write(`${table} x ${i} = ${table*i} <br>`)
// }



// var numbers = [1, 2, 3, 4, 5];


// document.write(`<h1>.${numbers[0]} </h1><br>`)  
// document.write(`<h1>.${numbers[1]} </h1><br>`)  
// document.write(`<h1>.${numbers[2]} </h1><br>`)  
// document.write(`<h1>.${numbers[3]} </h1><br>`)  
// document.write(`<h1>.${numbers[4]} </h1><br>`)  


// document.write("<h1> Array length: " + numbers.length + "</h1>");

                                          
    // CHAPTER 14 to 17


//3:
//  var arr = ["SMIT ", " DEC-210"];
//   var arr;
//   arr = ["SMIT " , " DEC-210"];
//   document.write(arr);


//4:
//  var arr = [1, 2 , 3, 4];
//   var arr;
//   arr = [1 , 2 , 3 , 4]
//   document.write(arr);


//5:
//  var arr = [true , false];
//   var arr;
//   arr = [true , false];
//   document.write(arr); 


//6:
//  var arr = ["SMIT ", 1 , true , " dec-23"];
//   var arr;
//   arr = ["SMIT ", 1 , true , " dec-23"]
//   document.write(arr);



//7:
//  var arr = ["Jazz ", " Uphone ", " Telenor ", " Mobilink "];
//   var arr;
//   arr = ["Jazz ", " Uphone ", " Telenor ", " Mobilink"];
//   document.write(arr);



// 8:
//  var education = ["HSC", "SSC", "BCS", "BS", "BCOM", "MS", "M.Phil","PhD"];
//   var education;
//   education = ["HSC", "SSC", "BCS", "BS", "BCOM", "MS", "M.Phil","PhD"]
// document.write(
//     `<table border = "1px" width = "300px"> <td>
//     Qualifications: <br/>
//     1)    ${education[0]}          <br/>
//     2)    ${education[1]}           <br/>
//     3)    ${education[2]}           <br/>
//     4)    ${education[3]}           <br/>
//     5)    ${education[4]}           <br/>
//     6)    ${education[5]}           <br/>
//     7)    ${education[6]}           <br/>
//     8)    ${education[7]}           <br/>
//     </td></table>`
// )



//9:
//  var arr = [];
//   var arr;
//   arr = []
//   arr.push("Avengers: Age of Ultron", "Spectre", "Jurassic World", "Inside Out")
//  document.write(
//     `<b>Top movies of 2015</b> <br/>
//      1)    ${arr[0]}           <br/>  
//      2)    ${arr[1]}           <br/>  
//      3)    ${arr[2]}           <br/>  
//      4)    ${arr[3]}           <br/>  
//     <b>Length of the array: ${arr.length}</b>
//     `
// )



//10:
//  var arr = ["Audi" , "Vovlo", "Ford" , "Lamborghini"];
//    var arr;
//    arr = ["Audi" , "Vovlo", "Ford" , "Lamborghini"];
//    var index = arr.indexOf("Audi");
//    var index2 = arr.indexOf("Lamborghini");

// document.write(
//     `<b>Favourite Cars</b> <br/><br/>
//     ${arr} <br/><br/>
//     First index of array:  ${index}  <br/>
//     Car at first index of array: ${arr[0]} <br/>    
//     Last index of array:    ${index2} <br/>
//     Car at Last index of array: ${arr[3]}  <br/>  
//     `
// )



//11:
//  var arr = ["Ali", "Ammar", "Hamza"];
//    var arr2 = [320, 230, 480, 64, 46,96];
// document.write(
//    `score of ${arr[0]} is ${arr2[0]}. Percentage: ${arr2[3]}% <br/> 
//     score of ${arr[1]} is ${arr2[1]}. Percentage: ${arr2[4]}%  <br/>
//     score of ${arr[2]} is ${arr2[2]}. Percentage: ${arr2[5]}% 
//     `
// )


//12:
//  var arr = ["red ", "blue ", "pink ", "green"];
// document.write(arr + "<br/>"); 
// a: arr.unshift("purple ");
// document.write(arr + "<br/>");
// b: arr.push("black");
// document.write(arr + "<br/>");
// c: arr.unshift("gray ", " yellow ");
// document.write(arr + "<br/>");
// d: arr.shift();
// document.write(arr + "<br/>");
// e: arr.pop();
// document.write(arr + "<br/>");
// f: arr.splice(1, 0, " orange ");
// document.write(arr + "<br/>");
// g: arr.splice(1, 1);
// document.write(arr);



//15:
//  var arr = ["Krachi", "Lahore", "Islamabad", "Peshawar"];
//   document.write(
//     `Cities List: <br/>
//      ${arr} <br/><br/>   
//      Selected cities list:<br/>    
//      ${arr.splice(1,2)} 
//     `
// )



//16:
//  var arr = ["This ", " is ", " my "," cat"]; 
//    document.write(
//     `<b>
//     Array:  <br/> 
//     ${arr}  <br/><br>
//     String: <br/>
//     ${arr.join(" ")}
//     </b>`
// )



//17:
//  var arr = [];
//    arr.push("keyboard", "mouse", "monitor", "printer")
//    document.write(
//     `Devices <br/>
//      ${arr} <br/><br/>
//      Out:<br/>
//      ${arr[0]} <br>
//      Out:<br/>
//      ${arr[1]} <br/>
//      Out:<br/>
//      ${arr[2]} <br/>
//      Out:<br/>
//      ${arr[3]} <br/>
//     `
// )



// 18:
//  var arr = [];
//    arr.push("keyboard", "mouse", "monitor", "printer")
//    document.write(
//     `Devices <br/>
//      ${arr} <br/><br/>
//      Out:<br/>
//      ${arr[3]} <br>
//      Out:<br/>
//      ${arr[2]} <br/>
//      Out:<br/>
//      ${arr[1]} <br/>
//      Out:<br/>
//      ${arr[0]} <br/>
//     `
// )



//19:
//  var arr = ["Apple", "Sumsung", "Infinix", "Nokia"];
//    document.write(
//     ` <select>
//       <option>${arr[0]}</option>
//       <option>${arr[1]}</option>
//       <option>${arr[2]}</option>
//       <option>${arr[3]}</option>
//       </select>  `
// )



//21:
//  var arr = [
//     [0,1,2,3] + "<br/><br/>",
//     [1,0,1,2] + "<br/><br/>", 
//     [2,1,0,1]
// ]
// document.write(arr);
