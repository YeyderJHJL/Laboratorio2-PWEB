"use strict";
//realizar tabla
function makeTable(){
    document.getElementById("suma").style.display = "none";
    
    let number, numRandom, suma = 0, col, fil, table = "";
    number = document.getElementById("cant").value;

    if (number != "") {
        Number(number);
        col = mdc(number);
        fil = number/col;

        //generar tabla
        table = 
        "<table>"+
        "<thead><tr><th colspan = \""+col+"\">Numeros generados</th></tr></thead>"+
        "<tbody>\n";
        //genera cuerpo de la tabla
        for(let i = 0; i < fil; i ++){
            table += "<tr>\n";
            for(let j = 0; j < col; j ++){
                numRandom = Math.round(Math.random()*101);
                suma += numRandom;//Se suma el número
                table += "<td>"+numRandom+"</td>\n";
            }
            table += "</tr>\n";
        }

        table += "</tbody>\n"+
        "</table>";

        //ingresa la tabla al documento html
        document.getElementById("table").innerHTML = table;
        //se muestra el boton de sumar
        document.getElementById("sumar").style.display = "block";
        //ingresa la suma a div
        document.getElementById("suma").innerHTML = "La suma de elementos de la tabla es "+suma;

    } 
    else {
        document.getElementById("table").innerHTML = "Ingrese número";
    }
}

//busca la cantidad de columnas
function mdc(num){
    let divisor = [];
    let idx = 0;
    let col = 1;

    for(let i = 2; i < num-1; i++){
        if(num%i == 0){
            divisor[idx] = i;
            idx++;
        }
    }

    if(idx > 0){
        if (idx%2 == 0) {
            col = divisor[idx/2 - 1];
        } else {
            col = divisor[(idx + 1)/2 - 1];
        }
    }
    return col;
}

//ver la suma de los valores de la tabla
function showSum(){
    document.getElementById("suma").style.display = "block";
}
