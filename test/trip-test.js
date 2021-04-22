import { expect } from 'chai';
import trips from '../src/data/trip-test-data.js'
import destinations from '../src/data/destination-test-data.js'
import Trip from '../src/trip.js';

let trip;
let tripData = trips;
let destinationData = destinations;

describe('Trip', () => {
  beforeEach(() => {
    trip = new Trip(tripData[0], destinationData);
  });

  it('should be an instance of a Trip', () => {
    expect(trip).to.be.an.instanceof(Trip);
  });

  it("should have an id", () => {
    expect(trip.id).to.equal(1);
  });

  it("should have a user id", () => {
    expect(trip.userID).to.equal(2);
  });

  it("should have a destination id", () => {
    expect(trip.destinationID).to.equal(5);
  });

  it("should have a number of travelers", () => {
    expect(trip.travelers).to.equal(1);
  });

  it("should have a date", () => {
    expect(trip.date).to.equal('2019/09/16');
  });

  it("should have a duration", () => {
    expect(trip.duration).to.equal(8);
  });

  it("should have a status", () => {
    expect(trip.status).to.equal('approved');
  });

  it("should have an array of suggested activities", () => {
    expect(trip.suggestedActivities).to.deep.equal([]);
  });

  it("should have a correspondong destination object", () => {
    expect(trip.correspondingDestination).to.deep.equal(destinationData[4]);
  });


});
