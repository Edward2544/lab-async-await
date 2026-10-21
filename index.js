// Write your code here!
async function fetchAndDisplayPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = ''; // Clear existing posts
    posts.forEach(post => {
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        h1.textContent = post.title;
        const p = document.createElement('p');
        p.textContent = post.body;
        li.appendChild(h1);
        li.appendChild(p);
        postList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayPosts);
