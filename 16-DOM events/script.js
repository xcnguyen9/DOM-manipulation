// store the button with the id# enter to trigger event when the user enters the new item in user input field
var button = document.getElementById("enter");
// store the user input with the id# userinput to grab whatever typed on the field
var input = document.getElementById("userinput"); 
// store the new items by selecting query 'ul' as an unordered list 
var ul = document.querySelector("ul"); 

// return the string length of user input
function inputLength() {
	return input.value.length;
}

// create new to-do items as a list as well as adding corresponding delete buttons
function createListElement() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value)); // 
	ul.appendChild(li);
	input.value = "";

	// create a delete button corresponding to new items added 
	var delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("X"));
	delButton.className = "delete";
	li.appendChild(delButton);
}

// delete items when delete button is pressed
function itemDeleteAfterClick(event) {
	if (event.target.className === "delete") {
		var removeItem = event.target.parentNode; // gets the parent element of the target (li element)
  		var parentNode = remove.parentNode;	// gets the parent of the li element (ul element)
  		parentNode.removeChild(removeItem); // calls removeChild method by passing 
						//'removeItem' parameter which contained selected li*/
	}	
}

// add new items in to-do list if the user input's length is greater than 0
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// add new items in to-do list if the user input's length is greater than 0
// and when the enter key is entered
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// item is striked through when clicked
function itemToggleAfterClick(event) {
	if (event.target.tagName === "LI") {
		var toggleItem = event.target.classList.toggle("done");	
	}
}

// add listeners to <button id="enter"> button
button.addEventListener("click", addListAfterClick);

// add listeners to <button id="userinput"> button
input.addEventListener("keypress", addListAfterKeypress);

// add listeners to <ul id="itemList"> unordered list
ul.addEventListener("click", itemToggleAfterClick);

// add listeners to <button class="delete"> button
ul.addEventListener("click", itemDeleteAfterClick);
