const shows = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
    },
];

// start of mobile version js
const showMobileElement = document.querySelector('.shows__mobile-list');

function createMobileCard(show) {
    // card element
    const card = document.createElement('article');
    card.classList.add('shows__mobile-card');

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
    venue.innerText = show.venue;
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

    return card;
}

for (let i = 0; i < shows.length; i++) {
    //generates show cards
    const showMobileCard = createMobileCard(shows[i]);

    //append to mobile list div
    showMobileElement.appendChild(showMobileCard);
}


// start of tablet/desktop js

// grabs tablet/desktop shows div
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

function createCard(show) {

    // card element
    const card = document.createElement('article');
    card.classList.add('shows__card');

    // pulls date from shows array
    const date = document.createElement('p');
    date.classList.add('shows__date');
    date.innerText = show.date;
    card.appendChild(date);

    // pulls venue from shows array
    const venue = document.createElement('p');
    venue.classList.add('shows__venue');
    venue.innerText = show.venue;
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

    return card;
}

for (let i = 0; i < shows.length; i++) {
    // generates show cards
    const showCard = createCard(shows[i]);

    // append to logistics header div
    showElement.appendChild(showCard);
}





/* <section class="shows">
      
        <h2 class="shows__header">Shows</h2>
    <article class="shows__card"> 
        <p class="shows__logistics">DATE</p>
        <p class="shows__date">Mon Sept 06 2021</p>
        <p class="shows__logistics">VENUE</p>
        <p class="shows__venue">Ronald Lane</p>
        <p class="shows__logistics">LOCATION</p>
        <p class="shows__location">San Francisco, CA</p>
        <button type="submit" class="shows__button">BUY TICKETS</button>
    </article>
</section> */