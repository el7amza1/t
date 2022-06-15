const inpTodo = document.getElementById("inpTodo")
const btnTodo = document.querySelector(".btnTodo")
const listTodo = document.querySelector(".listTodo")
const select = document.querySelector('.custom-select')

document.addEventListener('DOMContentLoaded', getTodos)
btnTodo.addEventListener('click', addTodo)
listTodo.addEventListener('click', deleting)
select.addEventListener('click', sTodo)

function addTodo(event){
    event.preventDefault()

    const divTodo = document.createElement("div")
    divTodo.classList.add("divTodo")

    const liTodo = document.createElement("li")
    liTodo.classList.add('liTodo')
    divTodo.appendChild(liTodo)
    // console.log(inpTodo.value);
    if (inpTodo.value == "") {
        alert("Please write something to do")
        
    }else{
        liTodo.innerText = inpTodo.value
        listTodo.appendChild(divTodo)
        saveLocal(inpTodo.value)
    }
    
    const btnTrue = document.createElement('button');
    btnTrue.innerHTML = '<i class="fa-solid fa-check"></i>';
    btnTrue.classList.add("btnT");
    divTodo.appendChild(btnTrue);

    const dele = document.createElement('button');
    dele.innerHTML = '<i class="fa-solid fa-trash"></i>';
    dele.classList.add("btnD");
    divTodo.appendChild(dele);
    


    inpTodo.value= ""


}
function deleting(e) {
    let i = e.target
    if (i.classList[0]=== 'btnD' ){
        let todoD= i.parentElement
        todoD.classList.add('fall')
        removL(todoD)
        todoD.addEventListener('transitionend',function () {
            todoD.remove()
        })
        
    }
    if (i.classList[0]=== 'btnT') {
        let todoT= i.parentElement
        todoT.classList.toggle('done')
    }
}

function sTodo(e){
    let todoS = listTodo.childNodes
    // console.log(todoS);
    todoS.forEach(function(Todo){
        switch (e.target.value){
            case "all":
                // Todo.style.display = 'flex'
                console.log('hello');
                break;
            case "done":
                if (Todo.classList.contains(done)) {
                    // Todo.style.display = 'flex'
                    console.log('hello');
                }else{
                    // Todo.style.display = 'none'
                }
                break;
        }
    })
}

function saveLocal(todo){
    let todos;
    if( localStorage.getItem('todos') === null){
        todos = [];
    }else{ 
        todos = JSON.parse(localStorage.getItem('todos'))
    }
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos))
}
function getTodos(){
    let todos;
    if( localStorage.getItem('todos') === null){
        todos = [];
    }else{ 
        todos = JSON.parse(localStorage.getItem('todos'))
        
        }
    todos.forEach(function(todo){
        const divTodo = document.createElement("div")
        divTodo.classList.add("divTodo")

        const liTodo = document.createElement("li")
        liTodo.classList.add('liTodo')
        divTodo.appendChild(liTodo)
        // console.log(inpTodo.value);
        liTodo.innerText = todo
        if (inpTodo.value == "") {
        }else{
            saveLocal(inpTodo.value)
        }
        const btnTrue = document.createElement('button');
        btnTrue.innerHTML = '<i class="fa-solid fa-check"></i>';
        btnTrue.classList.add("btnT");
        divTodo.appendChild(btnTrue);

        const dele = document.createElement('button');
        dele.innerHTML = '<i class="fa-solid fa-trash"></i>';
        dele.classList.add("btnD");
        divTodo.appendChild(dele);
        
        listTodo.appendChild(divTodo)
        

    })
}
function removL (todo){
    let todos;
    if( localStorage.getItem('todos') === null){
        todos = [];
    }else{ 
        todos = JSON.parse(localStorage.getItem('todos'))
        
        }
        const textTodo = todo.children[0].innerText
        // console.log(todo.children[0].innerText);
        const dele = document.createElement('button');
        todos.splice(todos.indexOf(textTodo), 1)
        localStorage.setItem('todos' , JSON.stringify(todos))
}