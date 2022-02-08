// Element Selection
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

// Event Lisener

btn.addEventListener('click', function (e) {

  if (title.value === '' || author.value === '' || year.value === '' || isNaN(year.value) || year.value.length > 4) {
    alert('pleas fill all field')
  } else {
    const newRow = document.createElement('tr');

    // Create new Title
    const newtitle = document.createElement('td');
    newtitle.innerHTML = title.value;
    newRow.appendChild(newtitle);
    title.value = '';

    // Create new Author
    const newauthor = document.createElement('td');
    newauthor.innerHTML = author.value;
    newRow.appendChild(newauthor);
    author.value = '';

    // Create new Year
    const newyear = document.createElement('td');
    newyear.innerHTML = year.value;
    newRow.appendChild(newyear);
    year.value = '';

    // newRow append into the book-list
    bookList.appendChild(newRow);

  }

  e.preventDefault();
})