const container = document.getElementsByClassName('container');

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async ()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`)
    const data = await response.json();
    console.log(data)
    

}

getPost();
