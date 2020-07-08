// Stop Watch Assignment //


var min = 0;
var sec = 0;
var msec = 0;
var inter;
var mintxt = document.getElementById('min');
var sectxt = document.getElementById('sec');
var msectxt = document.getElementById('msec');

function stopwatch(){
    msec++;
    msectxt.innerHTML = msec;
    if(msec <10){
        msectxt.innerHTML = '0'+msec;
    }
    if(msec >=100){
        sec++;
        msec =0;
        sectxt.innerHTML = sec;
    }else if (sec >= 60){
        sec=0;
        min++;
        mintxt.innerHTML = min;
    }
    if(sec <10){
        sectxt.innerHTML = '0'+sec;
    }
    if(min <10){
        mintxt.innerHTML = '0'+min;
    }
}

function start(){
    inter = setInterval(stopwatch, 10)
    document.getElementById('but').className='hide'
}
function stop(){
    clearInterval(inter)
    document.getElementById('but').className='show'
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    mintxt.innerHTML = '0'+min;
    sectxt.innerHTML = '0'+sec;
    msectxt.innerHTML = '0'+msec;
    stop()
    document.getElementById('but').className='show'
}

