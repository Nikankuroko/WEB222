//Declare varibles and put semi_couln to avoid global variables
let lable = "Seneca college";
let tld = " CA";
let domainName = lable + tld;
//Create variable 'isSeneca' that checks if 'domainName' equals "senecacollege.ca"
let isSeneca = domainName === "Seneca college CA";
//Create variable 'isSeneca' that checks if 'domainName' Not Equal "senecacollege.ca"
//I will comment this for the next method
//let isNotSeneca = domainName === "senecacollege.ca";
let isNotSeneca =! isSeneca;
//create for byte varibles int the reange of 0-255
let byte1 = 192;
let byte2 = 168;
let byte3 = 2;
let byte4 = 1;
//Convert byte1 to a String using .toString()
//use A B and C for test to using tostring with diffrent numbers(Base) inside ()
let byte1Astr = byte1.toString();//str means string 
let byte1Bstr = byte1.toString(2);//base 2 means binary
let byte1Cstr = byte1.toString(16);//base 16 means hexadecimal
//Create a variable ipAddress and assign it the value of combining your four byteN 
//variables together, separated by ".". For example: "192.168.2.1".
let ipAddress =`${byte1}.${byte2}.${byte3}.${byte4}`; //${} use for template liters and its store numbers in single string
//Shifting bytes 
let ipInt = (byte1 << 24) + (byte2 << 16) + (byte3 << 8) + byte4;
//Convert to unsigned 32-bit integer
let ipIntUnsigned = ipInt >>> 0
//variable ipBinary that contains the binary representation of the ipInt
//let ipBinary = ipInt.toString(2); //NOTE: REMOVE COMMENT AND TEST BOTH
let ipBinary = ipIntUnsigned.toString(2);
//Create a variable statusCode, and assign it the value for the “I’m a teapot” HTTP status code
let statusCode = 418;

//print in output 
console.log("DOMAIN NAME IS =>",domainName);
console.log("Is Seneca:", isSeneca);
console.log("Is NotSeneca:",isNotSeneca);
//output of byte1 
console.log("BYTE 1 is => ",byte1);
//Convert byte1 to a String using output
console.log("Cnvert byte1 to String is => ",byte1Astr);
//Convert byte1 to a String using output what happend if use toString(2) and (16) => convert to binary and hexadecimal
console.log("Cnvert byte1 to String (Binary) is => ",byte1Bstr);
console.log("Cnvert byte1 to String is (Hexadecimal) => ",byte1Cstr);
//output of IP address
console.log("IP Address:",ipAddress);
//bit shifting
console.log("IP Integer:",ipInt);
//bit shifting (undesigend)
console.log("IP Integer:", ipIntUnsigned);
//ipBinary output
console.log("IP Binary:", ipBinary);
//HTTP status code output
console.log(statusCode);// open the console and right the code to see the output
//If statment to check  statusCode is a 4xx client error or not
if (statusCode>400 && statusCode<= 499) 
{
    console.log("There is 4xx client error:",statusCode);  
}
else
{
    console.log("There is no 4xx client error");
}
//Switch case statment checing for 1xx Information respons
switch (statusCode) {
    case 100://Continue
        console.log("continue the request or ignore the response if the request is already finished");
        break;
    case 101://switching
        console.log("Upgrade request header from the client and indicates the protocol the server is switching to.");
        break;
    case 102://processing
        console.log("the server has received and is processing the request, but no response is available yet.");
        break;
    case 103://Early Hints
        console.log("103 Early Hints");
    default:
        console.log("unknown information response");
        break;
}
//function is2xx(status) which takes a status code status (e.g., 200) and returns true if the status code is a valid 2xx code.
function is2xx(status) 
{
    if (status >= 200 && status <= 226) {
        return true;
    } else {
        return false;
    }
}
//we can use boolan either to return true or false
function is2xx(status1)
{
    return status1 >= 200 && status1 <= 226;//using boolean BOTH WAYS ARE TRUE!!

} 

