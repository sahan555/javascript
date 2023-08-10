const headingElement = document.getElementsByClassName("heading");
console.log(headingElement);
console.log(headingElement[0].textContent);
console.log(headingElement[0].tagName);

const paraElement = document.getElementById("contact");
console.log(paraElement);
console.log(paraElement.textContent);
console.log(paraElement.textContent.length);

const uiElement = document.getElementsByTagName("li");
console.log(uiElement.length);

headingElement[0].textContent = "hello World change vayexa !";
// headingElement

const liAllElement = document.querySelectorAll("li");
liAllElement[0].innerHTML = "<p>muna</p>";
liAllElement[1].innerHTML = "<p>muna</p>";
liAllElement[2].style.background = "red";

const liFirstElement = document.querySelector("li:first-child");
console.log(liFirstElement);
liFirstElement.innerHTML = "<b>asdasd</b>aalu muna";

var inputElement = document.getElementById("myinput");
console.log(inputElement.type);
console.log(inputElement.value);

// modifying attributes using dom properties

inputElement.value = "New Heloooooooooo!!!! ciao ciao ciao";
console.log(inputElement.value);
inputElement.type = "number";
console.log(inputElement.type);
inputElement.value = "2131";

inputElement.id = "yonayaid";
console.log(inputElement.id);

console.log(inputElement.hasAttribute("id"));
inputElement.removeAttribute("id");
console.log(inputElement.hasAttribute("id"));
inputElement.setAttribute("id", "yonayaidnew");
console.log(inputElement.getAttribute("id"));

inputElement.setAttribute("type", "text");
console.log(inputElement.getAttribute("type"));
inputElement.setAttribute("value", "");
console.log(inputElement.getAttribute("value"));
inputElement.value = "New Heloooooooooo!!!! ciao ciao ciao";
inputElement.setAttribute("value", inputElement.value);
// inputElement.setAttribute("value","New valuesadsad");
console.log(inputElement.getAttribute("value"));
inputElement.setAttribute("style", "color:red");
console.log();


