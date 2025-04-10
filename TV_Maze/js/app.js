// Ensure that the document has been fully loaded and parsed:
document.addEventListener('DOMContentLoaded', initApp)

function initApp() {
    console.log("initializing application.");
    const fetchShowsBTN = document.getElementById("fetch-shows-btn");
    fetchShowsBTN.addEventListener('click', fetchShows);
}

async function fetchShows() {
    const URI = "https://api.tvmaze.com/shows";
    const shows = await fetchData(URI);
    parseShows(shows);
}

async function fetchData(resourceURI) {
    try {
        // Step #1: HTTP client
        const response = await fetch(resourceURI);

        // Step #2: Validate response:
        if (!response.ok) {
            throw new Error(`The request has failed: ${response.status}`);
        }

        // Step #3: Retireve recieved pauload from the respose message:
        const data = await response.json();
        return data;        
    } catch (error) {
        console.log(error.message);
    }
}

const parseShows = (shows) => {
    console.log(shows);
    // Step #1: select table placeholder:
    const tbody = document.getElementById("table-body");

    shows.forEach(show => {
        // let tableRow = document.createElement(tableRow);
        // for (let i = 0; i < show.length; i++) {
            // tableRow.innerHTML += `<td>${show[i]}</td>`;
        // }
        // tableRow.innerHTML += '</tr>'
        // tbody.append(tableRow);
    
        const tr = document.createElement("tr");
        createNewElement(tr, "td", show.id);
        createNewElement(tr, "td", '<a href='+ show.url + '>'+show.url + "</a>");
        createNewElement(tr, "td", show.name);
        createNewElement(tr, "td", show.type);
        createNewElement(tr, "td", show.language);
        createNewElement(tr, "td", show.status);
        createNewElement(tr, "td", show.premiered);
        createNewElement(tr, "td", '<a href='+ show.officialSite + '>'+show.officialSite + "</a>");
        createNewElement(tr, "td", '<img src='+ show.image.medium + '></img');

        tbody.appendChild(tr);
    });
}

function createNewElement(parent, elemName, content) {
    const newElem = document.createElement(elemName);
    newElem.innerHTML = content;
    parent.appendChild(newElem);
}
