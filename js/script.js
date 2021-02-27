var tarefas = [];
var submitBox = document.getElementById("addTask");
function addTask() {
    if (document.getElementById("addTask").value == "") {
        alert("Type a name for the Task!");
    } else {
        var id = tarefas.length;
        var nome = document.getElementById("addTask").value;
        tarefas[id] = ({
            nome: nome,
            completa: 0
        });
        console.log("Tarefa " + nome + " adicionada! ");
        document.getElementById("addTask").value = "";
        carregaTasks();
    }

}

function deletaTask(task) {
    tarefas.splice(task, 1);
    carregaTasks();
}

function completaTask(task) {
    if (tarefas[task].completa == 1) {
        tarefas[task].completa = 0;
        carregaTasks();
    } else {
        tarefas[task].completa = 1;
        carregaTasks();
    }
}

submitBox.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        addTask();
    }
});

function carregaTasks() {
    var render = "";
    var totalTasks = tarefas.length;
    for (var a = 0; a < totalTasks; a++) {
        if (tarefas[a].completa == 0) {
            render = render +
                "<div id='task'>" +
                "<h3 id='taskName'>" +
                tarefas[a].nome +
                "<div id='deleteTaskBtn' href='' onclick='deletaTask(" + a + ")'><i class='fas fa-trash'></i></div>" +
                "<div id='doneTaskBtn' href='' onclick='completaTask(" + a + ")'><i class='far fa-check-circle'></i></div>" +
                "</h3>" +
                "</div>";
        } else {
            render = render +
                "<div id='task' style='background: #33ff33'>" +
                "<h3 id='taskName'>" +
                tarefas[a].nome +
                "<div id='deleteTaskBtn' href='' onclick='deletaTask(" + a + ")'><i class='fas fa-trash'></i></div>" +
                "<div id='doneTaskBtn' href='' onclick='completaTask(" + a + ")'><i class='far fa-check-circle'></i></div>" +
                "</h3>" +
                "</div>";
        }
    }
    document.getElementById("tasksList").innerHTML = render;
}