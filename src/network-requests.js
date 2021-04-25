const getData = (userID) => {
  const tripsData = fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json())
    .then(tripsData => {
      return tripsData;
    })

  const destinationData = fetch('http://localhost:3001/api/v1/destinations')
    .then(response => response.json())
    .then(destinationData => {
      return destinationData;
    })

  const travelerData = fetch(`http://localhost:3001/api/v1/travelers/${userID}`)
    .then(response => response.json())
    .then(travelerData => {
      return travelerData;
    })

  return Promise.all([tripsData, destinationData, travelerData])
    .then(data => {
      const allData = {};
      allData.tripsData = data[0];
      allData.destinationData = data[1];
      allData.travelerData = data[2];
      return allData;
    })
    .catch(err => console.log('ERROR', err))
}

const postTrip = (object) => {
  fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify(object),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .catch(err => console.log('ERROR', err))

}


export {
  getData, postTrip
};
