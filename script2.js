window.open('cougars.html','popupad','width=auto,height=auto')

function userName(){
    let thisName = prompt("What is your name?");
    let secondName = "";

    if(thisName!=secondName){
        secondName = prompt("Please re-enter name!");

    }
    alert('Hello ${thisName}!');
    
}
function tryAgain(){
    let secondName = "";
    let myName = prompt("What is your name?");
    while(myName != secondName){
        secondName = ('{myName} doesnt match our records, please try again');
    }
    alert ('Hello there ${secondName}');
}
let userAns = "";

function rating(){
    let userAns = prompt("How would you rate my webpage 1-5?");
    for(let x = 0; x < userAns; x++){
        document.getElementById("thisPar").innerHTML += "<img src = https://i.imgur.com/nvWZCwq.png>"
    }
}