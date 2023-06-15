const today = new Date();
const year = today.getFullYear();
const msg = `&copy;  ${year}  | Johnathon A. Staples | Colorado<br/>
<b>Last Updated: </b>${document.lastModified}`;

const el = document.querySelector("footer");
el.innerHTML = msg;