const listItem = document.getElementById("one");
const listItems = document.getElementsByTagName("li");
const hotItems = document.getElementsByClassName("hot");
const hotItems2 = document.querySelectorAll("li.hot");


// activity2

itemContent = listItem.innerHTML;

// listItem.innerHTML = "<a href='http://example.org'><em>fresh</em> figs</a>";
listItem.innerHTML = "<a href='http://example.org'>" + itemContent + "</a>";

// listItems[2].setAttribute("id", "honey");
listItems[2].id = "honey";

hotItems[1].style.textDecoration = "line-through";

hotItems2[0].setAttribute("class", "cool");


// activity3
const menu = document.getElementById('menu')

const list = document.createElement("li"); // 1

const itemText = document.createTextNode("milk"); // 2
list.appendChild(itemText)

menu.removeChild(menu.childNodes[3]) // 3

const oldText = menu.childNodes[4]; // 4
oldText.replaceChild(itemText, oldText.childNodes[0]);

