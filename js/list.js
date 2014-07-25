var arrayTasks = [];

function centering()
{
    var width=document.documentElement.clientWidth;
    var list_div=document.getElementById("list-div");
    var list_div_width=parseInt(list_div.style.width);
    document.getElementById("list-div").style.left=(width-list_div_width)/2+"px";
    window.onresize=centering;
};

function add()
{
    var item = document.getElementById("list-input");
    var item_value = item.value;
    if (item_value.trim() != "")
    {
        item.value = "";
        addingToArray(item_value);
    }
};

function rendering()
{
    var externDiv = document.createElement("div");
    externDiv.id="parent-task";
    externDiv.onclick = function(e)
    {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.className != "list-image-delete")
        {
            return;
        }
        removeElement(target.parentNode.id);
    }
    for(var i in arrayTasks)
    {
        var taskDiv = document.createElement("div");
        taskDiv.className="task-div";
        var p = document.createElement("p");
        p.className="task-content";
        p.textContent = parseInt(i) + 1 + ". " + arrayTasks[i];
        taskDiv.appendChild(p);
        var del = document.createElement("img");
        del.className = "list-image-delete";
        del.src="images/Sys_Error.png";
        taskDiv.appendChild(del);
        externDiv.appendChild(taskDiv);
    }
    var oldTasks = document.getElementById("parent-task");
    var listDiv = document.getElementById("list-div");
    listDiv.replaceChild(externDiv, oldTasks);
}

function addingToArray(element)
{
    arrayTasks.push(element);
    rendering();
}

function removeElement(id)
{
    arrayTasks.splice(id, 1);
    rendering()
}

window.onload=centering;