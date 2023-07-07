// copyright and last modified

const today = new Date();
const year = today.getFullYear();
const msg = `&copy;  ${year}  Bountiful Foods | Johnathon A. Staples | California<br/>
<b>Last Modified: </b>${document.lastModified}`;

const footer = document.getElementById("copyright");
footer.innerHTML = msg

