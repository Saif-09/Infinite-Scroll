const container = document.querySelector('.container');

// Define initial values for post fetching and counting
let limit = 4; // Number of posts to fetch per request
let pageCount = 1; // Current page count for API requests
let postCount = 1; // Count of displayed posts

// Function to fetch and display posts from the API
const getPost = async () => {
    try {
        // Send a GET request to the JSONPlaceholder API with specified limit and page
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pageCount}`)
        // Parse the JSON response
        const data = await response.json();
        // Iterate through the received data and create HTML elements for each post
        data.map((post, index) => {
            const htmlData = `<div class="posts">
                <p class="post-id">${postCount++}</p>
                <h2 class="title">${post.title}</h2>
                <p class="post-info">${post.body}</p>
            </div>`;
            // Insert the HTML elements into the container
            container.insertAdjacentHTML('beforeend', htmlData)
        })
    }
    catch {
        alert("Error");
    }
}

// Initial call to fetch and display posts
getPost();

// Function to check scroll position and load more posts if needed
const showData = () => {
    // Get information about the document's scroll height, current scroll position, and client height
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    // Define a percentage of the page height when to load more posts
    const loadTriggerPercentage = 80;

    // Calculate the threshold based on the percentage
    const threshold = (scrollHeight - clientHeight) * (loadTriggerPercentage / 100);

    // Check if the scroll position exceeds the threshold, and if so, fetch more posts
    if (scrollTop >= threshold) {
        pageCount++;
        getPost();
    }
}

// Add a scroll event listener to the window to trigger the "showData" function when scrolling
window.addEventListener('scroll', () => {
    showData();
})
