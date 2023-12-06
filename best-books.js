const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

const API = 'bVJyypQd7PNy8B56e0fbBabtUPU76jYn';


formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
  const list = 'hardcover-fiction';
  
  let bookDate = `${year}-${month}-${date}`;
  const Book_URL = `https://api.nytimes.com/svc/books/v3/lists/${bookDate}/${list}.json?api-key=${API}`
  const asyncFetch = async function() {
    try {
      const data = await fetch(Book_URL);
      const dataJson = data.json();

    } catch (error) {

    }
  }
});
