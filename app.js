// var matrix = [];
// for(var i=0; i<3; i++) {
//     matrix[i] = [];
//     for(var j=0; j<3; j++) {
//         matrix[i][j] = undefined;
//     }
// }


function loadTableData(items) {

    var matrix = [];
    var table = '<table border=2 width=300px height=300px>'
    for (var i = 0; i < 3; i++) {
        table += '<tr>'
        matrix[i] = [];
        for (var j = 0; j < 3; j++) {
            table += "<td onClick='changeto()'>"
            //matrix[i][j] = undefined;
            uniqueid = `'${i}'+'${j}'`
            console.log(uniqueid)
            table += '</td>'
        }
        table += '</tr>'
    }
    table += '</table>'

    console.log(table)
    document.getElementById("tableoftic").innerHTML = table


    //   let row = table.insertRow();
    //   let date = row.insertCell(0);
    //   date.innerHTML = undefined;
    //   let name = row.insertCell(1);
    //   name.innerHTML = item.name;
    
// changeto(){
//     console.log('id');
// }

}


loadTableData()
