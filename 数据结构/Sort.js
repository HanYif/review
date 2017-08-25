// [记]
// 排序算法稳定性：
// 
// exp1: 归并排序是稳定的排序.即相等的元素的顺序不会改变.
// 如输入记录 1(1) 3(2) 2(3) 2(4) 5(5) (括号中是记录的关键字)时
// 输出的 1(1) 2(3) 2(4) 3(2) 5(5) 中的2 和 2 是按输入的顺序.
// 这对要排序数据包含多个信息而要按其中的某一个信息排序,要求其它信息尽量按输入的顺序排列时很重要.这也是它比快速排序优势的地方.
// 
// exp2: 快速排序，不稳定
// 如输入为1(1) 4(2) 2(3) 2(4) 5(5)
// 如果选择的pivot为2(3); 2(4)在与pivot比较时，如果判断方式是“将大于pivot的数放在right数组”，则2(4)会被分配在左边；
// 2(3)、2(4)的相对顺序发生改变


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

// 6.堆排序
function buildMaxHeap(arr) {  //建立大堆
  let len = arr.length
  for (let i = Math.floor(len/2); i >= 0; i--) {
    heapify(arr, i)
  }
}

function heapify(arr, i) {  //堆调整
  let len = arr.length
  let left = 2 * i + 1, right = 2 * i + 2
  let largest = i
  if (left < len && arr[left] > arr[largest]) {
    largest = left
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right
  }
  if (largest !== i) {
    swap(arr, largest, i)
    heapify(arr, largest) // swap后调整子堆
  }
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function heapSrot(arr) {
  buildMaxHeap(arr)
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapify(arr, 0)
  }
}

// 7. 计数排序
function countingSort(arr, maxValue) {  // 需要知道最大值，确认开辟的数组空间
  let len = maxValue + 1
  let bucket = new Array(len)
  let sortedIndex = 0
  
  for (let i = 0; i < arr.length; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]]++
  }

  for (let i = 0; i < len; i++) {
    while (bucket[i] > 0) {
      arr[sortedIndex++] = i
      bucket[i]--
    }
  }

  return arr
}

// 8.桶排序（升级版计数排序）
function bucketSort(arr, bucketSize) {
  let maxValue = 0, minValue = 0  //  计算最大、最小值
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]
    } else if (arr[i] > maxValue) {
      maxValue = arr[i]
    }
  }

  const DEFAULT_BUCKET_SIZE = 5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE  // 每个桶的大小
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1  // 桶的数量
  let buckets = new Array(bucketCount)
  buckets = buckets.map(item => [])

  for (let i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i])  // 映射函数
  }

  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i])
    for (let j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j])
    }
  }
  return arr
}
