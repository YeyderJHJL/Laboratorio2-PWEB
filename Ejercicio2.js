//exercise 2
function myWord(){
    let word = document.getElementById("getWord").value;
    document.getElementById("setWord").innerHTML = rebaseWord(word);
}

function rebaseWord(word){
    let text = ""; 
    for(let i = word.length; i > 0; i--){
        text += word.substring(i-1, i);
    }
    return text;
}
