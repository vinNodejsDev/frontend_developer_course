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

document.addEventListener("DOMContentLoaded", function () {
    M.AutoInit();
    loadNews();
});

// Load news function
function loadNews() {
     newsService.topHeadlines('ua', onGetResponse)
}

// Function on get response from server
function onGetResponse (err, res) {
    console.log(res);
    renderNews(res.articles);
}

// Function render news
function renderNews(news) {
    const newsContainer = document.querySelector('.news-container .row');
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