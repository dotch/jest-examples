const debounce = (func, wait) => {
  let timeout = null;
  return function debouncedFn(...args) {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(func.bind(this, ...args), wait);
  };
};

export default debounce;
