const comments = [
    { name: "Connor Walton", date: "2021-02-17", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    { name: "Emilie Beach", date: "2021-01-09", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    { name: "Miles Acosta", date: "2021-12-20", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough"},
];

function displayComment(comment) {
    const cardEl = document.createElement('article');
    cardEl.classList.add('comment');

    const commentName = document.createElement('h3');
    commentName.innerText = comment.name;
    cardEl.appendChild(commentName);

    const commentDate = document.createElement('span')
    commentDate.innerText = comment.date;
    cardEl.appendChild(commentDate);

    const commentText = document.createElement('p');
    commentText.innerText = comment.comment;
    cardEl.appendChild(commentText);

    return cardEl;
}

function renderComments() {
    const bandsiteCommentsEl = document.getElementById('bandsite-comments');

    bandsiteCommentsEl.innerHTML = "";

    //renders all comments
    for (let i = 0; i < comments.length; i++) {
        const card = displayComment(comments[i]);
        bandsiteCommentsEl.appendChild(card);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    if (fullName === "") {
        alert("Please enter your name");
        return false;
    }

    const comment = document.getElementById('comment').value;
    if (comment === "") {
        alert("Please enter a comment");
        return false;
    }

    
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //Months are 0-11, +1 to get correct calendar month
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    const newDate = year + "-" + month + "-" + day;
    
    const commentData = {
        name: event.target.fullName.value,
        date: newDate,
        comment: event.target.comment.value
    };


    comments.unshift(commentData);
    document.querySelector('.comments__form').reset();
    renderComments();
    
}

const formEl = document.querySelector('.comments__form');
formEl.addEventListener('submit', handleFormSubmit);
renderComments();