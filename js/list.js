function centering(){
    var width=document.documentElement.clientWidth;
    var list_div=document.getElementById("list-div");
    var list_div_width=parseInt(list_div.style.width);
    document.getElementById("list-div").style.left=(width-list_div_width)/2+"px";
    window.onresize=centering;
};

var array = [];

function add(){
    var item = document.getElementById("list-input");
    var item_value = item.value;
    if (item_value !== ""){
        item.value = "";
//        makeDivs("parent-task", item_value);
        addingToArray(item_value);
    }
};

function makeDiv(parentId, value, index) {
    var div = document.createElement("div");
    div.className="task-div";
    div.style.color = "#000000";
    div.id = index + "";
    document.getElementById(parentId).onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;

        // без цикла, т.к. мы точно знаем, что внутри нет тегов
        if (target.className != "list-image") return;

        target.parentNode.style.display = 'none';

        removeElement(target.parentNode.id);
    }
    document.getElementById(parentId).appendChild(div);
    makeXmpWithImage(div.id, value);
}

function makeXmpWithImage(parentId, value) {
    var xmp = document.createElement("xmp");
    xmp.className="task-content";
    xmp.innerHTML = parseInt(parentId) + 1 + ". " + value;
    document.getElementById(parentId).appendChild(xmp);
    var close = document.createElement("img");
    close.className = "list-image";
    close.src="images/Sys_Error.png"
    //close.onclick = removeElement(parentId);
    document.getElementById(parentId).appendChild(close);
}

function addingToArray(element) {
    array.push(element);
    printArray();
}

function printArray(){
    document.getElementById("parent-task").innerHTML = "";
    for(var i in array){
        makeDiv("parent-task", array[i], i);
    }
}

function removeElement(id){

    array.splice(id, 1);
    printArray();
}

window.onload=centering;