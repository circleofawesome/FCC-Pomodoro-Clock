var workTime=5000;
var initialTime=workTime;
var status="enabled";
var pauseStatus=false;
var x; //the variable for setInterval

function mainFunction(){
	if((status==="enabled")&&(pauseStatus===false)){
		//start countdown for workTime, in here put the pause clause too
		//console.log("enabled"); //testing
		workCountdown();
		pauseStatus=true;
	}
	else if(status==="disabled"){
		//exit the function while doing nothing
		//console.log("disabled"); //testing
		return null;
	}
	else if((status==="enabled")&&(pauseStatus===true)){
		clearInterval(x);
		pauseStatus=false;
	}
}

//takes a time in mils and turns it to readable time and appends to doc
function milToTime(mil,id){
	mil/=1000;
	var mins=0;
	while(mil>59){
		mil-=60;
		mins+=1;
	}
	var stringTime;
	if(mil<10){
		//return mins.toString()+":0"+mil.toString();
		stringTime=mins.toString()+":0"+mil.toString();
		return document.getElementById(id).innerHTML=stringTime;
	}
	//return mins.toString()+":"+mil.toString();
	stringTime=mins.toString()+":"+mil.toString();
	return document.getElementById(id).innerHTML=stringTime;
}

//when status is enabled this runs to countdown the worktime
function workCountdown(){
	//var num=workTime;
	function workCountdownInterval(){
		console.log(workTime);//test
		milToTime(workTime,"work-time-id");
		workTime-=1000;
		if(workTime<0){
			//THIS IS WHERE OUR COUNTDOWN FOR WORKTIME REACHES ZERO, FROM HERE WE INITIATE THE BREAKTIME COUNTDOWN
			workTime=initialTime;
			pauseStatus=false;
			milToTime(workTime,"work-time-id");
			status="disabled";
			breakStatus="enabled";
			breakMain(); //the break countdown is begun 
			clearInterval(x);
		}
	}

	x=setInterval(workCountdownInterval,1000);
}

//BELOW ARE FUNCTIONS FOR THE BREAK CLOCK

var breakTime=5000;
var initialBreakTime=breakTime;
var breakStatus="disabled";
var breakPauseStatus=false;
var y; //variable for setInterval for break

function breakMain(){
	if((breakStatus==="enabled")&&(breakPauseStatus===false)){
		//start break countdown
		console.log("1"); //test
		breakCountdown();
		breakPauseStatus=true;
		console.log(breakStatus); //test
	}
	else if(breakStatus==="disabled"){
		//do nothing and exit breakMain()
		console.log("2"); //test
		return null;
	}
	else if((breakStatus==="enabled")&&(breakPauseStatus===true)){
		//run pause for break
		console.log("3"); //test
		clearInterval(y);
		breakPauseStatus=false;
	}
}

function breakCountdown(){
	console.log(breakStatus); //test
	function countdownInterval(){
		milToTime(breakTime,"break-time-id");
		breakTime-=1000;
		if(breakTime<0){
			//THIS IS WHERE OUR COUNTDOWN FOR BREAKTIME REACHES ZERO, FROM HERE WE INITIATE THE WORKTIME COUNTDOWN
			breakTime=initialBreakTime;
			breakPauseStatus=false;
			milToTime(breakTime,"break-time-id");
			breakStatus="disabled";
			//begin workCountdown again
			clearInterval(y);
		}
	}

	y=setInterval(countdownInterval,1000);
}
