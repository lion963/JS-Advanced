function road_radar(speed, area){
    let status;
    let areas = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }

    if (speed <= areas[area]){
        console.log('Driving '+speed+' km/h in a '+areas[area]+' zone');
    } else if (areas[area] < speed && speed<= areas[area]+20){
        status = 'speeding';
        console.log('The speed is '+(speed-areas[area])+' km/h faster than the allowed speed of '+areas[area]+' - '+status);
    } else if (areas[area]+20 < speed && speed<= areas[area]+40){
        status = 'excessive speeding';
        console.log('The speed is '+(speed-areas[area])+' km/h faster than the allowed speed of '+areas[area]+' - '+status);
    } else {
        status = 'reckless driving';
        console.log('The speed is '+(speed-areas[area])+' km/h faster than the allowed speed of '+areas[area]+' - '+status);
    }

}

road_radar(40, 'city')
road_radar(21, 'residential')
road_radar(120, 'interstate')
road_radar(200, 'motorway')