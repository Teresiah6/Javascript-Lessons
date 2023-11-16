const todoList = [{
  name:'make dinner', 
  dueDate: '2023-11-14'},
  {
    name: 'wash dishes',
    dueDate: '2023-11-15'

  }
  ];
renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    //get name and duedate out of object
    //we can use destructuring to shorten the code
    const {name, dueDate} = todoObject;
    /*const name = todoObject.name;
    const dueDate = todoObject.dueDate;*/
    //generating the html
    //can't insert the object directly as it won't display the values of the properties
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1 );
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  
  }
 
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  
}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;


  // add name to todolist
  todoList.push({
    //name: name,
    //duedate: duedate
  name, dueDate});
 
  
  //resetting textbox once smth has been added
  inputElement.value = '';
  dateInputElement.value = '';
  //display to do every time something is added
  renderTodoList();
}