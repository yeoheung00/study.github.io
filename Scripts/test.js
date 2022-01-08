function run() {
    var row = document.getElementById("row").value;
    var column = document.getElementById("column").value;
    var table = document.createElement("table");
    for(let i = 0; i < row; i++) {
        var tr = document.createElement("tr");
        for(let j = 0; j < column; j++) {
            var td = document.createElement("td");
            var text = document.createTextNode(i + ", " + j);
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.querySelector("body").appendChild(table);
}