// JavaScript Memory Types:
// 1. Stack Memory: Primitive datatypes, function calls, execution context - Code by value
// 2. Heap Memory: Objects, Arrays, Functions, Dates, Maps, Sets, etc - Code by reference

// Primitive types: Number, string, boolean, bigint, symbol, undefined, null

// let str1 = Symbol("abc");
// let str2 = Symbol("abc");
// console.log(str1==str2);

// console.log(Number.MAX_SAFE_INTEGER);
// const num = 9007199254740991n;
// console.log(typeof num);

// Date(year, month, day, hours, minutes, seconds, miliseconds)
// const myDate = new Date();
// console.log(myDate);

//getElementsByClassName
// const box = document.getElementsByClassName('box');
// console.log(box); // Return a HTML collection which is an array=like structure
// console.log(box.length) // returns the length of the html collection
// traversiong using for
// for (let i = 0; i < box.length; i++) {
//     box[i].style.width = '100px';
//     box[i].style.height = '100px';
//     box[i].style.border = '1px groove black';
//     box[i].style.borderRadius = '20px';
//     box[i].style.backgroundColor = 'navy';
//     box[i].style.color = 'white';
//     box[i].style.margin = '20px';
// }
// for (const item of box) {
//         item.style.width = '100px';
//         item.style.height = '100px';
//         item.style.border = '1px groove black';
//         item.style.borderRadius = '20px';
//         item.style.backgroundColor = 'purple';
//         item.style.color = 'white';
//         item.style.margin = '20px';
// }

// const boxArr = Array.from(box); // create an array from the html collection to use all the array methods
// boxArr.forEach(item => {
//     item.style.width = '100px';
//     item.style.height = '100px';
//     item.style.border = '1px groove black';
//     item.style.borderRadius = '20px';
//     item.style.backgroundColor = 'purple';
//     item.style.color = 'white';
//     item.style.margin = '20px';

// });

//getElementsByTagName
// const spanTag = document.getElementsByTagName('span');
// const pTag = document.getElementsByTagName('p');
// console.log(pTag);
// for (const element of spanTag) {
//     element.style.fontSize = '30px';
//     element.style.backgroundColor = 'green';
//     element.style.color = 'greenYellow';

// }
// for (const element of pTag) {
//     element.style.fontSize = '20px';
//     element.style.backgroundColor = 'violet';
//     element.style.color = 'white';

// }

// query selector - select one element
// document.querySelector('#para1').style.backgroundColor = 'yellow';
// document.querySelector('span').style.backgroundColor = 'green';
// document.querySelector('.box').style.backgroundColor = 'red';
// document.querySelector('div > p').style.backgroundColor = 'red';

//querySelectorAll - select multiple elements and returns a html collection
// const items = document.querySelectorAll('p');
// console.log(items);
// items.forEach(item=>{
//     item.style.backgroundColor = 'maroon';
//     item.style.color = 'white';
// })

// let img = document.getElementById('img1');
// img.setAttribute('src', 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_640.jpg');
// // img.removeAttribute('alt');
// const value = img.getAttribute('src');
// console.log(value);
// img.classList.add('invert');
// img.classList.remove('invert');
// img.classList.toggle('invert');

// if (img.classList.contains("invert")){
//     console.log("Present");
// }
// else{
//     console.log("Absent");
    
// }

// const h1 = document.createElement('h1'); // create a html element
// h1.innerHTML = '<h1>This heading is created using JS</h1>';
// document.body.append(h1); // add the element the the html file
// const div = document.createElement('div');
// document.body.append(div);
// const para = document.createElement('p');
// para.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fuga similique iure quidem, quos tenetur beatae eos voluptatum cupiditate rem dolorum non adipisci officia modi? Aut rerum molestiae repellendus placeat!';

// const para2 = document.createElement('p');
// para2.innerText = "This is the replacement paragraph"

// div.appendChild(para); // add the child element inside a parent element
// div.replaceChild(para2, para); // replace the element replaceChild(newNode, oldNode)
// h1.remove(); // remove the element

// console.log(document.body.parentElement);
// console.log(document.body.children);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// const button = document.querySelector('#displayBtn');
// const textBox = document.querySelector('#nameInp');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', ()=>{
//     h1.innerText = textBox.value;
// })
// button.addEventListener('dblclick', ()=>{
//     h1.innerText = textBox.value;
// })

// click, dblclick, mousedown, mousemove, mouseleave, mouseover, contextmenu, wheel, keydown, keyup

// document.addEventListener('key', (e)=>{
//     console.log(e.key);
// })