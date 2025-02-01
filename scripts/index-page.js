// const commentsForm = document.getElementById('comments__form');
// const commentsList = document.getElementById('comments__list');
// const comments = [];

const form = document.getElementById('comments__form');
const commentList=document.getElementById("comments__list");

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     console.log("Form Submitted");
//     console.log(e.target.Name.value);
//     console.log(e.target.Comment.value);
// });

const comments=[
    {
        name:"Victor Pinto",
        timestamp:"11/02/2023",
        commentText:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        profilePic:""
    },

    {
        name:"Christina Cabrera",
        timestamp:"10/28/2023",
        commentText:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        profilePic:""
    },

    {
        name:"Isaac Tadesse",
        timestamp:"10/20/2023",
        commentText:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        profilePic:""
    }
];


//function to display comments for default comments
function displayComments(){
   // const commentList=document.getElementById("comments__list");
   commentList.innerHTML = ""; //to clear previous comments
    comments.forEach(comment => {
        const li=document.createElement("li");
        li.innerHTML=`${comment.name} ${comment.timestamp} ${comment.commentText}`;
        commentList.appendChild(li);
    });
};
form.addEventListener('submit',function(e){
    e.preventDefault();
    // const nameInput = form.elements["Name"].value.trim();
    // const commentInput = form.elements["Comment"].value.trim();

    const nameInput = document.querySelector('input[name="Name"]').value.trim();
    const commentInput = document.querySelector('textarea[name="Comment"]').value.trim();

    //validate if inputs are not empty
    if (nameInput===""){
        alert("Please enter name");
        return;
    }
    if (commentInput===""){
        alert("Please enter comment");
        return;
    }

    //new comment object
    const newComment={
        name: nameInput,
        timestamp:new Date().toISOString().split('T')[0],
        commentText: commentInput,
    }
    //push new comments to array
    comments.unshift(newComment);
    //comments.reverse();

    //to clear and re-render comments
    displayComments();

    //clear input fields
    form.reset();
});

//to display default comments when page loads
displayComments();
