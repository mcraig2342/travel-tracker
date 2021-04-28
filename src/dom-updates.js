const domUpdates = {
  displayUserName(user) {
    const nameDisplay = document.getElementById('welcome')
    nameDisplay.innerText = `Welcome ${user.returnFirstName()}`
  },

  displayAmountSpent(user) {
    const amountSpentDisplay = document.getElementById('amountSpent')
    amountSpentDisplay.innerText = `Amount spent this year: $${user.calculateAmountSpent()}`
  },

  displayUserTrips(user) {
    let todaysDate = new Date();
    const pastTripList = document.getElementById('pastTripList')
    const upcomingTripList = document.getElementById('upcomingTripList')
    const ongoingTripList = document.getElementById('ongoingTripList')
    const pendingTripList = document.getElementById('pendingTripList')

    pendingTripList.innerHTML = '';
    ongoingTripList.innerHTML = '';
    upcomingTripList.innerHTML = '';
    pastTripList.innerHTML = '';
    user.trips.forEach((trip, i) => {
      if (trip.status === 'pending') {
        pendingTripList.innerHTML +=
          `<li class='trip'>${trip.correspondingDestination.destination}</li>`
      } else {
        if (this.calculateDate(trip, todaysDate) === 'ongoing') {
          ongoingTripList.innerHTML +=
            `<li class='trip'>${trip.correspondingDestination.destination}</li>`
        } else if (this.calculateDate(trip, todaysDate) === 'upcoming') {
          upcomingTripList.innerHTML +=
            `<li class='trip'>${trip.correspondingDestination.destination}</li>`
        } else {
          pastTripList.innerHTML +=
            `<li class='trip'>${trip.correspondingDestination.destination}</li>`
        }
      }
    });
  },

  calculateDate(trip, todaysDate) {
    let durationInMS = trip.duration * 86400000;
    let currentDate = Date.parse(todaysDate)
    let date = Date.parse(trip.date)
    if (date === currentDate) {
      return "ongoing"
    } else if (date > currentDate) {
      return "upcoming"
    } else if (currentDate > date) {
      if (currentDate < date + durationInMS) {
        return "ongoing"
      } else {
        return "past"
      }
    }
  },

  showForm() {
    const dashboard = document.getElementById('mainDashboard');
    const form = document.getElementById('tripRequestForm');
    const amountSpent = document.getElementById('amountSpent');
    const dashboardButton = document.getElementById('dashboardButton');
    const bookTripButton = document.getElementById('bookTripButton');
    dashboardButton.classList.remove('tab-styling');
    bookTripButton.classList.add('tab-styling');
    amountSpent.classList.add('hidden');
    dashboard.classList.add('hidden');
    form.classList.remove('hidden');
  },

  showDash() {
    const header = document.getElementById('header');
    const nav = document.getElementById('nav')
    const loginPage = document.getElementById('userLogin');
    const dashboard = document.getElementById('mainDashboard');
    const form = document.getElementById('tripRequestForm');
    const amountSpent = document.getElementById('amountSpent');
    const dashboardButton = document.getElementById('dashboardButton');
    const bookTripButton = document.getElementById('bookTripButton');
    dashboardButton.classList.add('tab-styling');
    bookTripButton.classList.remove('tab-styling');
    amountSpent.classList.remove('hidden')
    dashboard.classList.remove('hidden');
    nav.classList.remove('hidden');
    header.classList.remove('hidden');
    form.classList.add('hidden');
    loginPage.classList.add('hidden');
  },

  displayDestinations(destinations) {
    const destinationList = document.getElementById('destinationList')
    destinations.forEach((destination, i) => {
      destinationList.innerHTML +=
      `<section id="${destination.id}" class="card destination-card">
        <header>
          <h3 id="${destination.id}" class="card">${destination.destination}</h3>
        </header>
        <img id="${destination.id}" class="card image-size" src=${destination.image} alt=${destination.alt}>
        <ul id="${destination.id}" class="card">
          <li class="cost">Flight cost(per traveler): ${destination.estimatedFlightCostPerPerson}</li>
          <li class="cost">Lodging cost(per day): ${destination.estimatedLodgingCostPerDay}</li>
        </ul>
      </section>`
    });
  },

  confirmTripRequest(tripRequest) {
    let housingCost = tripRequest.duration * tripRequest.correspondingDestination.estimatedLodgingCostPerDay;
    let travelCost = tripRequest.travelers * tripRequest.correspondingDestination.estimatedFlightCostPerPerson;
    let totalCost = housingCost + travelCost;
    let estimatedCost = totalCost + totalCost * .1
    const tripDetails = document.getElementById('tripDetails')
    tripDetails.innerHTML = '';
    tripDetails.innerHTML +=
    `<div class="details-container">
      <p>Destination: ${tripRequest.correspondingDestination.destination}</p>
      <p>Travelers: ${tripRequest.travelers}</p>
      <p>Duration: ${tripRequest.duration}</p>
      <p>Estimated Cost: $${estimatedCost}</p>
    </div>`
  },

  displayNegativeValueError() {
    tripDetails.innerHTML = '';
    tripDetails.innerHTML = 'Please select positive values and a future travel date';
  },

  displayConfirmation(user) {
    tripDetails.innerHTML = '';
    tripDetails.innerHTML = 'Your trip request has been submitted, you will be redirected to the dashboard';
    setTimeout(this.showDash, 3000);
    this.displayUserTrips(user);
  }
}

export default domUpdates;
