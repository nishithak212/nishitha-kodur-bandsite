import BandSiteApi from "./band-site-api.js";

const api = new BandSiteApi("d0e75d6f-acc0-42fb-b5ef-3c6b0d4b2721");


async function fetchAndDisplayShows(){
    try{
        const showsData = await api.getShows();

        if (!showsData || showsData.length===0){
            throw new Error("No shows data available");
        }
        table(showsData);
    } catch (error){
        console.error("Error fetching shows data:", error);
    }
}

function formatDate(timestamp){

    const showDate = new Date(timestamp);
    const weekday=showDate.toLocaleString('en-US',{weekday:"short",});
    const month=showDate.toLocaleString('en-us',{month:"short"});
    const day=showDate.getDate().toString().padStart(2,0);
    const year=showDate.getFullYear();

    return `${weekday} ${month} ${day} ${year}`;

}

function table(arr){
    const showContainer=document.querySelector(".shows-container__details");
    const showContainerTitle=document.createElement("div");
    showContainerTitle.classList.add("shows-container__title");
    showContainer.appendChild(showContainerTitle);

    const title=document.createElement("h1");
    title.classList.add("shows-title");
    showContainerTitle.appendChild(title);
    title.innerText="Shows";

    const showsCont = document.createElement("div");
    showsCont.classList.add("shows-container__all");
    showContainer.appendChild(showsCont);

    const headerCont = document.createElement("div");
    headerCont.classList.add("shows-container__header-cont");
    showsCont.appendChild(headerCont);

    const dateHead = document.createElement("h3");
    dateHead.classList.add("shows-container__header--date");
    headerCont.appendChild(dateHead);
    dateHead.innerText = "DATE";

    const venueHead = document.createElement("h3");
    venueHead.classList.add("shows-container__header--venue");
    headerCont.appendChild(venueHead);
    venueHead.innerText = "VENUE";

    const locationHead = document.createElement("h3");
    locationHead.classList.add("shows-container__header--location");
    headerCont.appendChild(locationHead);
    locationHead.innerText = "LOCATION";

    const buttonHead = document.createElement("button");
    buttonHead.classList.add("shows-container__header--button-head");
    headerCont.appendChild(buttonHead);
    buttonHead.innerText = "BUY TICKETS";

    for (let i = 0; i < arr.length; i++) {
        const tableCont = document.createElement("div");
        tableCont.classList.add("shows-container__table-cont");
        showsCont.appendChild(tableCont);

        const dateLabel = document.createElement("h3");
        dateLabel.classList.add("shows-container__table-cont--date-label");
        tableCont.appendChild(dateLabel);
        dateLabel.innerText = "DATE";


        const date = document.createElement("h4");
        date.classList.add("shows-container__table-cont--date");
        tableCont.appendChild(date);
        
        
        const formattedDate=formatDate(arr[i]["date"]);
        date.innerText=formattedDate;

        const venueLabel = document.createElement("h3");
        venueLabel.classList.add("shows-container__table-cont--venue-label");
        tableCont.appendChild(venueLabel);
        venueLabel.innerText = "VENUE";


        const venue = document.createElement("h4");
        venue.classList.add("shows-container__table-cont--venue");
        tableCont.appendChild(venue);
        venue.innerText = arr[i]["place"];

        const locationLabel = document.createElement("h3");
        locationLabel.classList.add("shows-container__table-cont--location-label");
        tableCont.appendChild(locationLabel);
        locationLabel.innerText = "LOCATION";


        const location = document.createElement("h4");
        location.classList.add("shows-container__table-cont--location");
        tableCont.appendChild(location);
        location.innerText = arr[i]["location"];

        const buttonCont = document.createElement("div");
        buttonCont.classList.add("shows-container__table-cont--button-cont");
        tableCont.appendChild(buttonCont);

        const button = document.createElement("button");
        button.classList.add("shows-container__table-cont--button");
        buttonCont.appendChild(button);
        button.innerText = "BUY TICKETS";

        //Click event for selected row

        tableCont.addEventListener("click", () => {
            document
                .querySelectorAll(".shows-container__table-cont")
                .forEach(row => row.classList.remove("shows-container__table-cont--selected"));
            tableCont.classList.add("shows-container__table-cont--selected");
            // console.log("row is clicked:", tableCont);
        });
    }
}

document.addEventListener("DOMContentLoaded",fetchAndDisplayShows);