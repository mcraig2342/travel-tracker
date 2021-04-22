import { expect } from 'chai';
import User from '../src/user.js';
import Trip from '../src/trip.js';
import trips from '../src/data/trip-test-data.js'
import destinations from '../src/data/destination-test-data.js'

let defaultUser;

describe('User', () => {
  beforeEach(() => {
    defaultUser = new User({
"id": 1,
"name": "Ham Leadbeater",
"travelerType": "relaxer"
}, trips, destinations, Trip);
  });

  it('should be an instance of a User', () => {
    expect(defaultUser).to.be.an.instanceof(User);
  });

  it("should have an id", () => {
    expect(defaultUser.id).to.equal(1);
  });

  it("should have a name", () => {
    expect(defaultUser.name).to.equal('Ham Leadbeater');
  });

  it("should have a type", () => {
    expect(defaultUser.type).to.equal('relaxer');
  });

  it("should be able to return th users first name", () => {
    expect(defaultUser.returnFirstName()).to.equal('Ham');
  });

  it("should be able to find their trips", () => {
    expect(defaultUser.trips).to.deep.equal([
  {
    id: 5,
    userID: 1,
    destinationID: 4,
    travelers: 3,
    date: '2020/04/30',
    duration: 18,
    status: 'approved',
    suggestedActivities: [],
    correspondingDestination: {
      id: 4,
      destination: 'Cartagena, Colombia',
      estimatedLodgingCostPerDay: 65,
      estimatedFlightCostPerPerson: 350,
      image: 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      alt: 'boats at a dock during the day time'
    }
  }
])
  });

  it("should be able to find the amount they have spent", () => {
    expect(defaultUser.calculateAmountSpent(destinations)).to.equal(2442)
  });
});
