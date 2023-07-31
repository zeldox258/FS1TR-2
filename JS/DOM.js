//alert("Burak adamdir");

const btn = document.getElementById('btn');

const name = document.querySelector('.name');
const surname = document.querySelector('.surname');
const body = document.querySelector("body");
const container = document.querySelector(".container");




console.log(btn);
console.log(name);
console.log(surname);
console.log(body.innerHTML);
console.log(body.textContent);

//body.innerHTML = "";


btn.addEventListener('click',()=>{
  console.log("You clicked to button");
  alert(name.value + " " + surname.value);
  name.value = "";
  surname.value = "";

  name.style.backgroundColor = "red";
  name.style.borderRadius = "25px";

  surname.classList.add("turnRed");
  console.log(surname);

  // Step 1: Create the element
  const newElement = document.createElement("p");
  const newDiv = document.createElement("div");
  newDiv.classList.add("Burak");

  // Step 2: Set attributes or content for the new element (optional)
  newElement.textContent = "This is a dynamically created paragraph.";

  // Step 3: Append the new element as a child to the parent element
  body.appendChild(newElement);
  container.appendChild(newElement);


})


/*
3 input 1 submit button
when I click submit button display all the values from inputs as an alert.
then add this values as an p to body.
then clear inputs.

*/

/*
3 input 1 submit button
when I click submit button
add this values as an li to ol.
then clear inputs.

*/
