// Custom Http module

function customHttp() {
    return {
        get(url, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener("error", () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                xhr.send();
            } catch (e) {
                cb(e);
            }
        },
        post(url, body, headers, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.addEventListener('load', () => {
                   if (Math.floor(xhr.status / 100) !== 2) {
                       cb(`Error. Status code: ${xhr.status}`, xhr);
                   }
                   const response = JSON.parse(xhr.responseText);
                   cb(null, response);
                });

                xhr.addEventListener('error', () => {
                   cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                if (headers) {
                    Object.entries(headers).forEach(([key, value]) => {
                        xhr.setRequestHeader(key, value);
                    });
                }

                xhr.send(JSON.stringify(body));
            } catch (e) {
                cb(e);
            }
        }
    };
}

const http = customHttp();

const newsService = (function () {
    const apiKey = 'f4a4a176a3ee417bb207133cf9c7411b';
    const apiUrl = 'http://newsapi.org/v2';

    return {
        topHeadlines (country='ua', cb) {
            http.get(`${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`, cb);
        },
        everything (query, cb) {
            http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
        }
    }
})();

// Elements
const form = document.forms['newsControls'];
const countrySelect = form.elements['country'];
const searchInput = form.elements['search'];

form.addEventListener('change', (e) => {
    e.preventDefault();
    loadNews();
})

document.addEventListener("DOMContentLoaded", function () {
    M.AutoInit();
    loadNews();
});

// Load news function
function loadNews() {
    showLoader();
    const country = countrySelect.value;
    const searchText = searchInput.value;

    if(!searchText) {
        newsService.topHeadlines(country, onGetResponse);
        return;
    }
    newsService.everything(searchText, onGetResponse);
}

// Function on get response from server
function onGetResponse (err, res) {
    removeLoader();
    if(err) {
        showAlert(err, 'error-msg');
        return;
    }
    if (!res.articles.length) {
        showAlert('No news according to the search query!');
        return;
    }
    renderNews(res.articles);
}

function clearContainer(container) {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

// Function render news
function renderNews(news) {
    const newsContainer = document.querySelector('.news-container .row');
    if (newsContainer.children.length) {
        clearContainer(newsContainer);
    }
    let fragment = '';

    news.forEach((newsItem) => {
        const el = newsItemTemplate(newsItem);
        fragment += el;
    });
    newsContainer.insertAdjacentHTML('afterbegin', fragment);
    // console.log(fragment)
}

// News Item template function
function newsItemTemplate({ urlToImage, title, url, description }) {
    return `
        <div class="col s12">
            <div class="card">
                <div class="card-image">
                    <img src="${urlToImage || 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101032/112815935-stock-vector-no-image-available-icon-flat-vector-illustration.jpg?ver=6'}" alt="No image for the news item">
                    <span class="card-title">${title || ''}</span>
                </div>
                <div class="card-content">
                    <p>${description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${url}">Read More</a>
                </div>
            </div>
        </div>
    `
}

function showAlert(msg, type='success') {
    M.toast({ html: msg, classes:type });
}

function showLoader() {
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
 
        `)
}

// remove loader function
function removeLoader() {
    const loader = document.querySelector('.progress');
    if (loader) {
        loader.remove();
    }
}