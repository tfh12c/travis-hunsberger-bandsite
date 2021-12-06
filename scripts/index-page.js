const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "46f2f791-31c4-43f3-9d49-d80f10236a83";

// gets the comments form
const commentForm = document.querySelector('.comments__form');

// form event listener 
commentForm.addEventListener('submit', handleFormSubmit);

// gets the div holding bandsite comments
const commentList = document.getElementById('bandsite-comments');

function displayComments(comments) {
    commentList.innerHTML = ''; // clear the comments list before appending to avoid duplicates

    comments.forEach((comment) => {
        // create comment article
        const cardEl = document.createElement('article');
        cardEl.classList.add('comment');
        commentList.appendChild(cardEl);

        // create comment avatar
        const commentAvatar = document.createElement('img');
        commentAvatar.classList.add('comment__avatar');
        cardEl.appendChild(commentAvatar);

        // div for all of comment text
        const commentTextContainer = document.createElement('div');
        commentTextContainer.classList.add('comment__text-container');
        cardEl.appendChild(commentTextContainer);
    
        // div holding comment name and date for flex display
        const commentNameDateContainer = document.createElement('div');
        commentNameDateContainer.classList.add('comment__name-date-container');
        commentTextContainer.appendChild(commentNameDateContainer);
    
        // create comment name
        const commentName = document.createElement('h3');
        commentName.classList.add('comment__name');
        commentName.innerText = comment.name;
        commentNameDateContainer.appendChild(commentName);
    
        // create comment date
        const commentDate = document.createElement('span')
        commentDate.classList.add('comment__date');
        commentDate.innerText = comment.date;
        commentNameDateContainer.appendChild(commentDate);
    
        // create comment comment
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
            //console.log(response.data);  --> visualize api get data
            const comments = response.data;
            
            // takes comments array and creates a new date object at each index based off timestamp
            comments.forEach((comment, i) => {
                comments[i].date = new Date(comment.timestamp)
            });

            // sorts comments array based on date object
            comments.sort(function(a, b) {
                return b.date - a.date;
            });

            // takes date and formats into string 
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