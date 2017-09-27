const asyncFunction = () =>
  new Promise(resolve => {
    // Simulate an async action by waiting 100 ms.
    setTimeout(() => resolve(true), 100);
  });

export default asyncFunction;
