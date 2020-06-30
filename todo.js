var audio = new Audio('ding.mp3');
var remove_audio = new Audio('remove.mp3');
var todo_list = document.getElementsByTagName("LI");

var i;
for (i = 0; i < todo_list.length; i++) {
    var delimg = document.createElement("img");
    delimg.src = "delete.png";
    delimg.className = "delete_todo";
    todo_list[i].appendChild(delimg);
}

var deltodo = document.getElementsByClassName("delete_todo");
delete_todo();


var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    audio.play();
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        if (ev.target.classList.value == "checked") {
            list.appendChild(ev.target.cloneNode(true));
            ev.target.classList.add("hide");
            delete_todo();
        }
    }
}, false);

function add_meta() {
    var li = document.createElement("li");
    var todo_title = document.getElementById("todo_title").value;
    var t = document.createTextNode(todo_title);
    li.appendChild(t);
    if (todo_title === '') {
        alert("Enter Valid Details!");
    } else {
        document.getElementById("todo_list").appendChild(li);
    }
    document.getElementById("todo_title").value = "";

    var img = document.createElement("img");
    img.src = "delete.png";
    img.className = "delete_todo";
    li.appendChild(img);

    delete_todo();
}

function delete_todo() {
    let i = 0;
    for (i = 0; i < deltodo.length; i++) {
        deltodo[i].onclick = function () {
            remove_audio.play();
            let j;
            this.parentElement.style.padding = 0;
            for (j = this.parentElement.scrollHeight; j >= 0; --j) {
                this.parentElement.style.height = j;
            }
            this.parentElement.classList.add("hide");
        }
    }
}