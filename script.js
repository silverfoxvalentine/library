let add = document.querySelector('#add')
let dialog = document.querySelector('#dialog')
let titleInput = document.querySelector('#title')
let authorInput = document.querySelector('#author')
let pagesInput = document.querySelector('#pages')
let readInput = document.querySelector('#read')

let submit = document.querySelector('#submit')
let library = document.querySelector('.library')
let form = document.querySelector('form')

const myLibrary = [
    {title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    pages: 1137,
    read: true},
    {title: 'No Country for Old Men',
    author: 'Cormac McCarthy',
    pages: 320,
    read: false},
];

add.addEventListener('click', () => dialog.showModal());

function Book(title, author, read, pages) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.pages = pages;
    
    this.info = function() {
        return `${title} by ${author}`
    }
}

function addBookToLibrary() {
    let title1 = titleInput.value
    let author1 = authorInput.value
    let read1 = readInput.checked
    let pages1 = pagesInput.value
    
    let book = new Book(title1, author1, read1, pages1);
    myLibrary.push(book);
    console.log(myLibrary.indexOf(book))
    addBookCard(book)
}

submit.addEventListener('click', (e) => 
{e.preventDefault()
addBookToLibrary()
form.reset()
dialog.close()
})

let addBookCard = function(item) {
    let card = document.createElement('div')
    card.classList.add('card')
    let cardTitle = document.createElement('div')
    let cardAuthor = document.createElement('div')
    let cardPages = document.createElement('div')
    let cardStatus = document.createElement('div')
    let cardReadText = document.createElement('span')
    let cardRead = document.createElement('span')
    let statusBut = document.createElement('button')
    statusBut.textContent = 'Change status'
    statusBut.addEventListener('click', () => {
        console.log(item.read)
        if (item.read) {
            item.read = false;
            cardRead.textContent ='Not Read'
        }
        else {
            item.read = true;
        cardRead.textContent = 'Read'}
    })

    let remBut = document.createElement('button')
    remBut.textContent = 'Remove book'
    remBut.classList.add('remBut')
    
    remBut.addEventListener('click', (e) => {
        myLibrary.splice(myLibrary.indexOf(item), 1)
        e.target.parentElement.remove()   
    })
    

    cardTitle.textContent = 'TITLE: ' + item.title
    cardAuthor.textContent = 'AUTHOR: ' + item.author
    cardPages.textContent = 'NUMBER OF PAGES: ' + item.pages
    cardReadText.textContent = 'STATUS: '
    cardRead.textContent = (item.read) ? 'Read' : 'Not Read'
    
    card.appendChild(cardAuthor)
    card.appendChild(cardTitle)
    card.appendChild(cardPages)
    cardStatus.appendChild(cardReadText)
    cardStatus.appendChild(cardRead)
    card.appendChild(cardStatus)
    card.appendChild(statusBut) 
    card.appendChild(remBut)
    
    library.appendChild(card)
}

function showBooks() {
    
    myLibrary.forEach(item => addBookCard(item))
    }

showBooks();

