/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      var max = n,
          min = 1,
          mid;
      if (isBadVersion(1)) {
          return 1;
      }
      while (!(isBadVersion(mid) && !isBadVersion(mid-1))){
          mid = Math.ceil((max + min) / 2);
          if (isBadVersion(mid)){
              max = mid;
          }else{
              min = mid;
          }
      }
      return mid;
    };
};
