let inputs = document.getElementById('input-box');
let text = document.querySelector('.text');
let iselector;

function Add() {
    if (inputs.value === '') {
        alert('Please Enter Task');
    } else {
       
        let newelement = document.createElement('ul');
      
        newelement.innerHTML = `<span class="task-text">${inputs.value}</span><i class="fa-solid fa-xmark"></i>`;
                
        text.appendChild(newelement);
        inputs.value = '';

       
        iselector = newelement.querySelector('i');
        iselector.addEventListener('click', remove);

        
        let taskText = newelement.querySelector('.task-text');
        taskText.addEventListener('click', toggleStrikethrough);

        function remove() {
            newelement.remove();
        }

        function toggleStrikethrough() {
            taskText.classList.toggle('completed'); 
        }
    }
}

inputs.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        Add();
    }
});
