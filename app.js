//Removing elements
let list = document.querySelector("#book-list ul");
list.addEventListener("click", e => {
  if (e.target.className == "delete") {
    let li = e.target.parentElement;
    list.removeChild(li);
  }
});

//Adding elements
let addForm = document.forms["add-book"];
addForm.addEventListener("submit", e => {
  e.preventDefault();
  let newBook = addForm.querySelector('input[type="text"]').value;

  //create elements
  let li = document.createElement("li");
  let bookName = document.createElement("span");
  let deleteButton = document.createElement("span");

  //add content
  deleteButton.textContent = "delete";
  deleteButton.classList.add("delete");
  bookName.textContent = newBook;
  bookName.classList.add("name");

  //Combining elements - appending to document
  if (newBook != "") {
    li.appendChild(bookName);
    li.appendChild(deleteButton);

    list.appendChild(li);
  }
});

//Hide elements
let hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", e => {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

//Searching
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

//Tabbed Content
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
