console.log("Hello World");
const body = document.querySelector("body");
console.log("document");
console.dir(body);
const h1 = document.querySelector("h1");
h1.textContent = "Hello WOrld!";
console.log("h1");

const image = document.querySelector("img");
image.src = "/TripleLight.jpg";
image.alt = "triple lights";
body.appendChild(image);

const h2 = document.querySelector("h2");
h2.remove();
