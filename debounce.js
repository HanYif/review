// underscore.js debounce
//
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

_.debounce = function(func, wait, immediate) {
  var timeout, args, context, timestamp, result;

  // 处理时间
  var later = function() {
    var last = _.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last); // 10ms 6ms 4ms
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function() {
    context = this; // 保留上下文、参数
    args = arguments;
    timestamp = _.now(); // 记录最新被调用时间
    var callNow = immediate && !timeout; // 是否立即调用
    if (!timeout) timeout = setTimeout(later, wait); // 只维护一个timeout
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};

my.debounce = (fn, wait) => {
  let timestamp, result, context, args

  function later () {
    let last = _.now() - timestamp
    if (last > wait && last >= 0) {
      result = fn.apply(context, args)
      context = args = null
    } else {
      setTimeout(later, wait - last)
    }
  }
  return () => {
    timestamp = _.now()
    context = this
    args = arguments
    setTimeout(later, wait);
  }
}