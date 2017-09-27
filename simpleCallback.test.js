import callCallback from './simpleCallback';

describe('callCallback function', () => {
  it('calls callback with correct result', done => {
    const fn = res => {
      expect(res).toBe(true);
      done();
    };
    callCallback(fn);
  });
});
