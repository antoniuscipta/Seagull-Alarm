const display = document.getElementById('clock');
document.getElementById('wakeuptext').hidden=true;
const audio = new Audio('./assets/ritn-ryoxremix.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime(){
    const date = new Date();
    
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    document.getElementById('datetoday').innerHTML = "It's " + days[date.getDay()]+", "+date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
    display.innerText=`${hour} : ${minutes} : ${seconds}`;
}

function formatTime(time){
    if( time < 10 ){
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value){
    alarmTime = value;
    console.log(alarmTime);
}

function setAlarm(){
    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);
        
        const hour = formatTime(timeToAlarm.getHours() - current.getHours());
        const minutes = formatTime(timeToAlarm.getMinutes() - current.getMinutes());

        if(timeToAlarm > current){
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeon = setTimeout(() => audio.play(), timeout);
            // realized that I didn't understand what is setTimeout method
            alarmTimeon2 = setTimeout(() => {wakeuptext.hidden=false}, timeout);

            if(hour < 1){
                alert(`Alarm set for ${minutes} Minutes ! -Seagull`);
            }else
                alert(`Alarm set for ${hour} Hours ${minutes} Minutes ! -Seagull`);
        }
    }
}

function clearAlarm(){
    audio.pause();
    audio.load();
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
    }
    wakeuptext.hidden=true;
    alert('Alarm Cleared. Good morning and Have a nice day! :) -Seagull');
}

function socialMedia(){
    alert("Link page coming Soon! 🦆");
}
setInterval(updateTime, 1000);