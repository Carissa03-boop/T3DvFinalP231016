const arrTrips = [
    {
      name: "Mindful Cruise Travel",
      price: 35000,
      description: "Miami,Florida.",
      image: "trip.1.jpg" 
    },
    {
        name: "Cloud Cruise Travel",
        price: 20000,
        description: "Miami,Florida.",
        image: "trip.2.jpg" 
    },
    {
        name: "Future Cruise Travel",
        price: 40000,
        description: "Miami,Florida.",
        image: "trip.3.jpg" 
    },
    {
        name: "Cruise Travel Comfort",
        price: 350,
        description: " Miami,Florida.",
        image: "trip.4.jpg" 
    },
    {
        name: "Cruise Travel Brands",
        price: 1200,
        description: "Miami,Florida.",
        image: "trip.5.jpg" 
    },
    {
        name: "Couple Most Traveled",
        price: 1200,
        description: "Miami,Florida.",
        image: "trip.6.jpg" 
    },
    {
        name: "Cruise Travel Day",
        price: 1200,
        description: "Miami,Florida.",
        image: "trip.7.jpg" 
    },
    {
        name: "Solo Around The World",
        price: 1200,
        description: "Miami,Florida.",
        image: "trip.8.jpg" 
    },
    {
        name: "Vacation Wanderer",
        price: 1200,
        description: "Miami,Florida.",
        image: "trip.9.jpg" 
    },


];




function loadTrips() {

    // Run Loop through the list of plants

    for (let i = 0; i < arrTrips.length; i++) {
        const trip = arrTrips[i];

        console.log(trip);

        // 1: Select the plants container and add the current array plant to it
        $("#tripsContainer").append($("#tripCardTemplate").html())

        // 2: Create a vairiable the most recently added pland card
        let currentChild = $("#tripsContainer").children().eq(i+1);
        console.log(currentChild);

        // 3: Set the content for the current plant card from the plants list arry
        $(currentChild).find(".card-img-top").attr('src', 'ASSETS/' + trip.image);
        $(currentChild).find("#nameText").text(trip.name);
        $(currentChild).find("#priceText").text(trip.price);
        $(currentChild).find("#descriptionText").text(trip.description);
        
    }

}

$("#descriptionText").hide();
    loadTrips();

$(".card").click(function(){
    // Toggle Price and Description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit additional content
    $(".card-img-top").toggleClass("small");
    
});