// Output
console.log(is2xx(200)); //T
console.log(is2xx(404)); //F
console.log(is2xx(250)); //T
console.log(is2xx(226)); //T
//Create a variable studentName and assign your name. Create another variable studentAge and assign it your age
let studentName = "Nikan Eidi";
let studentAge = 20;
//PRINT OUTPUT FOR Nikan Eidi is 20 years old
console.log(`${studentName} is ${studentAge} years old`);//using template litreats `` $ and {}
//Create a variable isEven and assign it a boolean value (true or false) depending on whether a given number num is even or not. 
//HINT: use the modulus operator %.
let num=6;
let isEven=num % 2 === 0;
//output
console.log(isEven);
//Create a variable isOdd and assign it the inverse boolean value of isEven
let isOdd = !isEven;
//output
console.log(isOdd);
//Create a variable radius and assign it a value of 10. Calculate the area of a circle with this radius and assign the result to a variable area. 
//HINT: use Math.PI and the formula area = πr^2.
let radius = 10;
let area = Math.PI * radius**2;
//Output
console.log(area);
//Create a variable temperatureInCelsius and assign it a value. Convert this temperature to Fahrenheit and assign the result to a variable temperatureInFahrenheit. 
//HINT: use the formula F = C * 9/5 + 32.
let temperatureInCelsius = 20;
let temperatureInFahrenheit = temperatureInCelsius * 9/5 +32;
//Converting output
console.log(temperatureInFahrenheit);
//Create a variable heightInFeet and assign it a value. Convert this height to meters and assign the result to a variable heightInMeters. 
//HINT: use the conversion factor 1 foot = 0.3048 meters.
let heightInFeet = 5.5;
let heightInMeters = heightInFeet * 0.3048;
//Output Height in meters
console.log("Height in meters:", heightInMeters);
//Create a variable seconds and assign it a value. Convert this time to minutes and seconds (e.g., 90 seconds becomes 1 minute and 30 seconds) 
//and assign the result to two variables minutes and remainingSeconds.
let seconds = 90;
//Second output
console.log("Second is =>",seconds);
let minute = Math.floor(seconds/60); 
//minute output
console.log("Minute is =>",minute);
//Remaning Second
let remainingSeconds = seconds % 60;
//Min,Remaining second output
console.log(`${minute} minute(s) and ${remainingSeconds} second(s)`);
//Create a variable score and assign it a value. 
//Write an if statement that checks if the score is an A (90-100), B (80-89), C (70-79), D (60-69), or F (below 60) and assigns the result to a variable grade.
let score = 23;
let grade;
if (score >= 90) 
{
  grade = "A";
} 
else if (score >= 80) 
{
  grade = "B";
}
 else if (score >= 70) 
{
  grade = "C";
} 
else if (score >= 60) 
{
  grade = "D";
} 
else 
{
  grade = "F";
}
console.log("Grade:", grade);
//Write a switch statement that checks the value of a variable day and console.log()s whether it is a weekday or weekend. 
//HINT: day can be a value from 1 (Monday) to 7 (Sunday).
let day = 1;//which is monday
switch (day) {
    case 1:
        console.log("Weekday"); 
        break;
    case 2:
        console.log("Weekday"); 
        break;
    case 3:
        console.log("Weekday"); 
        break;
    case 4:
        console.log("Weekday"); 
        break;
    case 5:
        console.log("Weekday"); 
        break;
    case 6:
        console.log("Weekend");
        break;
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Day is not find");
        break;
}
//Write a function isPositive(num) which takes a number num and returns true if the number is positive and false otherwise.
function isPositive(num)
{
    return num >=0 ;
}
//output
console.log("Is Positive:", isPositive(6));
console.log("Is Negative:", isPositive(-1));
//Write a function isLeapYear(year) which takes a year year and returns true if the year is a leap year and false otherwise.
//HINT: a leap year is divisible by 4, but not by 100, unless it is also divisible by 400.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  //output
  console.log("Is Leap Year:", isLeapYear(2024));
  //Write a function getDayOfWeek(day) which takes a number day (from 1 to 7) 
  //and returns the day of the week as a string (e.g., “Monday”).
  function getDayOfWeek(day)
  {
    let days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];//using arrays to store(save) day Names
    return days[day-1];
  }
  //output
  console.log("Week Days:", getDayOfWeek(1));
  //Write a function getFullName(firstName, lastName) which takes two strings firstName and lastName and returns the full name as a single string.
  function getFullName(firstName, lastName)
  {
    return `${firstName} ${lastName}`;
  }
  //output
console.log("Full Name is =>",getFullName("Nikan","Eidi"));
//Function getCircleArea to calculate the area of a circle
function getCircleArea(radius) 
{
    return Math.PI * radius ** 2;
}
  console.log("Circle Area:", getCircleArea(10));
  
//Function getHypotenuse to calculate the hypotenuse of a triangle
function getHypotenuse(a, b) 
{
    return Math.sqrt(a ** 2 + b ** 2);
}
  console.log("Hypotenuse:", getHypotenuse(3, 4));











