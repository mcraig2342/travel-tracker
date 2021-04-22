import { expect } from 'chai';

import User from '../src/user.js';

let trip;

const tripData;

const destinationData;

describe('User', () => {
  beforeEach(() => {
    trip = new Trip(tripData, destinationData);
  });

  it('should be an instance of a Trip', () => {
    expect(trip).to.be.an.instanceof(User);
  });

  it("should have an id", () => {
    expect(trip.id).to.equal(1);
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
});
