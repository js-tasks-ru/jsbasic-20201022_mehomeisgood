/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let res = str.toLowerCase();
  if (res = res.includes("1xbet") || res.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}