var workTime=1500000;
var initialTime=workTime;
var status="enabled";
var pauseStatus=false;
var x; //the variable for setInterval

function mainFunction(){
	if((status==="enabled")&&(pauseStatus===false)){
		//start countdown for workTime, in here put the pause clause too
		workTime-=1000;//testing
		workCountdown();
		pauseStatus=true;
	}
	else if(status==="disabled"){
		//exit the function while doing nothing
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
		stringTime=mins.toString()+":0"+mil.toString();
		return document.getElementById(id).innerHTML=stringTime;
	}
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

var breakTime=300000;
var initialBreakTime=breakTime;
var breakStatus="disabled";
var breakPauseStatus=false;
var y; //variable for setInterval for break

function breakMain(){
	if((breakStatus==="enabled")&&(breakPauseStatus===false)){
		//start break countdown
		breakTime-=1000;//testing
		breakCountdown();
		breakPauseStatus=true;
		
	}
	else if(breakStatus==="disabled"){
		//do nothing and exit breakMain()
		return null;
	}
	else if((breakStatus==="enabled")&&(breakPauseStatus===true)){
		//run pause for break
		clearInterval(y);
		breakPauseStatus=false;
	}
}

function breakCountdown(){
	function countdownInterval(){
		milToTime(breakTime,"break-time-id");
		breakTime-=1000;
		if(breakTime<0){
			//THIS IS WHERE OUR COUNTDOWN FOR BREAKTIME REACHES ZERO, FROM HERE WE INITIATE THE WORKTIME COUNTDOWN
			breakTime=initialBreakTime;
			breakPauseStatus=false;
			milToTime(breakTime,"break-time-id");
			breakStatus="disabled";
			status="enabled";
			mainFunction();
			//begin workCountdown again
			clearInterval(y);
		}
	}

	y=setInterval(countdownInterval,1000);
}


//PLUS MINUES FUNCTIONS BELOW

function workPlus(){
	workTime+=60000;
	clearInterval(x);
	pauseStatus=false;
	if(breakStatus==="enabled"){
		status="disabled";
	}
	else{
		status="enabled";
	}
	workTime=remainderRemover(workTime);
	milToTime(workTime,"work-time-id");
}

function workMinus(){
	workTime-=60000;
	clearInterval(x);
	pauseStatus=false;
	if(breakStatus==="enabled"){
		status="disabled";
	}
	else{
		status="enabled";
	}
	if(workTime<0){
		workTime=0;
	}
	workTime=remainderRemover(workTime);
	milToTime(workTime,"work-time-id");
}

function breakPlus(){
	breakTime+=60000;
	clearInterval(y);
	pauseStatus=false;
	if(status==="enabled"){
		breakStatus="disabled";
	}
	else{
		breakStatus="enabled";
	}
	breakTime=remainderRemover(breakTime);
	milToTime(breakTime,"break-time-id");
}

function breakMinus(){
	breakTime-=60000;
	clearInterval(y);
	pauseStatus=false;
	if(status==="enabled"){
		breakStatus="disabled";
	}
	else{
		breakStatus="enabled";
	}
	if(breakTime<0){
		breakTime=0;
	}
	breakTime=remainderRemover(breakTime);
	milToTime(breakTime,"break-time-id");

}

//removes the seconds and returns the time rounded down ex. 25:34==>26:00
function remainderRemover(mil){
	var seconds=mil%60000;
	return mil-seconds;
}