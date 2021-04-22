class User {
  constructor(userData) {
    this.name = userData.name;
    this.id = userData.id;
    this.type = userData.travelerType;
  }

  returnFirstName() {
    const splitName = this.name.split(" ");
    return splitName[0];
  }
}

export default User;
