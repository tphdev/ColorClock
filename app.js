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



Array.prototype.contains = function (locateMe) {
	for (i in this) {
	    if (this[i] == locateMe) return true;
	}
	return false;
}

//listens for 'click' event and toggles clickStatus to on/off
var clickStatus = 'off'
document.querySelector('.timer-box').addEventListener("click", 
 		function(){
 			 clickStatus == 'on' ? 
 			 	clickStatus ='off' :
 				clickStatus = 'on'		
 		})

// interval function to get the time and display every second
setInterval(function(){

	var d = new Date

	//captures the hours/minutes/seconds in one object
	var currentTime = new Object
	currentTime.hour = d.getHours()
	currentTime.minute = d.getMinutes()
	currentTime.second = d.getSeconds()

	//maps second to alphabet
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var secondsToAlphabet = alphabet[currentTime.second % 26]
	var showLetter = "0"+secondsToAlphabet



	//line 66-82: puts the hours/minutes/seconds-or-Letters into the html
	document.querySelector('.hour').innerHTML =
		 (currentTime.hour < 10 ? "0" + currentTime.hour : currentTime.hour)

	document.querySelector('.minute').innerHTML =
		(currentTime.minute < 10 ? "0" + currentTime.minute : currentTime.minute)

		 //puts seconds or letters, depending on clickStatus
		switch (clickStatus)
			{
			case "on": document.querySelector('.second').innerHTML = 
				showLetter
				break
			default: 
				document.querySelector('.second').innerHTML = 
					(currentTime.second < 10 ? "0" + currentTime.second : currentTime.second)
				break
			}
	
	//monitors seconds to determine border-div width - gives effect of growing border
	document.querySelector('.line').style.width = (currentTime.second/60*100+"%")

	//the background change effect
	//	- colorTimes determines the timing of color change
	//	- bgColors determines the color
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

