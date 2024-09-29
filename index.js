// function declaration 
function speedDetector() {
    const speedLimit = 70; //checks the allowed speed limit 
    const kmPerDemeritPoint = 5; //distance for each demerit point
    const pointPerDemerit = 1; //demrit point 
    const maximumPoints = 12; 
    //prompt user for input and checks if it's an integer
    let speed = prompt ("Input your speed number")
    speed = parseInt(speed);

//check the speed and increment the the demerit points 
    if (speed <= speedLimit) {
        return "Ok!";
    }
    let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    
    if (demeritPoints > maximumPoints) {
        return "License suspended!!!"
        }
    else {
            return `Your speed is ${speed} and the demeritPoints is  ${demeritPoints}`;
        }
    }speedDetector()



