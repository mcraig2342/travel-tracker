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
const loginButton = document.getElementById('loginButton')
let user, userLoginId, chosenDestination, trips, requestedTrip, tripRequest;

// window.onload = onStartup();
tripButton.addEventListener('click', domUpdates.showForm);
dashButton.addEventListener('click', domUpdates.showDash);
makeRequestButton.addEventListener('click', makeTripRequest);
destinationList.addEventListener('click', selectDestination);
loginButton.addEventListener('click', loginTraveler)

function loadUser() {
  getData(userLoginId)
    .then(allData => {
      user = new User(allData.travelerData, allData.tripsData.trips, allData.destinationData.destinations, Trip);
      trips = allData.tripsData.trips
      domUpdates.displayUserName(user);
      domUpdates.displayAmountSpent(user);
      domUpdates.displayUserTrips(user);
      domUpdates.displayDestinations(allData.destinationData.destinations)
    })
}

function makeTripRequest() {
  if (window.confirm('Are you sure you want to request this trip?')) {
    postTrip(tripRequest);
    onStartup();
    domUpdates.displayUserTrips(user);
  }
}

function selectDestination(event) {
  if (event.target.classList.contains('destination-card')) {
    let formattedDate = startDate.value.replace(/-/g, "/");
    chosenDestination = event.target.id
    tripRequest = {
      id: trips.length + 1,
      userID: user.id,
      destinationID: parseInt(chosenDestination),
      travelers: parseInt(travelers.value),
      date: formattedDate,
      duration: parseInt(duration.value),
      status: 'pending',
      suggestedActivities: [],
    };
    getData()
      .then(allData => {
        requestedTrip = new Trip(tripRequest, allData.destinationData.destinations)
        domUpdates.confirmTripRequest(requestedTrip);
      })
  }
}

function loginTraveler() {
  const feedback = document.getElementById('feedback');
  const userName = document.getElementById('userName').value;
  const password = document.getElementById('password').value;
  const validUserNames = []
  const correctPassword = 'travel2020'
  for(let i = 1; i <= 50; i++) {
    validUserNames.push(`traveler${i}`)
  };

  if(validUserNames.includes(userName) && password === correctPassword) {
    userLoginId = userName.split("r")[2]
    domUpdates.showDash();
    loadUser();
  } else{
    feedback.innerText = "Incorrect user name and password combination"
  }

}
