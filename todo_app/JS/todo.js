function get_Todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str)
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;

    var todos = get_Todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = '';
    show();

    return false;
}

function show() {
    var todos = get_Todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></lt>';
    };
    html += '<ul>';
    document.getElementById('todos').innerHTML = html;
}

document.getElementById('add').addEventListener('click', add);
show();