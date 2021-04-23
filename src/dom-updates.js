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
    let dashboard = document.getElementById('mainDashboard');
    let form = document.getElementById('tripRequestForm');
    console.log(form);
    dashboard.classList.add('hidden');
    form.classList.remove('hidden');
  },

  showDash() {
    let dashboard = document.getElementById('mainDashboard');
    let form = document.getElementById('tripRequestForm');
    dashboard.classList.remove('hidden');
    form.classList.add('hidden');
  },

  displayDestinations(destinations) {
    console.log(destinations)
  }
}


export default domUpdates;
