
const headingElement = document.getElementsByClassName("heading");
console.log(headingElement);
console.log(headingElement[0].textContent);
console.log(headingElement[0].tagName);

const paraElement = document.getElementById('contact');
console.log(paraElement);
console.log(paraElement.textContent);
console.log(paraElement.textContent.length);

const uiElement = document.getElementsByTagName('li');
console.log(uiElement.length);

headingElement[0].textContent = "hello World change vayexa !";
// headingElement