var matrix = [];
for(var i=0; i<3; i++) {
    matrix[i] = [];
    for(var j=0; j<3; j++) {
        matrix[i][j] = undefined;
    }
}


  function loadTableData(items) {
    const table = document.getElementById("testBody");
    var matrix = [];
for(var i=0; i<3; i++) {
    matrix[i] = [];
    for(var j=0; j<3; j++) {
        matrix[i][j] = undefined;
    }
}

      let row = table.insertRow();
      let date = row.insertCell(0);
      date.innerHTML = undefined;
      let name = row.insertCell(1);
      name.innerHTML = item.name;
    
  }
  loadTableData(items1);
  loadTableData(items2);