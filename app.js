//https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V

// let titles = document.getElementsByClassName("title");

// console.log(Array.isArray(titles));

// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).map(title => {
//   console.log(title);
// });

//jQuery
//$('#wrapper')

//DOM Javascript
//Example 1
// const wrap = document.querySelector("#wrapper");
// console.log(wrap);

//Example 2
// const booklist = document.querySelector("#book-list li:nth-child(2) .name");
// console.log(booklist);

//Example 3
// let books = document.querySelector("#book-list li .name");
// console.log(books);

//Example 4
// let allBooks = document.querySelectorAll("#book-list li .name");
// console.log(allBooks);

// Array.from(allBooks).map(book => {
//   console.log(book);
// });

//Example 5
// let allBooks = document.querySelectorAll("#book-list li .name");

// Array.from(allBooks).map(book => {
//   book.textContent += " (book title)";
// });

//Example 6
//let booklist = document.querySelector("#book-list ul");
//booklist.innerHTML = "<h2>Books and more books...</h2>";
// booklist.innerHTML +=
//   '<li><span class="name">This is how you add HTML</span> <span class="delete">delete</span></li>';

//Example 7
// let banner = document.querySelector("#page-banner");
// console.log(`#page-banner node type is: ${banner.nodeType}`);
// console.log(`#page-banner node name is: ${banner.nodeName}`);
// console.log(`#page-banner has child nodes: ${banner.hasChildNodes()}`);

// let clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

//Example 8 - Adding nodes and child nodes
// const bookList = document.querySelector("#book-list");
// console.log(`The parent node is: ${bookList.parentNode}`);
// console.log(`The parent element is: ${bookList.parentElement.parentElement}`);
// console.log(bookList.childNodes);
// console.log(bookList.children);

//Example 9 - Sibling
// const bookList = document.querySelector("#book-list");
// console.log("booklist next sibling is: ", bookList.nextSibling);
// console.log("booklist next element sibling is: ", bookList.nextElementSibling);

// console.log("booklist previous sibling is: ", bookList.previousSibling);
// console.log(
//   "booklist previous element sibling is: ",
//   bookList.previousElementSibling
// );

// bookList.previousElementSibling.querySelector("p").innerHTML +=
//   "<br/> Too cool for everyone else!";

//Example 10 - Events
//let buttons = document.querySelectorAll("#book-list .delete");

//Delete button - this is not great.. put event listener on each button like this
// Array.from(buttons).map(button => {
//   button.addEventListener("click", function(e) {
//     let li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   });
// });

// let link = document.querySelector("#page-banner a");

// link.addEventListener("click", function(e) {
//   e.preventDefault();
//   console.log("Navigation to", e.target.textContent, "was prevented");
// });

//Example 11 - Event Bubbling
// More efficient to put event on UL
let list = document.querySelector("#book-list ul");
list.addEventListener("click", e => {
  if (e.target.className == "delete") {
    let li = e.target.parentElement;
    list.removeChild(li);
  }
});

//Example 12 - Add item
let addForm = document.forms["add-book"];
addForm.addEventListener("submit", e => {
  e.preventDefault();
  let newBook = addForm.querySelector('input[type="text"]').value;

  //create elements
  let li = document.createElement("li");
  let bookName = document.createElement("span");
  let deleteButton = document.createElement("span");

  //add content
  //deleteButton.className = "delete";
  deleteButton.textContent = "delete";
  deleteButton.classList.add("delete");
  //bookName.className = "name";
  bookName.textContent = newBook;
  bookName.classList.add("name");

  //Combining elements - appending to document
  if (newBook != "") {
    li.appendChild(bookName);
    li.appendChild(deleteButton);

    list.appendChild(li);
  }
});

//Example 15 - Hide books
let hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", e => {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

//Example 16 - Searching
let searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", e => {
  let term = e.target.value.toLowerCase();
  let books = list.getElementsByTagName("li");
  Array.from(books).map(book => {
    let title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});

//Example 17 - Tabbed Content
let tabs = document.querySelector(".tabs");
let panels = document.querySelectorAll(".panel");
tabs.addEventListener("click", e => {
  if (e.target.tagName == "LI") {
    let targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).map(panel => {
      if (panel == targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});
