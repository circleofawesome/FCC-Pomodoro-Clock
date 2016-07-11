//the clock runs for the duration of work specified then the break portion runs then the work portion runs again..forever 


//takes number of milliseconds and returns a proper time to display
function milToTimePure(mil){
	mil/=1000;
	var mins=0;
	while(mil>59){
		mil-=60;
		mins+=1;
	}
	if(mil<10){
		return mins.toString()+":0"+mil.toString();
	}
	return mins.toString()+":"+mil.toString();
}
//milToTimePure(882000);

========================

//function that takes a time in milliseconds and the id of the element to be changed and displays it 

function displayTime(time,id){
	var str=milToTime(time);
	document.getElementById(id).value=str;
}

=====================

//takes a time and clock ID and counts it down to zero

function countdown(time,id){
	var str=milToTime(time);
	time-=1000;
	document.getElementById(id).value=str;
}

=====================

//milToTime improved

function milToTime(){
	var mil=time;
	mil/=1000;
	var mins=0;
	while(mil>59){
		mil-=60;
		mins+=1;
	}
	time-=1000;
	if(mil<10){
		console.log(mins.toString()+":0"+mil.toString());
		document.getElementById("work-time-id").innerHTML=mins.toString()+":0"+mil.toString();
		
	}
	else{
		console.log(mins.toString()+":"+mil.toString());
		document.getElementById("work-time-id").innerHTML=mins.toString()+":"+mil.toString();
	}
	if(time<0){
		time=5000;
		console.log(time);
		clearInterval(stopWatch);
	}
}

=========================

//removes the seconds and returns the time rounded down ex. 25:34==>25:00
function remainderRemover(mil){
	var seconds=mil%60000;
	return mil-seconds;
}

//remainderRemover(1540000);

========================