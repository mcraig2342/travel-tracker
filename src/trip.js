class Trip {
  constructor(singleTripData, destinationData) {
    this.id = singleTripData.id;
    this.userID = singleTripData.userID;
    this.destinationID = singleTripData.destinationID;
    this.travelers = singleTripData.travelers;
    this.date = singleTripData.date;
    this.duration = singleTripData.duration;
    this.status = singleTripData.status;
    this.suggestedActivities = singleTripData.suggestedActivities;
    this.correspondingDestination = this.findDestination(destinationData);
  }

  findDestination(destinationData) {
    let currentDestination;
    destinationData.forEach((destination, i) => {
      if(this.destinationID === destination.id) {
        currentDestination = destination;
      }
    });
  return currentDestination 
  }
}

export default Trip;
