const btn = document.querySelector('button');
const container = document.querySelector('.container');

function http() {
    return {
        get(url, cb) {
            try {
                const xhr = new XMLHttpRequest();

                xhr.open("GET", url);
                xhr.addEventListener("load", () => {
                    if(Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }

                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener("error", (e) => {
                    console.log(e.error);
                });

                xhr.send();
            } catch (e) {
                cb(e);
            }},
        post(url, body, headers, cb) {
            try {
                const xhr = new XMLHttpRequest();

                xhr.open("POST", url);
                xhr.addEventListener("load", () => {
                    if(Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }

                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                if(headers) {
                    Object.entries(headers).forEach(([key, value]) => {
                        xhr.setRequestHeader(key, value);
                    });
                }

                xhr.addEventListener("error", (e) => {
                    console.log(e.error);
                });

                xhr.send(JSON.stringify(body ));
            } catch (e) {
                cb(e);
            }
        }
    };
}

const myHttp = http();
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

function getPost(id) {
    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    })
}

function getPostComments(post) {
    const { id } = post;
    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve({ post, comments: res});
        });
    })
}

function getUserCreatedPost (data) {
    const { post: {userId} } = data;
    console.log(userId);

    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/users/${userId} `, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve({ ...data, user: res });
        });
    })
}

btn.addEventListener("click", e => {
    getPost(renderPosts);
});

getPost(32)
    .then(post => getPostComments(post ))
    .then(data  => getUserCreatedPost(data))
    .then(fullData => console.log(fullData))
    .catch(err => console.log(err));
