//// Solution 1 ////
// addList = () => {
//     const todo = document.getElementById('todo');
//     const content = document.getElementById("abox").value
//     const liBox = document.createElement('li');

//     liBox.innerHTML = content + "<span>×</span>";
//     liBox.onclick = deleteList;
//     todo.appendChild(liBox);
// }

// deleteList = (e) => {
//     const element = e.currentTarget;
//     element.remove();
// }

// Solution 2 ////
addList = () => {
    const todo = document.getElementById('todo');
    const content = document.getElementById("abox").value
    const liBox = document.createElement('li');

    liBox.innerHTML = content + "<span>×</span>";
    todo.appendChild(liBox);

    const closeEl = document.getElementsByTagName('span');
    for (let i=0; i<closeEl.length; i++) {
        closeEl[i].addEventListener("click",deleteList);
    }
}

deleteList = (e) => {
    const element = e.currentTarget;
    element.parentNode.remove();
}


// Common Part ////
clearText = () => {
    document.getElementById("abox").value = "";
}

const addBtn = document.getElementById('abtn');
addBtn.addEventListener('click', addList);
addBtn.addEventListener('click', clearText);