fetch('market_03-07.json')
  .then(response => response.json())
  .then(json => {
    const filteredJson = json.filter(item=> item.id === "518");
    console.log(filteredJson);
  })
  .catch(error => console.error(error));