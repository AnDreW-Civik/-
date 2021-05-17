var x;

    function calc () {
        var tabl1 = document.getElementById("number");
        var tabl2 = document.getElementById("number1");

        var res1 = parseFloat(tabl1.value);
        var res2 = parseFloat(tabl2.value);
        x = res1 * res2;
            return x;
        };

        function calc1() {
            var tabl1 = document.getElementById("number");
            var tabl2 = document.getElementById("number1");

            var res1 = parseFloat(tabl1.value);
            var res2 = parseFloat(tabl2.value);

            x = res1 - res2;
            return x;
        };

function calc2() {
    var tabl1 = document.getElementById("number");
    var tabl2 = document.getElementById("number1");

    var res1 = parseFloat(tabl1.value);
    var res2 = parseFloat(tabl2.value);

    x = res1 + res2;

    return x;
};

function calc3() {
    var tabl1 = document.getElementById("number");
    var tabl2 = document.getElementById("number1");

    var res1 = parseFloat(tabl1.value);
    var res2 = parseFloat(tabl2.value);

    x = res1 / res2;
    return x;
};


function equally () {
    result.innerHTML = x;
};


