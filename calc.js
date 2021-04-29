
    function calc () {
           var tabl1 = document.getElementById("chislo");
            var tabl2 = document.getElementById("chislo1");

            var res1 = parseFloat(tabl1.value);
            var res2 = parseFloat(tabl2.value);

            var umn = res1 * res2;
            return umn;
        };


        function calc1() {
            var tabl1 = document.getElementById("chislo");
            var tabl2 = document.getElementById("chislo1");

            var res1 = parseFloat(tabl1.value);
            var res2 = parseFloat(tabl2.value);

            var minus = res1 - res2;
            return minus;
        };

function ravno () {
    result.innerHTML = calc();
};


