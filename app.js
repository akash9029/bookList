const form = document.getElementById('book-form');
form.addEventListener('submit', addbook);

function addbook(e) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  const list = document.getElementById('book-list');

  if (title === '' || author === '' || isbn === '') {
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode('Please Fill Details !!'));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    setTimeout(function () {
      document.querySelector('.error').remove();
    }, 3000);

  }
  else {
    const row = document.createElement('tr');
    row.innerHTML = `
  <td>${title}</td>
  <td>${author}</td>
  <td>${isbn}</td>
  <td><a href="#" class= "delete">X</a></td>
  `;
    list.appendChild(row);
    const div = document.createElement('div');
    div.className = 'success';
    div.appendChild(document.createTextNode('Books Added !!'));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    setTimeout(function () {
      document.querySelector('.success').remove();
    }, 3000);
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }


  e.preventDefault();
}

document.getElementById('book-list').addEventListener('click', function(e) {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.parentElement.remove();
    const div = document.createElement('div');
    div.className = 'success';
    div.appendChild(document.createTextNode('Book Removed !!'));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    setTimeout(function () {
      document.querySelector('.success').remove();
    }, 3000);
  }


  e.preventDefault();
})


