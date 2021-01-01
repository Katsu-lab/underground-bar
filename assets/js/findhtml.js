const demoId = document.getElementById("demo");
const demoClass = document.getElementsByClassName("demo");
const demoTag = document.getElementsByTagName("article");
const demoQueryAll = document.querySelectorAll(".demo-query");

// innerHTML
demoId.innerHTML = "Hello";

// attribute
demoId.id = "greeting";

// debug
console.log(demoClass[0].style);

// style.property
demoClass[1].style.fontSize = "30px";
demoClass[0].style.color = "blue";

// setAttribute
demoTag[0].setAttribute("class","demo-tag");
demoQueryAll[1].setAttribute("class","query");