import { expect } from 'chai';
import { trips } from '../src/data/trip-test-data.js'
import { destinations } from '../src/data/destination-test-data.js'
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
    expect(trip.userId).to.equal(2);
  });

  it("should have a destination id", () => {
    expect(trip.destinationId).to.equal(5);
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
    expect(trip.suggestedActivities).to.equal([]);
  });

  it("should have a destination name", () => {
    expect(trip.destinationName).to.equal('Madrid, Spain');
  });

  it("should have a cost per day", () => {
    expect(trip.costPerDay).to.equal(100);
  });

  it("should have a flight cost per person", () => {
    expect(trip.FlightCostPerPerson).to.equal(780);
  });

  it("should have an image", () => {
    expect(trip.image).to.equal('https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  });

  it("should have alt text", () => {
    expect(trip.alt).to.equal('city with boats on the water during the day time');
  });

});
