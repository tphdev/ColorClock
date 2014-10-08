console.log('hey there')





/**
 * 
 * The Project
 * -----------
 * Timer
 * 1) Create a timer that captures the time and shows the
 * exact current time by second
 * 	//1- capture the current each second, minute, hour of current time
 * 	//2- put current time in code 
 * 
 * 2) when click, second changes from number to
 * alphabet
 * 
 * Visual Effects
 * >> Timer changes colors every seconds
 * 			starts at red, ends at light green
 * 
 *
 * >> bottom border grows outward with each second 
 *  
 * 
 * 
 */

Array.prototype.contains = function (needle) {
   for (i in this) {
       if (this[i] == needle) return true;
   }
   return false;
}

var a = 4


//specify a function so that it runs every second
setInterval(function(){
var d = new Date




//captures the hours/minutes/seconds
var currentTime = new Object
currentTime.hour = d.getHours()
currentTime.minute = d.getMinutes()
currentTime.second = d.getSeconds()

//puts the hours/minutes/seconds into the html
document.querySelector('.hour').innerHTML =
	(currentTime.hour < 10 ? "0" + currentTime.hour : currentTime.hour)

document.querySelector('.minute').innerHTML =
	(currentTime.minute < 10 ? "0" + currentTime.minute : currentTime.minute)

document.querySelector('.second').innerHTML = 
	(currentTime.second < 10 ? "0" + currentTime.second : currentTime.second)

//growing-border second meter 
document.querySelector('.line').style.width = (currentTime.second/60*100+"%")


//programming the background changes
var colorTimes = [
	10,
	20,
	30,
	40,
	50,
	00
	]

var bgColors = [
	"133,133,0",
	"75,133,88",
	"99,100,175",
	"100,75,60",
	"11,33,145",
	"171,11,0"
]

if(colorTimes.contains(currentTime.second)){
	var bgIndex = [colorTimes.indexOf(currentTime.second)]
	document.querySelector('.container').style.background = "rgb("+bgColors[bgIndex]+")"

	} 


},1000)

