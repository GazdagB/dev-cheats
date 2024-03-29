
/**
 * Truncates a string to a specified length, adding the whished ending example (...) at the end if the string is longer.
 * @param {string} str The string to be truncated.
 * @param {number} length The maximum desired length of the truncated string. 
 * @param {*} ending  [ending='...'] (Optional) The string to append to the truncated string if it's longer than the specified length (defaults to '...').
 * @returns The truncated string, potentially with the ending appended.
 */
function truncateString(str, length, ending = '...') {
    if (str.length <= length) return str;
    return str.slice(0, length) + ending;
  }