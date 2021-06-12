const createColButton = document.querySelector('.button__header');

const columnTemplate$ = `
  <div class="сolumn">
    <div class="col-header gradient__header" contenteditable>Название колонки</div>
    <div class="task">
      <p class="task__name" contenteditable>Название задачи..</p>
    </div>
      <button class="button button__footer">Cоздать задачу</button>
  </div>`;

const taskTemplate$ = `
  <div class="task">
    <p class="task__name" contenteditable>Название задачи..</p>
  </div>
`

createColButton.addEventListener('click', createColumn);


function createColumn(event) {
  event.target.insertAdjacentHTML('beforeBegin', columnTemplate$)
  let createTaskButtons = document.querySelectorAll('.button__footer');
  for(let button of createTaskButtons) {
    button.addEventListener('click', createTask);
  }
}

function createTask(event) {
  event.target.insertAdjacentHTML('beforeBegin', taskTemplate$)
}