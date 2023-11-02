function distanceFromHqInBlocks(someValue) {
    if (someValue < 42) {
        return 42 - someValue
    }

    else {
        return someValue - 42
    }
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264

} 

function distanceTravelledInFeet(start, destination) {
    if (destination < start) {
    return ((start - destination) * 264)
    }

    else {
        return ((destination - start) * 264)
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    }

    else if (400 <= distance && distance <= 2000) {
        return 0.02 * (distance - 400)
    }
     
    else if (2000 <= distance && distance <= 2500) {
        return 25
    }

    else if (distance > 2500) {
        return 'cannot travel that far'
    }
    
    }