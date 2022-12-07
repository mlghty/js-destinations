const sumbitBtn = document.getElementById("sumbitBtn");

let numberOfCards = 0;

sumbitBtn.addEventListener("click", function (event) {
  // needed to not sumbit form and refresh page
  // or else we lose data
  event.preventDefault();

  const destinationName = document.getElementById("destination_name").value;
  const locationName = document.getElementById("location_name").value;

  const photoUrl = document.getElementById("photo_url").value;
  const description = document.getElementById("description").value;

  if (destinationName && locationName) {
    console.log("Sumbit form good!");
    createCardTemplateLiteral(
      destinationName,
      locationName,
      photoUrl,
      description
    );
  } else {
    console.log("Both Destination and Location Empty!");
  }
});

function editCard(event) {
  console.log(event);
  const updatedDestination = prompt("Enter new name");
  const updatedLocation = prompt("Enter new location");
  const updatedUrl = prompt("Enter new photo url");

  const editImage = event.target.parentElement.parentElement.parentElement;
  const editCard = event.target.parentElement.parentElement;

  // console.log(editCard)
  // console.log(editCard.children.length)
  // // Element #0:[object HTMLHeadingElement]
  // // Element #1:[object HTMLHeadingElement]
  // // Element #2:[object HTMLParagraphElement]
  // // Element #3:[object HTMLDivElement]

  // for (let index = 0; index < editCard.children.length; index++) {
  //   const element = editCard.children[index];
  //   console.log("Element #"+index + ":" +element);
  // }

  const previousUrl = editImage.children[0];
  const previousDestination = editCard.children[0];
  const previousLocation = editCard.children[1];
  const previousDescription = editCard.children[2];
  console.log(previousUrl);
  console.log(previousDestination);
  console.log(previousLocation);
  console.log(previousDescription);

  if (updatedDestination && updatedLocation) {
    previousDestination.textContent = updatedDestination;
    previousLocation.textContent = updatedLocation;
    // previousUrl.setAttribute("src", updatedUrl);
  } else {
    alert("Location and Destination must be provided!");
  }
  if (updatedUrl) {
    previousUrl.setAttribute("src", updatedUrl);
  }
}

function removeCard(event) {
  // remove parent div of card by id
  console.log(event);

  let card = event.target.parentElement.parentElement;
  let cardDiv = card.parentElement;
  cardDiv.remove();
  numberOfCards--;
}

function createCardTemplateLiteral(
  destination = null,
  location = null,
  url = null,
  description = null
) {
  numberOfCards++;
  const divHolder = document.getElementById("right_room_bottom_floor");

  const rightRoomTitle = document.getElementById("enter_destination");

  rightRoomTitle.innerText = "My WishList";

  const test1 = `
  <div class="card div_card" style="width: 18rem;">
    <img src=${url} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${destination}</h5>
      <h6 class="card-title card-location">${location}</h5>
      <p class="card-text">${description}</p>
      <div class="btn-container">
      <button class="btn btn-warning">Edit</button>
    <button class="btn btn-danger">Remove</button>
    </div>
    </div>
  </div>
`;

  console.log("Clicked! Number of cards: " + numberOfCards);

  divHolder.innerHTML += test1;

  const editBtns = document.getElementsByClassName("btn-warning");

  const removeBtn = document.getElementsByClassName("btn-danger");

  console.log(editBtns);
  console.log(removeBtn);

  addEventListeners(editBtns, removeBtn);
}

function addEventListeners(edit, remove) {
  for (let index = 0; index < edit.length; index++) {
    const element = edit[index];
    element.addEventListener("click", editCard);
  }

  for (let index = 0; index < remove.length; index++) {
    const element = remove[index];
    element.addEventListener("click", removeCard);
  }
}

function throwAway() {
  // createCard(destinationName, locationName, photoUrl, description);
  // let url1 = "ALPHA";
  // // let description1 = "ALPHA";
  // console.log("btnEdit" +numberOfCards.toString());
  // console.log("btnRemove" + numberOfCards.toString());
  // const editBtn = document.getElementById("btnEdit" +numberOfCards.toString());
  // const removeBtn = document.getElementById("btnRemove"+numberOfCards.toString());
  // console.log("btnEdit" +numberOfCards.toString())
  // console.log("btnRemove"+numberOfCards.toString())
  // editBtn.addEventListener("click", editCard);
  // removeBtn.addEventListener("click", removeCard);
  // console.log(editBtn)
  // console.log(removeBtn)
  // old code
  // newDiv.appendChild(newImg);
  // newDiv.appendChild(newH1);
  // newDiv.appendChild(newH2);
  // newDiv.appendChild(newParagraph);
  // newDiv.appendChild(editBtn);
  // newDiv.appendChild(RemoveBtn);
  // newDiv.appendChild(newImg)
  // .appendChild(newH1)
  // .appendChild(newH2)
  // .appendChild(newParagraph)
  // .appendChild(editBtn)
  // .appendChild(RemoveBtn);
  //   const destinationContent = document.createTextNode(destination);
  //   const locationContent = document.create(location);
  //   const urlContent = document.createTextNode(url);
  //   const descriptionContent = document.createTextNode(decription);
  //   newDiv.appendChild(destinationContent);
  //   newDiv.appendChild(locationContent);
  //   newDiv.appendChild(urlContent);
  //   newDiv.appendChild(descriptionContent);
  // addDestinations(destinationName, locationName, photoUrl, description);
  // function addDestinations(destination, location, url = null, decription = null) {
  //   createCard(destination, location, url, decription);
  //   console.log("Destination name: " + destination);
  //   console.log("Location name: " + location);
  //   console.log("Photo Url: " + url);
  //   console.log("Description: " + decription);
  //   //   divHolder.appendChild(newDiv);
  //   return;
  // }
}

// function createCard(destination, location, url = null, decription = null) {
//   // card container
//   const divHolder = document.getElementById("right_room_bottom_floor");

//   // new div to hold created elements!
//   const newDiv = document.createElement("div");

//   // creating elements for the cards
//   const newH1 = document.createElement("h3");
//   const newH2 = document.createElement("h4");
//   const newParagraph = document.createElement("p");
//   const newImg = document.createElement("img");

//   // creating buttons
//   const editBtn = document.createElement("button");
//   const RemoveBtn = document.createElement("button");

//   // adding classes
//   newDiv.className = "div_card";
//   newImg.className = "card_img";

//   // setting attributes
//   editBtn.setAttribute("id", "edit_btn");
//   RemoveBtn.setAttribute("id", "remove_btn");

//   newH1.innerText = destination;
//   newH2.innerText = location;

//   newImg.src = url;

//   newParagraph.innerHTML = decription;

//   editBtn.innerHTML = "Edit";
//   RemoveBtn.innerHTML = "Remove";

//   // adding new children to the card div
//   newDiv.append(newImg, newH1, newH2, newParagraph, editBtn, RemoveBtn);

//   // adding above new div to the card container
//   divHolder.appendChild(newDiv);
// }
