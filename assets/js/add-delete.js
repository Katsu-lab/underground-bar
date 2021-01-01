const btn = document.createElement("BUTTON");
btn.innerHTML = "Click";
document.body.appendChild(btn);

const h = document.createElement("h1");
const t = document.createTextNode("This is a Heading!!!");
h.appendChild(t);
document.body.appendChild(h);

const list = document.getElementById('drinksMenu');
const listItem = document.createElement('li');
const itemText = document.createTextNode("water");


list.appendChild(listItem);
listItem.appendChild(itemText);
// document.getElementById("drinksMenu").appendChild(listItem);
list.removeChild(list.childNodes[1]);

const newText = document.createTextNode("Tea");
const oldText = list.childNodes[2];
oldText.replaceChild(newText, oldText.childNodes[0]);