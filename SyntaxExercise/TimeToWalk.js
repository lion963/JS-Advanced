function time_walk(...args){
    let hours;
    let minutes;
    let seconds;
    let steps = args[0];
    let step_length = args[1];
    let speed = args[2];
    let devisor = (1/60).toFixed(6); 
    let meters = steps * step_length;
    let kilometers = meters/1000;
    let rest_time_minutes = Math.floor(meters/500);
    let minutes_row = ((kilometers/speed)/devisor)+rest_time_minutes;
    if (minutes_row > 60){
        hours = Math.floor(minutes_row/60);
        minutes = Math.floor(minutes_row - hours*60);
        seconds = Math.ceil((minutes_row - hours*60 - minutes)/devisor);
    } else {
        hours = 0;
        minutes = Math.floor(minutes_row);
        seconds = Math.ceil((minutes_row-minutes)/devisor);
    }
    if (String(hours).length == 1){
        hours = '0'+ String(hours)
    } else {
        hours = String(hours)
    }
    if (String(minutes).length == 1){
        minutes = '0'+ String(minutes)
    } else {
        minutes = String(minutes)
    }
    if (String(seconds).length == 1){
        seconds = '0'+ String(seconds)
    } else {
        seconds = String(seconds)
    }
    console.log(hours+':'+minutes+':'+seconds);
}



time_walk(4000, 0.60, 5);
time_walk(2564, 0.70, 5.5);
time_walk(9500, 0.60, 5);