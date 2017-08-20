// 1.冒泡排序
function babbleSort(arr) {
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

// 2.选择排序
function selectSort(arr) {
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) { //寻找最小的数
        minIndex = j  //将最小数的索引保存
      }
    }
    if (minIndex !== i) {
      let temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
  return arr
}

// 3.插入排序(自己写耗时较长)
function insertionSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
      preIndex = i - 1; // 使用preIndex遍历被比较对象
      current = arr[i]; // 暂存要插入值
      while(preIndex >= 0 && arr[preIndex] > current) {
          arr[preIndex+1] = arr[preIndex];
          preIndex--;
      }
      arr[preIndex+1] = current;
  }
  return arr;
}

// 4.归并排序
function mergeSort(arr) {
  let len = arr.length
  if (len <= 1) {
    return arr
  }
  let middle = Math.floor(arr.length / 2) // 均分
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right)) // 对两份分别使用mergeSort, 然后合并
}

function merge(left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}

// 5.快速排序
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
