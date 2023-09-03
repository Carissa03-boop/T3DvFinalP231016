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



// JavaScript code to get and display the selected trip on the checkout page
$(document).ready(function() {
    // Retrieve the selectedTrips array from localStorage
    const selectedTripsJSON = localStorage.getItem('selectedTrips');

    if (selectedTripsJSON) {
        const selectedTrips = JSON.parse(selectedTripsJSON);

        // Create an object to store trip data with quantities
        let tripDataWithQuantities = {}; // Corrected declaration

        // Function to update the table and total cost
        function updateTable() {
            // Initialize total cost
            let totalCost = 0;

            // Clear the booking table
            $('#booking-table-body').empty();

            // Iterate through the tripDataWithQuantities object and display each trip in the table
            for (const tripCode in tripDataWithQuantities) {
                const tripData = tripDataWithQuantities[tripCode];
                // Calculate the total cost for this trip (quantity * price)
                const tripTotalCost = tripData.quantity * tripData.price;
                totalCost += tripTotalCost; // Add to the total cost

                // Create a new row for the booking table
                const newRow = `
                    <tr>
                        <td style="font-family: 'Nunito', sans-serif;">${tripData.code}</td>
                        <td style="font-family: 'Nunito', sans-serif;" >${tripData.quantity}</td>
                        <td style="font-family: 'Nunito', sans-serif;">R ${tripData.price}</td>
                        <td style="font-family: 'Nunito', sans-serif;">R ${tripTotalCost}</td>
                        <td style="font-family: 'Nunito', sans-serif;"><button class="remove-button" data-trip-code="${tripData.code}">Remove</button></td>
                    </tr>
                `;

                // Append the new row to the booking table
                $('#booking-table-body').append(newRow);
            }

            // Display the total cost
            $('#total-cost').text(`Total Cost: R ${totalCost}`);
        }

        // Function to clear the whole table
        function clearTable() {
            tripDataWithQuantities = {}; // Reset the object
            $('#booking-table-body').hide(); // Hide the table
            updateTable(); // Update the table and total cost
        }

        // Iterate through the selectedTrips array and calculate quantities
        selectedTrips.forEach(function(tripData) {
            const tripCode = tripData.code;
            if (tripDataWithQuantities[tripCode]) {
                // If the tripCode already exists, increment the quantity
                tripDataWithQuantities[tripCode].quantity++;
            } else {
                // If the tripCode doesn't exist, create a new entry with quantity 1
                tripDataWithQuantities[tripCode] = {
                    code: tripData.code,
                    name: tripData.name,
                    price: tripData.price,
                    quantity: 1
                };
            }
        });

        // Initial table setup
        updateTable();

        // Handle click events on the remove buttons
        $('#booking-table-body').on('click', '.remove-button', function() {
            const tripCodeToRemove = $(this).data('trip-code');
            if (tripDataWithQuantities[tripCodeToRemove].quantity > 1) {
                // If there is more than one ticket, decrement the quantity
                tripDataWithQuantities[tripCodeToRemove].quantity--;
            } else {
                // If there is only one ticket, remove the trip entirely
                delete tripDataWithQuantities[tripCodeToRemove];
            }
            updateTable(); // Update the table and total cost
        });

        // Handle click event on the "Remove All" button
        $('#remove-all-button').on('click', function() {
            clearTable(); // Clear the whole table
        });
    }

    $('.btn-success').click(function() {
        // Display an alert when the button is clicked
        alert('Your Purchase was Successful');
    });
});





  
   