alert ("Welcome To...\n Stop Watch")

var day = 0;
var hour = 0;  
var min = 0;
var sec = 0;
var msec = 0;

var dayHeading = document.getElementById("day");
var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var interval;
//100 60 59
function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100){
        sec++
        secHeading.innerHTML = sec
        msec = 0
    }else if(sec >= 60){
        min++
        sec = 0
        minHeading.innerHTML = min
        sec = 0
    }else if(min >= 59){
        hour++
        min = 0
        hourHeading.innerHTML = hour
        min = 0
    }else if(hour >= 24){
        day++
        hour = 0
        dayHeading.innerHTML = day
        hour = 0
    }
}
function active (){
    interval = setInterval(timer,10)
    document.getElementById('xyz').disabled=true
}

function pause (){
    clearInterval(interval)
    document.getElementById('xyz').disabled=false
}

function reset () {
    day = 0;
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    
   

    listlap.innerHTML = "." ;
    dayHeading.innerHTML = "00";
    hourHeading.innerHTML = "00";
    minHeading.innerHTML = "00";
    secHeading.innerHTML = "00";
    msecHeading.innerHTML = "00";
    pause ();
    document.getElementById('xyz').disabled=false
}

function Lab (names) {
    var li =  document.createElement('li');
    li.textContent = names;
    return li;
    
    }
    
    function listlaps(){
        var mixed = day +":"+ hour +":"+ min +":"+ sec
    const listlap = document.querySelector('#listlap')
    console.log ("l")
    
    listlap.appendChild(Lab(mixed));
    }

