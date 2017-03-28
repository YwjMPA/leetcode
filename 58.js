/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s.length === 0) return 0;
  while(s[s.length-1] === ' ') s = s.slice(0, s.length-1);
  return s.split(' ').pop().length;
};
