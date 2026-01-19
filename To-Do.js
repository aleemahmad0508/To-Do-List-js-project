let todolist = [];

function addToDo() {
    const name = document.querySelector('.js-input').value;
    const date = document.querySelector('.js-date').value;

    if (name === '' || date === '') {
        alert('Please enter task and date');
        return;
    }

    todolist.push({
        name: name,
        date: date
    });

    document.querySelector('.js-input').value = '';
    document.querySelector('.js-date').value = '';

    renderToDo();
}

function renderToDo() {
    let todolistHtml = '';

    for (let i = 0; i < todolist.length; i++) {
        todolistHtml += `
        <div class="todo-row">
            <div>${todolist[i].name}</div>
            <div>${todolist[i].date}</div>
            <button class="delete-button" onclick="deleteToDo(${i})">Delete</button>
        </div>
        `;
    }

    document.querySelector('.js-todo-list').innerHTML = todolistHtml;
}

function deleteToDo(i) {
    todolist.splice(i, 1);
    renderToDo();
}
