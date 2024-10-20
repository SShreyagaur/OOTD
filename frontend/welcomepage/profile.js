// Function to fetch pin data from the server
function fetchPins() {
    fetch('/api/pins')
        .then(response => response.json())
        .then(data => {
            const feedContainer = document.getElementById('feed-container');
            data.forEach(pin => {
                const pinElement = document.createElement('div');
                pinElement.classList.add('pin');
                pinElement.innerHTML = `
                    <img src="${pin.image}" alt="${pin.title}">
                    <p>${pin.title}</p>
                `;
                feedContainer.appendChild(pinElement);
            });
        });
}

// Call the fetchPins function to load the initial pins
fetchPins();

// Implement event listeners for scrolling and other user interactions to load more pins as needed