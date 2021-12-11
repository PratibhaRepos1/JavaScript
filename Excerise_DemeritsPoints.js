//create a funtion as checkspeed
// speed limit = 70
// if the speed limit is greater than 70 add a point per 5 km to 1 point
//use Math.floor
//12 points -> license suspended
checkSpeed(100);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint){
        console.log('ok');
        return;
    }
    const Points =Math.floor((speed - speedLimit) / kmPerPoint);
    if(Points >= 12)
        console.log('License suspended')
    else
        console.log('Points ' + Points);
    
}
