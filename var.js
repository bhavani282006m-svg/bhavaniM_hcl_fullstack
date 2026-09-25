var str1 = "Primitive";
var str2 = new String("Non Primitive");
console.log(str1 + "" + str2);

var a;
console.log(a);
var a = 5;

const details = {
  name: "dinesh",
  designation: "Trainer",
  location: "Chennai",
};
console.log(details);

var n1 = 10;
var n2 = 20;
var sum = n1 + n2;
console.log("Sum of " + n1 + " and " + n2 + " is :" + sum);

let name = "Anu",
  des = "student";
console.log(name + "" + desig);

const myArray = ["h", "e", "l", "l", "o"];
console.log(myArray[0]);
console.log(myArray[1]);

let dailyActivities = ["eat", "sleep"];
dailyActivities.push("exercise");
console.log(dailyActivities);

dailyActivities.unshift("work");
console.log(dailyActivities);

console.log(dailyActivities.length);

dailyActivities[2] = "exercise";
console.log(dailyActivities);

dailyActivities[3] = "walk";
console.log(dailyActivities);

dailyActivities.pop();
console.log(dailyActivities);
const removedElement = dailyActivities.pop();
console.log(removedElement);
console.log(dailyActivities);

dailyActivities.shift();
console.log(dailyActivities);
