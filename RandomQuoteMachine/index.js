// whats loaded on html at first load
window.onload = load;
function load() {
    getRandomQuote();
}

// function to get random quote
function getRandomQuote(){

    // quotes
    const quotes = [{author:"Nelson Mandela",text:"The greatest glory in living lies not in never falling, but in rising every time we fall."}
    ,{author:"Walt Disney",text:"The way to get started is to quit talking and begin doing."}
    ,{author:"Steve Jobs",text:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma"
    +" – which is living with the results of other people's thinking."}
    ,{author:"Mother Teresa",text:"Spread love everywhere you go. Let no one ever come to you without leaving happier."}
    ,{author:"Franklin D. Roosevelt",text:"When you reach the end of your rope, tie a knot in it and hang on."}
    ,{author:"Benjamin Franklin",text:"Tell me and I forget. Teach me and I remember. Involve me and I learn."}
    ,{author:"Anne Frank",text:"Whoever is happy will make others happy too."}
    ,{author:"Aristotle",text:"It is during our darkest moments that we must focus to see the light."}
    ,{author:"Maya Angelou",text:"You will face many defeats in life, but never let yourself be defeated."}];

    // variables for random index and quote object
    let randIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randIndex];

    let twitterURL = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + generateTwitterURL(`"${quote.text}" - ${quote.author}`) ;

    $("#text").html('"' + quote.text + '"');
    $("#author").html('- ' + quote.author);
    $("#tweet-quote").attr("href",twitterURL);
}

function generateTwitterURL(str){
    let url = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");
    return url;
}
