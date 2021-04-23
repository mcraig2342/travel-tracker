const domUpdates = {
  displayUserName(user) {
    const nameDisplay = document.getElementById('welcome')
    nameDisplay.innerText = `Welcome ${user.returnFirstName()}`
  },

  displayAmountSpent(user) {
    const amountSpentDisplay = document.getElementById('amountSpent')
    amountSpentDisplay.innerText = `You have spent $${user.calculateAmountSpent()} traveling`
  },

  displayUserTrips(user) {
    let todaysDate = "2020/3/28"
    const pastTripList = document.getElementById('pastTripList')
    const upcomingTripList = document.getElementById('upcomingTripList')
    const ongoingTripList = document.getElementById('ongoingTripList')
    const pendingTripList = document.getElementById('pendingTripList')

    user.trips.forEach((trip, i) => {
      if (trip.status === 'pending') {
        pendingTripList.innerHTML +=
          `<p>${trip.correspondingDestination.destination}</p>`
      } else {
        if (this.calculateDate(trip, todaysDate) === 'ongoing') {
          ongoingTripList.innerHTML +=
            `<p>${trip.correspondingDestination.destination}</p>`
        } else if (this.calculateDate(trip, todaysDate) === 'upcoming') {
          upcomingTripList.innerHTML +=
            `<p>${trip.correspondingDestination.destination}</p>`
        } else {
          pastTripList.innerHTML +=
            `<p>${trip.correspondingDestination.destination}</p>`
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
    dashboard.classList.add('hidden');
    form.classList.remove('hidden');
  },

  showDash() {
    const dashboard = document.getElementById('mainDashboard');
    const form = document.getElementById('tripRequestForm');
    dashboard.classList.remove('hidden');
    form.classList.add('hidden');
  },

  displayDestinations(destinations) {
    const destinationList = document.getElementById('destinationList')
    console.log(destinations)
    destinations.forEach((destination, i) => {
      destinationList.innerHTML +=
      `<section class="destination-card">
        <header>
          <h3>${destination.destination}</h3>
        </header>
        <img class="image-size" src=${destination.image} alt=${destination.alt}>
        <ul>
          <li>Flight cost(per traveler): ${destination.estimatedFlightCostPerPerson}</li>
          <li>Lodging cost(per day): ${destination.estimatedLodgingCostPerDay}</li>
        </ul>
      </section>`
    });

  }
}


export default domUpdates;
