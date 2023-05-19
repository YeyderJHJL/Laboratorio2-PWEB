//ejercicio 3

function arequipaDay(){
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    let yearDays = daysYear(year);
    let dif;
    let numDays;
    
    if(month < 7){//mismo año
        numDays = days(month, 7, yearDays) + 15 - day;
    }
    else if(month == 7){//mismo mes
        if(day < 15){//mismo año
            numDays = 15 - day;
        }else{//siguiente año
            dif = day - 15;
        }
    }
    else{//siguiente año
        dif = days(7, month, yearDays) + day - 15;
    }

    if(dif != undefined){
        numDays = daysYear(year+1) - dif;
    }
    document.getElementById("days").innerHTML = numDays;
}

function daysYear(year){
    if(year%4 == 0 && (year%100 != 0 || year%400 == 0)){
        return 366;
    }else{
        return 365;
    }
}

function days(iniM, finM, yearDays){
    let numDays = 0;
    while(iniM < finM){
        if(iniM%2 == 0){//mes con 31 días
            numDays += 31;
        }
        else if(iniM == 1){//febrero
            if(yearDays == 365){
                numDays += 28;
            }else{//año bisciesto
                numDays += 29;
            }
        }
        else{//mes con 30 días
            numDays += 30;
        }
        iniM++;
    }
    return numDays;
}