// ---------------------------------------------------------------------------
// Trips Arry
// ---------------------------------------------------------------------------

const arrTrips = [

    {
        name:"Serenity Sunset Cruise",
        where:"Santorini, Greece",
        price:"R 2250 pp",
        date:"Date: October 15, 2023",
        departure:"Departure: Santorini, Greece ",
        code:"Code: 0054",
        image:"trip1.jpg"

    },
    {
        name:"Aqua Adventure Excursion",
        where:"Great Barrier Reef, Australia",
        price:"R 3300 pp",
        date:"Date: November 5, 2023",
        departure:"Departure: Cairns, Australia",
        code:"Code: 0854",
        image:"trip2.jpg"

    },
    {
        name:"Paradise Island Voyage",
        where:"Maldives",
        price:"R 4500 pp",
        date:"Date: December 12, 2023",
        departure:"Departure: Malé, Maldives ",
        code:"Code: 0954",
        image:"trip3.jpg"

    },
    {
        name:"Nautical Dreams Discovery",
        where:"Norwegian Fjords, Norway",
        price:"R 2700 pp",
        date:"Date: June 20, 2023",
        departure:"Departure: Bergen, Norway",
        code:"Code: 3054",
        image:"trip4.jpg"

    },
    {
        name:"Emerald Waters Escape",
        where:" Caribbean Sea",
        price:"R 3750 pp",
        date:"Date: July 8, 2023",
        departure:"Departure: Miami, USA",
        code:"Code: 7054",
        image:"trip5.jpg"

    },
    {
        name:"Starlight Serenade Cruise",
        where:" Ha Long Bay, Vietnam",
        price:"R  2850 pp",
        date:"Date: May 14, 2023",
        departure:"Departure: San Francisco, USA",
        code:"Code: 0076",
        image:"trip6.jpg"

    },
    {
        name:"Tropical Breeze Odyssey",
        where:"Bora Bora, French Polynesia",
        price:"R 5250 pp",
        date:"Date: January 25, 2024",
        departure:"Departure: Papeete, Polynesia",
        code:"Code: 0984",
        image:"trip7.jpg"

    },
    {
        name:"Harbor Horizon Expedition",
        where:"San Francisco Bay, USA",
        price:"R 2550 pp",
        date:"Date: September 2, 2023",
        departure:"Departure: Hạ City, Vietnam",
        code:"Code: 0454",
        image:"trip8.jpg"

    },
    {
        name:"Moonlit Marina Soiree",
        where:"French Riviera, France",
        price:"R 4200 pp",
        date:"Date: August 18, 2023",
        departure:"Departure: Nice, France",
        code:"Code: 2345",
        image:"trip9.jpg"

    }



];


// ---------------------------------------------------------------------------
// When the document loads
// ---------------------------------------------------------------------------


$(document).ready(function(){
 console.log("hello");

 // Trips Page

$(loadTrips);

});

// ---------------------------------------------------------------------------
// Load all Trips
// ---------------------------------------------------------------------------

function loadTrips() {

    // Loop through the list of trips
    for (let i = 0; i < arrTrips.length; i++) {
        const trip = arrTrips[i];

        console.log(trip);

        // Select trip container and add current arr trip to it
        $("#tripsContainer").append($("#tripCardTemplate").html());
        // Create a varieble that contains the most recent added plant card
        let currentChild = $("#tripsContainer").children().eq(i+1);
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