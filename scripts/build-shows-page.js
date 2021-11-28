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

const showMobileElement = document.querySelector('.shows__mobile-list');

function createMobileCard(show) {
    // card element
    const card = document.createElement('article');
    card.classList.add('shows__mobile-card');

    const dateHeader = document.createElement('p')
    dateHeader.classList.add('shows__logistics');
    dateHeader.innerText = "DATE";
    card.appendChild(dateHeader);

    const date = document.createElement('p');
    date.classList.add('shows__date');
    date.innerText = show.date;
    card.appendChild(date);

    const venueHeader = document.createElement('p');
    venueHeader.classList.add('shows__logistics');
    venueHeader.innerText = "VENUE";
    card.appendChild(venueHeader);

    const venue = document.createElement('p');
    venue.classList.add('shows__date');
    venue.innerText = show.venue;
    card.appendChild(venue);

    const locationHeader = document.createElement('p');
    locationHeader.classList.add('shows__logistics');
    locationHeader.innerText = "LOCATION";
    card.appendChild(locationHeader);

    const location = document.createElement('p');
    location.classList.add('shows__location');
    location.innerText = show.location;
    card.appendChild(location);

    const button = document.createElement('button');
    button.classList.add('shows__button');
    button.setAttribute('type', 'submit');
    button.innerText = "BUY TICKETS";
    card.appendChild(button);

    return card;
}

for (let i = 0; i < shows.length; i++) {
    const showMobileCard = createMobileCard(shows[i]);

    showMobileElement.appendChild(showMobileCard);
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