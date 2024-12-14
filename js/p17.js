var _ = require('lodash');

let units = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
}

let teens = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
};

let tens = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    // 40: 'fourty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
};

let s = '';
for (let hundred = 0; hundred <= 9; hundred++) {
    let hundredString = '';
    if (hundred !== 0) {
        // console.log(units[hundred] + ' hundred');
        s += (units[hundred] + ' hundred');
        hundredString = units[hundred] + ' hundred and ';
    }

    // 1, 2, ..., 9
    for (let unit of _.keys(units)) {
        // console.log(hundredString + units[unit]);
        s += (hundredString + units[unit]);
    }

    // 10, 11, ..., 19
    for (let teen of _.keys(teens)) {
        // console.log(hundredString + teens[teen]);
        s += (hundredString + teens[teen]);
    }

    // 20, 21, ..., 99
    for (let ten of _.keys(tens)) {
        // console.log(hundredString + tens[ten]);
        s += (hundredString + tens[ten]);

        // 1, 2, ..., 9
        for (let unit of _.keys(units)) {
            // console.log(hundredString + tens[ten] + ' ' + units[unit]);
            s += (hundredString + tens[ten] + ' ' + units[unit]);
        }
    }
}
// console.log('one thousand');
s += 'one thousand';
console.log(s.length);

let noSpacesStr = s.replace(/ /g, '');
// console.log(s);
// console.log(noSpacesStr);
console.log(noSpacesStr.length);
