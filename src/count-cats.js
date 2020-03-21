module.exports = function countCats(matrix) {
  return matrix.length == 0 ? 0 : matrix.reduce((a,b)=>{
    return a + ',' + b
  }).split(',').filter((el)=>{
  return el === '^^'
  }).length
};
