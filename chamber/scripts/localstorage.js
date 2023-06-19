const visit = document.querySelector(".visits");

let numVisits = Number(localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
    visit.textContent = numVisits;
} else {
    visit.textContent = "This is your first visit";
    }
    numVisits++;
    localStorage.setItem("visits-ls", numVisits);