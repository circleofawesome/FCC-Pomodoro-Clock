var time=5000;
time-=1000;
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
		//document.getElementById("meo").innerHTML="hello";
		
	}
	else{
		console.log(mins.toString()+":"+mil.toString());
		document.getElementById("work-time-id").innerHTML=mins.toString()+":"+mil.toString();
		//document.getElementById("meo").innerHTML="hello";
	}
	if(time<0){
		clearInterval(stopWatch);
	}
}


//var stopWatch=setInterval(milToTime,1000);

function countdown(){
	//console.log("hello");
	var stopWatch=setInterval(milToTime,1000);
}