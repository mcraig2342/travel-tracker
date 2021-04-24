// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import domUpdates from "./dom-updates";
import {
  getData, postTrip
} from './network-requests.js'
import Trip from './trip.js'
import User from './user.js'
import './css/base.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
const tripButton = document.getElementById('bookTripButton');
const dashButton = document.getElementById('dashboardButton');
const makeRequestButton = document.getElementById('tripRequestButton');
const destinationList = document.getElementById('destinationList');
const startDate = document.getElementById('startDate');
const duration = document.getElementById('duration');
const travelers = document.getElementById('travelers')
let user, chosenDestination, trips;

window.onload = onStartup();
tripButton.addEventListener('click', domUpdates.showForm);
dashButton.addEventListener('click', domUpdates.showDash);
makeRequestButton.addEventListener('click', makeTripRequest);
destinationList.addEventListener('click', selectDestination);

function onStartup() {
  getData()
    .then(allData => {
      user = new User(allData.travelerData.travelers[1], allData.tripsData.trips, allData.destinationData.destinations, Trip);
      trips = allData.tripsData.trips
      domUpdates.displayUserName(user);
      domUpdates.displayAmountSpent(user);
      domUpdates.displayUserTrips(user);
      domUpdates.displayDestinations(allData.destinationData.destinations)
    })
}

function makeTripRequest() {
  // domUpdates.confirmTripRequest();
  let formattedDate = startDate.value.replace(/-/g, "/");
  let tripRequest = {
    id: trips.length + 1,
     userID: user.id,
      destinationID: parseInt(chosenDestination),
       travelers: parseInt(travelers.value),
        date:formattedDate,
        duration: parseInt(duration.value),
         status: 'pending',
          suggestedActivities: []
        }
    console.log(tripRequest);
    postTrip(tripRequest);
    onStartup();
}

function selectDestination(event) {
  if (event.target.classList.contains('destination-card')) {
      chosenDestination = event.target.id
    }
}
