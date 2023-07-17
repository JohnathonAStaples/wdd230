// Button
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  }
  
  const x = document.getElementById("hamburgerBtn");
  x.onclick = toggleMenu;
// Weather

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=33.158092&lon=-117.350594&units=imperial&appid=ba11da35058f6814952f21a7b7a6a754";

 // copyright and last modified
const today = new Date();
const year = today.getFullYear();
const msg = `&copy;  ${year}  Bountiful Foods | Johnathon A. Staples | California<br/>
<b>Last Modified: </b>${document.lastModified}`;

const footer = document.getElementById("copyright");
footer.innerHTML = msg

