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


// Weather widget
const apiKey = 'c4ad73b8aee76935aa88a7470e30940a';
const cities = ['Mauritius', 'Bahamas', 'Maldives'];

cities.forEach((city, index) => {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
        method: 'GET',
        success: function (data) {
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;

            // Update the temperature and weather information simultaneously
            $(`.weather-temperature:eq(${index})`).text(`Temperature: ${temperature}°C`);
            $(`.weather-description:eq(${index})`).text(`Weather: ${weatherDescription}`);
        },
        error: function (xhr, status, error) {
            console.error(`Error fetching weather data for ${city}: ${error}`);
            // Set an error message for both temperature and weather
            $(`.weather-temperature:eq(${index})`).text('Error fetching weather data');
            $(`.weather-description:eq(${index})`).text('Error fetching weather data');
        }
    });
});
// H1 tag that load once the page is finished
document.addEventListener('DOMContentLoaded', function() {
    // Get the element with the id "Tropical"
    var tropicalHeading = document.getElementById('Tropical');
  
    // Check if the element exists
    if (tropicalHeading) {
      // Update the text content of the element
      tropicalHeading.innerHTML = '<b>Welcome to Tropical Cruises</b>';
    }
  });

  // Hover of the logo

  

      