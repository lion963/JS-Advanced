function cityPopulation(arr){
    const cities = {}
    for (let data of arr){
        let [name, population] = data.split(' <-> ');
        population = Number(population)
        if (cities[name]!=undefined){
            population += cities[name]
        }
        cities[name] = population
    }
    for (let [city, population] of Object.entries(cities)){
        console.log(`${city} : ${population}`)
    }
}

cityPopulation(
    ['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])