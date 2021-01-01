
// Solution 1
const addBtn = document.getElementById('abtn');

addList = () => {

    const todo = document.getElementById('todo');
    const content = document.getElementById("abox").value
    const liBox = document.createElement('li');

    liBox.innerHTML = content + "<span onclick='deleteList()'>×</span>";
    todo.appendChild(liBox);
}

clearText = () => {
    document.getElementById("abox").value = "";
}

deleteList = () => {
    // const element = e.currentTarget;
    // element.remove();
    console.log(this.childNode)
}


addBtn.addEventListener('click', addList);
addBtn.addEventListener('click', clearText);
