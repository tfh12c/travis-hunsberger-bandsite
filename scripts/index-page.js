const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "46f2f791-31c4-43f3-9d49-d80f10236a83";

// const comments = [
//     { name: "Connor Walton", date: "2021-02-17", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." },
//     { name: "Emilie Beach", date: "2021-01-09", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day." },
//     { name: "Miles Acosta", date: "2021-12-20", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough" },
// ];

// function displayComment(comment) {
//     const cardEl = document.createElement('article');
//     cardEl.classList.add('comment');

//     const commentAvatar = document.createElement('img');
//     commentAvatar.classList.add('comment__avatar');
//     commentAvatar.setAttribute('src', "//:0") // Not sure how to get this to work without having the broken image icon. All research said img src would need to be //:0
//     cardEl.appendChild(commentAvatar);

//     const commentTextContainer = document.createElement('div');
//     commentTextContainer.classList.add('comment__text-container');
//     cardEl.appendChild(commentTextContainer);

//     const commentNameDateContainer = document.createElement('div');
//     commentNameDateContainer.classList.add('comment__name-date-container');
//     commentTextContainer.appendChild(commentNameDateContainer);

//     const commentName = document.createElement('h3');
//     commentName.classList.add('comment__name');
//     commentName.innerText = comment.name;
//     commentNameDateContainer.appendChild(commentName);

//     const commentDate = document.createElement('span')
//     commentDate.classList.add('comment__date');
//     commentDate.innerText = comment.date;
//     commentNameDateContainer.appendChild(commentDate);

//     const commentText = document.createElement('p');
//     commentText.classList.add('comment__text');
//     commentText.innerText = comment.comment;
//     commentTextContainer.appendChild(commentText);

//     return cardEl;
// }

// function renderComments() {
//     const bandsiteCommentsEl = document.getElementById('bandsite-comments');

//     bandsiteCommentsEl.innerHTML = "";

//     //renders all comments
//     for (let i = 0; i < comments.length; i++) {
//         const card = displayComment(comments[i]);
//         bandsiteCommentsEl.appendChild(card);
//     }
// }

// const commentName = document.querySelector('.comments__form-fullname');
// const commentText = document.querySelector('.comments__form-comment');

// function nameValidation() {
//     if (!commentName.value) {
//         commentName.style.border = '1px solid';
//         commentName.style.borderColor = '#D22D2D';
//     }
// }

// function commentValidation() {
//     if (!commentText.value) {
//         commentText.style.border = '1px solid';
//         commentText.style.borderColor = '#D22D2D';
//     }
// }

// function handleFormSubmit(event) {
//     event.preventDefault();

//     nameValidation();
//     commentValidation();

//     const fullName = document.getElementById('fullName').value;
//     if (fullName === "") {
//         alert("Please enter your name");
//         return false;
//     }

//     const comment = document.getElementById('comment').value;
//     if (comment === "") {
//         alert("Please enter a comment");
//         return false;
//     }

    
//     const dateObj = new Date();
//     const month = dateObj.getUTCMonth() + 1; //Months are 0-11, +1 to get correct calendar month
//     const day = dateObj.getUTCDate();
//     const year = dateObj.getUTCFullYear();

//     const newDate = year + "-" + month + "-" + day;

//     const commentData = {
//         name: event.target.fullName.value,
//         date: newDate,
//         comment: event.target.comment.value
//     };

//     comments.unshift(commentData);
//     document.querySelector('.comments__form').reset();
//     renderComments();
// }

// const formEl = document.querySelector('.comments__form');
// formEl.addEventListener('submit', handleFormSubmit);
// renderComments();




// Start of refactor for API 

// gets the comments form
const commentForm = document.querySelector('.comments__form');

// form event listener 
commentForm.addEventListener('submit', handleFormSubmit);

// gets the div holding bandsite comments
const commentList = document.getElementById('bandsite-comments');

function displayComments(comments) {
    commentList.innerHTML = ''; // clear the comments list before appending to avoid duplicates

    comments.forEach((comment) => {
        const cardEl = document.createElement('article');
        cardEl.classList.add('comment');
        commentList.appendChild(cardEl);

        const commentAvatar = document.createElement('img');
        commentAvatar.classList.add('comment__avatar');
        commentAvatar.setAttribute('src', "//:0") // Not sure how to get this to work without having the broken image icon. All research said img src would need to be //:0
        commentAvatar.style.height = "36px";
        commentAvatar.style.width = "36px";
        cardEl.appendChild(commentAvatar);
    
        const commentTextContainer = document.createElement('div');
        commentTextContainer.classList.add('comment__text-container');
        cardEl.appendChild(commentTextContainer);
    
        const commentNameDateContainer = document.createElement('div');
        commentNameDateContainer.classList.add('comment__name-date-container');
        commentTextContainer.appendChild(commentNameDateContainer);
    
        const commentName = document.createElement('h3');
        commentName.classList.add('comment__name');
        commentName.innerText = comment.name;
        commentNameDateContainer.appendChild(commentName);
    
        const commentDate = document.createElement('span')
        commentDate.classList.add('comment__date');
        commentDate.innerText = comment.date;
        commentNameDateContainer.appendChild(commentDate);
    
        const commentText = document.createElement('p');
        commentText.classList.add('comment__text');
        commentText.innerText = comment.comment;
        commentTextContainer.appendChild(commentText);

    });
}

// Get comments from API 
function getComments() {
    axios
        .get(`${apiUrl}/comments?api_key=${apiKey}`)
        .then((response) => {
            console.log(response.data);
            const comments = response.data;
            
            // takes comments array and creates a new date object at each index based off timestamp
            comments.forEach((comment, i) => {
                comments[i].date = new Date(comment.timestamp)
            });

            // sorts comments array based on date object
            comments.sort(function(a, b) {
                return b.date - a.date;
            });

            // takes date object and formats into string 
            comments.forEach((comment, i) => {
                const newDate = comment.date
                comments[i].date = newDate.getMonth() + 1 + "/" + newDate.getDate() + "/" + newDate.getFullYear();
            });

            displayComments(comments);
        })
        .catch(() => {
            console.log('error getting comments from API');
        });
}

// grab comment form name entry for validation
const commentName = document.querySelector('.comments__form-fullname');
// grab comment form comment area for validation
const commentText = document.querySelector('.comments__form-comment');

// if name field is empty, will outline area with red
function nameValidation() {
    if (!commentName.value) {
        commentName.style.border = '1px solid';
        commentName.style.borderColor = '#D22D2D';
    }
}

// if comment field is empty, will outline area with red 
function commentValidation() {
    if (!commentText.value) {
        commentText.style.border = '1px solid';
        commentText.style.borderColor = '#D22D2D';
    }
}

function handleFormSubmit(event) {
    // prevent auto refresh 
    event.preventDefault();

    // name and comment validation
    nameValidation();
    commentValidation();

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

    const newComment = {
        name: event.target.fullName.value,
        comment: event.target.comment.value
    };

    // post new comments
    axios 
    .post(`${apiUrl}/comments?api_key=${apiKey}`, newComment)
    .then((response) => {
        console.log(response);
        getComments();
    })
    .catch(() => {
        console.log('error posting to api')
    });
}

getComments();