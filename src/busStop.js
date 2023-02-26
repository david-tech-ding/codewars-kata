var number = function(busStops){
    let totalPassengers = 0;
    for (let i=0; i<busStops.length; i++){
      totalPassengers += busStops[i][0] - busStops[i][1];
    }
    return totalPassengers;
  }