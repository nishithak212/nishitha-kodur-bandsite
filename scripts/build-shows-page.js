const shows = [
    {date: "Mon Sept 09 2024", venue:"Ronald Lane", location:"San Fransico, CA" },
    {date: "Tue Sept 17 2024", venue:"Pier 3 East", location:"San Fransico, CA" },
    {date: "Sat Oct 12 2024", venue:"View Lounge", location:"San Fransico, CA"},
    {date: "Sat Nov 16 2024", venue:"Hyatt Agency", location:"San Fransico, CA"},
    {date: "Fri Nov 29 2024", venue:"Moscow Center", location:"San Fransico, CA"},
    {date: "Wed Dec 18 2024", venue:"Press Club", location:"San Fransico, CA"},
];

function table(arr){

    const showContainer = document.querySelector(".shows-container__details");
    const showContainerTitle= document.createElement("div");
    showContainerTitle.classList.add("shows-container__title");
    showContainer.appendChild(showContainerTitle);

    const title = document.createElement("h1");
    title.classList.add("shows-title");
    showContainerTitle.appendChild(title);
    title.innerText="Shows";

    const showsCont = document.createElement("div");
    showsCont.classList.add("shows-container__all");
    showContainer.appendChild(showsCont);

    //
    const headerCont=document.createElement("div");
    headerCont.classList.add("shows-container__header-cont");
    showsCont.appendChild(headerCont);

    const dateHead=document.createElement("h3");
    dateHead.classList.add("shows-container__header--date");
    headerCont.appendChild(dateHead);
    dateHead.innerText="DATE";

    const venueHead=document.createElement("h3");
    venueHead.classList.add("shows-container__header--venue");
    headerCont.appendChild(venueHead);
    venueHead.innerText="VENUE";

    const locationHead=document.createElement("h3");
    locationHead.classList.add("shows-container__header--location");
    headerCont.appendChild(locationHead);
    locationHead.innerText="LOCATION";

    const buttonHead=document.createElement("button");
    buttonHead.classList.add("shows-container__header--button-head");
    headerCont.appendChild(buttonHead);
    buttonHead.innerText="BUY TICKETS";


    for(let i=0; i<shows.length ; i++)
    {
        const tableCont=document.createElement("div");
        tableCont.classList.add("shows-container__table-cont");
        showsCont.appendChild(tableCont);

        const dateLabel = document.createElement("h3");
        dateLabel.classList.add("shows-container__table-cont--date-label");
        tableCont.appendChild(dateLabel);
        dateLabel.innerText="DATE";


        const date=document.createElement("h4");
        date.classList.add("shows-container__table-cont--date");
        tableCont.appendChild(date);
        date.innerText=arr[i]["date"];

        const venueLabel = document.createElement("h3");
        venueLabel.classList.add("shows-container__table-cont--venue-label");
        tableCont.appendChild(venueLabel);
        venueLabel.innerText="VENUE";


        const venue=document.createElement("h4");
        venue.classList.add("shows-container__table-cont--venue");
        tableCont.appendChild(venue);
        venue.innerText=arr[i]["venue"];

        const locationLabel = document.createElement("h3");
        locationLabel.classList.add("shows-container__table-cont--location-label");
        tableCont.appendChild(locationLabel);
        locationLabel.innerText="LOCATION";


        const location=document.createElement("h4");
        location.classList.add("shows-container__table-cont--location");
        tableCont.appendChild(location);
        location.innerText=arr[i]["location"];

        const buttonCont=document.createElement("div");
        buttonCont.classList.add("shows-container__table-cont--button-cont");
        tableCont.appendChild(buttonCont);

        const button=document.createElement("button");
        button.classList.add("shows-container__table-cont--button");
        buttonCont.appendChild(button);
        button.innerText="BUY TICKETS";
    }

}

table(shows);