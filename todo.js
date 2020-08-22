let add_button=document.getElementById('addition');
let toDoContainer=document.getElementById('to-do-container');
let inputfield=document.getElementById('inputField');

add_button.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.innerText=inputfield.value;
    toDoContainer.appendChild(paragraph);
    inputfield.value="";
    paragraph.addEventListener('click',()=>{
        paragraph.style.textDecoration="line-through";
        paragraph.style.textDecorationColor="red";
    })
    paragraph.addEventListener('dblclick',()=>{
        toDoContainer.removeChild(paragraph);
    })
})