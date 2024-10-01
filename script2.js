
    // Function to track page views
    function trackPageViews() {
        // Get the current view count from localStorage, or initialize it to 0
        let viewCount = localStorage.getItem('viewCount') ? parseInt(localStorage.getItem('viewCount')) : 0;
        
        // Increment the view count
        viewCount++;

        // Save the updated view count back to localStorage
        localStorage.setItem('viewCount', viewCount);

        // Display the total view count at the bottom of the page
        displayViewCount(viewCount);
    }

    // Function to display the view count
    function displayViewCount(count) {
        // Create a div to display the view count
        const viewCountDiv = document.createElement('div');
        viewCountDiv.style.textAlign = 'center';
        viewCountDiv.style.marginTop = '20px';
        viewCountDiv.innerHTML = `Total Views: ${count}`;

        // Append the view count div to the body or another container
        document.body.appendChild(viewCountDiv);
    }

    // Run the tracking function on page load
    document.addEventListener('DOMContentLoaded', function() {
        trackPageViews();
    });

