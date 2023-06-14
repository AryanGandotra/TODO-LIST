let input = document.querySelector("#input-box");
let add_btn = document.querySelector("#add-btn");
let ul = document.querySelector("#list-container");

add_btn.addEventListener("click", function () {
  if (input.value === "") {
    alert("Please enter a value");
    return;
  }
  let li = document.createElement("li");
  let div1 = document.createElement("div");
  div1.innerText = input.value;
  div1.classList.add("list-item");
  li.appendChild(div1);
  let span = document.createElement("span");
  span.innerHTML = "&times;";
  span.classList.add("close");
  li.appendChild(span);
  ul.appendChild(li);
  input.value = "";
  saveList();
});

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI" || e.target.tagName === "DIV") {
    e.target.classList.toggle("checked");
    saveList();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveList();
  }
});

function saveList() {
  localStorage.setItem("list", ul.innerHTML);
}

function loadList() {
  ul.innerHTML = localStorage.getItem("list");
}

loadList();
