function addToTable() {
    var job = document.getElementById("job").value;
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var content = document.createTextNode(job);
    td.appendChild(content);
    tr.appendChild(td);
    document.getElementById("jobs").appendChild(tr);
}
