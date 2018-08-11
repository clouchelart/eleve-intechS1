var pow = function(base, exp) {
    var i;
    var result = 1;

    for(i = 0; i < exp; i++) {
        result = result * base;
    }

    return result;
};

var toNumber = function(s) {
    var code = s.charCodeAt(0);
    if (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) {
        return code - '0'.charCodeAt(0);
    }

    if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
        return code - 'a'.charCodeAt(0) + 10;
    }

    if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
        return code - 'A'.charCodeAt(0) + 10;
    }
};

var chars = '0123456789abcdefghijklmnopqrstuvwxyz';

var toChar = function(d) {
    return chars[d];
};

var toBase10 = function(n, base) {
    var result = 0;
    var i;
    var x;

    for (i = 0; i < n.length; i++) {
        x = toNumber(n[i]);
        result = result + x * pow(base, n.length - 1 - i);
    }

    return result;
};

var fromBase10 = function(n, base) {
    var r;
    var result = '';

    while (n >= base) {
        r = n % base;
        n = Math.floor(n / base);
        result = toChar(r) + result;
    }

    result  = toChar(n) + result;

    return result;
};

console.log(toBase10('124', 10));  // 124
console.log(toBase10('10', 9));    // 9
console.log(toBase10('10', 8));    // 8
console.log(toBase10('4062', 9));  // 2972
console.log(toBase10('4512', 7));  // 1626
console.log(toBase10('0', 7));     // 0
console.log(toBase10('0', 4));     // 0
console.log(toBase10('ABC', 16));  // 2748

console.log(fromBase10(5487, 16)); // '156f'
console.log(fromBase10(255, 16));  // 'ff'
console.log(fromBase10(27, 8));    // '33'
console.log(fromBase10(854, 10));  // '854'
console.log(fromBase10(0, 12));    // '0'