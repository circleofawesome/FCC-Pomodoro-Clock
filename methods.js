//the clock runs for the duration of work specified then the break portion runs then the work portion runs again..forever 


//takes number of milliseconds and returns a proper time to display
function milToTime(mil){
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
//milToTime(882000);

========================

//function that takes a time in milliseconds and the id of the element to be changed and displays it 

function displayTime(time,id){
	var str=milToTime(time);
	document.getElementById(id).value=str;
}