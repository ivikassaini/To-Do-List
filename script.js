let inputs = document.getElementById('input-box');
let text = document.querySelector('.text');
// let newelement;
// let icon = `<i class="fa-solid fa-xmark"></i>`;
let iselector;


function Add(){
    if(inputs.value == ''){
        alert('Please Enter Task')
    }
    else{      
        let newelement = document.createElement('ul');
        newelement.innerHTML=`${inputs.value}<i class="fa-solid fa-xmark"></i>`;
        text.appendChild(newelement);
        inputs.value='';

            
        iselector = newelement.querySelector('i');
        iselector.addEventListener('click', remove);
        function remove(){
            newelement.remove()          
        }      
    }
} 

           

// function savedata(){
//     localStorage.setItem('data',text.innerHTML)
// }

// function showtask(){
//     text.innerHTML = localStorage.getItem('data');
// }

