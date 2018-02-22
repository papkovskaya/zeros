module.exports = function getZerosCount(number) {
  let n = 0;
  while (number > 0){
    number = Math.floor(number / 5);
    n += number;
  }
  return n;
}