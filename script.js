let myLibrary = [];

displayBooks();

document.querySelector("#btnAddBook").addEventListener('click', (e) => {
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const pages = document.querySelector("#pages").value
    const isRead = document.getElementById('isRead').checked

    addBook(title, author, pages, isRead);
    displayBooks()

    document.querySelector("#title").value = ''
    document.querySelector("#author").value = ''
    document.querySelector("#pages").value = ''
    document.getElementById('isRead').checked = false

})

function Book(title, author, page, isRead) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.isRead = isRead;
}

Book.prototype.changeReadStatus = function(){
    this.isRead = !this.isRead;
}

function addBook(title, author, page, isRead) {
    const book = new Book(title, author, page, isRead);
    myLibrary.push(book);
    console.log(myLibrary);
}

function displayBooks() {
    document.querySelector('#bookListContainer').innerHTML = '';
    myLibrary.forEach((book, index) => {
        document.querySelector('#bookListContainer').innerHTML +=
            `<div class="card me-2 mb-2" style="width: 18rem;" data-index='${index}'>
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <h5 class="card-title">${book.author}</h5>
          <h5 class="card-title">${book.page} pages</h5>
          <a href="#" class="btn btn-primary" onclick='changeStatus("${index}")')'>${book.isRead}</a>
          <a href="#" class="btn btn-primary" onclick='removeBook("${index}")'>Remove Book</a>
        </div>
      </div>`
    })

}

function removeBook(index){
    myLibrary.splice(index,1);
    displayBooks();
}

function changeStatus(index){
    myLibrary[index].isRead = !myLibrary[index].isRead
    displayBooks();
}