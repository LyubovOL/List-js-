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

window.onload = function()
{
    document.getElementById('list-add').onclick = addElement;
};


function addElement()
{
    var item = document.getElementById('list-input');
    var itemValue = item.value;
    if (itemValue.trim() !== '')
    {
        item.value = '';
        arrayTasks.push(itemValue);
        rendering();
    }
}

function removeElement(id)
{
    arrayTasks.splice(id, 1);
    rendering();
}

function rendering()
{
    var externDiv = document.createElement('div');
    externDiv.id = 'parent-task';
    externDiv.onclick = function(e)
    {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.className != 'list-image-delete')
        {
            return;
        }
        removeElement(target.parentNode.id);
    };
    for (var i in arrayTasks)
    {
        var taskDiv = document.createElement('div');
        taskDiv.id = i;
        taskDiv.className = 'task-div';
        var p = document.createElement('xmp');
        p.className = 'task-content';
        p.textContent = parseInt(i) + 1 + '. ' + arrayTasks[i];
        taskDiv.appendChild(p);
        var del = document.createElement('img');
        del.className = 'list-image-delete';
        del.src = 'images/Sys_Error.png';
        taskDiv.appendChild(del);
        externDiv.appendChild(taskDiv);
    }
    var oldTasks = document.getElementById('parent-task');
    var listDiv = document.getElementById('list-div');
    listDiv.replaceChild(externDiv, oldTasks);
}