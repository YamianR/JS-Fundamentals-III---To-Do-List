let addToDoButton = document.getElementById('addToDo');
let toDoBox = document.getElementById('toDoBox');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
    var listItem = document.createElement('li');
    listItem.classList.add('paragraph-styling');
    listItem.innerText = inputField.value;
    toDoBox.appendChild(listItem);
    inputField.value = "";

    listItem.addEventListener('click', function() {
        listItem.style.textDecoration = "line-through";
    })

    listItem.addEventListener('dblclick', function() {
        toDoBox.removeChild(listItem);
    })
})