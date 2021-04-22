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
    const pastTripList = document.getElementById('pastTripList')
  }
}


export default domUpdates;
