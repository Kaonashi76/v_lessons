const MAX_LENGTH_COLUMN_NAME= 20;

const columnTemplate$ = `
  <div class="col-header gradient__header" contenteditable>Write column title</div>
  <div class="task_container">
  </div>
`;

const taskTemplate$ = ` <p class="task__name" contenteditable>What do you call your task?</p> `;


const createColButton = document.querySelector('.button__header');
const taskContainer = document.querySelector('.task_container');
const task = document.querySelector('.task');
const createTaskButton = document.querySelector('.button__footer');
const col = document.querySelector('.сolumn');
createTaskButton.addEventListener('click', createTask);
task.addEventListener('dragstart', dragStart);
task.addEventListener('dragend', dragEnd);

dragHandler(taskContainer);
columnNameHandler(col);


createColButton.addEventListener('click', createColumn);


function createColumn( event ) {
  const column = generateColumn();
  const container = column.querySelector('.task_container');

  event.target.before(column);

  dragHandler(container);
  columnNameHandler(column)

}

function columnNameHandler(column) {
  const colName = column.querySelector('.col-header');
  let text;

  colName.addEventListener('keydown', (event) => {
    text = event.target.textContent;

    if(event.target.textContent.length >= MAX_LENGTH_COLUMN_NAME && event.code !== 'Backspace' || event.code === 'Enter') {
      event.preventDefault();
    }
   })

   colName.addEventListener('focusout', (event) => {
    if (event.target.textContent.length === 0) {
      event.target.innerText += text;
    }
   })
}

function generateColumn() {
  let column = document.createElement('div');
  column.classList.add('сolumn');
  column.innerHTML = columnTemplate$;
  return  column;
}

function createTask({ target }) {
  let task = generateTask();
  let container = target.parentNode.querySelector('.task_container');
  container.appendChild(task);

  task.addEventListener('dragstart', dragStart);
  task.addEventListener('dragend', dragEnd);
}

function generateTask() {
   let task = document.createElement('div');
   task.classList.add('task');
   task.setAttribute('draggable', true);
   task.innerHTML = taskTemplate$;
   return  task;
}

function dragStart(event) {
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragEnd(event) {
  event.target.classList.remove('hold', 'hide');
}

function dragHandler(element) {
  element.addEventListener('dragover', dragOver);
  element.addEventListener('dragenter', dragEnter);
  element.addEventListener('dragleave', dragLeave);
  element.addEventListener('drop', dragDrop);
}

function dragOver(event) {
  event.preventDefault()
}

function dragEnter(event) {
  if(event.target.classList.contains('task_container')){
      event.target.classList.add('drag__hover');
  }
}

function dragLeave(event) {
  event.target.classList.remove('drag__hover');
}

function dragDrop(event) {
  if(event.target.classList.contains('task_container')){
    event.target.append(document.querySelector('.hold'));
  }
  event.target.classList.remove('drag__hover');
}