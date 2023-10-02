const container = document.querySelector('#container');
    //#container already exits so query
const content = document.createElement('p');
//div is being created
content.classList.add('content');
content.textContent = "Hey, I'm red!";
content.style.color = 'red'; 
container.appendChild(content);


const content1 = document.createElement('h3');
content1.classList.add('content1');
content1.textContent = "I'm a blue h3"
content1.style.color = 'blue';
container.appendChild(content1)

const content2 = document.createElement('div')
content2.classList.add('content2')

const content3 = document.createElement('h1')
content3.textContent = "I'm in a div"
content2.appendChild(content3)
const content4 = document.createElement('p')
content2.appendChild(content4)
content4.textContent = 'ME TOO!'
container.appendChild(content2)

//method 2 button 
//const btn = document.querySelector('#btn');
//btn.onclick = () => alert("Hello World");

//method 3 button
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});



