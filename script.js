const container = document.querySelector('.container');

const loading = document.querySelector('.loading');

const quoteEle = document.querySelector('q');

const personEle= document.querySelector('.person');

const btn = document.querySelector('.btn');

const apiUrl = 'https://api.quotable.io/random';

const getQuote = async () => {
    container.style.display = 'none';
    loading.style.display = 'block';
    const response = await fetch(apiUrl);
    const data = await response.json();
    container.style.display = 'block';
    loading.style.display = 'none';
    return data;
};

function work() {
    getQuote().then(data => {
        quoteEle.textContent = data.content;
        personEle.textContent = `~  ${data.author}`;
    });
}

work();

btn.addEventListener('click', work);