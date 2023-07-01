const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"

const displayProphets = (prophets) => {
    const cards = document.querySelector("div.cards"); // select the output container element

    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let portrait = document.createElement("img");
        let info = document.createElement("div");
        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("p");
        let deathDate = document.createElement("p");

        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name}${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        deathDate.textContent = `Date of Death: ${prophet.death}`;

        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        info.setAttribute("class", "info");

        card.setAttribute("class", "card");
        // Append the section(card) with the created elements
        info.appendChild(birthPlace);
        info.appendChild(birthDate);
        info.appendChild(deathDate);
        
        card.appendChild(info);

        card.appendChild(h2);
        card.appendChild(portrait);

        cards.appendChild(card);
    }); // end of forEach loop
} // end of function expression

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    /*console.table(data.prophets); note that we reference the prophet array of the data object given the structure of the json file*/
    displayProphets(data.prophets);
}

getProphetData();

