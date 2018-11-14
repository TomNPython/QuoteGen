$(document).ready(function() {
  let randomNum;
  let quote;
  let author;
  
  getQuote();
  
  // function to generate a quote and author from two arrays, with a link to post to twitter
  function getQuote() {
    let quotes = ["To give real service, you must add something which cannot be bought or measured with money, and that is sincerity and integrity.", 
                  "Wisdom comes from experience. Experience is often a result of lack of wisdom.", 
                  "Writing a book is a horrible, exhausting struggle, like a long bout with some painful illness. One would never undertake such a thing if one were not driven on by some demon whom one can neither resist nor understand.", 
                  "A character is never the author who created him. It is quite likely, however, that an author may be all his characters simultaneously.", 
                  "Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen."];
    let authors = ["- Douglas Adams", "- Terry Pratchett", "- George Orwell", "- Albert Camus", "- John Steinbeck"];

    randomNum = Math.floor(Math.random() * quotes.length);
    quote = quotes[randomNum];
    author = authors[randomNum];

    $("#text").text(quote);
    $("#author").text(author);
  }

  $("#new-quote").on("click", function() {
    getQuote()
  });
  
  
  // link to twitter
  $('#tweet-quote').on('click', function() {
window.open('https://twitter.com/intent/tweet?text=' + quote + " " + author)})
});
