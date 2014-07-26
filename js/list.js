/** @file
 list.js
 * @brief
 Adding and deleting tasks from an array
 *
 *
 Detailed_multiline_file_description
 */
/*
 * $Id$
 *
 * <:COPYRIGHT_LICENSE:>
 */

var arrayTasks = [];

function addElement()
{
    var item = document.getElementById("list-input");
    var item_value = item.value;
    if (item_value.trim() != "")
    {
        item.value = "";
        addToArray(item_value);
    }
};

function rendering()
{
    var externDiv = document.createElement("div");
    externDiv.id = "parent-task";
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
		taskDiv.id = i;
        taskDiv.className = "task-div";
        var p = document.createElement("xmp");
        p.className = "task-content";
        p.textContent = parseInt(i) + 1 + ". " + arrayTasks[i];
        taskDiv.appendChild(p);
        var del = document.createElement("img");
        del.className = "list-image-delete";
        del.src = "images/Sys_Error.png";
        taskDiv.appendChild(del);
        externDiv.appendChild(taskDiv);
    }
    var oldTasks = document.getElementById("parent-task");
    var listDiv = document.getElementById("list-div");
    listDiv.replaceChild(externDiv, oldTasks);
}

function addToArray(element)
{
    arrayTasks.push(element);
    rendering();
}

function removeElement(id)
{
    arrayTasks.splice(id, 1);
    rendering()
}

window.onload=function(){
	document.getElementById("list-add").onclick = addElement;
}