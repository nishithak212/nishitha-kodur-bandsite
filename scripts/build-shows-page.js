//1. Referencing the section container

const showsList=document.getElementById('shows-container');

//2. Array for listing show details
const shows = [
    {DATE: "Mon Sept 09 2024", VENUE:"Ronald Lane", LOCATION:"San Fransico, CA", ticketLink:"#" },
    {DATE: "Tue Sept 17 2024", VENUE:"Pier 3 East", LOCATION:"San Fransico, CA", ticketLink:"#" },
    {DATE: "Sat Oct 12 2024", VENUE:"View Lounge", LOCATION:"San Fransico, CA", ticketLink:"#" },
    {DATE: "Sat Nov 16 2024", VENUE:"Hyatt Agency", LOCATION:"San Fransico, CA", ticketLink:"#" },
    {DATE: "Fri Nov 29 2024", VENUE:"Moscow Center", LOCATION:"San Fransico, CA", ticketLink:"#" },
    {DATE: "Wed Dec 18 2024", VENUE:"Press Club", LOCATION:"San Fransico, CA", ticketLink:"#" },
];

//3. Loop through array to create show elements

shows.forEach(show =>{
    const showDiv=document.createElement('div');
    showDiv.classList.add('show');

    showDiv.innerHTML=`
    <p class="div__date">DATE <br> <span class="div__date--bold"> ${show.DATE}</span></p>
    <h4 class="div__venue">VENUE <br><span class="div__venue--bold">${show.VENUE}</span></h4>
    <p class="div__location">LOCATION <br><span class="div__location--bold"> ${show.LOCATION}</span></p>
    <a href="${show.ticketLink}" class="buy-ticket">Buy Tickets</a>
    `;
    showsList.appendChild(showDiv);
});
