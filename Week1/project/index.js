// your code goes in here
const quotes = [
  { text: 'Compassion is the chief law of human existence', author: '_Fyodor Dostoyvsky' },
  {
    text:
      'What matters in life is not what happens to you but what you remember and how you remember it',
    author: '_Gabriel Garcia Marquez',
  },
  { text: 'To be free of belief and unbelief is my religion', author: '_Omar Khayyam' },
  { text: 'Why so serious?', author: '_Joker' },
  {
    text:
      'Self-love is a good thing but self-awareness is more important. You need to once in a while go ‘Uh, I’m kind of an asshole.',
    author: '_Louis C.K.',
  },
  {
    text:
      "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
    author: '_Forrest Gump',
  },
];
const colors = ['#F79F1F', '#EE5A24', '#0652DD', '#0c2461', '#0a3d62', '#78e08f'];
const button = document.getElementById('quote-btn');
function showRandomQuote() {
  const quoteContainer = document.querySelector('.quote');
  const authorContainer = document.querySelector('.author');
  const body = document.querySelector('body');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  quoteContainer.innerHTML = randomQuote.text;
  authorContainer.innerHTML = randomQuote.author;
  body.style.backgroundColor = randomColor;
}
button.addEventListener('click', showRandomQuote);
