const btn = document.querySelector('button');
const container = document.querySelector('.container');

function getPosts(cb) {
    const xhr = new XMLHttpRequest();
    // console.log(xhr);

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

    xhr.addEventListener("load", () => {
        // console.log(xhr.responseText);
        const response = JSON.parse(xhr.responseText);
        // console.log(response);
        cb(response);
    });

    xhr.addEventListener("error", () => {
        console.log("error")
    });

    xhr.send();
    // console.log(xhr.responseText)
}

function renderPosts(response) {
        const fragment = document.createDocumentFragment();
        response.forEach((post) => {
            const card = document.createElement('div');
            card.classList.add('card');
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = post.title;

            const article = document.createElement('p');
            article.classList.add('card-text');
            article.textContent = post.body;

            cardBody.appendChild(title);
            cardBody.appendChild(article);
            card.appendChild(cardBody);
            fragment.appendChild(card);
        });
        container.appendChild(fragment);
}

btn.addEventListener("click", e => {
    getPosts(renderPosts);
});

