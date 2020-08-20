const outputResult = document.getElementById('output');

function cout(data)
{
    var para = document.createElement("p");
    var icon = document.createElement("i");
    icon.setAttribute("class","fa fa-terminal");
    para.appendChild(icon);
    var node = document.createTextNode(" "+data);
    para.appendChild(node);
    var element = document.getElementById("output");
    element.appendChild(para);
}

