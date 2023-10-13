document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display thought of the day
    fetchThought();

    // Fetch and display date and time
    updateDateTime();

    // Fetch and display temperature
    fetchTemperature();

    // Update everything on every refresh
    setInterval(function () {
        fetchThought();
        updateDateTime();
        fetchTemperature();
    }, 60000); // Refresh every minute (adjust as needed)

    // Add event listener for "Enter" key press in the input field
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            search();
        }
    });
});

function fetchThought() {
    const thoughtOfTheDayElement = document.getElementById('thoughtOfTheDay');
    thoughtOfTheDayElement.innerHTML = 'Loading thought...';

    setTimeout(function () {
        const thoughts = [
            'The only limit to our realization of tomorrow will be our doubts of today.',
            'Believe you can and you\'re halfway there.',
            'Your time is limited, don\'t waste it living someone else\'s life.',
            // Add more thoughts as needed
        ];

        const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
        thoughtOfTheDayElement.innerHTML = `Thought of the day: ${randomThought}`;
    }, 1000);
}

function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const dateTimeString = `Current date and time: ${now.toDateString()} ${now.toLocaleTimeString()}`;
    dateTimeElement.innerHTML = dateTimeString;
}

function fetchTemperature() {
    const temperatureElement = document.getElementById('temperature');
    temperatureElement.innerHTML = 'Loading temperature...';

    setTimeout(function () {
        const temperature = Math.floor(Math.random() * 30) + 15; // Random temperature between 15 and 45
        temperatureElement.innerHTML = `Current temperature: ${temperature}°C`;
    }, 1500);
}

function search() {
    // Your search functionality here
    // ...
}


function search() {
    const query = document.getElementById('searchInput').value;

    // Redirect to Google search
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    
    // Open Google search results in a new tab
    window.open(googleSearchURL, '_blank');
}

