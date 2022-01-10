const dataArray = [-1.5, 0, 4.4, 5, 6, 7];
function findClosest(data, find) {
  return find.reduce((a, b) => {
    let aData = Math.abs(a - data);
    let bData = Math.abs(b - data);

    if (aData == bData) {
      return a > b ? a : b;
    } else {
      return bData < aData ? b : a;
    }
  });
}

console.log(findClosest(5.5, dataArray));

// I'am using JS ,
// Run Using `node test1.js`
// RexdevCode
// requirement
// - Node jS
