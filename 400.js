/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var nSum = 0,
        i = 0;
    while(nSum < n) {
        i++;
        nSum += 9 * Math.pow(10, i - 1) * i;
    }
    nSum -=  9 * Math.pow(10, i - 1) * i;
    var add = Math.ceil((n - nSum) / i),
        remain = (n - nSum) % i,
        str = (Math.pow(10, i - 1) - 1 + add).toString();
    if (remain > 0){
        return parseInt(str[remain - 1]);
    }else{
        return parseInt(str[i - 1]);
    }

};
