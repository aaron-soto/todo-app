// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm)
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck)
document.querySelector('.clearBtns').addEventListener('click', handleClearAllOrDone)
document.getElementById('dayNightToggle').addEventListener('click', dropDownMenu)
document.querySelector('.color-li').addEventListener('click', showColorMenu)
document.querySelector('.back-color-btn').addEventListener('click', hideColorMenu)
document.querySelector('.red-swatch').addEventListener('click', setRedTheme)
document.querySelector('.green-swatch').addEventListener('click', setGreenTheme)
document.querySelector('.blue-swatch').addEventListener('click', setBlueTheme)
document.querySelector('.yellow-swatch').addEventListener('click', setYellowTheme)

//Event Handelers
function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector('input');
  if(input.value != '') 
    addTodo(input.value);
  input.value = '';
}

function handleClickDeleteOrCheck(e) {
  if(e.target.name == 'checkButton') {
    checkTodo(e)
  }
  if(e.target.name == 'deleteButton') {
  deleteTodo(e)
  }
}

function handleClearAllOrDone(e) {
  if(e.target.name == 'clearDone') {
    clearDone()
  }
  if(e.target.name == 'clearAll') {
    clearAll()
  }
}

function dropDownMenu() {
  document.querySelector('.wrapper').classList.toggle('show')
}

function showColorMenu() {
  document.querySelector('.menu-bar').style.marginLeft = '-400px'
  setTimeout(()=> {
    document.querySelector('.color-bar').style.display = 'block'
  }, 100)
}
function hideColorMenu() {
  document.querySelector('.menu-bar').style.marginLeft = '0'
  document.querySelector('.color-bar').style.display = 'none'
}
function setRedTheme() {
  setTheme('theme-red')
}
function setGreenTheme() {
  setTheme('theme-green')
}
function setBlueTheme() {
  setTheme('theme-blue')
}
function setYellowTheme() {
  setTheme('theme-yellow')
}
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}



// Helpers

function addTodo(todo) {
  let ul = document.querySelector('.todoUL');
  let li = document.createElement('li');

  li.innerHTML = `
    <input type="text" value="${todo}" />
    <button name="checkButton"><i class="fas fa-check-square"></i></button>
    <button name="deleteButton"><i class="fas fa-trash"></i></button>
  `

  li.classList.add('todo-list-item')
  ul.appendChild(li)
}

function checkTodo(e) {
  let item = e.target.parentNode
  if (item.classList.contains('strikeout'))
    item.classList.remove('strikeout')
  else 
    item.classList.add('strikeout')
}

function deleteTodo(e) {
  let item = e.target.parentNode
  item.remove()
}

function clearDone() {
  var todos = Array.from(document.querySelectorAll('.todoUL>li'))
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].classList.contains('strikeout')) {
      todos[i].remove()
    }
  }
}

function clearAll() {
  var todos = Array.from(document.querySelectorAll('.todoUL>li'))
  for (let i = 0; i < todos.length; i++) {
    todos[i].remove()
  }
}