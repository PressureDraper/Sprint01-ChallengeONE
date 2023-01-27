$(document).ready(function() {
    var b = 0;

    function getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min) ) + min;
	}

    setInterval(() => {
        if (b==0) {
            $("#alura").css('transform','rotateZ(360deg)');
            b = 1;
        } else {
            $("#alura").css('transform','rotateZ(0deg)');
            b = 0;
        }
    }, 3000);

    setInterval(() => {
        document.getElementById("poweredby").style.color = "rgba("+getRndInteger(0,255)+","+getRndInteger(0,255)+","+getRndInteger(0,255)+1+")";
    }, 1000);
});