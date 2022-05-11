var x = 1;
 var myInterval = setInterval(function() {
 x += 1;
document.getElementById("headerNames").innerHTML = x;
}, 100);


function whoSpaying(stop, names){
   var name = ["Idrees", "Oyin", "Raz", "Olamide"]

    var randomNo = Math.random() * name.length

    randomNo = Math.floor(randomNo);
    document.getElementById("headerNames").innerHTML = (name[randomNo]);
    clearInterval(myInterval);
}
whoSpaying();
