const container = document.querySelector('.container');

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pageCount}`)
    const data = await response.json();
    data.map((post, index) => {
        const htmlData = `<div class="posts">
        <p class="post-id">${postCount++}</p>
        <h2 class="title">${post.title}</h2>
        <p class="post-info">${post.body}</p>
    </div>`;

        container.insertAdjacentHTML('beforeend', htmlData)
    })
}

getPost();

const showData = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    const loadTriggerPercentage = 80;

    const threshold = (scrollHeight - clientHeight) * (loadTriggerPercentage / 100);

    if (scrollTop >= threshold) {
        pageCount++;
        getPost();
    }
}

window.addEventListener('scroll', () => {
    showData();
})
