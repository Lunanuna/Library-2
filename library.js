const myLibrary = [];

// function Book(title, author, pages, status){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.status = status;

// }

class Book{
    constructor(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}
}

// const newBook  = new Book('mermaid', 'Anderson', '100', 'read')

// console.log(Object.getPrototypeOf(newBook));
// console.log(newBook.valueOf())

//declare input elements 
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
//submit input 
const submitBtn = document.querySelector('input[type="submit"]');
//for test
const newBookContainer = document.querySelector('.newBookContainer');

submitBtn.addEventListener('click', addBookToLibrary)
newBookContainer.addEventListener('click', removeBook)
newBookContainer.addEventListener('click', toggleText)

let isClicked = false;//무슨 용도였지?,..

function addBookToLibrary(e){
    e.preventDefault();
    //to clean inputEl
    isClicked = true;
    //declare variable to add a book
    let addBook = new Book(title.value, author.value, pages.value, read.checked);
    //to prevent from adding no info new book pages
    if(title.value!== 0 && author.value !== 0 && pages.value.length !==0){
        myLibrary.push(addBook);
         // to test
    console.log(myLibrary);
    console.log(title.value.length)
    console.log(pages.value.length)
     
     //create new book list
    let newBook = document.createElement('div');
    newBook.className = 'newBookBox';
    newBookContainer.appendChild(newBook);
    //divide into two parts 
    let headPart = document.createElement('div');
    headPart.className = 'headPart';
    let infoPart = document.createElement('div');
    infoPart.className = 'infoPart';
    
    newBook.append(headPart, infoPart)
    //declare new book input elements
    let newTitle = document.createElement('div'); 
    newTitle.className = 'newTitle';
    newTitle.innerHTML = `Title: <span class="fontControl">${title.value}</span>`;
    
    // if(title.value.length > 5){
    //     fontSpan.style.fontSize = '10px'
    // }
    //try to look up if you can add js function in the span

    let newAuthor = document.createElement('div');
    newAuthor.className = 'newAuthor';
    newAuthor.innerHTML = `Author: <span class="fontControl">${author.value}</span>`;

    let newPages = document.createElement('div');
    newPages.className = 'newPages';
    newPages.innerHTML = `Pages: <span class="fontControl">${pages.value}</span>`

    let newRead = document.createElement('div');
    newRead.className = 'newRead';
    newRead.innerHTML = `${read.checked ? 'read' : 'not read'}`;

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.appendChild(document.createTextNode('x'))
    //append them
    headPart.append(newRead, deleteBtn);
    infoPart.append(newTitle, newAuthor, newPages);

    } else{
        alert("Please type the all information")
    }
    
    
    //to clean inputEl
    if(isClicked){
        title.value = ""
        author.value = ""
        pages.value = ""
        read.checked = false;
    }

}

function removeBook(e){
    if(e.target.classList.contains('deleteBtn')){
        let bookEl = e.target.parentElement.parentElement;
        newBookContainer.removeChild(bookEl);
    }
}

function toggleText (e){
   if(e.target.classList.contains('newRead')){
    let readToggle = e.target;
    if(readToggle.innerHTML == 'read'){
        readToggle.innerHTML = 'not read';
       console.log('its read')
    }else if (readToggle.innerHTML == 'not read'){
        readToggle.innerHTML = 'read';
       console.log('its not read')
    }else{
        null
    }
   }
    
}
// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function changeColor(){
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     testDiv.style.color = rndCol;
// }