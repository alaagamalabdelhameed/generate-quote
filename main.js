// Get Quote From API
var quote = '';
var author = '';
async function getQuote() {
   
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const num = Math.floor(Math.random()*data.length)
        const item = data[num];

        quote = item.text;
        author = item.author;
        console.log(quote)
        const textHtml = document.querySelector("#quote");
        textHtml.textContent = quote;
        const authorHtml = document.querySelector("#author");
        authorHtml.textContent = author;
        
    } catch (error) {
        
        console.log('whoops, no quote', error)
    }
    
}

//  On Load 
getQuote()

const btn = document.querySelector("#new-quote");
btn.addEventListener("click", getQuote);


btnTwitter = document.querySelector("#twitter")
btnTwitter.addEventListener('click', () => {
    let tweetUrl = `https://twitter.com/intent/tweet?text=${quote} by ${author}`;
    window.open(tweetUrl, "_blank");
});
