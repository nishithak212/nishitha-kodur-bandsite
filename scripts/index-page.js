const comments=[
    {
        name:"Victor Pinto",
        date:"11/02/2023",
        commentText:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        //profilePic:""
    },

    {
        name:"Christina Cabrera",
        date:"10/28/2023",
        commentText:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        //profilePic:""
    },

    {
        name:"Isaac Tadesse",
        date:"10/20/2023",
        commentText:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        //profilePic:""
    }
];



function displayComments(arr){
    const commentCont=document.querySelector(".comments__list");

    for (let i=0; i<arr.length; i++){
        const defaultCont = document.createElement("div");
        defaultCont.classList.add("comments__default");
        commentCont.appendChild(defaultCont);

        const dpCont = document.createElement("div");
        dpCont.classList.add("comments__dp-cont-one");
        defaultCont.appendChild(dpCont);

        const headerCont=document.createElement("div");
        headerCont.classList.add("comments__header");
        defaultCont.appendChild(headerCont);

        const dp = document.createElement("div");
        dp.classList.add("comments__header--dp-one");
        dpCont.appendChild(dp);

        const name=document.createElement("h3");
        name.classList.add("comments__header--name");
        name.innerText=arr[i]["name"];
        headerCont.appendChild(name);

        const date=document.createElement("h3");
        date.classList.add("comments__header--date");
        date.innerText=arr[i]["date"];
        headerCont.appendChild(date);

        const commentsCont=document.createElement("div");
        commentsCont.classList.add("comments__comments-cont-def");
        defaultCont.appendChild(commentsCont);

        const commentText=document.createElement("p");
        commentText.classList.add("comments__comments-cont-default--commentText");
        commentText.innerText=arr[i]["commentText"];
        commentsCont.appendChild(commentText);
    }
}

displayComments(comments);


const form = document.querySelector('#comments__form');

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const newComm={};
    newComm.name=event.target.name.value;
    newComm.comment=event.target.comment.value;

    const commentCont = document.querySelector(".comments__list")
    const defaultCont = document.createElement("div");
    defaultCont.classList.add("comments__default");
    commentCont.appendChild(defaultCont);

    const dpCont = document.createElement("div");
    dpCont.classList.add("comments__dp-cont-one");
    defaultCont.appendChild(dpCont);

    const headerCont=document.createElement("div");
    headerCont.classList.add("comments__header");
    defaultCont.appendChild(headerCont);

    const dp = document.createElement("div");
    dp.classList.add("comments__header--dp-one");
    dpCont.appendChild(dp);

    const name=document.createElement("h3");
    name.classList.add("comments__header--name");
    name.innerText=newComm.name;
    headerCont.appendChild(name);


    let todayDate = new Date();
    let dd = String(todayDate.getDate()).padStart(2,"0");
    let mm =String(todayDate.getMonth()+1).padStart(2,"0");
    let yyyy=todayDate.getFullYear();

    let formattedDate =mm+"/"+dd+"/"+yyyy;

    let date=document.createElement("h4");
    date.innerText=formattedDate;
    date.classList.add("comments__header--date");
    headerCont.appendChild(date);

    const commentsCont=document.createElement("div");
    commentsCont.classList.add("comments__comments-cont-def");
    defaultCont.appendChild(commentsCont);

    const commentText=document.createElement("p");
    commentText.classList.add("comments__comments-cont-default--commentText");
    commentText.innerText=newComm.comment;
    commentsCont.appendChild(commentText);

    let first = document.querySelector(".comments__list");
    first.insertBefore(defaultCont,first.firstChild);

    let clearText=document.querySelector("#comments__form");
    form.reset();

});
