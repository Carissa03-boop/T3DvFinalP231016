// ---------------------------------------------------------------------------
// Trips Arry
// ---------------------------------------------------------------------------

const arrTrips = [

    {
        name:"Serenity Sunset Cruise",
        where:"Santorini, Greece",
        price:" 2250 ",
        date:"Date: October 15, 2023",
        departure:"Departure: Santorini, Greece ",
        code:"Code: 0054",
        image:"trip1.jpg",
        tripLength:"short",
        addedDate:"2023-03-05"

    },
    {
        name:"Aqua Adventure Excursion",
        where:"Great Barrier Reef, Australia",
        price:"3300 ",
        date:"Date: November 5, 2023",
        departure:"Departure: Cairns, Australia",
        code:"Code: 0854",
        image:"trip2.jpg",
        tripLength:"long",
        addedDate:"2023-05-01"


    },
    {
        name:"Paradise Island Voyage",
        where:"Maldives",
        price:" 4500 ",
        date:"Date: December 12, 2023",
        departure:"Departure: Malé, Maldives ",
        code:"Code: 0954",
        image:"trip3.jpg",
        tripLength:"short",
        addedDate:"2023-07-04"


    },
    {
        name:"Nautical Dreams Discovery",
        where:"Norwegian Fjords, Norway",
        price:"2700 ",
        date:"Date: June 20, 2023",
        departure:"Departure: Bergen, Norway",
        code:"Code: 3054",
        image:"trip4.jpg",
        tripLength:"short",
        addedDate:"2023-08-08"


    },
    {
        name:"Emerald Waters Escape",
        where:" Caribbean Sea",
        price:" 3750 ",
        date:"Date: July 8, 2023",
        departure:"Departure: Miami, USA",
        code:"Code: 7054",
        image:"trip5.jpg",
        tripLength:"short",
        addedDate:"2023-03-15"


    },
    {
        name:"Starlight Serenade Cruise",
        where:" Ha Long Bay, Vietnam",
        price:"  2850 ",
        date:"Date: May 14, 2023",
        departure:"Departure: San Francisco, USA",
        code:"Code: 0076",
        image:"trip6.jpg",
        tripLength:"short",
        addedDate:"2023-04-29"


    },
    {
        name:"Tropical Breeze Odyssey",
        where:"Bora Bora, French Polynesia",
        price:" 5250 ",
        date:"Date: January 25, 2024",
        departure:"Departure: Papeete, Polynesia",
        code:"Code: 0984",
        image:"trip7.jpg",
        tripLength:"long",
        addedDate:"2023-01-05"


    },
    {
        name:"Harbor Horizon Expedition",
        where:"San Francisco Bay, USA",
        price:" 2550 ",
        date:"Date: September 2, 2023",
        departure:"Departure: Hạ City, Vietnam",
        code:"Code: 0454",
        image:"trip8.jpg",
        tripLength:"long",
        addedDate:"2023-12-07"


    },
    {
        name:"Moonlit Marina Soiree",
        where:"French Riviera, France",
        price:" 4200 ",
        date:"Date: August 18, 2023",
        departure:"Departure: Nice, France",
        code:"Code: 2345",
        image:"trip9.jpg",
        tripLength:"short",
        addedDate:"2023-11-14"


    }



];

let appliedFilter = "";
let appliedSort = "date added";


// ---------------------------------------------------------------------------
// When the document loads
// ---------------------------------------------------------------------------


$(document).ready(function(){
 console.log("hello");

 // Trips Page

  filterSortTrips();

});

// ---------------------------------------------------------------------------
// Load all Trips
// ---------------------------------------------------------------------------

function loadTrips(tripsToShow) {

    // Clear all elements inside the plants cards container

    $("#tripsContainer").empty();

    // Loop through the list of trips
    for (let i = 0; i < tripsToShow.length; i++) {
        const trip = tripsToShow[i];

        console.log(trip.name)

        // Select trip container and add current arr trip to it
        $("#tripsContainer").append($("#tripCardTemplate").html());
        // Create a varieble that contains the most recent added plant card
        let currentChild = $("#tripsContainer").children().eq(i);
        // Set the content for the current Trip card from the trips list array
        $(currentChild).find(".card-img-top").attr('src', 'ASSESTS/' + trip.image);
        $(currentChild).find("#nameText").text(trip.name);
        $(currentChild).find("#whereText").text(trip.where);
        $(currentChild).find("#priceText").text(trip.price);
        $(currentChild).find("#dateText").text(trip.date);
        $(currentChild).find("#departureText").text(trip.departure);
        $(currentChild).find("#codeText").text(trip.code);

        // Hide price where
        $(currentChild).find("#dateText").hide();
        $(currentChild).find("#departureText").hide();
        $(currentChild).find("#codeText").hide();
        $(currentChild).find("#buttonText").hide();


        
    }

}

// ---------------------------------------------------------------------------
// When a filter or sort option is clicked
// ---------------------------------------------------------------------------

$("input[name='filterRadio']").click(function(){

    appliedFilter = $(this).attr('value');

    filterSortTrips();

});

$("input[name='sortRadio']").click(function(){
     appliedSort = $(this).attr('value');

    filterSortTrips();
});

function filterSortTrips() {
    let filteredSortedArrTrips = []

    console.log(appliedFilter);
    console.log(appliedSort);

    // Filter Trips
    if (appliedFilter) {
        filteredSortedArrTrips = arrTrips.filter(trip => trip.tripLength == appliedFilter)
    } else {
        filteredSortedArrTrips = arrTrips; 
    }

    // Sort Trips

    if (appliedSort == "low to high") {
        // Sort the plants from the lowest to highest price
        filteredSortedArrTrips = filteredSortedArrTrips.sort((a,b) => {
            return a.price - b.price;

        });

    } else if (appliedSort == "date added") {

        // Sort plants from the newest to oldest
        filteredSortedArrTrips = filteredSortedArrTrips.sort((a,b) =>{
            let da = new Date(a.addedDate);
            let db = new Date(b.addedDate);

            return db-da;
        });
         
    }


    console.log(filteredSortedArrTrips)
  
    loadTrips(filteredSortedArrTrips);

}

// ---------------------------------------------------------------------------
// When the card is clicked
// ---------------------------------------------------------------------------

$("#tripsContainer").on('click', '.card', function() {

    // Toggle OFF
    $(this).find("#priceText").toggle();
    $(this).find("#whereText").toggle();
    $(this).find("#priceText").toggle();

    // Toggle Dsecription ON
   
    $(this).find("#dateText").toggle();
    $(this).find("#departureText").toggle();
    $(this).find("#codeText").toggle();
    $(this).find("#buttonText").toggle();

    // Resize the image to fit additional content
    
    $(this).find(".card-img-top").toggleClass("small");
});