function speedDetector() {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointPerDemerit = 1;
    const maximumPoints = 12;
    let speed = prompt ("Input your speed number")
    speed = parseInt(speed);


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



