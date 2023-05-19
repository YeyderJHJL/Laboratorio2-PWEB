
//execise 1
function getDateFunction(){
    let date = new Date();
    let day = getDay(date.getDay());
    document.getElementById("date").innerHTML = "Hoy es "+day;
}

function getDay(idx){
    const days = ["domingo", "lunes", "martes","miercoles", "jueves", "viernes", "sabado"];
    return days[idx];
}
