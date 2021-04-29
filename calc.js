
// Рекурсия;
// Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum, которая находит
// сумму последовательности целых чисел.
// Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности.
// Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой
// последовательности будет: 20.
//
// const sequenceSum = (begin, end) => {
//     if (begin > end) {
//         return NaN;
//     } if (begin === end) {
//         return begin;
//     }
//     return end + sequenceSum(begin, end - 1);
// };

// }


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


