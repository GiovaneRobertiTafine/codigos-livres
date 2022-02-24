// var p1 = { nome: 'p1', preco: 120, quantidade: 1 };
// var p2 = { nome: 'p2', preco: 130 };
// console.log("p1", p1);
// console.log("p2", p2);
// function func(n1, n2) { }
// var s1;
// console.log(s1.messge);
// var s2 = { message: 's2', func: function (n1) { return "" + n1; } };
// console.log("s2", s2);
// var m;
// var Clock = /** @class */ (function () {
//     function Clock() {
//         this.currentDate = new Date();
//     }
//     Clock.prototype.setDate = function (d) {
//         this.currentDate = d;
//     };
//     return Clock;
// }());
// var myClock = new Clock();
// var date = myClock.currentDate;
// console.log("Data", date);


var list = [8, 1, 2, 4, 2, 4, 5, 4, 7, 7, 7, 7, 7];

function funcCompareList(list) {
    let count = 0;
    let arr = [];
    list.map((el) => {
        if (arr.filter((v) => (v === el)).length === 0) {
            if (list.filter((v) => (v === el)).length > 1) {
                arr.push(el);
                count += Math.trunc(list.filter((v) => (v === el)).length / 2);
            }
        }
    });

    return count;
}

console.log(funcCompareList(list));

var list2 = 50;

function funcBinList(el) {
    let value = el;
    let arr = [];
    while (value >= 1) {
        if ((value % 2) === 0) {
            arr.push(0);
        } else {
            arr.push(1);
        }
        value = Math.trunc(value / 2);
    }
    console.log(arr.reverse());

    let arr2 = arr.reverse().map((el, i) => {
        if (el === 1) {
            return Math.pow(2, i);
        } else {
            return 0;
        }
    });
    console.log(arr2);
    return arr2.reduce((ac, current) => ac + current, 0);
}

console.log(funcBinList(23));

var list3 = 'abcd';

function funcStrList(el, left, right) {
    if (el) {
        for (var i = 1; i <= left; i++) {
            el = funcLeft(el);
        }

        for (var i = 1; i <= right; i++) {
            el = funcRight(el);
        }
    }

    return el;
}

function funcLeft(el) {
    let arrStr = el.split('');
    let l = arrStr.splice(0, 1);
    arrStr.push(l);
    return arrStr.join('');
}

function funcRight(el) {
    let arrStr = el.split('');
    let l = arrStr.splice(arrStr.length - 1, 1);
    arrStr.unshift(l);
    return arrStr.join('');
}

console.log(funcStrList(list3, 1, 2));

function repeatedString(s, n) {
    // Write your code here
    let fracNumber = Math.trunc(n / s.length);
    let reminder = n % s.length;
    let counter = 0;

    for (let index = 0; index < s.length; index++) {
        if (s[index] === 'a') {
            counter++;
        }
    }

    console.log(reminder);
    console.log(counter);
    counter = counter * fracNumber;
    console.log(counter);
    for (let index = 0; index < reminder; index++) {
        if (s[index] === 'a') {
            counter++;
        }
    }
    return counter;

}

console.log(repeatedString('aba', 10));

function changePosition(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
};
let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10, 3];
arr = changePosition(arr, 9, 2);
console.log(arr);

function sicroChaves(arr) {
    let res = [];
    for (var i = 0; i < arr.length; i++) {
        let arr2 = arr[i][0].split('');
        if (arr2.length % 2 === 0) {
            for (let j = 0; j < arr2.length; j++) {
                if ((arr2[j] === '}' || arr2[j] === ']' || arr2[j] === ')') && j === 0) {
                    res.push('NO');
                    break;
                }

                if (arr2[j] === '}') {
                    let index = arr2.join('').substring(0, j).lastIndexOf('{');
                    console.log(index, j);
                    if ((index === -1) || ((j - index) % 2 === 0)) {
                        res.push('NO');
                        break;
                    } else {
                        arr2.splice(index, 1);
                        arr2.splice(j, 1);
                    }
                }
                if (arr2[j] === ']') {
                    let index = arr2.join('').substring(0, j).lastIndexOf('[');
                    console.log(index, j);
                    if ((index === -1) || (((j - index) % 2 === 0))) {
                        res.push('NO');
                        break;
                    } else {
                        arr2.splice(index, 1);
                        arr2.splice(j, 1);
                    }
                }
                if (arr2[j] === ')') {
                    let index = arr2.join('').substring(0, j).lastIndexOf('(');
                    console.log(index, j);
                    if ((index === -1) || ((j - index) % 2 === 0)) {
                        res.push('NO');
                        break;
                    } else {
                        arr2.splice(index, 1);
                        arr2.splice(j, 1);
                    }
                }
            }
        } else {
            res.push('NO');
        }

        if (res[i] !== 'NO') {
            res.push('YES');
        }
    }

    return res;
}
// console.log(sicroChaves([['[({)}]'], ['}(){'], ['{{()}'], ['[({})}]']]));
// console.log(sicroChaves([['{{()}}']]));
// console.log(sicroChaves([['[{}{}]']]));
// console.log(sicroChaves([['{{()}}{}']]));
// console.log(sicroChaves([['{[][]}']]));
console.log(sicroChaves([['{[[}{]]}']]));