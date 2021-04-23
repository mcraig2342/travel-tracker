// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import domUpdates from "./dom-updates";
import {
  getData
} from './network-requests.js'
import Trip from './trip.js'
import User from './user.js'
import './css/base.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
const tripButton = document.getElementById('bookTripButton');
const dashButton = document.getElementById('dashboardButton');
const makeRequestButton = document.getElementById('tripRequestButton')
let user;

window.onload = onStartup();
tripButton.addEventListener('click', domUpdates.showForm);
dashButton.addEventListener('click', domUpdates.showDash);
makeRequestButton.addEventListener('click', makeTripRequest)

function onStartup() {
  getData()
    .then(allData => {
      user = new User(allData.travelerData.travelers[1], allData.tripsData.trips, allData.destinationData.destinations, Trip);
      domUpdates.displayUserName(user);
      domUpdates.displayAmountSpent(user);
      domUpdates.displayUserTrips(user);
      domUpdates.displayDestinations(allData.destinationData.destinations)
    })
}

function makeTripRequest() {
  domUpdates.confirmTripRequest();
}
