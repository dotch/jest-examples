const callCallback = cb => {
  setTimeout(() => cb(true), 100);
};

export default callCallback;
