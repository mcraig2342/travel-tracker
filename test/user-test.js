import { expect } from 'chai';
import User from '../src/user.js';
import trips from '../src/data/trip-test-data.js'

let defaultUser;

describe('User', () => {
  beforeEach(() => {
    defaultUser = new User({
"id": 1,
"name": "Ham Leadbeater",
"travelerType": "relaxer"
}, trips);
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
    expect(defaultUser.trips).to.deep.equal([trips[4]])
  });
});
