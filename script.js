let myLibrary = [];

document.querySelector("#btnAddBook").addEventListener('click', (e)=>{
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const pages = document.querySelector("#pages").value
    const isRead = document.getElementById('isRead').checked

    addBook(title, author, pages, isRead);
})

function Book(title, author, page, isRead){
    this.title = title;
    this.author = author;
    this.page = page;
    this.isRead = isRead;
}

function addBook(title, author, page, isRead){
    const book = new Book(title, author, page, isRead);
    myLibrary.push(book);
    console.log(myLibrary);
}