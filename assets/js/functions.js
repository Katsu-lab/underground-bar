// const btn = document.querySelector('button');
const input = document.getElementById('fname');
const headText = document.getElementsByTagName('h1')[0];
const formEl = document.querySelector('form');
const btn2 = document.getElementById('btn2');
const package = document.querySelector('p');

function greetUser(e) {
    e.preventDefault();
    const userName = document.getElementById('fname').value;

    const wrapper = document.getElementById('wrapper');
    const welcomeEl = document.createElement('h1');
    const welcomeText = document.createTextNode('Hello ' + userName + '!');

    welcomeEl.appendChild(welcomeText);
    wrapper.appendChild(welcomeEl);
}

// btn.onclick = greetUser;

// btn.addEventListener('click',greetUser);

loadFunc = () => {
    // alert('page has loaded!');
}

upperCase = () => input.value = input.value.toUpperCase();

input.addEventListener('change', upperCase);

changeStyle = () => {
    headText.style.color = 'coral';
    headText.style.fontFamily = 'sans-serif';
    headText.style.border = '2px dotted blue';
}

oldStyle = () => {
    headText.style.color = 'black';
    headText.style.fontFamily = 'serif';
    headText.style.border = 'none';
}

blurFunc = () => {
    alert('input is out of focus');
}

input.onblur = blurFunc;

showAlert = () => {
    alert('The form submit success!');
}

formEl.onsubmit = showAlert;

changeText = () => {
    package.innerHTML = "I'm a changed paragraph";
}

// btn2.onclick = changeText;
// btn2.onclick = showAlert;

btn2.addEventListener('click', changeText);
btn2.addEventListener('click', showAlert);
btn2.removeEventListener('click', showAlert);

function showNumbers() {
    package.innerHTML = Math.random();
}

function stopNumbers() {
    wrapper.removeEventListener('mousemove', stopNumbers)
}

wrapper.addEventListener('mousemove', showNumbers)