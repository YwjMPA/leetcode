/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var len = s.length,
        map = {};
    for (var i = 0; i < len; i++) {
        if (map[s[i]] === undefined) {
            for (var j in map) {
                if (map[j] == t[i]) {
                  return false;
                }
            }
            map[s[i]] = t[i];
        } else if (map[s[i]] != t[i]) {
            return false;
        }
    }
    return true;
};
