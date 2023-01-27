$(document).ready(function() {
    var res;

    function replaceStraight(str) {
        let enc = ['ai','enter','imes','ober','ufat'];
        let cad = '';

        for (i=0; i<str.length; i++) {
            if (str.charAt(i) == 'a') {
                cad += enc[0];
            } else if (str.charAt(i) == 'e') {
                cad += enc[1];
            } else if (str.charAt(i) == 'i') {
                cad += enc[2];
            } else if (str.charAt(i) == 'o') {
                cad += enc[3];
            } else if (str.charAt(i) == 'u') {
                cad += enc[4];
            } else {
                cad += str.charAt(i);
            }
        }

        return cad;
    }

    function replaceBack(str) {
        let cad = '';

        for (i=0; i < str.length; i++) {
            if (str.charAt(i) == 'a') {
                cad += 'a';
                i += 1;
            } else if (str.charAt(i) == 'e') {
                cad += 'e';
                i += 4;
            } else if (str.charAt(i) == 'i') {
                cad += 'i';
                i += 3;
            } else if (str.charAt(i) == 'o') {
                cad += 'o';
                i += 3;
            } else if (str.charAt(i) == 'u') {
                cad += 'u';
                i += 3;
            } else {
                cad += str.charAt(i);
            }
        }
        return cad;
    }

    $("#encrypt").click(function () {
        let cad = $("#message1").val();
        res = replaceStraight(cad);
        $("#message2").val(res);
    });

    $("#decrypt").click(function () {
        let cad = $("#message1").val();
        res = replaceBack(cad);
        $("#message2").val(res);
    });

    $("#message1").focus(function (){
        $("#message1").val('');
    });
});