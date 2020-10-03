function btn(){
    var answer = 7;
    var message = "";
    var broj = document.getElementById("number").value;
    broj = parseInt(broj);
        if (broj != answer) {
           document.getElementById("guess").innerHTML = "You made a mistake!";
           btn();
 			
      }else if(broj == answer) {
       document.getElementById("guess").innerHTML = "To je tačno! Pogodio si!" + "<br>" + broj + " je tačan odgovor!"; 
     
    }
    return
}

function again(){
	location.reload();
}

function number(){
	var answer = 7;
	document.getElementById("result").innerHTML = ("The number is: " + answer);
 	return
}