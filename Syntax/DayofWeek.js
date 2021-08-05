function week_day(day){
    let mapper = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday':5,
        'Saturday': 6,
        'Sunday': 7}
    let value = 'error'    
    for (let key in mapper){
        if (key == day){
            value = mapper[key]
        }
    }
    console.log(value)       
}

week_day('Tuesday')
week_day('Invalid')
