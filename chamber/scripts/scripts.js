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
