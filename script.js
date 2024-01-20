// Fetch data from the local server 
fetch('http://localhost:3000/groceries')
    .then(response => response.json())
    .then(data => {
        // Process the groceries array
        const groceries = data;

        // Display each grocery item
        function displayGroceries(searchQuery = "") {
            // Clear previous results
            document.getElementById('grocery-list').innerHTML = "";

            // Filter groceries based on the search query
            const filteredGroceries = groceries.filter(grocery =>
                grocery.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            // Loop through filtered groceries and create elements
            filteredGroceries.forEach(grocery => {
                const groceryDiv = document.createElement('div');
                groceryDiv.className = 'grocery-item'; 
                groceryDiv.innerHTML = `
                    <h2>${grocery.name}</h2>
                    <p>Description: ${grocery.description}</p>
                    <p>Color: ${grocery.color}</p>
                    <p>Taste: ${grocery.taste}</p>
                    <p>price: ${grocery.price}</p>
                    <img src="${grocery.image}" alt="${grocery.name}" class="grocery-image" width="150">
                    <button class="buy-button" data-grocery-id="${grocery.id}">Buy</button>
                    <hr>
                `;

                // Append the grocery div to the grocery-list container
                document.getElementById('grocery-list').appendChild(groceryDiv);

                
                groceryDiv.addEventListener('click', () => {
                    document.getElementById('grocery-image').src = grocery.image;
                });

                // Add click event listener to the 'Buy' button
                const buyButton = groceryDiv.querySelector('.buy-button');
                buyButton.addEventListener('click', () => {
                    // Display SweetAlert confirmation
                    Swal.fire({
                        title: 'Confirmation',
                        text: `Do you want to buy ${grocery.name}?`,
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: '#4CAF50',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, buy it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Success!',
                                `${grocery.name} your order has been received and  at it will be delivered in 10 minutes time! .`,
                                'success'
                            );
                        }
                    });
                });
            });
        }

         // Display all groceries initially
        displayGroceries();

        // Search box functionality
        const searchBox = document.getElementById('search-box');
        const form = document.querySelector('.search-box-container');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const searchQuery = searchBox.value.trim();
            displayGroceries(searchQuery);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

