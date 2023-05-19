function meetURL(){
    let url = document.getElementById("url").value;
    let newCod = "";
    if(url.search("meet.google.com/") != -1 ){
        let cod = url.replace("http://", "");
        cod = cod.replace("meet.google.com/", "");
        if(cod.length == 12){
            newCod = "El código de enlace es "+ cod.replaceAll("-", "");
        }else{
            newCod = "El enlace no existe";
        }
        
    }
    else{
        newCod = "El enlace no existe";
    }
    
    document.getElementById("code").innerHTML = newCod;
}