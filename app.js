// var matrix = [];
// for(var i=0; i<3; i++) {
//     matrix[i] = [];
//     for(var j=0; j<3; j++) {
//         matrix[i][j] = undefined;
//     }
// }

var matrix = [];

function loadTableData(items) {

    var table = '<table border=2 width=300px height=300px>'
    for (var i = 0; i < 3; i++) {
        table += '<tr>'
        matrix[i] = [];
        for (var j = 0; j < 3; j++) {
            table += "<td id ='" + i + "" + j + "' onClick='changeto(event)'>"

            matrix[i][j] = undefined;

            //console.log(uniqueid)
            table += '</td>'
        }
        table += '</tr>'
    }
    table += '</table>'

    //console.log(table)
    document.getElementById("tableoftic").innerHTML = table




}


loadTableData()
var letter = 'x';
function changeto(event) {
    if (!matrix[event.target.id.split('')[0]][event.target.id.split('')[1]]) {

        matrix[event.target.id.split('')[0]][event.target.id.split('')[1]] = letter

        document.getElementById(event.target.id).innerHTML = letter;
        var test1 = test2 = test3 = test4 = 1;
        //console.log(matrix)
        for (var i = 0; i < matrix.length; i++) {

            if (letter !== matrix[event.target.id.split('')[0]][i]) {
                test1 = 0;
                console.log(matrix[event.target.id.split('')[1]][i], matrix[event.target.id.split('')[0]][i])

            }

            if (letter !== matrix[i][event.target.id.split('')[1]]) {
                test2 = 0;
            }

            if (letter !== matrix[i][i]) {
                test3 = 0;
            }


            if (letter !== matrix[i][matrix.length - 1 - i]) {
                test4 = 0;
            }
        }
        console.log(test4, test3, test2, test1)
        if (test1 || test2 || test3 || test4) {

            document.getElementById('won').innerHTML = "You have won"
        }

















        if (letter === 'x') {
            letter = 'o';
        }
        else {
            letter = 'x';
        }

    }










}