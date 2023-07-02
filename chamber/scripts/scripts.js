// hamburger button

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// UK date format

const datefieldUK = document.getElementById("header-date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

// logo image at the bottom of the page in the footer

const img = document.createElement("img");

img.src = "images/flowerlogo.jpg";
img.alt = "Image of a flower with a gray sunbeam for the Garden of the Gods Logo."


// resize image

img.onload = function () {
  const width = Math.floor((img.width = 100));
  const height = Math.floor((img.height = 100));
};

const block = document.getElementById("logo");
block.appendChild(img);

// address

const address = `<b>Garden of the Gods Chamber</b> <br/>401-645 Ridge Rd <br/>Colorado Springs, CO 80904`;

const physicalAddress = document.getElementById("address");
physicalAddress.innerHTML = address;

//  contact info and map

const info = `deepfatfried1942@gmail.com <br/> +1 (832) 499-2404
<br/>`;
const contact = document.getElementById("contactMap");
contact.innerHTML = info;

const String = "Map";
const result = String.link(
  "https://earth.google.com/web/search/Garden+of+the+Gods+South+Entrance,+Ridge+Road,+Colorado+Springs,+CO/@38.8615515,-104.8790266,1925.55760794a,800.86219345d,35y,0h,45t,0r/data=Cq8BGoQBEn4KJTB4ODcxMzUwNzcwYjMyZDgyMzoweDI0Y2Q0Njg5YzZjMTNkYWYZ7SjOUUduQ0AhGdTI-EE4WsAqQ0dhcmRlbiBvZiB0aGUgR29kcyBTb3V0aCBFbnRyYW5jZSwgUmlkZ2UgUm9hZCwgQ29sb3JhZG8gU3ByaW5ncywgQ08YAiABIiYKJAl5l4F8bnFDQBHebMM2cG9DQBmWHiZ6_zZawCEcZckoVThawCgC"
);
document.getElementById("map").innerHTML = result;

// copyright and last modified

const today = new Date();
const year = today.getFullYear();
const msg = `&copy;  ${year}  Garden of the Gods Chamber | Johnathon A. Staples | Colorado<br/>
<b>Last Updated: </b>${document.lastModified}`;

const footer = document.getElementById("copyright");
footer.innerHTML = msg;

// Banner

const welcomeMessage = (day) => {
  const header = document.querySelector(".banner");
  const bannerMessage = document.createElement("p");
  bannerMessage.innerText = `🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.`;
  header.appendChild(bannerMessage);
};

const dayName = new Date();
switch (dayName.getDay()) {
  case 1:
    welcomeMessage("");
    break;
}

const displaySpotlight = (businessess) => {
  const spotlights = document.querySelector("div.spotlight"); // select the output container element

  const silverOrGoldBusinesses = directory.filter((business) => {
    return business.mLevel === "Silver" || business.mLevel === "Gold";
  });

  const randomBusinesses = silverOrGoldBusinesses.slice(0, 3);

  randomBusinesses.forEach((business) => {
    // Create elements to add to the div.spotlight element
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let picture = document.createElement("img");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let address = document.createElement("p");

    // Build the h2 content out to show the business name
    h2.textContent = `${business.business}`;
    phone.textContent = `${business.phone}`;
    address.textContent = `${business.address}`;
    website.textContent = `${business.website}`;

    // Build the image by setting all the relevant attribute
    picture.setAttribute("src", business.image);
    picture.setAttribute("alt", `Picture of ${business.business}`);
    website.setAttribute("href", business.website);

    card.setAttribute("class", "sLight");

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(website);
    card.appendChild(phone);
    card.appendChild(address);
    card.appendChild(picture);

    spotlights.appendChild(card);
  });
};

async function getSpotlightData() {
  const response = await fetch("data.json");
  const data = await response.json();
  //console.table(data.businesses);

  // Only display 3 random businesses that have a business.mLevel value of "Silver" or "Gold"
  displaySpotlight(
    data.businesses
      .filter((business) => {
        return business.membership === "Silver" || business.membership === "Gold";
      })
      .slice(0, 3)
  );
}

getSpotlightData();
const cardViewButton = document.getElementById("cardViewButton");
const listViewButton = document.getElementById("listViewButton");
let currentView = "card"; // Initial view mode

cardViewButton.addEventListener("click", () => {
  if (currentView !== "card") {
    currentView = "card";
    getBusinessData();
  }
});

listViewButton.addEventListener("click", () => {
  if (currentView !== "list") {
    currentView = "list";
    getBusinessData();
  }
});

const createCardView = (business) => {
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let image = document.createElement("img");
  let info = document.createElement("div");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("a");

  h2.textContent = business.business;
  address.textContent = business.address;
  phone.textContent = business.phone;
  website.textContent = business.website;

  website.setAttribute("href", business.website);
  image.setAttribute("src", business.image);
  image.setAttribute("alt", `Image of ${business.business}`);
  image.setAttribute("loading", "lazy");
  image.setAttribute("width", "200");
  image.setAttribute("height", "200");

  info.setAttribute("class", "info-box");

  card.setAttribute("class", "card");

  card.appendChild(h2);
  card.appendChild(image);
  info.appendChild(address);
  info.appendChild(phone);
  card.appendChild(info);
  info.appendChild(website);

  return card;
};

const createListView = (business) => {
  let tableRow = document.createElement("tr");

  let nameCell = document.createElement("td");
  let addressCell = document.createElement("td");
  let phoneCell = document.createElement("td");
  let websiteCell = document.createElement("td");

  nameCell.textContent = business.business;
  addressCell.textContent = business.address;
  phoneCell.textContent = business.phone;

  let websiteLink = document.createElement("a");
  websiteLink.textContent = business.website;
  websiteLink.setAttribute("href", business.website);
  websiteLink.target = "_blank"; // Open the link in a new tab

  websiteCell.appendChild(websiteLink);

  tableRow.appendChild(nameCell);
  tableRow.appendChild(addressCell);
  tableRow.appendChild(phoneCell);
  tableRow.appendChild(websiteCell);

  return tableRow;
};

const displayBusinesses = (businesses, viewMode) => {
  const container = document.querySelector("div.cards"); // select the output container element

  // Clear the container before rendering the new view
  container.innerHTML = "";

  businesses.forEach((business) => {
    let item;

    if (viewMode === "card") {
      item = createCardView(business);
    } else {
      item = createListView(business);
    }

    container.appendChild(item);
  });

  // Update CSS based on view mode
  container.classList.toggle("list-view", viewMode === "list");
};

async function getBusinessData() {
  const response = await fetch("data.json");
  const data = await response.json();
  //console.table(data.businesses);
  displayBusinesses(data.businesses, currentView);
}

getBusinessData();