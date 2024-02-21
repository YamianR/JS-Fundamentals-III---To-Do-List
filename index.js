let addToDoButton = document.getElementById('addToDo');
let toDoBox = document.getElementById('toDoBox');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
    var listItem = document.createElement('li');
    listItem.classList.add('paragraph-styling');
    listItem.innerText = inputField.value;
    toDoBox.appendChild(listItem);
    inputField.value = "";
})