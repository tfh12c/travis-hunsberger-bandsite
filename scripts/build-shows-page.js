const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "46f2f791-31c4-43f3-9d49-d80f10236a83";

// start of mobile version js
// get mobile show list div
const showMobileElement = document.querySelector('.shows__mobile-list');

function displayMobileShows(shows) {
    
    shows.forEach((show) => {
        //card element
        const card = document.createElement('article');
        card.classList.add('shows__mobile-card');
        card.classList.add('shows__mobile-card--hover');
        card.classList.add('shows__mobile-card--active');
        showMobileElement.appendChild(card);

        // creates date heading
        const dateHeader = document.createElement('p')
        dateHeader.classList.add('shows__logistics');
        dateHeader.innerText = "DATE";
        card.appendChild(dateHeader);

        // pulls date from shows array
        const date = document.createElement('p');
        date.classList.add('shows__date');
        date.innerText = show.date;
        card.appendChild(date);

        // creates venue heading
        const venueHeader = document.createElement('p');
        venueHeader.classList.add('shows__logistics');
        venueHeader.innerText = "VENUE";
        card.appendChild(venueHeader);

        // pulls venue from shows array
        const venue = document.createElement('p');
        venue.classList.add('shows__venue');
        venue.innerText = show.place;
        card.appendChild(venue);

        // creates location heading
        const locationHeader = document.createElement('p');
        locationHeader.classList.add('shows__logistics');
        locationHeader.innerText = "LOCATION";
        card.appendChild(locationHeader);

        // pulls location from shows array
        const location = document.createElement('p');
        location.classList.add('shows__location');
        location.innerText = show.location;
        card.appendChild(location);

        // creates buy tickets button 
        const button = document.createElement('button');
        button.classList.add('shows__button');
        button.setAttribute('type', 'submit');
        button.innerText = "BUY TICKETS";
        card.appendChild(button);


    });
}

// start of tablet/desktop js
// get tablet/desktop div
const showElement = document.querySelector('.shows__list');

// creates div to hold headings
const logisticsContainer = document.createElement('div');
logisticsContainer.classList.add('shows__logistics-container');
showElement.appendChild(logisticsContainer);

// creates date heading
const dateHeader = document.createElement('p')
dateHeader.classList.add('shows__logistics');
dateHeader.innerText = "DATE";
logisticsContainer.appendChild(dateHeader);

// creates venue heading
const venueHeader = document.createElement('p');
venueHeader.classList.add('shows__logistics');
venueHeader.innerText = "VENUE";
logisticsContainer.appendChild(venueHeader);

// creates location heading
const locationHeader = document.createElement('p');
locationHeader.classList.add('shows__logistics');
locationHeader.innerText = "LOCATION";
logisticsContainer.appendChild(locationHeader);

function displayShows(shows) {
    shows.forEach((show) => {
    
    // card element
    const card = document.createElement('article');
    card.classList.add('shows__card');
    card.classList.add('shows__card--hover');
    card.classList.add('shows__card--active');
    showElement.appendChild(card);

    // pulls date from shows array
    const date = document.createElement('p');
    date.classList.add('shows__date');
    date.innerText = show.date;
    card.appendChild(date);

    // pulls venue from shows array
    const venue = document.createElement('p');
    venue.classList.add('shows__venue');
    venue.innerText = show.place;
    card.appendChild(venue);

    // pulls location from shows array
    const location = document.createElement('p');
    location.classList.add('shows__location');
    location.innerText = show.location;
    card.appendChild(location);

    // creates buy tickets button 
    const button = document.createElement('button');
    button.classList.add('shows__button');
    button.setAttribute('type', 'submit');
    button.innerText = "BUY TICKETS";
    card.appendChild(button);
    })
}

function getShows() {
    axios
    .get(`${apiUrl}/showdates?api_key=${apiKey}`)
    .then((response) => {
        console.log(response.data);
        const shows = response.data;

        // takes shows array date and converts date string into date number
        shows.forEach((show, i) => {
            shows[i].date = Number(show.date)
        });

         // takes shows array date and converts date number to regular date
         shows.forEach((show, i) => {
            shows[i].date = new Date(show.date)
        });

         // takes shows arrat date and converts date to toDateString/more readable format 
         shows.forEach((show, i) => {
            shows[i].date = show.date.toDateString();
        });


        displayMobileShows(shows);
        displayShows(shows);
    })
    .catch(() => {
        console.log('error getting shows from api');
    })
}

getShows();