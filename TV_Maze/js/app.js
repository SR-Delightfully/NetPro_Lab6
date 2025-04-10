// Ensure that the document has been fully loaded and parsed:
document.addEventListener('DOMContentLoaded', initApp)

function initApp() {
    console.log("initializing application.");
    const fetchShowsBTN = document.getElementById("fetch-shows-btn");
    fetchShowsBTN.setAttribute("onClick", "fetchShows()");

}

async function fetchShows() {
    

    const response = await fetch(
        'https://api.tvmaze.com/shows',
        {
            method: 'GET',
        }
    );
    console.log(response);
}

const parseShows = () => {
    console.log("Hello from parse shows");
}
