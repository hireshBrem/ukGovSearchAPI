

function getResults() {

    var searchInput = document.getElementById("search-input").value;
    
    var url = 'https://www.gov.uk/api/search.json?' + 
    `q=${searchInput}&count=10`;
    
    var req = new Request(url);
    
    let resultsContainer = document.getElementById("api-results-container");

    fetch(req)
    .then(res => {return res.json()})
    
    .then(data => {
        resultsContainer.innerHTML = "";
        resultsContainer.innerHTML += `
        <h2 class="api-title">Results</h2> `
        return data.results})

    .then(articles => articles.forEach((article)=>{
        console.log(article)
        resultsContainer.innerHTML += `
        <a href="https://www.gov.uk/${article.link}" target="_blank">
        <div class="api-result">
            <h4 class="result-title">${article.title}</h4>
            <p class="result-description">${article.description}</p>
        </div>
        `
    }));
    
}
