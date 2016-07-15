//var time=1500000;
var time=5000;
time-=1000;

function milToTime(){
	var mil=time;
	var initTime=time;
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
		//time=5000;
		time=initTime;
		console.log(time);
		playStatus+=1;
		document.getElementById("work-pause-play").innerHTML="&#9658";
		clearInterval(stopWatch);
		breakClock();

	}
}

var stopWatch;
var playStatus=0;
//even #s mean its on play, odd means its on pause

function countdownWork(){
	if(playStatus%2===0){
		//even
		playStatus+=1;
		document.getElementById("work-pause-play").innerHTML="&#10074 &#10074";
		stopWatch=setInterval(milToTime,1000);
	}
	else{
		//odd
		playStatus+=1;
		document.getElementById("work-pause-play").innerHTML="&#9658";
		clearInterval(stopWatch);
	}
}



function plusWorkTime(){
	clearInterval(stopWatch);
	time+=60000;
	time=remainderRemover(time);
	if(time>3600000){
		time=3600000;
	}
	var updatedTime=milToTimePure(time);
	document.getElementById("work-time-id").innerHTML=updatedTime;
}

function minusWorkTime(){
	clearInterval(stopWatch);
	time-=60000;
	time=remainderRemover(time);
	if(time<=0){
		time=0;
	}
	var updatedTime=milToTimePure(time);
	document.getElementById("work-time-id").innerHTML=updatedTime;
}

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

function remainderRemover(mil){
	var seconds=mil%60000;
	return mil-seconds;
}


//BREAK FUNCTIONS BELOW


function breakClock(){
	//var breakTime=300000;
	var breakTime=5000;
	breakTime-=1000;

	function milToTimeBreak(){
		var mil=breakTime;
		var initTime=breakTime;
		mil/=1000;
		var mins=0;
		while(mil>59){
				mil-=60;
				mins+=1;
			}
		breakTime-=1000;
		if(mil<10){
			console.log(mins.toString()+":0"+mil.toString());
			document.getElementById("break-time-id").innerHTML=mins.toString()+":0"+mil.toString();
			
		}
		else{
			console.log(mins.toString()+":"+mil.toString());
			document.getElementById("break-time-id").innerHTML=mins.toString()+":"+mil.toString();
		}
		if(breakTime<0){
			//time=5000;
			breakTime=initTime;
			console.log(breakTime);
			playStatus+=1;
			document.getElementById("break-pause-play").innerHTML="&#9658";
			clearInterval(stopWatch);
			//at this point break ends, gonna need to run work again somehow here
		}
	}
	var stopWatch;
	var playStatus=0;
	//even #s mean its on play, odd means its on pause

	function countdownBreak(){
		if(playStatus%2===0){
			//even
			playStatus+=1;
			document.getElementById("break-pause-play").innerHTML="&#10074 &#10074";
			stopWatch=setInterval(milToTimeBreak,1000);
		}
		else{
			//odd
			playStatus+=1;
			document.getElementById("break-pause-play").innerHTML="&#9658";
			clearInterval(stopWatch);
		}
	}

	function plusBreakTime(){
		clearInterval(stopWatch);
		breakTime+=60000;
		breakTime=remainderRemover(breakTime);
		if(breakTime>3600000){
			breakTime=3600000;
		}
		var updatedTime=milToTimePureBreak(breakTime);
		document.getElementById("break-time-id").innerHTML=updatedTime;
	}

	function minusBreakTime(){
		clearInterval(stopWatch);
		breakTime-=60000;
		breakTime=remainderRemover(breakTime);
		if(breakTime<=0){
			breakTime=0;
		}
		var updatedTime=milToTimePureBreak(breakTime);
		document.getElementById("break-time-id").innerHTML=updatedTime;
	}

	function milToTimePureBreak(mil){
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

	function remainderRemover(mil){
		var seconds=mil%60000;
		return mil-seconds;
	}

	countdownBreak();
}