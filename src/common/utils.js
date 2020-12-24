//防抖动函数封装 它的做法是限制下次函数调用之前必须等待的时间间隔。
//正确实现 debouncing 的方法是将若干个函数调用合成 一次，并在给定时间过去之后仅被调用一次。

export function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    setTimeout(fn, delay);
  }
}