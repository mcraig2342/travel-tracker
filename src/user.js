class User {
  constructor(userData, trips, destinations, Trip) {
    this.name = userData.name;
    this.id = userData.id;
    this.type = userData.travelerType;
    this.trips = this.findTrips(trips, destinations, Trip);
  }

  returnFirstName() {
    const splitName = this.name.split(" ");
    return splitName[0];
  }

  findTrips(trips, destinations, Trip) {
    const userTrips = [];
    trips.forEach((trip, i) => {
      if (this.id === trip.userID) {
        const newTrip = new Trip(trip, destinations)
        userTrips.push(newTrip);
      }
    });
    return userTrips; 2220
  }

  calculateAmountSpent() {
    let totalCost = 0;
    let housingCost = 0;
    let travelCost = 0;
    this.trips.forEach((trip, i) => {
      housingCost += trip.duration * trip.correspondingDestination.estimatedLodgingCostPerDay;
      travelCost += trip.travelers * trip.correspondingDestination.estimatedFlightCostPerPerson;
   });
   totalCost = housingCost + travelCost;
   return totalCost += totalCost * .1;
  }
}

export default User;
