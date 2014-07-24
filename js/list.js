function centering(){
    var width=document.documentElement.clientWidth;
    var list_div=document.getElementById('list-div');
    var list_div_width=parseInt(list_div.style.width);
    document.getElementById('list-div').style.left=(width-list_div_width)/2+'px';
    window.onresize=centering;
};

function add(){
    var item = document.getElementById("list-input");
    var item_value = item.value;
    console.log(item_value);
    item.value = "";
};

window.onload=centering;