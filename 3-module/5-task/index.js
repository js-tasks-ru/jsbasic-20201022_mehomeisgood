/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let stringWithoutSpaces = str.split(' ').join();
  let itemsDividedByComma = stringWithoutSpaces.split(',');
  let numbersOnly = itemsDividedByComma
    .filter((item) => item !== '' && isFinite(item));
<<<<<<< HEAD
=======

>>>>>>> fdb9de3a9a2a7a49210f937ffe1d0f6030b18459
  let max = Math.max(...numbersOnly);
  let min = Math.min(...numbersOnly);

  return {min, max};
}
