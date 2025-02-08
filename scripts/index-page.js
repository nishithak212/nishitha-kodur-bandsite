 import BandSiteApi from "./band-site-api.js";
const api = new BandSiteApi("d0e75d6f-acc0-42fb-b5ef-3c6b0d4b2721");
const commentsContainer=document.querySelector(".comments__list");
const commentForm=document.querySelector("#comments__form");


async function loadComments(){
    const comments = await api.getComments();
    commentsContainer.innerHTML="";
    comments.forEach(displayComment);
}

function displayComment(comment){
    const commentElement=document.createElement("div");
    commentElement.classList.add("comments__default");
    commentElement.innerHTML=`<div class="comments__dp-cont-one">
      <div class="comments__header--dp-one"></div>
    </div>
    <div class="comments__header">
      <h3 class="comments__header--name">${comment.name}</h3>
      <h3 class="comments__header--date">${new Date(comment.timestamp).toLocaleDateString()}</h3>
    </div>
    <div class="comments__comments-cont-def">
      <p class="comments__comments-cont-def--commentText">${comment.comment}</p>
    </div>
    `;
    commentsContainer.append(commentElement);
}

commentForm.addEventListener("submit",async (eventSubmit)=>{
    eventSubmit.preventDefault();
    const newComment ={
        name:eventSubmit.target.name.value,
        comment:eventSubmit.target.comment.value
    };

    await api.postComment(newComment);
    commentForm.reset();
    loadComments();
});

loadComments();