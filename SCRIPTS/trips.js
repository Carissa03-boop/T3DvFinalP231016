$(document).ready(function() {
    const logoImage = $('#logoImage');

    // Store the initial image source
    const initialSrc = logoImage.attr('src');
    
    // Define the path to the new image
    const newSrc = '/ASSESTS/LogoGif.gif';

    // Change the image source to the new image on hover
    logoImage.hover(
        function() {
            logoImage.attr('src', newSrc);
        },
        function() {
            logoImage.attr('src', initialSrc); // Restore the initial source on mouse out
        }
    );
  });
// ---------------------------------------------------------------------------
// Trips Arry
// ---------------------------------------------------------------------------

const arrTrips = [

    {
        name: "Serenity Sunset Cruise [35% OFF!]",
        where:"Santorini, Greece",
        price:" 2250 ",
        date:" March 5-8, 2023",
        departure:" Santorini, Greece ",
        arrival:"Stockholm, Sweden, Amsterdam, Netherlands",
        code:"0054",
        image:"trip1.jpg",
        tripLength:"short",
        addedDate:"2023-03-05",
        rrb:"special",
        destinationAmount:"multi",

    },
    {
        name:"Aqua Adventure Excursion [20% OFF!]",
        where:"Great Barrier Reef, Australia",
        price:" 3300 ",
        date:" May 1-11, 2023",
        departure:" Cairns, Australia",
        arrival:"Cairns, Australia",
        code:" 0854",
        image:"trip2.jpg",
        tripLength:"long",
        addedDate:"2023-05-01",
        returnOrigin:"round",
        rrb:"special"


    },
    {
        name:"Paradise Island Voyage",
        where:"Maldives",
        price:" 4500 ",
        date:" July 4-9, 2023",
        departure:" Malé, Maldives ",
        arrival:"Rio de Janeiro, Brazil",
        code:" 0954",
        image:"trip3.jpg",
        tripLength:"short",
        addedDate:"2023-07-04",
        destinationAmount:"single",


    },
    {
        name:"Nautical Dreams Discovery [30% OFF!]",
        where:"Norwegian Fjords, Norway ",
        price:" 2700",
        date:" August 8-11, 2023",
        departure:" Bergen, Norway",
        arrival:"Bergen, Norway",
        code:" 3054",
        image:"trip4.jpg",
        tripLength:"short",
        addedDate:"2023-08-08",
        returnOrigin:"round",
        rrb:"special"


    },
    {
        name:"Emerald Waters Escape",
        where:" Caribbean Sea",
        price:" 3750 ",
        date:" March 15-18, 2023",
        departure:" Miami, USA",
        arrival:"Vancouver, Canada",
        code:" 7054",
        image:"trip5.jpg",
        tripLength:"short",
        addedDate:"2023-03-15",
        destinationAmount:"single"


    },
    {
        name:"Starlight Serenade Cruise [30% OFF!]",
        where:" Ha Long Bay, Vietnam",
        price:"  2850 ",
        date:" April 20-24, 2023",
        departure:" San Francisco, USA",
        arrival:"Dubrovnik, Croatia, Nassau, Bahamas",
        code:" 0076",
        image:"trip6.jpg",
        tripLength:"short",
        addedDate:"2023-04-20",
        destinationAmount:"multi",
        rrb:"special"


    },
    {
        name:"Tropical Breeze Odyssey",
        where:"Bora Bora, French Polynesia",
        price:" 5250 ",
        date:" January 5-15, 2024",
        departure:" Papeete, Polynesia",
        arrival:"Oslo, Norway, Istanbul, Machu Picchu, Peru",
        code:" 0984",
        image:"trip7.jpg",
        tripLength:"long",
        addedDate:"2023-01-05",
        destinationAmount:"multi",


    },
    {
        name:"Harbor Horizon Expedition [15% OFF!]",
        where:"San Francisco Bay, USA",
        price:" 2550 ",
        date:" December 7-14, 2023",
        departure:" Hạ City, Vietnam",
        arrival:"Hạ City, Vietnam",
        code:" 0454",
        image:"trip8.jpg",
        tripLength:"long",
        addedDate:"2023-12-07",
        returnOrigin:"round",
        rrb:"special"



    },
    {
        name:"Moonlit Marina Soiree",
        where:"French Riviera",
        price:" 4200 ",
        date:" November 14-16, 2023",
        departure:" Nice, France",
        arrival:"Phuket, Thailand",
        code:" 2345",
        image:"trip9.jpg",
        tripLength:"short",
        addedDate:"2023-11-14",
        destinationAmount:"single"


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
        $(currentChild).find("#priceText").html(`<b>R</b>${trip.price}`);
        $(currentChild).find("#dateText").html("<b>Date:</b> " + trip.date);
        $(currentChild).find("#departureText").html("<b>Departure:</b> " + trip.departure);
        $(currentChild).find("#codeText").html("<b>Code:</b> " + trip.code);
        $(currentChild).find("#arrivalText").html("<b>Arrival:</b> " + trip.arrival);


        // Hide price where
        $(currentChild).find("#dateText").hide();
        $(currentChild).find("#departureText").hide();
        $(currentChild).find("#arrivalText").hide();
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
        if (appliedFilter === "single") {
            // Filter for single destination trips
            filteredSortedArrTrips = arrTrips.filter(trip => trip.destinationAmount === "single");
        } else if (appliedFilter === "multi") {
            // Filter for multi destination trips
            filteredSortedArrTrips = arrTrips.filter(trip => trip.destinationAmount === "multi");
        }else if (appliedFilter === "round") {
            // Filter for round trips
            filteredSortedArrTrips = arrTrips.filter(trip => trip.returnOrigin === "round");
        }else if (appliedFilter === "special") {
            // Filter for round trips
            filteredSortedArrTrips = arrTrips.filter(trip => trip.rrb === "special");
        }else {
            // Filter for other trip types
            filteredSortedArrTrips = arrTrips.filter(trip => trip.tripLength == appliedFilter);
        }
    } else {
        filteredSortedArrTrips = arrTrips;
    }

    // Sort Trips

     // Sort Trips
     if (appliedSort == "low to high") {
        // Sort the trips from lowest to highest price
        filteredSortedArrTrips = filteredSortedArrTrips.sort((a, b) => {
            return a.price - b.price;
        });
    } else if (appliedSort == "date added") {
        // Sort trips from newest to oldest by the 'addedDate' property
        filteredSortedArrTrips = filteredSortedArrTrips.sort((a, b) => {
            let dateA = new Date(a.addedDate);
            let dateB = new Date(b.addedDate);
            return dateB - dateA;
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
    $(this).find("#arrivalText").toggle();
    

    // Resize the image to fit additional content
    
    $(this).find(".card-img-top").toggleClass("small");
});


// JavaScript code to handle the purchase button click
// JavaScript code to handle the purchase button click
$(document).ready(function() {
    const selectedTrips = []; // Array to store selected trips

    $('.purchase-button').click(function() {
        // Retrieve trip data from the card where the button was clicked
        const card = $(this).closest('.card');
        const tripName = card.find('#nameText').text().trim();
        const tripPrice = parseFloat(card.find('#priceText').text().replace('R', '').trim()); // Parse the price as a float
        const tripCode = card.find('#codeText').text().trim();

        // Create an object to store the trip data
        const tripData = {
            name: tripName,
            price: tripPrice,
            code: tripCode
        };

        // Push the trip data to the selectedTrips array
        selectedTrips.push(tripData);

        // Update the UI to show the number of selected trips (optional)
        $('#selected-trips-count').text(selectedTrips.length);

        // You can optionally display the selected trips in a list or any other way here

        // Store the selectedTrips array in localStorage
        localStorage.setItem('selectedTrips', JSON.stringify(selectedTrips));
    });
});

  