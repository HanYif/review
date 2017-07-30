/**
 * 
 * 
 * @param {Funtion} fun 
 * @param {number} delay 
 * @param {any} rest 
 */
function throttle (fun, delay, ...rest) {
  let last = null;
  return () => {
    const now = +new Date();
    if (now - last > delay) {
      fun(rest);
      last = now;
    }
  }
}

//实例
const throttleExample = throttle(() => console.log(1), 1000);

//调用
throttleExample();
throttleExample();
throttleExample();

//函数防抖
const debouce = (fun, delay, ...rest) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun(rest);
    }, delay)
  }
}

//实例
const debouceExample = debouce(() => console.log(1), 1000);
//调用
debouceExample();
debouceExample();
debouceExample();

