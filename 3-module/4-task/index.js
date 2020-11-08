/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
<<<<<<< HEAD
function showSalary(users, age) {
    return data
      .filter(item => item.age <= age)
      .map(item =>
         `${item.name}, ${item.balance}`)
      .join('\n');
=======
function showSalary(data, age) {
  return data
    .filter(item => item.age <= age)
    .map(item => `${item.name}, ${item.balance}`)
    .join('\n');
>>>>>>> fdb9de3a9a2a7a49210f937ffe1d0f6030b18459
}
