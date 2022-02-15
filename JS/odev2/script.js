/* add content of taskbar to list below. If empty or space, toast: "Listeye boş ekleme yapamazsınız!". Else add element to list and toast: "Listeye eklendi!"*/

function addTask() {
    let task = document.querySelector("#task").value;

    if (task === "" || task.replace(/^\s+|\s+$/g, "").length === 0) {

        $('.error').toast("show");

    } else {
        const list = document.querySelector("#list");
        let newTask = document.createElement("li");
        let listNode = document.createTextNode(task);
        newTask.appendChild(listNode);

        let span = document.createElement("span");
        let txt = document.createTextNode("x");
        span.className = "close";
        span.appendChild(txt);
        span.onclick = function () {
            this.parentElement.style.display = 'none';
        };
        newTask.appendChild(span);

        list.appendChild(newTask);

        $('.success').toast("show");
    }
};


/* Remove task by clicking on "X" sign of span element */

function removeTask() {
    let closebtns = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < closebtns.length; i++) {
        closebtns[i].addEventListener("click", function () {
            this.parentElement.style.display = 'none';
        });
    };
};

/* Complete task: */
function completeTask() {
    let ul = document.querySelector("ul");
    ul.addEventListener(
        "click",
        function (ev) {
            if (ev.target.tagName === "LI") {
                ev.target.classList.toggle("checked");
            }
        }, false
    );
};

/*Remove all tasks:*/

function removeAll() {
    let list = document.getElementById("list");

    list.innerHTML = "";
    localStorage.clearAll();

    $('.emptied').toast("show");
};

/*Local Storage: */

function localStorage() {


};