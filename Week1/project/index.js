// your code goes in here
const quotes = [
  { text: 'text1', author: 'name1' },
  { text: 'text2', author: 'name2' },
  { text: 'text3', author: 'name3' },
  { text: 'text4', author: 'name4' },
  { text: 'text5', author: 'name5' },
  { text: 'text6', author: 'name6' },
];
const button = document.getElementById('button');
function showRandomQuote() {
  const quoteContainer = document.getElementById('quote');
  const authorContainer = document.getElementById('author');
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteContainer.innerHTML = quote.text;
  authorContainer.innerHTML = quote.author;
  //   return;
}
button.addEventListener('click', showRandomQuote);
