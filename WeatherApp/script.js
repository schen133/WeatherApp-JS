
// let lol = {

//     trying: function(){
//     //  console.log("Hello");}

//     };

// // lol.trying();

// let lol2 = function(){
//     // console.log("Hello, this is other func")
// };



// lol2();

//NO CLASSES, ONLY OBJECTS
//After defining Objects, just set its properties inside 

//Creating Object of weather
//And Object Weather contains different properties
//such as: apiKey, function to fetch...
var weather = {
    apiKey: "1c968b1eac53666893241d8c7c22bdcf",
    //list of data points we want here as local variables
    

    fetchWeather: async function(city){
        let api_url = "https://api.openweathermap.org/data/2.5/weather?q="
        + city +"&units=imperial&appid=" + this.apiKey;

        // fetch(api_url)
        // .then((response) => response.json())
        // .then((data) => console.log(data));

        //another way to fetch: (Easier to understand)
        //to use await, must have async function
        const res = await fetch(api_url);
        const d = await res.json();
        this.displayWeather(d);
        // console.log(d);

    },
    displayWeather: function(data){
        const name = data.name;
        const icon = data.weather[0].icon;
        const description = data.weather[0].description;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const speed = data.wind.speed;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerHTML = temp + "°F";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + " km/h";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    },//"https://openweathermap.org/img/wn/ + icon + "png"
    search: function(){
        var v = document.querySelector(".search-bar").value
        this.fetchWeather(v);
    },
    name: "This is Called Weather",
    
    testingFunction: function(){
        console.log(this.name);
        // return "Returned!!";
    }
};

weather.fetchWeather("Rochester");

document.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();
});

var num = 32;
num = "Hello";
console.log(num);

var a = 0;
var b = 1;
console.log(a ? "a is true" : "a is false");
//fetching works, so now lets display the data we get from the response we fetched

var ob = {
    ThisisName1: "Name",
    "ThisisName": "Hello",
    "3":"This is 3",
    "case.subject":"This is case with a dot"


}
ob.ThisisName = "Not hello";

console.log(ob.ThisisName1);
console.log(ob.ThisisName);
console.log(ob["3"]);
console.log(ob["case.subject"]);

let myArray = [1,2,3];
console.log(typeof myArray);
myArray.arrayType = "NNumber";
console.log(typeof myArray);
console.log(myArray.arrayType);

var nums = [1,2,3];
console.log(...nums);


//**When you create a new var and set it to a function (Property) of some object,
//that new function cannot reference to other properties that exist within the original
//object Example below:
// var func = weather.testingFunction;
// func();

//this works?
// var string1 = weather.testingFunction();
// console.log(string1);

// var func = weather.testingFunction;
// console.log(func());

// var func1 = weather.testingFunction;



// func1();
// console.log(weather.name);
//if we try to print out the property called "name" from weather Object,
//It will not print out because Property "name" is not in global scope


// weather.testingFunction();



