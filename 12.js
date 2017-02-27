/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var M = ["", "M", "MM", "MMM"],
    C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return M[Math.floor(num/1000)] + C[Math.floor((num%1000)/100)] + X[Math.floor((num%100)/10)] + I[num%10];
};
