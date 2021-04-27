class User {
  constructor(userData, tripsData, destinations, Trip) {
    this.name = userData.name;
    this.id = userData.id;
    this.type = userData.travelerType;
    this.trips = this.findTrips(tripsData, destinations, Trip);
  }

  returnFirstName() {
    const splitName = this.name.split(" ");
    return splitName[0];
  }

  findTrips(tripsData, destinations, Trip) {
    const userTrips = [];
    tripsData.forEach((tripObject, i) => {
      if (this.id === tripObject.userID) {
        const newTrip = new Trip(tripObject, destinations)
        userTrips.push(newTrip);
      }
    });
    return userTrips;
  }

  calculateAmountSpent() {
    let yearlyMS = 86400000 * 365;
    let todaysDate = new Date();
    let thisYearsTrips = [];
    let totalCost = 0;
    let housingCost = 0;
    let travelCost = 0;
    this.trips.forEach((trip, i) => {
      if(Date.parse(trip.date) > Date.parse(todaysDate) - yearlyMS) {
        thisYearsTrips.push(trip)
      }
    });

    thisYearsTrips.forEach((trip, i) => {
      housingCost += trip.duration * trip.correspondingDestination.estimatedLodgingCostPerDay;
      travelCost += trip.travelers * trip.correspondingDestination.estimatedFlightCostPerPerson;
    });
    totalCost = housingCost + travelCost;
    return totalCost += totalCost * .1;
  }
}

export default User;
