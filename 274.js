/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var len = citations.length;
    var sortArr = citations.sort(function(a,b) {
        return a - b;
    });

    for (var i = len - 1; i >= 0; i --) {
        if (sortArr[i-1] > len - i){
            continue;
        }else if (sortArr[i] >= len - i) {
            return length - i;
        }
    }
    return 0;
};
