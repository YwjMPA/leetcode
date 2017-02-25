/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var loc,maxLen = 0,
        len = s.length;
    var extendPalindrome = function(s, j, k) {
        while (s[j] === s[k] && j >= 0 && k < len){
            if (maxLen < k - j + 1 ) {
                maxLen = k - j + 1;
                loc = j;
            }
            j--;
            k++;
        }
    };

    if (len < 2) {
        return s;
    }
    for (var i = 0; i < len; i++) {
        extendPalindrome(s, i, i);
        extendPalindrome(s, i, i + 1);
    }
    return s.slice(loc, loc + maxLen);
};
