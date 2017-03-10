/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0,
        left = 0,
        right = height.length - 1,
        area;
    while (left < right) {
        max = Math.max(max, Math.min(height[left],height[right]) * [right - left]);
        if (height[left] < height[right]) {
            left++;
        }else {
            right--;
        }
    }
    return max;
};
