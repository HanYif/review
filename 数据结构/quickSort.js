function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var left = [], right = [];
  var p = Math.floor(arr.length / 2);
  // splice 删除兼取数
  var num = arr.splice(p, 1);

  for (let i = 0, length = arr.length; i < length; i++) {
    if (arr[i] < num) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // left + num + right
  return quickSort(left).concat([num], quickSort(right));

}