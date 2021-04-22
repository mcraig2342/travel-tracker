class User {
  constructor(userData, trips) {
    this.name = userData.name;
    this.id = userData.id;
    this.type = userData.travelerType;
    this.trips = this.findTrips(trips);
  }

  returnFirstName() {
    const splitName = this.name.split(" ");
    return splitName[0];
  }

  findTrips(trips) {
    const userTrips = [];
    trips.forEach((trip, i) => {
      if(this.id === trip.userID) {
        userTrips.push(trip);
      }
    });
  return userTrips;
  }
}

export default User;
