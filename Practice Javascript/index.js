// console.log("Print numbers -10 through 19")
// var num = -10

// while(num < 19) {
// 	console.log(num);
// 	num++;
// }

// console.log("Print even numbers between 10 and 40")

// var num = 10

// while(num <= 40) {
// 	if(num % 2 === 0) {
// 		console.log(num);
// 	}
// 	num++;
// }

// console.log("print all odd numbers between 300 and 333")

// var num = 300

// while(num < 333) {
// 	if(num % 2 === 1) {
// 		console.log(num);
// 	}
// 	num++;
// }

// console.log("Print all numbers divisable by 3 and 5 between 5 and 50")

// var num = 5

// while(num < 50) {
// 	if(num % 3 === 0 && num % 5 ===0){
// 		console.log(num);
// 	}
// 	num++;
// }

// console.log("Annoy-O-Matic")

// var response = prompt("Are we there yet?")

// while(response.indexOf("yes") === -1) {
// 	var response = prompt("Are we there yet?")
// }
// alert("Yay we made it!!!")


// console.log("Print numbers -10 through 19")

// for (i = -10; i < 20; i++) {
// 	console.log(i);
// }

// console.log("Print even numbers between 10 and 40")

// for (i = 10; i <= 40; i++) {
// 	if(i % 2 == 0){
// 	console.log(i)
// 	}
// }

// console.log("print all odd numbers between 300 and 333")

// for(i = 300; i <= 333; i++) {
// 	if(i % 2 !== 0) {
// 		console.log(i)
// 	}
// }

// console.log("Print all numbers divisable by 3 and 5 between 5 and 50")

// for(i = 5; i < 50; i++) {
// 	if(i % 5 === 0 && i % 3 ===0) {
// 		console.log(i)
// 	}
// }

// function isEven(num) {
// 	return num % 2 === 0
// }

// Factotial counting down
// function factorial(num) {
// 	if(num === 0 || num === 1) {
// 		return 1
// 	}
// 	for(i = num - 1; i > 1; i--) {
// 		num *= i
// 	}
// 	return num
// }

// Factorial counting up

// function factorial(num) {
// 	var result = 1
// 	for(i = 2; i <= num; i++) {
// 		result *= i;
// 	}
// 	return result;
// }

// function kebabToSnake(str) {
// 	return str.replace(/-/g, "_")
// }

// var todos = ["work", "lazy"];

// var input = prompt("What would you like to do?")

// while(input !== "quit") {
//    if(input === "list") {
//     listTodo();
//    } else if(input === "new") {
//     addTodo();
//    } else if(input === "delete") {
//     deleteTodo();
//    };
//   var input = prompt("What would you like to do?")
// };
// alert("You have quit!")

// function listTodo() {
//   todos.forEach(function(todo, i){
//     console.log(i + ": " + todo);
//   });
// };

// function addTodo() {
//   var item = prompt("What would you like to add?")
//   todos.push(item)
//   console.log(item + " has been added!") 
// };

// function deleteTodo() {
//   var num = prompt("What index would you like to delete?")
//   console.log(todos[num] + " has been deleted!")
//   todos.splice(num, 1);
// };

// Print reverse function

// function printReverse(arr) {
//   var newArray = []
//   arr.forEach(function(item){
//     newArray.unshift(item)
//   });
//   return newArray
// };

// // code along solution for Print Reverse

// function printReverse(arr) {
//   for(var i = arr.length-1; i >= 0; i--) {
//     console.log(arr[i])
//   }
// }

// // Is Uniform Function
// function isUniform(arr) {
//   var first = arr[0]
//   for(var i = 1; i < arr.length; i++) {
//     if(first !== i) {
//       return false
//     };
//   };
//   return true
// };

// // Sum Array Function
// function sumArray(arr) {
//   var sum = 0
//   arr.forEach(function(i) {
//     num += i
//   });
//   return sum
// };

// // Max Number function
// function max(arr) {
//   var maxNum = arr[0]
//   arr.forEach(function(num) {
//     if(num > maxNum) {
//       maxNum = num
//     }
//   });
//   return maxNum
// };

// var movies = [
//   {
//     title: "Frozen",
//     rating: 4,
//     watched: true
//   },
//   {
//     title: "Saw",
//     rating: 3.4,
//     watched: false
//   },
//   {
//     title: "Pokemon",
//     rating: 5,
//     watched: true
//   }
// ]

// movies.forEach(function(movie) {
//   if(movie.watched === true){
//     console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars")
//   } else {
//     console.log("You have not watched \"" + movie.title + "\" - " + movie.rating + " stars")
//   };
// });

// movies.forEach(function(movie){
//   var result = "You have ";
//   if(movie.watched){
//     result += "watched "
//   } else {
//     result += "not seen "
//   };
//    result += "\"" + movie.title +"\" - " + movie.rating + " stars" 
//    console.log(result)
// });





























